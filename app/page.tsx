import SiteHeader from "./components/site-header";
const skills = [
  { number: "01", title: "Recognize strengths", description: "Look for what each learner already knows and the conditions in which they can show it." },
  { number: "02", title: "Build connection", description: "Establish rapport by meeting learners at their level and responding to their personalities." },
  { number: "03", title: "Adapt with purpose", description: "Follow clear curriculum goals while adjusting activities and pacing to engage the student." },
];

const portfolioSections = [
  { title: "About me", href: "/about", tag: "01 / PROFILE", text: "My teaching background across Japan, online learning, and classroom instruction." },
  { title: "Teaching experience", href: "/experience", tag: "02 / EXPERIENCE", text: "Teaching experience in Japan, online, and during U.S. Army service." },
  { title: "Teaching portfolio", href: "/portfolio", tag: "03 / WORK", text: "Read a real classroom reflection about engaging a young learner through play." },
  { title: "Request a meeting", href: "/meeting", tag: "04 / CONNECT", text: "Schools and hiring teams can propose an online interview directly through my website." },
];

export default function Home() {
  return (
    <main>
      <SiteHeader current="/" />
      <section className="hero shell" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> SEEKING FULL-TIME TEACHING WORK IN TOKYO</div>
          <h1>English teaching<br />for <em>every learner</em><span className="period">.</span></h1>
          <p className="hero-lead">I&apos;m a <strong>TEFL-certified English teacher based in Tokyo</strong>, with classroom experience in Japan, online teaching, and full-time kindergarten homeroom instruction. I currently teach learners from age three through retirement.</p>
          <p className="hero-detail">Currently working as a cover teacher with Shane English Corporation. I&apos;m seeking a full-time teaching role in Tokyo and can consider new opportunities. Unavailable during Shabbat (Friday sunset through Saturday sunset).</p>
          <div className="actions">
            <a className="button-primary" href="/meeting">Request an interview <span aria-hidden="true">↗</span></a>
            <a className="button-link" href="/resume/download" download="J_Simmons_Resume_2026.pdf">Download résumé <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero-art hero-photo">
          <img src="https://raw.githubusercontent.com/desukara/portfolio/main/publichomepage-photo.jpeg" alt="James Simmons, English teacher in Tokyo" loading="eager" />
        </div>
      </section>
      <section className="home-proof shell" aria-label="Teaching experience at a glance"><div><strong>TEFL</strong><span>Certified English teacher</span></div><div><strong>Japan + online</strong><span>Classroom and remote teaching</span></div><div><strong>Ages 3 to retirement</strong><span>Current learners at Shane</span></div></section>
      <section className="intro-band">
        <div className="shell intro-grid"><p>HOW I TEACH</p><h2>A clear learning goal.<br />An approach that fits the learner.</h2></div>
      </section>
      <section className="section shell" id="approach">
        <div className="section-heading"><div><span className="kicker">01 / MY APPROACH</span><h2>Connection first.<br /><em>Teaching with purpose.</em></h2></div><p>A practical approach developed across English teaching, early childhood education, and adult classroom instruction.</p></div>
        <div className="skills-grid">{skills.map((skill) => <article className="skill-card" key={skill.number}><span>{skill.number} /</span><h3>{skill.title}</h3><p>{skill.description}</p></article>)}</div>
      </section>
      <section className="section portfolio-section" id="portfolio">
        <div className="shell">
          <div className="section-heading"><div><span className="kicker">02 / THE PORTFOLIO</span><h2>Experience, evidence<br /><em>and next steps.</em></h2></div><p>See where I have taught, read a specific classroom example, and review my verified qualifications.</p></div>
          <div className="portfolio-grid">{portfolioSections.map((item) => <a className="portfolio-card" href={item.href} key={item.title}><span>{item.tag}</span><h3>{item.title}</h3><p>{item.text}</p><span className="card-arrow" aria-hidden="true">↗</span></a>)}</div>
          <p className="work-note">The classroom reflection is a real, anonymized example—not a claim of measured outcomes. More teaching samples will be added when available.</p>
        </div>
      </section>
      <footer id="contact">
        <div className="shell footer-grid"><div><span className="kicker">03 / CONTACT</span><h2>Looking for an<br /><em>English teacher?</em></h2><p>I’m available to discuss full-time English teaching opportunities in Tokyo. Review my experience and résumé, then propose an introductory conversation.</p><div className="footer-actions"><a className="button-primary" href="/meeting">Request an interview <span aria-hidden="true">↗</span></a><a className="button-link" href="/resume/download" download="J_Simmons_Resume_2026.pdf">Download résumé ↓</a></div></div><div className="footer-right"><span>BASED IN</span><strong>Tokyo, Japan</strong><span>AVAILABLE FOR</span><strong>Full-time teaching opportunities</strong></div></div>
        <div className="shell footer-bottom"><span>© {new Date().getFullYear()} English Teaching Portfolio</span><span>MADE FOR MEANINGFUL LEARNING</span></div>
      </footer>
    </main>
  );
}
