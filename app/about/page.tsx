import SiteHeader from "../components/site-header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | English Teacher Portfolio",
  description: "Learn about the approach and professional aspirations behind this Tokyo English teaching portfolio.",
};

const values = [
  { id: "01", title: "Notice strengths", description: "A quiet response does not always mean a learner lacks knowledge. I look for other ways they can show what they know." },
  { id: "02", title: "Adapt with purpose", description: "I use established learning goals and teacher guidance while adjusting the delivery to suit the learner." },
  { id: "03", title: "Build rapport", description: "Knowing what engages an individual learner helps create opportunities for meaningful participation." },
];

export default function AboutPage() {
  return (
    <main>
      <SiteHeader current="/about" />
      <section className="about-hero shell" id="main-content" tabIndex={-1}>
        <div>
          <span className="kicker">01 / THE PERSON BEHIND THE LESSONS</span>
          <h1>Understand the learner.<br/><em>Then teach.</em></h1>
          <p className="about-intro">I&apos;m currently teaching at Shane English Corporation in Tokyo. I&apos;m a TEFL-certified English teacher with experience at BCA in Saitama, KIFL in Kanda, Tokyo, and online with Panda ABC. I also served as a full-time U.S. Army classroom instructor in Hawaii from 2000 to 2004.</p>
          <p className="about-muted">At Shane, I teach learners from age three through retirement, using the school’s textbooks and teacher’s guides while adapting activities and pacing to the students in front of me. My strength is recognizing individual learners’ interests and abilities and building a connection that helps them participate.</p>
          <p className="about-muted"><strong>Additional background:</strong> customer-facing work across several U.S. cities and web development studies at Harvard Extension School since 2022. My certificate is in progress.</p>
          <Link href="/portfolio" className="button-primary">Explore the portfolio <span aria-hidden="true">↗</span></Link>
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
            <p>Principles informed by my experience teaching students with different ages, personalities, and goals.</p>
          </div>
          <div className="skills-grid">{values.map(item => <article className="skill-card" key={item.id}><span>{item.id} /</span><h3>{item.title}</h3><p>{item.description}</p>{item.id === "03" && <Link className="practice-link" href="/portfolio#classroom-reflection">See a classroom reflection →</Link>}</article>)}</div>
        </div>
      </section>
      <section className="about-next shell">
        <div><span className="kicker">03 / NEXT UP</span><h2>A profile backed by <em>real work.</em></h2></div>
        <div><p>Explore my English teaching roles in Japan and online, and my classroom instruction experience in Hawaii. My approved résumé is available to view, download, and print.</p><div className="about-next-links"><Link href="/experience" className="button-link">View teaching experience <span aria-hidden="true">→</span></Link><Link href="/resume/download" className="button-link" download="J_Simmons_Resume_2026.pdf">Download official résumé ↓</Link></div></div>
      </section>
      <footer className="mini-footer"><div className="shell mini-footer-inner"><span>© {new Date().getFullYear()} English Teaching Portfolio</span><Link href="/">Back to homepage ↗</Link></div></footer>
    </main>
  );
}
