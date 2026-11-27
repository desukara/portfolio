import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/site-header";

export const metadata: Metadata = {
  title: "About | James Simmons, English Teacher",
  description:
    "James Simmons is a TEFL-certified English teacher in Tokyo with U.S. Army classroom instructor training and experience in Japan and online.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <SiteHeader current="/about" />

      <section className="about-hero shell" id="main-content" tabIndex={-1}>
        <div className="about-copy">
          <span className="kicker">PROFESSIONAL PROFILE</span>
          <h1>English teacher in Tokyo.<br /><em>Four years of Army instruction.</em></h1>
          <p className="about-intro">
            I&apos;m TEFL-certified and currently work as a cover teacher at
            Shane English Corporation. My English-teaching experience includes
            a full-day kindergarten homeroom at BCA in Saitama (2020), spoken
            English assessment and teaching at KIFL in Tokyo (2021), and online
            lessons with Panda ABC.
          </p>
          <p className="about-muted">
            During active-duty Regular Army service, I completed U.S. Army
            training and certification as a Division PM Instructor. I taught
            field sanitation and preventive medicine in Hawaii for four years
            (2000–2004), including written and practical assessments.
          </p>
          <div className="about-actions">
            <Link href="/portfolio" className="button-primary">Read a classroom example →</Link>
            <Link href="/experience" className="button-link">View all experience →</Link>
          </div>
        </div>

        <aside className="about-proof-panel" aria-label="Hiring information">
          <span className="kicker">AT A GLANCE</span>
          <div>
            <span>TEACHING</span>
            <strong>Japan · Online · U.S. Army classroom</strong>
          </div>
          <div>
            <span>INSTRUCTOR EXPERIENCE</span>
            <strong>4 years · Division PM Instructor</strong>
          </div>
          <div>
            <span>WORK AUTHORIZATION</span>
            <strong>Can work in Japan without employer sponsorship</strong>
          </div>
          <div>
            <span>AVAILABILITY</span>
            <strong>Any day of the week</strong>
          </div>
          <div>
            <span>ADDITIONAL STUDY</span>
            <strong>Harvard Extension School · Online web-development coursework · 2022–present; certificate in progress</strong>
          </div>
        </aside>
      </section>

      <footer className="mini-footer">
        <div className="shell mini-footer-inner">
          <span>© {new Date().getFullYear()} English Teaching Portfolio</span>
          <Link href="/">Back to homepage →</Link>
        </div>
      </footer>
    </main>
  );
}
