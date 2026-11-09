import SiteHeader from "../components/site-header";
import type { Metadata } from "next";
import Link from "next/link";
import MeetingRequestForm from "./meeting-request-form";

export const metadata: Metadata = {
  title: "Request a Meeting | James Simmons",
  description: "Request an online interview or introductory meeting with James Simmons, an English teacher in Tokyo.",
};
export default function MeetingPage() {
  return <main>
    <SiteHeader current="/meeting" />
    <section className="meeting-hero shell"><span className="kicker">03 / LET'S TALK</span><h1>Request a <em>conversation.</em></h1><p>Representing a school or hiring team? Tell me a little about the opportunity and suggest a time for an online interview or introductory meeting.</p></section>
    <section className="meeting-panel"><div className="shell meeting-layout"><aside><span className="kicker">HOW IT WORKS</span><h2>Start with a <em>meeting request.</em></h2><p>Choose Zoom, Google Meet, Teams, phone, or another format. Share your preferred date, time and time zone so I can review the proposal.</p><p><strong>Scheduling:</strong> I&apos;m based in Tokyo. I&apos;m unavailable during Shabbat (Friday sunset through Saturday sunset).</p><p><strong>Next step:</strong> I&apos;ll review the request and reply by email. No appointment is automatically confirmed.</p></aside><div className="meeting-form-card"><h2>Propose a meeting</h2><p>Fields marked * are required. Requests are reviewed personally and are not automatic bookings.</p><MeetingRequestForm/></div></div></section>
    <footer className="mini-footer"><div className="shell mini-footer-inner"><span>© {new Date().getFullYear()} James Simmons</span><Link href="/">Return to portfolio ↗</Link></div></footer>
  </main>;
}
