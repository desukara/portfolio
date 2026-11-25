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
   <h1>English teaching experience <em>in Japan and online.</em></h1>
   <p className="experience-lead">I&apos;m a TEFL-certified English teacher currently working at Shane English Corporation in Tokyo. My Japan school roles include BCA in Saitama (2020), KIFL in Tokyo (2021), and Shane (2026–present). I also taught online with Panda ABC and spent four years teaching in U.S. Army classrooms as a Division PM Instructor (2000–2004).</p>
   <p className="experience-guide">Japan and online teaching roles are listed first. Simmons Taxi, my U.S.-based business (2022–2025), is listed separately below.</p>
  </section>
  <section className="experience-section"><div className="shell">
    <div className="section-heading"><div><span className="kicker">TEACHING ROLES</span><h2>Schools and<br/><em>classrooms.</em></h2></div><p>Japan and online English teaching, plus U.S. Army classroom instruction.</p></div>
    <div className="role-list">{careerRoles.slice(0,5).map((role,i)=><article key={role.slug} className="role-row">
     <span className="role-number">{String(i+1).padStart(2,"0")}</span><div><span className="kicker">{role.category.toUpperCase()}</span><h3>{role.title}</h3><p className="role-org">{role.name} <span>· {role.location} · {role.dates}</span></p><p>{role.summary}</p><Link className="career-role-link" href={`/experience/${role.slug}`}>Read about this role →</Link></div>
    </article>)}</div>
   </div></section>
  <section className="business-ownership shell" aria-labelledby="business-ownership-heading">
   <div><span className="kicker">U.S. BUSINESS OWNERSHIP · 2022–2025</span><h2 id="business-ownership-heading">Simmons Taxi</h2><p>Owner / Operator of a U.S.-based taxi company. This business experience is shown separately from my Japan and online teaching roles.</p></div>
   <Link className="business-ownership-link" href="/experience/independent-transportation">Review U.S. business experience <span aria-hidden="true">→</span></Link>
  </section>
  <section className="communication-section shell">
   <div><span className="kicker">EARLIER EXPERIENCE · 2005–2018</span><h2>Customer service</h2></div>
   <div>
     <p>Hospitality and customer-service work in New York City and other U.S. locations, including guest communication, coordinated service, and resolving customer concerns.</p>
   </div>
  </section>
  <section className="experience-cta"><div className="shell"><span className="kicker">EMPLOYMENT</span><h2>Available for a full-time <em>teaching role.</em></h2><p>Based in Tokyo, authorized to work in Japan without employer sponsorship, and available any day of the week.</p><Link className="button-primary" href="/meeting">Request an interview →</Link> <Link className="button-link" href="/resume/download" download="J_Simmons_Resume_2026.pdf">Download résumé ↓</Link></div></section>
  <footer className="mini-footer"><div className="shell mini-footer-inner"><span>© {new Date().getFullYear()} English Teaching Portfolio</span><Link href="/">Homepage →</Link></div></footer>
 </main>;
}
