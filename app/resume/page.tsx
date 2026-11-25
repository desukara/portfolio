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
    <div className="resume-reader-guide shell"><div><span className="kicker">FOR HIRING TEAMS</span><h2>Résumé &amp; teaching <em>experience.</em></h2><p>Download the one-page PDF or review the expanded experience below.</p></div><nav aria-label="Résumé quick links"><a href="#resume-teaching">Teaching roles ↓</a><a href="#resume-training">Instructor training ↓</a><Link href="/portfolio#classroom-reflection">Classroom example →</Link><Link href="/meeting">Request an interview →</Link></nav></div><article className="resume-document cv" id="main-content" tabIndex={-1} aria-label="James Simmons professional résumé">
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
        <h2 id="resume-teaching">ENGLISH TEACHING EXPERIENCE</h2>
        {teaching.map(position => <ResumePosition key={position.employer} {...position} />)}
      </section>

      <section>
        <h2>U.S. ARMY CLASSROOM INSTRUCTION</h2>
        <ResumePosition employer="U.S. Army · Regular Army, Active Duty" role="Division PM Instructor" location="Hawaii, USA" dates="2000–2004" summary="Completed Preventive Medicine training at the U.S. Army Medical Department Center and School and earned certification as a Division PM Instructor in 2000. Taught field sanitation and preventive medicine full-time for four years; administered written exams and practical assessments." />
      </section>

      <section>
        <h2 id="resume-training">TEFL CERTIFICATION</h2>
        <div className="cv-position">
          <div className="cv-position-top"><h3>TEFL Certificate <span className="cv-separator">|</span> MyTEFL</h3><span className="cv-date">CERTIFIED</span></div>
        </div>
      </section>

      <section>
        <h2>CUSTOMER SERVICE</h2>
        <div className="cv-position cv-customer">
          <div className="cv-position-top"><h3>New York City and other U.S. locations</h3><span className="cv-date">APPROX. 2005–2018</span></div>
          <p>Hospitality and customer-service work in New York City and other U.S. locations.</p>
        </div>
      </section>

      <section>
        <h2>U.S. BUSINESS OWNERSHIP</h2>
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
