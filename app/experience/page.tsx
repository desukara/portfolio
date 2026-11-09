import {careerRoles} from "./roles";
import SiteHeader from "../components/site-header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
 title: "Professional Experience | James Simmons",
 description: "Teaching experience in Tokyo and Saitama, online English instruction, and U.S. Army classroom instruction.",
};


export default function ExperiencePage(){
 return <main>
  <SiteHeader current="/experience" />
  <section className="experience-hero shell">
   <span className="kicker">02 / PROFESSIONAL BACKGROUND</span>
   <h1>Teaching across <em>classrooms, cultures &amp; borders.</em></h1>
   <p className="experience-lead">TEFL-certified English teacher currently teaching students from age three through retirement at Shane English Corporation in Tokyo. I work within established curricula while adapting my delivery to learners’ strengths and personalities. My background also includes English teaching in Japan and online, and U.S. Army classroom instruction in Hawaii.</p>
   <div className="experience-highlights">
    <div><strong>TEFL</strong><span>Certified</span></div>
    <div><strong>Japan + Online</strong><span>English teaching</span></div>
    <div><strong>2000–2004</strong><span>Army classroom instruction</span></div>
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
     <p>Customer service, kitchen operations, and professional communication experience in New York City and other U.S. locations.</p>
     <ul className="experience-nyc-list">{careerRoles.slice(5,8).map(item=><li key={item.slug}><Link href={`/experience/${item.slug}`}><strong>{item.name}</strong><span>{item.location} ↗</span></Link></li>)}</ul>
     <p><Link className="career-role-link" href="/experience/independent-transportation">Independent Contractor · Taxi Services (2022–2025) →</Link><br/>Boston · South Florida · Charlotte · Atlanta · Pittsburgh.</p>
   </div>
  </section>
  <section className="experience-cta"><div className="shell"><span className="kicker">03 / EMPLOYMENT</span><h2>Seeking a full-time <em>teaching role.</em></h2><p>Currently employed at Shane English Corporation in Tokyo. My contract provides flexibility to accept new work at my discretion. Not available during Shabbat (Friday sunset through Saturday sunset).</p><Link className="button-primary" href="/meeting">Request an interview ↗</Link> <Link className="button-link" href="/resume">View my résumé →</Link></div></section>
  <footer className="mini-footer"><div className="shell mini-footer-inner"><span>© {new Date().getFullYear()} English Teaching Portfolio</span><Link href="/">Homepage ↗</Link></div></footer>
 </main>;
}
