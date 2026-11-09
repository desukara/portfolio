import SiteHeader from "./components/site-header";
// Verified Git-triggered automatic production deploy for the interview portfolio.
const skills = [
  { number: "01", title: "Recognize strengths", description: "Look for what each learner already knows and the conditions in which they can show it." },
  { number: "02", title: "Build connection", description: "Establish rapport by meeting learners at their level and responding to their personalities." },
  { number: "03", title: "Adapt with purpose", description: "Follow clear curriculum goals while adjusting activities and pacing to engage the student." },
];

const portfolioSections = [
  { title: "About me", href: "/about", tag: "01 / PROFILE", text: "My teaching background across Japan, online learning, and classroom instruction." },
  { title: "Teaching experience", href: "/experience", tag: "02 / EXPERIENCE", text: "Teaching experience in Japan, online, and during U.S. Army service." },
  { title: "Lesson samples", href: "/portfolio", tag: "03 / WORK", text: "Read a real classroom reflection about engaging a young learner through play." },
  { title: "Request a meeting", href: "/meeting", tag: "04 / CONNECT", text: "Schools and hiring teams can propose an online interview directly through my website." },
];

export default function Home() {
  return (
    <main>
      <SiteHeader current="/" />
      <section className="hero shell" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> SEEKING FULL-TIME TEACHING WORK IN TOKYO</div>
          <h1>Teaching begins<br />with <em>understanding</em><span className="period">.</span></h1>
          <p className="hero-lead">I&apos;m a <strong>TEFL-certified English teacher</strong> in Tokyo, teaching learners from age three through retirement. I focus on recognizing individual strengths, building rapport, and adapting instruction to the learner.</p>
          <p className="hero-detail">Currently teaching with Shane English Corporation in Tokyo; my contract provides flexibility to consider and accept new work. Available for full-time roles, excluding Shabbat (Friday sunset through Saturday sunset).</p>
          <div className="actions">
            <a className="button-primary" href="/portfolio">See my classroom practice <span aria-hidden="true">↗</span></a>
            <a className="button-link" href="/meeting">Request a meeting <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="hero-art" aria-label="Decorative teaching portfolio illustration" role="img">
          <div className="art-sun" />
          <div className="art-card"><span>HELLO!</span><strong>学び<br />meets<br />language.</strong><div className="art-rule"/></div>
          <div className="art-orbit art-orbit-one"/>
          <div className="art-orbit art-orbit-two"/>
          <div className="art-label">LEARN · GROW · CONNECT</div>
        </div>
      </section>
      <section className="intro-band">
        <div className="shell intro-grid"><p>MY TEACHING PHILOSOPHY</p><h2>Meet the learner where they are.<br />Build on what they already do well.</h2></div>
      </section>
      <section className="section shell" id="approach">
        <div className="section-heading"><div><span className="kicker">01 / MY APPROACH</span><h2>Connection first.<br /><em>Teaching with purpose.</em></h2></div><p>These are the principles shaping the way I prepare and deliver English lessons.</p></div>
        <div className="skills-grid">{skills.map((skill) => <article className="skill-card" key={skill.number}><span>{skill.number} /</span><h3>{skill.title}</h3><p>{skill.description}</p></article>)}</div>
      </section>
      <section className="section portfolio-section" id="portfolio">
        <div className="shell">
          <div className="section-heading"><div><span className="kicker">02 / THE PORTFOLIO</span><h2>More than<br /><em>a résumé.</em></h2></div><p>A simple look at my experience, materials, and what I can contribute to a teaching team.</p></div>
          <div className="portfolio-grid">{portfolioSections.map((item) => <a className="portfolio-card" href={item.href} key={item.title}><span>{item.tag}</span><h3>{item.title}</h3><p>{item.text}</p><span className="card-arrow" aria-hidden="true">↗</span></a>)}</div>
          <p className="work-note">Explore an original classroom reflection alongside my professional experience and résumé. Additional teaching samples will be developed over time.</p>
        </div>
      </section>
      <footer id="contact">
        <div className="shell footer-grid"><div><span className="kicker">03 / CONTACT</span><h2>Let&apos;s make<br /><em>learning happen.</em></h2><p>Represent a school or hiring team? Propose an online interview or introductory conversation.</p><a className="button-primary" href="/meeting">Request a meeting <span aria-hidden="true">↗</span></a></div><div className="footer-right"><span>BASED IN</span><strong>Tokyo, Japan</strong><span>AVAILABLE FOR</span><strong>Full-time teaching opportunities</strong></div></div>
        <div className="shell footer-bottom"><span>© {new Date().getFullYear()} English Teaching Portfolio</span><span>MADE FOR MEANINGFUL LEARNING</span></div>
      </footer>
    </main>
  );
}
