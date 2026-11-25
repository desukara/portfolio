import {careerRoles} from "./roles";
import SiteHeader from "../components/site-header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
 title: "Professional Experience",
 description: "Teaching experience in Tokyo and Saitama, online English instruction, and U.S. Army classroom instruction.",
};


export default function ExperiencePage(){
 return <main className="experience-page">
  <SiteHeader current="/experience" />
  <section className="experience-hero shell" id="main-content" tabIndex={-1}>
   <span className="kicker">02 / PROFESSIONAL BACKGROUND</span>
   <h1>Teaching across <em>classrooms, cultures &amp; borders.</em></h1>
   <p className="experience-lead">TEFL-certified English teacher currently working in Tokyo. My English-teaching roles in Japan include BCA English School (2020), KIFL (2021), and Shane English Corporation (2026–present). My background also includes online English teaching and U.S. Army training and certification as a Division PM Instructor, followed by four years of active-duty classroom instruction in Hawaii.</p>
   <p className="experience-guide">Looking for a particular teaching skill? Start with the setting most relevant to your school, then explore a classroom reflection.</p><nav className="experience-paths" aria-label="Find experience for your school"><Link href="/experience/shane-english">Curriculum-guided cover teaching →</Link><Link href="/experience/bca-english-school">Kindergarten homeroom teaching →</Link><Link href="/experience/kifl">Oral assessment and spoken practice →</Link><Link href="/experience/panda-abc">Online English teaching →</Link><Link href="/experience/us-army">U.S. Army classroom instruction →</Link></nav><div className="experience-evidence"><Link href="/portfolio#classroom-reflection">Read a classroom reflection →</Link></div>
   <div className="experience-highlights">
    <div><strong>TEFL</strong><span>Certified</span></div>
    <div><strong>Japan + Online</strong><span>English teaching</span></div>
    <div><strong>4 years</strong><span>Army Division PM Instructor &amp; classroom teaching</span></div>
   </div>
  </section>
  <section className="experience-section"><div className="shell">
    <div className="section-heading"><div><span className="kicker">01 / EXPERIENCE</span><h2>Where I&apos;ve<br/><em>taught.</em></h2></div><p>Current curriculum-guided English teaching across a wide age range, previous teaching positions in Japan and online, and separate U.S. Army classroom instruction.</p></div>
    <div className="role-list">{careerRoles.slice(0,5).map((role,i)=><article key={role.slug} className="role-row">
     <span className="role-number">{String(i+1).padStart(2,"0")}</span><div><span className="kicker">{role.category.toUpperCase()}</span><h3>{role.title}</h3><p className="role-org">{role.name} <span>· {role.location} · {role.dates}</span></p><p>{role.summary}</p><Link className="career-role-link" href={`/experience/${role.slug}`}>Read about this role →</Link></div>
    </article>)}</div>
   </div></section>
  <section className="communication-section shell">
   <div><span className="kicker">02 / CUSTOMER SERVICE</span><h2>Experience working <em>with people.</em></h2></div>
   <div>
     <p>Customer-service and hospitality roles in New York City and other U.S. locations (approximately 2005–2018). The work involved guest communication, coordinated service, and resolving customer concerns in fast-paced settings.</p>
     <p><Link className="career-role-link" href="/experience/independent-transportation">Owner / Operator · Simmons Taxi (2022–2025) →</Link><br/>U.S. taxi business and customer service.</p>
   </div>
  </section>
  <section className="experience-cta"><div className="shell"><span className="kicker">03 / EMPLOYMENT</span><h2>Seeking a full-time <em>teaching role.</em></h2><p>Currently teaching in Tokyo. Authorized to work in Japan without employer sponsorship and available any day of the week.</p><Link className="button-primary" href="/meeting">Request an interview ↗</Link> <Link className="button-link" href="/resume/download" download="J_Simmons_Resume_2026.pdf">Download official résumé ↓</Link></div></section>
  <footer className="mini-footer"><div className="shell mini-footer-inner"><span>© {new Date().getFullYear()} English Teaching Portfolio</span><Link href="/">Homepage ↗</Link></div></footer>
 </main>;
}
