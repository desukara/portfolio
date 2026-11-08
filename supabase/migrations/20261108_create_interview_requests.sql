-- Interview request submissions only; private records may be viewed by project owners in Supabase.
create table if not exists public.interview_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  contact_name text not null check (char_length(contact_name) between 2 and 120),
  organization text not null check (char_length(organization) between 2 and 160),
  contact_email text not null check (char_length(contact_email) between 5 and 254),
  position_title text check (position_title is null or char_length(position_title) <= 160),
  meeting_platform text not null check (meeting_platform in ('Zoom','Google Meet','Microsoft Teams','Phone','Other')),
  preferred_date date not null,
  preferred_time time without time zone not null,
  time_zone text not null check (time_zone in ('Asia/Tokyo','Etc/UTC','America/New_York','America/Chicago','America/Los_Angeles','Europe/London','Europe/Paris','Australia/Sydney')),
  alternate_date date,
  alternate_time time without time zone,
  message text check (message is null or char_length(message) <= 1500),
  status text not null default 'new' check (status in ('new','reviewing','accepted','declined','completed')),
  constraint alternate_pair check ((alternate_date is null) = (alternate_time is null))
);
create index if not exists interview_requests_created_at_idx on public.interview_requests (created_at desc);
alter table public.interview_requests enable row level security;
revoke all on public.interview_requests from anon, authenticated;
grant insert on public.interview_requests to anon;
create policy "public_can_submit_interview_request"
on public.interview_requests for insert to anon
with check (status = 'new'
  and preferred_date between current_date and current_date + 180
  and (alternate_date is null or alternate_date between current_date and current_date + 180));
