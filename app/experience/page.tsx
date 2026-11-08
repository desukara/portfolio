import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
 title: "Teaching Experience | English Teacher Portfolio",
 description: "TEFL teaching in Japan and online, U.S. Army classroom instruction, and communication experience.",
};

const roles = [
 {kind:"CURRENT POSITION · TOKYO",title:"English Teacher",org:"Shane English Corporation",place:"Tokyo, Japan",summary:"Currently employed as an English teacher in Tokyo. My contract provides flexibility to accept new work at my discretion.",detail:"Employment start year and specific teaching responsibilities to be added."},
 {kind:"ENGLISH TEACHING · JAPAN",title:"English Teacher",org:"BCA — English school",place:"Saitama, Japan",summary:"English teaching experience at BCA, an English school in Saitama.",detail:"Dates, student age groups, and classroom responsibilities to be added after confirmation."},
 {kind:"ENGLISH TEACHING · JAPAN",title:"English Teacher",org:"KIFL",place:"Kanda, Tokyo, Japan",summary:"English teaching experience at KIFL in central Tokyo.",detail:"Dates, courses taught, and classroom responsibilities to be added after confirmation."},
 {kind:"ONLINE ENGLISH TEACHING",title:"Online TEFL Teacher",org:"Panda ABC",place:"Online · China-based company",summary:"Online English-language teaching for Panda ABC, a Chinese education company.",detail:"Dates, teaching platform, and typical lesson format to be added after confirmation."},
 {kind:"CLASSROOM INSTRUCTION · MILITARY",title:"Full-time Classroom Instructor",org:"United States Army",place:"Hawaii, United States",summary:"Approximately six years of classroom instruction while serving on a full-time active-duty Army assignment.",detail:"Subject matter, instructional responsibilities, and service dates to be confirmed. This role is shown separately from English-language teaching."},
];

export default function ExperiencePage(){
 return <main>
  <div className="top-strip"><span>ENGLISH LANGUAGE EDUCATION</span><span>TOKYO, JAPAN</span></div>
  <header className="site-header shell">
   <Link className="brand" href="/" aria-label="Home">TEACH<span>.</span></Link>
   <nav aria-label="Main navigation"><Link href="/about">About</Link><Link href="/experience" aria-current="page">Experience</Link><Link href="/#contact">Contact</Link></nav>
   <Link className="nav-cta" href="/#contact">Get in touch <span aria-hidden="true">↗</span></Link>
  </header>
  <section className="experience-hero shell">
   <span className="kicker">02 / PROFESSIONAL BACKGROUND</span>
   <h1>Teaching across <em>classrooms, cultures &amp; borders.</em></h1>
   <p className="experience-lead">TEFL-certified, with English teaching experience in Japan and online, backed by approximately six years of full-time U.S. Army classroom instruction.</p>
   <div className="experience-highlights">
    <div><strong>TEFL</strong><span>Certified</span></div>
    <div><strong>Japan + Online</strong><span>English teaching</span></div>
    <div><strong>~6 years</strong><span>Army classroom instruction</span></div>
   </div>
  </section>
  <section className="experience-section">
   <div className="shell">
    <div className="section-heading"><div><span className="kicker">01 / EXPERIENCE</span><h2>Where I&apos;ve<br/><em>taught.</em></h2></div><p>English teaching roles and additional classroom instruction experience. Employment dates are being confirmed for the complete résumé.</p></div>
    <div className="role-list">{roles.map((role,i)=><article key={role.org} className="role-row">
     <span className="role-number">{String(i+1).padStart(2,"0")}</span><div><span className="kicker">{role.kind}</span><h3>{role.title}</h3><p className="role-org">{role.org} <span>· {role.place}</span></p><p>{role.summary}</p><p className="role-pending">{role.detail}</p></div>
    </article>)}</div>
   </div>
  </section>
  <section className="communication-section shell">
   <div><span className="kicker">02 / PEOPLE SKILLS</span><h2>Communication is at the <em>heart of teaching.</em></h2></div>
   <div><p>Customer service experience across New York City, Boston, South Florida, Pittsburgh, Charlotte, and Hawaii adds a broad communication background to my teaching career.</p><p className="role-pending">Employers, job titles, and dates will be included where relevant after confirmation.</p></div>
  </section>
  <section className="experience-cta"><div className="shell"><span className="kicker">03 / WHAT'S NEXT</span><h2>Ready for the next <em>classroom.</em></h2><p>Currently employed at Shane English Corporation and seeking full-time English-language teaching opportunities in Tokyo. Unavailable during Shabbat (Friday sunset through Saturday sunset).</p><Link className="button-primary" href="/#contact">Contact / portfolio home ↗</Link></div></section>
  <footer className="mini-footer"><div className="shell mini-footer-inner"><span>© {new Date().getFullYear()} English Teaching Portfolio</span><Link href="/">Homepage ↗</Link></div></footer>
 </main>
}
