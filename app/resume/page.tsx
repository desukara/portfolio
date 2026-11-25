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
      <div className="resume-toolbar-actions"><a className="resume-print-button" href="/resume/download" download="J_Simmons_Resume_2026.pdf">Download résumé ↓</a><PrintResumeButton /></div>
    </div>
    <div className="resume-reader-guide shell"><div><span className="kicker">FOR HIRING TEAMS</span><h2>A clear picture of my <em>teaching experience.</em></h2><p>Read the expanded résumé below, download the original PDF, or explore classroom evidence before arranging an interview.</p></div><nav aria-label="Résumé quick links"><a href="#resume-teaching">Teaching roles ↓</a><a href="#resume-training">Training ↓</a><Link href="/portfolio#classroom-reflection">Classroom reflection →</Link><Link href="/meeting">Request an interview →</Link></nav></div><article className="resume-document cv" id="main-content" tabIndex={-1} aria-label="James Simmons professional résumé">
      <header className="cv-header">
        <h1>JAMES SIMMONS</h1>
        <p className="cv-subtitle">ENGLISH TEACHER / TOKYO, JAPAN</p>
        <p className="cv-status">Seeking full-time English teaching work <span aria-hidden="true">•</span> Authorized to work in Japan without employer sponsorship <span aria-hidden="true">•</span> Available any day of the week</p>
      </header>

      <section>
        <h2>PROFESSIONAL PROFILE</h2>
        <p>TEFL-certified English teacher with Japan teaching roles at BCA English School, Saitama (2020); KIFL, Tokyo (2021); and Shane English Corporation, Tokyo (2026–present), plus online instruction. I teach learners from early childhood through adulthood and adapt lessons while following established curricula. During active-duty Regular Army service, I earned U.S. Army certification as a Division PM Instructor and taught for four years in Hawaii (2000–2004).</p>
      </section>

      <section>
        <h2>CURRENT EMPLOYMENT &amp; AVAILABILITY</h2>
        <p><strong>Current:</strong> Shane English Corporation, Tokyo. <strong>Seeking:</strong> Full-time English teaching in Tokyo. <strong>Work authorization:</strong> Authorized to work in Japan without employer sponsorship. <strong>Availability:</strong> Any day of the week.</p>
      </section>

      <section>
        <h2 id="resume-teaching">ENGLISH TEACHING EXPERIENCE</h2>
        {teaching.map(position => <ResumePosition key={position.employer} {...position} />)}
      </section>

      <section>
        <h2>U.S. ARMY CLASSROOM INSTRUCTION</h2>
        <ResumePosition employer="United States Army · Active Duty, Regular Army" role="Division PM Instructor" location="Hawaii, USA" dates="2000–2004" summary="Earned U.S. Army certification as a Division PM Instructor. Taught field sanitation and preventive medicine for four years and administered written and practical assessments. This role is separate from English-language teaching." />
      </section>

      <section>
        <h2 id="resume-training">PROFESSIONAL TRAINING &amp; ADDITIONAL STUDY</h2>
        <div className="cv-position">
          <div className="cv-position-top"><h3>U.S. Army Division PM Instructor Certification</h3><span className="cv-date">ACTIVE DUTY · 2000–2004</span></div>
          <p className="cv-location">Regular Army · Hawaii, USA</p>
          <p>Military certification and training in preventive-medicine classroom instruction while serving on active duty in the Regular Army.</p>
        </div>
        <div className="cv-position">
          <div className="cv-position-top"><h3>TEFL Certificate <span className="cv-separator">|</span> MyTEFL</h3><span className="cv-date">CERTIFIED</span></div>
        </div>
        <div className="cv-position">
          <div className="cv-position-top"><h3>Harvard Extension School <span className="cv-separator">|</span> Web Development</h3><span className="cv-date">2022–PRESENT</span></div>
          <p className="cv-location">Cambridge, Massachusetts</p>
          <p>Online coursework through Harvard Extension School, Cambridge, Massachusetts; certificate in progress.</p>
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
          <p>Hospitality and customer-service work across New York City.</p>
        </div>
        <div className="cv-position">
          <div className="cv-position-top"><h3>Simmons Taxi <span className="cv-separator">|</span> Owner / Operator</h3><span className="cv-date">2022–2025</span></div>
          <p className="cv-location">United States · Boston · South Florida · Charlotte · Atlanta · Pittsburgh</p>
          <p>Owned and operated a U.S. taxi company, managing daily operations, routes, scheduling, and passenger service across multiple markets.</p>
        </div>
      </section>

    </article>
    <div className="resume-postscript shell">
      <p>Choose <strong>Download résumé</strong> for the one-page PDF, or <strong>Print</strong> for the expanded web version with additional role details.</p>
      <div className="resume-next-actions"><Link href="/experience">Explore professional experience →</Link><Link href="/meeting">Request an interview →</Link></div>
    </div>
  </main>;
}
