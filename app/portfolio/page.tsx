import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/site-header";

export const metadata: Metadata = {
  title: "Classroom Example | James Simmons Teaching Portfolio",
  description:
    "An anonymized early-childhood teaching example: adapting a color-vocabulary activity for a three-year-old learner.",
  alternates: { canonical: "/portfolio" },
};

export default function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <SiteHeader current="/portfolio" />

      <section className="experience-hero shell" id="main-content" tabIndex={-1}>
        <span className="kicker">CLASSROOM PRACTICE · EARLY CHILDHOOD</span>
        <h1>Turning a color question<br /><em>into a movement game.</em></h1>
        <p className="experience-lead">
          One example from a lesson with a three-year-old: a direct vocabulary
          question got no answer, so I changed the activity. Here&apos;s what I
          tried and what I observed.
        </p>
        <nav className="portfolio-jump-nav" aria-label="Explore teaching portfolio">
          <a href="#classroom-reflection">
            <strong>01</strong>
            <span>Classroom example<small>A color-vocabulary activity</small></span>
            <span aria-hidden="true">↓</span>
          </a>
          <a href="#evidence-heading">
            <strong>02</strong>
            <span>Other teaching roles<small>Shane · KIFL · BCA</small></span>
            <span aria-hidden="true">↓</span>
          </a>
        </nav>
      </section>

      <section className="experience-section">
        <article className="shell case-study" id="classroom-reflection" tabIndex={-1}>
          <span className="kicker">ANONYMIZED EXAMPLE · AGE 3</span>
          <h2>Finding another way to practice <em>color vocabulary.</em></h2>
          <p className="case-lead">
            When the learner didn&apos;t answer a direct question, I changed how
            I invited him to use the color words.
          </p>

          <div className="reflection-story">
            <h3>The situation</h3>
            <p>
              I showed a three-year-old learner colored construction paper and
              asked him to name the first color. He did not respond, so I
              couldn&apos;t tell from that exchange whether he knew the word.
            </p>

            <h3>What I changed</h3>
            <p>
              I made the practice a movement game. I modeled a color word while
              crumpling a piece of paper into a ball. The learner copied the
              action and named another color. We repeated the game with other
              colors, then collected the paper balls together.
            </p>

            <h3>What I observed</h3>
            <p>
              He joined the activity and named several colors. The game gave
              him another way to show what he knew after the direct question
              had produced no answer.
            </p>

            <h3>My takeaway</h3>
            <p>
              A learner&apos;s silence does not tell me by itself what they
              know. I can keep the vocabulary goal and change the prompt or
              activity to find another way in.
            </p>
          </div>

          <p className="case-note">
            Learner and school details are omitted to protect privacy.
          </p>
          <Link className="button-primary" href="/experience">
            Review teaching experience →
          </Link>
        </article>
      </section>

      <section className="portfolio-evidence shell" aria-labelledby="evidence-heading">
        <span className="kicker">OTHER TEACHING ROLES</span>
        <h2 id="evidence-heading">Different classes, <em>specific responsibilities.</em></h2>
        <div className="portfolio-evidence-grid">
          <article>
            <span className="kicker">SHANE · COVER TEACHING</span>
            <h3>Prepare for the class assigned.</h3>
            <p>
              I review the school&apos;s textbooks and teacher guides, prepare
              for the assigned lesson, and adjust explanations, activities, or
              pacing for the learners in that class.
            </p>
            <Link href="/experience/shane-english">Shane role details →</Link>
          </article>
          <article>
            <span className="kicker">KIFL · ORAL ASSESSMENT</span>
            <h3>Assess spoken English.</h3>
            <p>
              I evaluated face-to-face oral exams against the institute&apos;s
              standards and taught speaking in an avatar-based online
              environment.
            </p>
            <Link href="/experience/kifl">KIFL role details →</Link>
          </article>
          <article>
            <span className="kicker">BCA · KINDERGARTEN HOMEROOM</span>
            <h3>Teach the full school day in English.</h3>
            <p>
              I planned and taught an English-immersion curriculum across
              kindergarten subjects for a class of children aged 5–7.
            </p>
            <Link href="/experience/bca-english-school">BCA role details →</Link>
          </article>
        </div>
      </section>

      <footer className="mini-footer">
        <div className="shell mini-footer-inner">
          <span>© {new Date().getFullYear()} English Teaching Portfolio</span>
          <Link href="/">Homepage →</Link>
        </div>
      </footer>
    </main>
  );
}
