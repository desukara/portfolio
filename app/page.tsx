import SiteHeader from "./components/site-header";
const skills = [
  { number: "01", title: "Recognize strengths", description: "Look for what each learner already knows and the conditions in which they can show it." },
  { number: "02", title: "Build connection", description: "In unfamiliar cover classes, I adjust explanations, activities and pacing to the learners I meet." },
  { number: "03", title: "Adapt with purpose", description: "Use the school’s curriculum and teacher guides to keep activities focused on the lesson’s learning goals." },
];

export default function Home() {
  return (
    <main>
      <SiteHeader current="/" />
      <section className="hero shell" id="home">
        <div className="hero-copy" id="main-content" tabIndex={-1}>
          <div className="eyebrow"><span className="status-dot" /> TEFL-CERTIFIED · ENGLISH TEACHER IN TOKYO</div>
          <h1>I teach<br /><em>English.</em></h1>
          <p className="hero-lead">Welcome to my personal teaching portfolio. I&apos;m a <strong>TEFL-certified English teacher based in Tokyo</strong>, with classroom experience in Japan, online teaching, and full-time kindergarten homeroom instruction. I currently teach learners from age three through retirement.</p>
          <p className="hero-detail">Currently working as a cover teacher with Shane English Corporation. I&apos;m seeking a full-time teaching role in Tokyo. I&apos;m authorized to work in Japan without employer sponsorship and am available any day of the week.</p>
          <div className="actions">
            <a className="button-primary" href="/experience">Review teaching experience <span aria-hidden="true">→</span></a>
            <a className="button-link" href="/resume/download" download="J_Simmons_Resume_2026.pdf">Download résumé <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero-art hero-photo">
          <img src="/homepage-photo.jpeg" width={1076} height={1366} fetchPriority="high" alt="James Simmons, English teacher in Tokyo" loading="eager" />
        </div>
      </section>
      <section className="home-proof shell" aria-label="Teaching experience at a glance"><div><strong>TEFL</strong><span>Certified English teacher</span></div><div><strong>Japan teaching roles</strong><span>BCA (2020) · KIFL (2021) · Shane (2026–present)</span></div><div><strong>U.S. Army</strong><span>Division PM Instructor certification</span></div></section>
      <section className="home-employer-path shell" aria-labelledby="employer-path-heading"><div><span className="kicker">FOR SCHOOL HIRING TEAMS</span><h2 id="employer-path-heading">A clear view of <em>my teaching.</em></h2><p>Review my teaching timeline, see one anonymized classroom reflection, or download the one-page résumé.</p></div><div className="home-employer-links"><a href="/experience"><strong>Teaching experience</strong><span>Japan, online, and U.S. Army instruction →</span></a><a href="/portfolio#classroom-reflection"><strong>Classroom reflection</strong><span>An anonymized example of adapting an activity →</span></a><a href="/resume/download" download="J_Simmons_Resume_2026.pdf"><strong>One-page résumé (PDF)</strong><span>Download the résumé ↓</span></a></div></section><section className="intro-band">
        <div className="shell intro-grid"><p>HOW I TEACH</p><h2>A clear learning goal.<br />An approach that fits the learner.</h2></div>
      </section>
      <section className="section shell" id="approach">
        <div className="section-heading"><div><span className="kicker">01 / MY APPROACH</span><h2>Every learner brings<br /><em>something to the lesson.</em></h2></div><p>A practical approach developed across English teaching, early childhood education, and adult classroom instruction.</p></div>
        <div className="skills-grid">{skills.map((skill) => <article className="skill-card" key={skill.number}><span>{skill.number} /</span><h3>{skill.title}</h3><p>{skill.description}</p></article>)}</div>
      </section>
      <footer id="contact">
        <div className="shell footer-grid"><div><span className="kicker">03 / CONTACT</span><h2>Interested in my<br /><em>teaching experience?</em></h2><p>I’m James Simmons, an English teacher in Tokyo. If my experience fits an opening at your school, I’d welcome a conversation. You can also <strong className="contact-email">email meet@eastokyo.com</strong>.</p><div className="footer-actions"><a className="button-primary" href="/meeting">Invite me to interview <span aria-hidden="true">→</span></a><a className="button-link" href="/resume/download" download="J_Simmons_Resume_2026.pdf">Download résumé ↓</a></div></div><div className="footer-right"><span>BASED IN</span><strong>Tokyo, Japan</strong><span>AVAILABLE FOR</span><strong>Full-time teaching opportunities</strong></div></div>
        <div className="shell footer-bottom"><span className="footer-brand"><img src="/brand/js-mark.svg" width={36} height={36} alt="" aria-hidden="true" /> JS · EASTOKYO</span><span>© {new Date().getFullYear()} James Simmons · Personal Teaching Portfolio</span><span>MADE FOR MEANINGFUL LEARNING</span></div>
      </footer>
    </main>
  );
}
