import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const platforms = new Set(["Zoom", "Google Meet", "Microsoft Teams", "Phone", "Other"]);
const zones = new Set(["Asia/Tokyo", "Etc/UTC", "America/New_York", "America/Chicago", "America/Los_Angeles", "Europe/London", "Europe/Paris", "Australia/Sydney"]);
const allowedKeys = ["contact_name", "organization", "contact_email", "position_title", "meeting_platform", "preferred_date", "preferred_time", "time_zone", "alternate_date", "alternate_time", "message"] as const;
type Key = typeof allowedKeys[number];

function validDate(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(value + "T00:00:00Z");
  if (Number.isNaN(date.valueOf()) || date.toISOString().slice(0, 10) !== value) return false;
  const today = new Date();
  const min = new Date(Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate() - 1));
  const max = new Date(min);
  max.setUTCDate(max.getUTCDate() + 181);
  return date >= min && date <= max;
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin) {
    try {
      const originHost = new URL(origin).host;
      if (originHost !== request.nextUrl.host) return NextResponse.json({ error: "Invalid request origin." }, { status: 403 });
    } catch { return NextResponse.json({ error: "Invalid request origin." }, { status: 403 }); }
  }
  if (Number(request.headers.get("content-length") || 0) > 8000) return NextResponse.json({ error: "Request too large." }, { status: 413 });
  let body: unknown;
  try { body = await request.json(); } catch { return NextResponse.json({ error: "Please check the form." }, { status: 400 }); }
  if (!body || typeof body !== "object" || Array.isArray(body)) return NextResponse.json({ error: "Please check the form." }, { status: 400 });
  const input = body as Record<string, unknown>;
  if (input.website) return NextResponse.json({ ok: true }, { status: 201 }); // spam honeypot
  const data = {} as Record<Key, string | null>;
  for (const key of allowedKeys) {
    if (input[key] != null && typeof input[key] !== "string") return NextResponse.json({ error: "Invalid form value." }, { status: 400 });
    data[key] = typeof input[key] === "string" ? input[key].trim() : null;
  }
  const required = ["contact_name","organization","contact_email","meeting_platform","preferred_date","preferred_time","time_zone"] as const;
  if (required.some(key => !data[key])) return NextResponse.json({ error: "Complete the required fields." }, { status: 400 });
  if (
    (data.contact_name?.length ?? 0) < 2 || (data.contact_name?.length ?? 0) > 120 ||
    (data.organization?.length ?? 0) < 2 || (data.organization?.length ?? 0) > 160 ||
    (data.position_title?.length ?? 0) > 160 || (data.message?.length ?? 0) > 1500 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.contact_email || "") || (data.contact_email?.length ?? 0) > 254 ||
    !platforms.has(data.meeting_platform || "") || !zones.has(data.time_zone || "") ||
    !validDate(data.preferred_date || "") || !/^([01]\d|2[0-3]):[0-5]\d$/.test(data.preferred_time || "") ||
    Boolean(data.alternate_date) !== Boolean(data.alternate_time) ||
    (data.alternate_date && !validDate(data.alternate_date)) ||
    (data.alternate_time && !/^([01]\d|2[0-3]):[0-5]\d$/.test(data.alternate_time))
  ) return NextResponse.json({ error: "Please correct the date, time, or contact details." }, { status: 400 });
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) return NextResponse.json({ error: "Meeting requests are temporarily unavailable." }, { status: 503 });
  try {
    const result = await fetch(url + "/rest/v1/interview_requests", {
      method: "POST",
      headers: { apikey: key, "Content-Type": "application/json", Prefer: "return=minimal" },
      body: JSON.stringify(Object.fromEntries(Object.entries(data).filter(([, v]) => v !== null && v !== ""))),
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });
    if (!result.ok) {
      console.error("Meeting request storage failed", result.status);
      return NextResponse.json({ error: "We could not save the request. Please try again." }, { status: 502 });
    }
    return NextResponse.json({ ok: true }, { status: 201, headers: { "Cache-Control": "no-store" } });
  } catch {
    return NextResponse.json({ error: "The form is temporarily unavailable. Please try again." }, { status: 503 });
  }
}
