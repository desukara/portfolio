import SiteHeader from "../components/site-header";
import type { Metadata } from "next";
import Link from "next/link";
import MeetingRequestForm from "./meeting-request-form";

export const metadata: Metadata = {
  title: "Request a Meeting",
  description: "Request an online interview or introductory meeting with James Simmons, an English teacher in Tokyo.",
};
export default function MeetingPage() {
  return <main>
    <SiteHeader current="/meeting" />
    <section className="meeting-hero shell" id="main-content" tabIndex={-1}><span className="kicker">03 / LET'S TALK</span><h1>Let’s talk about <em>teaching.</em></h1><p>Representing a school or hiring team? I’d be glad to hear about your school and the opportunity. Send a quick email or suggest a time for an online introduction.</p></section>
    <section className="meeting-panel"><div className="shell meeting-layout"><aside><span className="kicker">HOW IT WORKS</span><h2>Start with a <em>meeting request.</em></h2><p className="meeting-email"><strong>Prefer to ask about a role first?</strong><br/><a href="mailto:meet@eastokyo.com?subject=English%20teaching%20opportunity%20in%20Tokyo">Email meet@eastokyo.com</a> — no interview time needed.</p><p>Choose Zoom, Google Meet, Teams, phone, or another format. Share your preferred date, time and time zone so I can review the proposal.</p><p><strong>Scheduling:</strong> I&apos;m based in Tokyo. I&apos;m unavailable during Shabbat (Friday sunset through Saturday sunset).</p><p><strong>Next step:</strong> I&apos;ll review the request and reply by email. No appointment is automatically confirmed.</p></aside><div className="meeting-form-card"><h2>Propose a meeting</h2><p>Fields marked * are required. Requests are reviewed personally and are not automatic bookings.</p><MeetingRequestForm/></div></div></section>
    <footer className="mini-footer"><div className="shell mini-footer-inner"><span>© {new Date().getFullYear()} James Simmons</span><Link href="/">Return to portfolio ↗</Link></div></footer>
  </main>;
}
