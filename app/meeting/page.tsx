import SiteHeader from "../components/site-header";
import type { Metadata } from "next";
import Link from "next/link";
import MeetingRequestForm from "./meeting-request-form";

export const metadata: Metadata = {
  title: "Invite Jacob Simmons to Interview",
  description: "Request an online interview or introductory meeting with Jacob Simmons, an English teacher in Tokyo.",
};
export default function MeetingPage() {
  return <main>
    <SiteHeader current="/meeting" />
    <section className="meeting-hero shell" id="main-content" tabIndex={-1}><span className="kicker">03 / LET'S TALK</span><h1>Invite me to <em>an interview.</em></h1><p>I’m Jacob Simmons, an English teacher in Tokyo. If you’re considering me for a teaching position, I’d be glad to hear about your school and the opportunity. Send a quick email or suggest a time for an online introduction.</p></section>
    <div className="shell meeting-contact-shortcut"><div><span className="kicker">QUICK CONTACT</span><h2>Considering me for a teaching role?</h2><p>A short introductory email is welcome. There’s no need to choose a meeting time first.</p></div><div className="meeting-contact-address">meet@eastokyo.com <span>Copy this address into your email app</span></div></div><section className="meeting-panel"><div className="shell meeting-layout"><aside><span className="kicker">HOW IT WORKS</span><h2>Or suggest a <em>time to talk.</em></h2><p className="meeting-email"><strong>Prefer to ask about a role first?</strong><br/><strong>meet@eastokyo.com</strong> — no interview time needed.</p><p>Already have a time in mind? Choose Zoom, Google Meet, Teams, phone, or another format. Share your preferred date, time and time zone so I can review the proposal.</p><p><strong>Scheduling:</strong> I&apos;m based in Tokyo. I&apos;m unavailable during Shabbat (Friday sunset through Saturday sunset).</p><p><strong>Next step:</strong> I&apos;ll review the request and reply by email. No appointment is automatically confirmed.</p></aside><div className="meeting-form-card"><h2>Propose a meeting</h2><p>Fields marked * are required. Requests are reviewed personally and are not automatic bookings.</p><MeetingRequestForm/></div></div></section>
    <footer className="mini-footer"><div className="shell mini-footer-inner"><span>© {new Date().getFullYear()} Jacob Simmons</span><Link href="/">Return to portfolio ↗</Link></div></footer>
  </main>;
}
