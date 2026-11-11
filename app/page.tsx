import SiteHeader from "./components/site-header";
const skills = [
  { number: "01", title: "Recognize strengths", description: "Look for what each learner already knows and the conditions in which they can show it.", href: "/portfolio#classroom-reflection", link: "See a classroom reflection" },
  { number: "02", title: "Build connection", description: "In unfamiliar cover classes, I adjust explanations, activities and pacing to the learners I meet.", href: "/experience/shane-english", link: "Explore cover teaching" },
  { number: "03", title: "Adapt with purpose", description: "Use the school’s curriculum and teacher guides to keep activities focused on the lesson’s learning goals.", href: "/experience/shane-english", link: "Read about lesson preparation" },
];

const portfolioSections = [
  { title: "About me", href: "/about", tag: "01 / PROFILE", text: "My teaching background across Japan, online learning, and classroom instruction." },
  { title: "Teaching experience", href: "/experience", tag: "02 / EXPERIENCE", text: "Teaching experience in Japan, online, and during U.S. Army service." },
  { title: "Teaching portfolio", href: "/portfolio", tag: "03 / WORK", text: "Inspect an original lesson sample and a real classroom reflection." },
  { title: "Request a meeting", href: "/meeting", tag: "04 / CONNECT", text: "Schools and hiring teams can propose an online interview directly through my website." },
];

export default function Home() {
  return (
    <main>
      <SiteHeader current="/" />
      <section className="hero shell" id="home">
        <div className="hero-copy" id="main-content" tabIndex={-1}>
          <div className="eyebrow"><span className="status-dot" /> JAMES SIMMONS · ENGLISH TEACHER IN TOKYO</div>
          <h1>I’m James Simmons.<br /><em>I teach English.</em><span className="period">.</span></h1>
          <p className="hero-lead">Welcome to my personal teaching portfolio. I&apos;m a <strong>TEFL-certified English teacher based in Tokyo</strong>, with classroom experience in Japan, online teaching, and full-time kindergarten homeroom instruction. I currently teach learners from age three through retirement.</p>
          <p className="hero-detail">Currently working as a cover teacher with Shane English Corporation. I&apos;m seeking a full-time teaching role in Tokyo and can consider new opportunities. Unavailable during Shabbat (Friday sunset through Saturday sunset).</p>
          <div className="actions">
            <a className="button-primary" href="/portfolio">Explore my teaching <span aria-hidden="true">↗</span></a>
            <a className="button-link" href="/resume/download" download="J_Simmons_Resume_2026.pdf">Download résumé <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero-art hero-photo">
          <img src="/homepage-photo.jpeg" width={1076} height={1366} fetchPriority="high" alt="James Simmons, English teacher in Tokyo" loading="eager" />
        </div>
      </section>
      <section className="home-proof shell" aria-label="Teaching experience at a glance"><div><strong>TEFL</strong><span>Certified English teacher</span></div><div><strong>Japan + online</strong><span>Classroom and remote teaching</span></div><div><strong>Ages 3 to retirement</strong><span>Current learners at Shane</span></div></section>
      <section className="home-employer-path shell" aria-labelledby="employer-path-heading"><div><span className="kicker">INSIDE MY PERSONAL PORTFOLIO</span><h2 id="employer-path-heading">My experience, my lessons, <em>my approach.</em></h2><p>I built this portfolio to share who I am as a teacher, the classrooms I have worked in, and examples of how I plan and reflect on lessons.</p></div><div className="home-employer-links"><a href="/experience"><strong>01 / Teaching experience</strong><span>Roles in Japan, online, and classroom instruction ↗</span></a><a href="/portfolio"><strong>02 / Classroom evidence</strong><span>A real reflection and an illustrative lesson sample ↗</span></a><a href="/resume/download" download="J_Simmons_Resume_2026.pdf"><strong>03 / Approved résumé</strong><span>Download the PDF ↓</span></a></div></section><section className="intro-band">
        <div className="shell intro-grid"><p>HOW I TEACH</p><h2>A clear learning goal.<br />An approach that fits the learner.</h2></div>
      </section>
      <section className="section shell" id="approach">
        <div className="section-heading"><div><span className="kicker">01 / MY APPROACH</span><h2>Every learner brings<br /><em>something to the lesson.</em></h2></div><p>A practical approach developed across English teaching, early childhood education, and adult classroom instruction.</p></div>
        <div className="skills-grid">{skills.map((skill) => <article className="skill-card" key={skill.number}><span>{skill.number} /</span><h3>{skill.title}</h3><p>{skill.description}</p><a className="practice-link" href={skill.href}>{skill.link} →</a></article>)}</div>
      </section>
      <section className="section portfolio-section" id="portfolio">
        <div className="shell">
          <div className="section-heading"><div><span className="kicker">02 / THE PORTFOLIO</span><h2>See the thinking<br /><em>behind my teaching.</em></h2></div><p>See where I have taught, read a specific classroom example, and review the qualifications listed on my résumé.</p></div>
          <div className="portfolio-grid">{portfolioSections.map((item) => <a className="portfolio-card" href={item.href} key={item.title}><span>{item.tag}</span><h3>{item.title}</h3><p>{item.text}</p><span className="card-arrow" aria-hidden="true">↗</span></a>)}</div>
          <p className="work-note">The classroom reflection is a real, anonymized example—not a claim of measured outcomes. An original illustrative lesson plan and learner materials are also available to inspect.</p>
        </div>
      </section>
      <footer id="contact">
        <div className="shell footer-grid"><div><span className="kicker">03 / CONTACT</span><h2>Interested in my<br /><em>teaching experience?</em></h2><p>I’m James Simmons, an English teacher in Tokyo. If my experience fits an opening at your school, I’d welcome a conversation. You can also <strong className="contact-email">email meet@eastokyo.com</strong>.</p><div className="footer-actions"><a className="button-primary" href="/meeting">Invite me to interview <span aria-hidden="true">↗</span></a><a className="button-link" href="/resume/download" download="J_Simmons_Resume_2026.pdf">Download résumé ↓</a></div></div><div className="footer-right"><span>BASED IN</span><strong>Tokyo, Japan</strong><span>AVAILABLE FOR</span><strong>Full-time teaching opportunities</strong></div></div>
        <div className="shell footer-bottom"><span className="footer-brand"><img src="/brand/js-mark.svg" width={36} height={36} alt="" aria-hidden="true" /> JS · EASTOKYO</span><span>© {new Date().getFullYear()} James Simmons · Personal Teaching Portfolio</span><span>MADE FOR MEANINGFUL LEARNING</span></div>
      </footer>
    </main>
  );
}
