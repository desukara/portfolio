const skills = [
  { number: "01", title: "Communication first", description: "Practical lessons designed to build confidence in real-world English communication." },
  { number: "02", title: "Engaging learning", description: "Interactive activities, clear goals, and supportive classroom experiences." },
  { number: "03", title: "Every learner matters", description: "An adaptable approach that recognizes different goals, ages, and learning styles." },
];

const portfolioSections = [
  { title: "About me", href: "/about", tag: "01 / PROFILE", text: "My teaching background across Japan, online learning, and classroom instruction." },
  { title: "Teaching experience", href: "/experience", tag: "02 / EXPERIENCE", text: "TEFL teaching in Japan and online, plus six years of Army classroom instruction." },
  { title: "Lesson samples", href: "/#portfolio", tag: "03 / WORK", text: "Selected lesson plans, worksheets, and activities with clear learning objectives." },
  { title: "Resume & contact", href: "/#contact", tag: "04 / CONNECT", text: "Qualifications, downloadable CV, and a simple way to get in touch." },
];

export default function Home() {
  return (
    <main>
      <div className="top-strip"><span>ENGLISH LANGUAGE EDUCATION</span><span>TOKYO, JAPAN</span></div>
      <header className="site-header shell">
        <a className="brand" href="/" aria-label="Back to home">TEACH<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="/about">About</a>
          <a href="/#portfolio">Portfolio</a>
          <a href="/#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="/about">My story <span aria-hidden="true">↗</span></a>
      </header>
      <section className="hero shell" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot" /> OPEN TO FULL-TIME OPPORTUNITIES IN TOKYO</div>
          <h1>English learning<br />that <em>connects</em><span className="period">.</span></h1>
          <p className="hero-lead">I&apos;m a <strong>TEFL-certified English teacher</strong> with experience in Japan, online instruction, and six years of full-time U.S. Army classroom teaching.</p>
          <p className="hero-detail">Explore my approach, teaching materials, and professional background. This portfolio is currently being prepared for school applications.</p>
          <div className="actions">
            <a className="button-primary" href="#portfolio">Explore my work <span aria-hidden="true">↗</span></a>
            <a className="button-link" href="#contact">Get in touch <span aria-hidden="true">→</span></a>
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
        <div className="shell intro-grid"><p>MY TEACHING PHILOSOPHY</p><h2>Language opens doors.<br />Great teaching helps people walk through them.</h2></div>
      </section>
      <section className="section shell" id="approach">
        <div className="section-heading"><div><span className="kicker">01 / MY APPROACH</span><h2>Thoughtful teaching.<br /><em>Real progress.</em></h2></div><p>These are the principles shaping the way I prepare and deliver English lessons.</p></div>
        <div className="skills-grid">{skills.map((skill) => <article className="skill-card" key={skill.number}><span>{skill.number} /</span><h3>{skill.title}</h3><p>{skill.description}</p></article>)}</div>
      </section>
      <section className="section portfolio-section" id="portfolio">
        <div className="shell">
          <div className="section-heading"><div><span className="kicker">02 / THE PORTFOLIO</span><h2>More than<br /><em>a résumé.</em></h2></div><p>A simple look at my experience, materials, and what I can contribute to a teaching team.</p></div>
          <div className="portfolio-grid">{portfolioSections.map((item) => <a className="portfolio-card" href={item.href} key={item.title}><span>{item.tag}</span><h3>{item.title}</h3><p>{item.text}</p><span className="card-arrow" aria-hidden="true">↗</span></a>)}</div>
          <p className="work-note">Coming next: individual pages with verified experience, real lesson examples, and a downloadable résumé.</p>
        </div>
      </section>
      <footer id="contact">
        <div className="shell footer-grid"><div><span className="kicker">03 / CONTACT</span><h2>Let&apos;s make<br /><em>learning happen.</em></h2><p>Currently preparing for full-time English teaching opportunities in Tokyo.</p><a className="button-primary" href="mailto:your-email@example.com">Email me <span aria-hidden="true">↗</span></a><p className="placeholder-note">Contact email is a placeholder — replace before sharing this portfolio with schools.</p></div><div className="footer-right"><span>BASED IN</span><strong>Tokyo, Japan</strong><span>AVAILABLE FOR</span><strong>Full-time teaching opportunities</strong></div></div>
        <div className="shell footer-bottom"><span>© {new Date().getFullYear()} English Teaching Portfolio</span><span>MADE FOR MEANINGFUL LEARNING</span></div>
      </footer>
    </main>
  );
}
