-- Keep anonymous interview submissions private and limit each client IP to five per hour.
create table if not exists public.interview_request_rate_limits (
  fingerprint text primary key check (fingerprint ~ '^[0-9a-f]{64}$'),
  window_started_at timestamptz not null,
  request_count integer not null check (request_count > 0)
);
create index if not exists interview_request_rate_limits_window_idx
  on public.interview_request_rate_limits (window_started_at);
alter table public.interview_request_rate_limits enable row level security;
revoke all on public.interview_request_rate_limits from public, anon, authenticated, service_role;

create or replace function public.consume_interview_request_rate_limit(p_fingerprint text)
returns table (allowed boolean, retry_after_seconds integer)
language plpgsql
security definer
set search_path = ''
as $function$
declare
  v_now timestamptz := now();
  v_window_started_at timestamptz;
  v_request_count integer;
begin
  if p_fingerprint !~ '^[0-9a-f]{64}$' then
    raise exception 'Invalid request fingerprint';
  end if;

  insert into public.interview_request_rate_limits as existing (fingerprint, window_started_at, request_count)
  values (p_fingerprint, v_now, 1)
  on conflict (fingerprint) do update
    set window_started_at = case
          when existing.window_started_at <= v_now - interval '1 hour' then v_now
          else existing.window_started_at
        end,
        request_count = case
          when existing.window_started_at <= v_now - interval '1 hour' then 1
          else existing.request_count + 1
        end
  returning public.interview_request_rate_limits.window_started_at,
            public.interview_request_rate_limits.request_count
  into v_window_started_at, v_request_count;

  -- Opportunistically remove abandoned fingerprints so this table stays small.
  if random() < 0.01 then
    delete from public.interview_request_rate_limits
    where window_started_at < v_now - interval '48 hours';
  end if;

  return query
  select v_request_count <= 5,
         greatest(1, ceil(extract(epoch from (v_window_started_at + interval '1 hour' - v_now)))::integer);
end;
$function$;

revoke all on function public.consume_interview_request_rate_limit(text) from public, anon, authenticated;
grant execute on function public.consume_interview_request_rate_limit(text) to service_role;
