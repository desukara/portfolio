import HomeMotion from "./components/home-motion";
import SiteHeader from "./components/site-header";

export default function Home() {
  return (
    <main className="home-page">
      <div className="home-progress" data-home-progress aria-hidden="true"><span /></div>
      <HomeMotion />
      <SiteHeader current="/" />
      <section className="hero shell" id="home">
        <div className="hero-copy" id="main-content" tabIndex={-1}>
          <div className="eyebrow" data-home-reveal="hero" data-home-delay="0"><span className="status-dot" aria-hidden="true" /> TEFL-CERTIFIED · ENGLISH TEACHER IN TOKYO</div>
          <h1 aria-label="Tokyo, let’s make English click.">
            <span className="home-title-mask" data-home-reveal="title" data-home-delay="70"><span>Tokyo, let’s</span></span>
            <span className="home-title-mask" data-home-reveal="title" data-home-delay="150"><em>make English</em></span>
            <span className="home-title-mask home-title-mask-last" data-home-reveal="title" data-home-delay="230"><span>click.</span></span>
          </h1>
          <p className="hero-lead" data-home-reveal="hero" data-home-delay="290">I’m a <strong>TEFL-certified English teacher in Tokyo</strong>, bringing classroom experience in Japan and online to learners from age three through retirement.</p>
        </div>
        <figure className="hero-art hero-photo">
          <div className="home-photo-window">
            <img src="/homepage-photo.jpeg" width={1076} height={1366} fetchPriority="high" alt="James Simmons, English teacher in Tokyo" loading="eager" />
          </div>
          <figcaption className="home-photo-caption"><span>JAMES SIMMONS</span><span>ENGLISH TEACHER · TOKYO</span></figcaption>
        </figure>
        <div className="hero-followup">
          <div className="actions">
            <a className="button-primary" href="/portfolio"><span>See my teaching in action</span><span className="button-icon" aria-hidden="true">→</span></a>
            <a className="button-link" href="/resume/download" download="J_Simmons_Resume_2026.pdf">Download résumé <span aria-hidden="true">↓</span></a>
          </div>
          <p className="hero-detail" data-home-reveal="hero" data-home-delay="350">Currently teaching with Shane English Corporation, I’m seeking a full-time teaching role in Tokyo. I’m authorized to work in Japan without employer sponsorship.</p>
        </div>
      </section>
      <section className="home-proof shell" aria-label="Teaching experience at a glance">
        <div data-home-scroll-reveal data-home-delay="0"><strong>TEFL</strong><span>Certified English teacher</span></div>
        <div data-home-scroll-reveal data-home-delay="70"><strong>Japan teaching roles</strong><span>BCA (2020) · KIFL (2021) · Shane (2026–present)</span></div>
        <div data-home-scroll-reveal data-home-delay="140"><strong>U.S. Army</strong><span>Division PM Instructor certification</span></div>
        <div className="home-proof-range" data-home-scroll-reveal data-home-delay="210">
          <strong>Learner range</strong>
          <span className="home-range-labels"><span>AGE 3</span><span>RETIREMENT</span></span>
          <span className="home-range-rail" aria-hidden="true"><i /></span>
        </div>
      </section>
      <section className="home-employer-path shell" aria-labelledby="employer-path-heading">
        <div data-home-scroll-reveal data-home-delay="0"><span className="kicker">FOR SCHOOL HIRING TEAMS</span><h2 id="employer-path-heading">My teaching <em>background.</em></h2><p>Review my experience, read a classroom example, or download the one-page résumé.</p></div>
        <div className="home-employer-links">
          <a href="/experience" data-home-scroll-reveal data-home-delay="80"><strong>Teaching experience</strong><span>Japan, online, and U.S. Army classroom instruction →</span></a>
          <a href="/portfolio#classroom-reflection" data-home-scroll-reveal data-home-delay="150"><strong>Classroom example</strong><span>A lesson adjusted for a young learner →</span></a>
          <a href="/resume/download" download="J_Simmons_Resume_2026.pdf" data-home-scroll-reveal data-home-delay="220"><strong>One-page résumé (PDF)</strong><span>Download the résumé ↓</span></a>
        </div>
      </section>
      <footer id="contact">
        <div className="shell footer-grid"><div data-home-scroll-reveal><span className="kicker">03 / CONTACT</span><h2>Interested in my<br /> <em>teaching experience?</em></h2><p>I’m James Simmons, an English teacher in Tokyo. If my experience fits an opening at your school, I’d welcome a conversation. You can also email <a className="contact-email" href="mailto:meet@eastokyo.com">meet@eastokyo.com</a>.</p><div className="footer-actions"><a className="button-primary" href="/meeting"><span>Invite me to interview</span><span className="button-icon" aria-hidden="true">→</span></a><a className="button-link" href="/resume/download" download="J_Simmons_Resume_2026.pdf">Download résumé ↓</a></div></div><div className="footer-right" data-home-scroll-reveal data-home-delay="100"><span>BASED IN</span><strong>Tokyo, Japan</strong><span>AVAILABLE FOR</span><strong>Full-time teaching opportunities</strong></div></div>
        <div className="shell footer-bottom"><span className="footer-brand"><img src="/brand/js-mark.svg" width={36} height={36} alt="" aria-hidden="true" /> JS · EASTOKYO</span><span>© {new Date().getFullYear()} James Simmons · Personal Teaching Portfolio</span><span className="footer-availability-beacon">AVAILABLE NOW FOR THE RIGHT TEACHING ROLE</span></div>
      </footer>
    </main>
  );
}
