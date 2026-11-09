import SiteHeader from "../components/site-header";
import Link from "next/link";
import type { Metadata } from "next";
import { PrintResumeButton } from "./print-button";

export const metadata: Metadata = {
  title: "Résumé",
  description: "James Simmons — English teacher in Tokyo. Professional experience, education, and availability.",
};

import { teaching, type Position } from "./resume-data";

function ResumePosition({ employer, role, location, dates, summary }: Position) {
  return <div className="cv-position">
    <div className="cv-position-top"><h3>{employer} <span className="cv-separator">|</span> {role}</h3><span className="cv-date">{dates}</span></div>
    <p className="cv-location">{location}</p>
    <p>{summary}</p>
  </div>;
}

export default function ResumePage() {
  return <main className="resume-route">
    <div className="resume-toolbar shell">
      <Link href="/">← Back to portfolio</Link>
      <span>JAMES SIMMONS / RÉSUMÉ</span>
      <PrintResumeButton />
    </div>
    <article className="resume-document cv" aria-label="James Simmons professional résumé">
      <header className="cv-header">
        <h1>JAMES SIMMONS</h1>
        <p className="cv-subtitle">ENGLISH TEACHER / TOKYO, JAPAN</p>
        <p className="cv-status">Seeking full-time English teaching work <span aria-hidden="true">•</span> Currently employed at Shane English Corporation</p>
      </header>

      <section>
        <h2>PROFESSIONAL PROFILE</h2>
        <p>TEFL-certified English teacher working with learners from age three through retirement. Experienced in curriculum-guided instruction, rapport-building, and adapting activities to individual learners. Previous English teaching in Tokyo, Saitama, and online instruction. Previously served as a full-time U.S. Army classroom instructor in Hawaii (2000–2004). Additional customer service experience supporting clear communication with people from diverse backgrounds.</p>
      </section>

      <section>
        <h2>CURRENT EMPLOYMENT &amp; AVAILABILITY</h2>
        <p><strong>Current:</strong> Shane English Corporation, Tokyo. <strong>Seeking:</strong> Full-time English teaching in Tokyo. My current contract provides flexibility to accept new work at my discretion. <strong>Schedule:</strong> Not available during Shabbat (Friday sunset through Saturday sunset).</p>
      </section>

      <section>
        <h2>ENGLISH TEACHING EXPERIENCE</h2>
        {teaching.map(position => <ResumePosition key={position.employer} {...position} />)}
      </section>

      <section>
        <h2>U.S. ARMY CLASSROOM INSTRUCTION</h2>
        <ResumePosition employer="United States Army" role="Full-Time Classroom Instructor" location="Hawaii, USA" dates="2000–2004" summary="Delivered full-time instruction in field sanitation and preventive medicine, and administered written and practical assessments. This role is separate from English-language teaching." />
      </section>

      <section>
        <h2>EDUCATION &amp; PROFESSIONAL TRAINING</h2>
        <div className="cv-position">
          <div className="cv-position-top"><h3>Harvard Extension School <span className="cv-separator">|</span> Web Development</h3><span className="cv-date">2022–PRESENT</span></div>
          <p className="cv-location">Cambridge, Massachusetts</p>
          <p>Web Development studies; certificate in progress.</p>
        </div>
        <div className="cv-position">
          <div className="cv-position-top"><h3>U.S. Army Medical Department Center and School</h3><span className="cv-date">2000</span></div>
          <p className="cv-location">Academy of Health Sciences · Fort Sam Houston, San Antonio, Texas</p>
          <p>Preventive Medicine training.</p>
        </div>
      </section>

      <section>
        <h2>CUSTOMER SERVICE &amp; PROFESSIONAL COMMUNICATION</h2>
        <div className="cv-position cv-customer">
          <div className="cv-position-top"><h3>New York City and other U.S. locations</h3><span className="cv-date">APPROX. 2005–2018</span></div>
          <div className="cv-employers">
            <p><strong>2nd Avenue Deli</strong><span>Upper East Side, Manhattan</span></p>
            <p><strong>Olympic Pita</strong><span>Midtown Manhattan</span></p>
            <p><strong>Sunflower Kosher Diner</strong><span>Upper West Side, Manhattan</span></p>
          </div>
        </div>
        <div className="cv-position">
          <div className="cv-position-top"><h3>Independent Contractor <span className="cv-separator">|</span> Taxi Services</h3><span className="cv-date">2022–2025</span></div>
          <p className="cv-location">Boston · South Florida · Charlotte · Atlanta · Pittsburgh</p>
          <p>Customer-facing transportation services across multiple U.S. cities.</p>
        </div>
      </section>

      <section className="cv-certification">
        <h2>CERTIFICATION</h2>
        <p>TEFL Certificate</p>
      </section>
    </article>
    <div className="resume-postscript shell">
      <p>Use <strong>Print</strong> to print the résumé page. The official downloadable PDF is temporarily unavailable while its exact file is restored.</p>
      <Link href="/experience">Explore professional experience →</Link>
    </div>
  </main>;
}
