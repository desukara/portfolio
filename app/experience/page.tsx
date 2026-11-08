import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
 title: "Professional Experience | James Simmons",
 description: "Teaching experience in Tokyo and Saitama, online English instruction, and U.S. Army classroom instruction.",
};

const roles = [
 {kind:"CURRENT ROLE · TOKYO",title:"English Teacher",org:"Shane English Corporation",place:"Tokyo, Japan",dates:"Current",summary:"Currently teaching English in Tokyo."},
 {kind:"ENGLISH TEACHING · JAPAN",title:"English Teacher",org:"KIFL",place:"Kanda, Tokyo",dates:"2021",summary:"English-language teaching in central Tokyo."},
 {kind:"ENGLISH TEACHING · JAPAN",title:"English Teacher",org:"BCA English School",place:"Saitama, Japan",dates:"2020",summary:"English-language teaching in Saitama."},
 {kind:"ONLINE ENGLISH TEACHING",title:"Online English Teacher",org:"Panda ABC",place:"Online · China-based education company",dates:"2019",summary:"Delivered English-language instruction online."},
 {kind:"CLASSROOM INSTRUCTION · U.S. ARMY",title:"Full-Time Classroom Instructor",org:"United States Army",place:"Hawaii, USA",dates:"2000–2004",summary:"Provided classroom instruction during active-duty military service, separate from English-language teaching."},
];
const nyc = [
 {name:"2nd Avenue Deli",area:"Upper East Side, Manhattan"},
 {name:"Olympic Pita",area:"Midtown Manhattan"},
 {name:"Sunflower Kosher Diner",area:"Upper West Side, Manhattan"},
];

export default function ExperiencePage(){
 return <main>
  <div className="top-strip"><span>ENGLISH LANGUAGE EDUCATION</span><span>TOKYO, JAPAN</span></div>
  <header className="site-header shell"><Link className="brand" href="/" aria-label="Home">TEACH<span>.</span></Link>
   <nav aria-label="Main navigation"><Link href="/about">About</Link><Link href="/experience" aria-current="page">Experience</Link><Link href="/resume">Résumé</Link></nav>
   <Link className="nav-cta" href="/resume">View résumé <span aria-hidden="true">↗</span></Link>
  </header>
  <section className="experience-hero shell">
   <span className="kicker">02 / PROFESSIONAL BACKGROUND</span>
   <h1>Teaching across <em>classrooms, cultures &amp; borders.</em></h1>
   <p className="experience-lead">TEFL-certified English teacher currently working at Shane English Corporation in Tokyo, with previous teaching experience in Japan and online, and U.S. Army classroom instruction in Hawaii.</p>
   <div className="experience-highlights">
    <div><strong>TEFL</strong><span>Certified</span></div>
    <div><strong>Japan + Online</strong><span>English teaching</span></div>
    <div><strong>2000–2004</strong><span>Army classroom instruction</span></div>
   </div>
  </section>
  <section className="experience-section"><div className="shell">
    <div className="section-heading"><div><span className="kicker">01 / EXPERIENCE</span><h2>Where I&apos;ve<br/><em>taught.</em></h2></div><p>Teaching positions in Japan and online, plus classroom instruction during U.S. Army service.</p></div>
    <div className="role-list">{roles.map((role,i)=><article key={role.org} className="role-row">
     <span className="role-number">{String(i+1).padStart(2,"0")}</span><div><span className="kicker">{role.kind}</span><h3>{role.title}</h3><p className="role-org">{role.org} <span>· {role.place} · {role.dates}</span></p><p>{role.summary}</p></div>
    </article>)}</div>
   </div></section>
  <section className="communication-section shell">
   <div><span className="kicker">02 / CUSTOMER SERVICE</span><h2>Experience working <em>with people.</em></h2></div>
   <div>
     <p>Customer service and professional communication experience in New York City and other U.S. locations, approximately 2005–2018.</p>
     <ul className="experience-nyc-list">{nyc.map(item=><li key={item.name}><strong>{item.name}</strong><span>{item.area}</span></li>)}</ul>
     <p><strong>Independent Contractor · Taxi Services (2022–2025)</strong><br/>Boston · South Florida · Charlotte · Atlanta · Pittsburgh.</p>
   </div>
  </section>
  <section className="experience-cta"><div className="shell"><span className="kicker">03 / EMPLOYMENT</span><h2>Seeking a full-time <em>teaching role.</em></h2><p>Currently employed at Shane English Corporation in Tokyo. My contract provides flexibility to accept new work at my discretion. Not available during Shabbat (Friday sunset through Saturday sunset).</p><Link className="button-primary" href="/resume">View my résumé ↗</Link></div></section>
  <footer className="mini-footer"><div className="shell mini-footer-inner"><span>© {new Date().getFullYear()} English Teaching Portfolio</span><Link href="/">Homepage ↗</Link></div></footer>
 </main>;
}
