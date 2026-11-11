"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";

const timeZones = [
  ["Asia/Tokyo","Japan (Tokyo)"],
  ["Etc/UTC","UTC"],
  ["America/New_York","US Eastern"],
  ["America/Chicago","US Central"],
  ["America/Los_Angeles","US Pacific"],
  ["Europe/London","United Kingdom"],
  ["Europe/Paris","Central Europe"],
  ["Australia/Sydney","Sydney"],
];
export default function MeetingRequestForm() {
  const [state, setState] = useState<"idle"|"sending"|"success"|"error">("idle");
  const [error, setError] = useState("");
  const feedback = useRef<HTMLDivElement>(null);
  // Compute Tokyo's date after hydration, avoiding server/client date mismatches.
  const [earliestDate, setEarliestDate] = useState("");
  useEffect(() => {
    const refresh = () => {
      const parts = new Intl.DateTimeFormat("en-US", {timeZone:"Asia/Tokyo",year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date());
      const get = (type: string) => parts.find(part => part.type === type)?.value ?? "";
      setEarliestDate(get("year") + "-" + get("month") + "-" + get("day"));
    };
    refresh();
    const interval = window.setInterval(refresh, 60_000);
    return () => window.clearInterval(interval);
  }, []);
  useEffect(() => {
    if (state === "success" || state === "error") feedback.current?.focus();
  }, [state]);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");setError("");
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/meeting-requests", {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(values)});
      const data = await response.json();
      if (!response.ok) {setError(data.error || "Please try again.");setState("error");return;}
      form.reset();setState("success");
    } catch {setError("Unable to send the request. Please try again.");setState("error");}
  }
  if(state === "success") return <div className="meeting-success" role="status" ref={feedback} tabIndex={-1}><span className="kicker">REQUEST RECEIVED</span><h2>Thank you for reaching out.</h2><p>Your meeting request has been submitted. This is not a confirmed appointment; I&apos;ll review the details and respond using the email you provided.</p><button type="button" onClick={()=>setState("idle")}>Submit another request</button></div>;
  return <form className="meeting-form" onSubmit={submit} aria-busy={state === "sending"}>
    <div className="meeting-form-row">
      <label>Contact name <span>*</span><input name="contact_name" type="text" autoComplete="name" minLength={2} maxLength={120} required placeholder="Your full name"/></label>
      <label>School or organization <span>*</span><input name="organization" type="text" autoComplete="organization" minLength={2} maxLength={160} required placeholder="School or company"/></label>
    </div>
    <div className="meeting-form-row">
      <label>Work email <span>*</span><input name="contact_email" type="email" autoComplete="email" maxLength={254} required placeholder="name@school.com"/></label>
      <label>Position / opportunity<input name="position_title" type="text" maxLength={160} placeholder="English teacher, interview, etc."/></label>
    </div>
    <div className="meeting-form-row">
      <label>Meeting format <span>*</span><select name="meeting_platform" defaultValue="Zoom" required><option>Zoom</option><option>Google Meet</option><option>Microsoft Teams</option><option>Phone</option><option>Other</option></select></label>
      <label>Your time zone <span>*</span><select name="time_zone" defaultValue="Asia/Tokyo" required>{timeZones.map(([value,label])=><option key={value} value={value}>{label}</option>)}</select></label>
    </div>
    <div className="meeting-form-row">
      <label>Preferred date <span>*</span><input name="preferred_date" type="date" min={earliestDate} required/></label>
      <label>Preferred start time <span>*</span><input name="preferred_time" type="time" required/></label>
    </div>
    <details className="meeting-optional"><summary>Add an alternate time (optional)</summary><div className="meeting-form-row">
      <label>Alternate date<input name="alternate_date" type="date" min={earliestDate}/></label>
      <label>Alternate start time<input name="alternate_time" type="time"/></label>
    </div></details>
    <label>About the opportunity (optional)<textarea name="message" rows={4} maxLength={1500} placeholder="Tell me about the opportunity, who will attend, and anything you'd like to discuss."/></label>
    <div className="meeting-honeypot" aria-hidden="true"><label>Leave this empty<input name="website" type="text" tabIndex={-1} autoComplete="off"/></label></div>
    <p className="meeting-form-hint">Please choose a future date. The time you enter is in the time zone selected above. If your preferred time falls during Shabbat in Japan, I’ll suggest an alternative.</p>
    <p className="meeting-privacy">Your contact details, meeting format, time zone, and one proposed date and time are required. Your details will be used to review and respond to this request. Times are proposals, not confirmed bookings. I&apos;m unavailable during Shabbat (Friday sunset through Saturday sunset), Japan time.</p>
    {state==="error"&&<div className="meeting-error" role="alert" ref={feedback} tabIndex={-1}>{error} Your entries are still here. Try again or <a href="mailto:meet@eastokyo.com?subject=English%20teaching%20enquiry">email meet@eastokyo.com</a>.</div>}
    <button className="button-primary meeting-submit" type="submit" disabled={state==="sending"}>{state==="sending"?"Sending request…":"Send meeting request"} <span aria-hidden="true">↗</span></button>
  </form>;
}
