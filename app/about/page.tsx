import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | English Teacher Portfolio",
  description: "Learn about the approach and professional aspirations behind this Tokyo English teaching portfolio.",
};

const values = [
  { id: "01", title: "Confidence", description: "A welcoming classroom gives learners room to try, make mistakes, and keep going." },
  { id: "02", title: "Clarity", description: "Strong lessons have a clear goal, useful language, and activities that build toward it." },
  { id: "03", title: "Connection", description: "Language becomes meaningful when learners can use it to communicate in real situations." },
];

export default function AboutPage() {
  return (
    <main>
      <div className="top-strip"><span>ENGLISH LANGUAGE EDUCATION</span><span>TOKYO, JAPAN</span></div>
      <header className="site-header shell">
        <Link className="brand" href="/" aria-label="Go to homepage">TEACH<span>.</span></Link>
        <nav aria-label="Main navigation">
          <Link href="/about" aria-current="page">About</Link>
          <Link href="/#portfolio">Portfolio</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <Link className="nav-cta" href="/#contact">Get in touch <span aria-hidden="true">↗</span></Link>
      </header>
      <section className="about-hero shell">
        <div>
          <span className="kicker">01 / THE PERSON BEHIND THE LESSONS</span>
          <h1>Good teaching begins with <em>connection.</em></h1>
          <p className="about-intro">I&apos;m a TEFL-certified English teacher with experience at BCA in Saitama, KIFL in Kanda, Tokyo, and online with Panda ABC. I also spent approximately six years as a full-time U.S. Army classroom instructor in Hawaii.</p>
          <p className="about-muted">My background also includes customer-facing work across several U.S. cities. Employment dates and individual responsibilities will be added after confirmation.</p>
          <Link href="/#portfolio" className="button-primary">Explore the portfolio <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="about-feature" aria-label="Abstract illustration of an open book and dialogue">
          <div className="feature-disc"></div>
          <div className="feature-book"><span>HELLO</span><strong>Learn.<br/>Connect.<br/><i>Grow.</i></strong></div>
          <span className="feature-caption">TOKYO · ENGLISH EDUCATION</span>
        </div>
      </section>
      <section className="about-values">
        <div className="shell">
          <div className="section-heading">
            <div><span className="kicker">02 / TEACHING MINDSET</span><h2>What matters<br/><em>in the classroom.</em></h2></div>
            <p>Three principles guiding this portfolio&apos;s teaching approach. These are guiding ideas, not claims about past employment.</p>
          </div>
          <div className="skills-grid">{values.map(item => <article className="skill-card" key={item.id}><span>{item.id} /</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
        </div>
      </section>
      <section className="about-next shell">
        <div><span className="kicker">03 / NEXT UP</span><h2>A profile backed by <em>real work.</em></h2></div>
        <div><p>Explore my English teaching roles in Japan and online, and my classroom instruction experience in Hawaii. A downloadable and print-ready résumé will follow once the details are confirmed.</p><Link href="/experience" className="button-link">View teaching experience <span aria-hidden="true">→</span></Link></div>
      </section>
      <footer className="mini-footer"><div className="shell mini-footer-inner"><span>© {new Date().getFullYear()} English Teaching Portfolio</span><Link href="/">Back to homepage ↗</Link></div></footer>
    </main>
  );
}
