import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../components/site-header";
import { careerRoles, careerIndex } from "../roles";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return careerRoles.map((role) => ({ slug: role.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const role = careerRoles.find((item) => item.slug === slug);
  if (!role) return { title: "Career Experience" };
  return {
    title: `${role.name} | Career Experience`,
    description: role.summary,
    alternates: { canonical: `/experience/${role.slug}` },
  };
}

const examplesWithStories = new Set([
  "shane-english",
  "bca-english-school",
  "panda-abc",
  "us-army",
  "independent-transportation",
]);

function RoleExample({ slug }: { slug: string }) {
  if (slug === "bca-english-school") {
    return (
      <section className="career-example-section" id="career-story">
        <div className="shell career-example">
          <span className="kicker">CLASSROOM EXAMPLE</span>
          <h2>Preparing for Sports Day</h2>
          <p>
            I choreographed a dance routine to Pharrell Williams’s “Happy” and
            rehearsed it with my kindergarten class, ages 5–7, for the school’s
            Sports Day competition.
          </p>
          <p>
            We practiced the routine as a class, listening to the music,
            coordinating movements, and preparing to perform together.
          </p>
        </div>
      </section>
    );
  }

  if (slug === "panda-abc") {
    return (
      <section className="career-example-section" id="career-story">
        <div className="shell career-example">
          <span className="kicker">ONLINE TEACHING EXAMPLE</span>
          <h2>Teaching one-to-one and large classes</h2>
          <p>
            At Panda ABC, I taught individual lessons as well as classes of 30
            or more students joining through a classroom screen. Several young
            learners returned and requested my lessons again.
          </p>
          <p>
            I used clear speech, facial expression, and gestures so students
            could follow spoken English and participate in both formats.
          </p>
        </div>
      </section>
    );
  }

  if (slug === "us-army") {
    return (
      <section className="career-example-section" id="career-story">
        <div className="shell career-example">
          <span className="kicker">INSTRUCTION &amp; ASSESSMENT</span>
          <h2>Teaching and certifying adult learners</h2>
          <p>
            The course combined classroom lessons with written and practical
            examinations. I taught field sanitation and preventive medicine,
            graded written tests, and assessed students at practical exam
            stations.
          </p>
          <p>
            Soldiers had to meet the course standards before serving as field
            sanitation and preventive medicine representatives in their units.
          </p>
        </div>
      </section>
    );
  }

  if (slug === "independent-transportation") {
    return (
      <section className="career-example-section" id="career-story">
        <div className="shell career-example">
          <span className="kicker">U.S. BUSINESS OPERATIONS</span>
          <h2>Running Simmons Taxi</h2>
          <p>
            From 2022 to 2025, I owned and operated a U.S.-based taxi company.
            I managed schedules, routes, daily operations, and passenger
            service across several U.S. markets.
          </p>
        </div>
      </section>
    );
  }

  if (slug === "shane-english") {
    return (
      <section className="career-example-section" id="career-story">
        <div className="shell career-example">
          <span className="kicker">COVER-CLASS EXAMPLE</span>
          <h2>Preparing when lesson materials were missing</h2>
          <p>
            At one Shane assignment, students had their textbooks, but the
            teacher guides and planned lesson materials were unavailable. I
            prepared lessons for the evening’s classes using the resources on
            hand and adjusted them for each group.
          </p>
          <p>
            Students took part in the lessons and told me they enjoyed them.
          </p>
        </div>
      </section>
    );
  }

  return null;
}

function exampleLabel(slug: string) {
  return slug === "independent-transportation" ? "Business example ↓" : "Example from the work ↓";
}

export default async function CareerDetail({ params }: Props) {
  const { slug } = await params;
  const index = careerIndex(slug);
  if (index < 0) notFound();

  const role = careerRoles[index];
  const hasStory = examplesWithStories.has(role.slug);

  return (
    <main>
      <SiteHeader current="/experience" />
      <div className="shell career-breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/experience">Experience</Link>
        <span aria-hidden="true">/</span>
        <span>{role.name}</span>
      </div>

      <section className="experience-hero shell career-hero" id="main-content" tabIndex={-1}>
        <span className="kicker">
          {role.category.toUpperCase()}{role.dates ? ` · ${role.dates}` : ""}
        </span>
        <h1>{role.name}<span className="period">.</span></h1>
        <p className="experience-lead">{role.title} · {role.location}</p>
        <p className="career-summary">{role.summary}</p>
        <nav className="career-jump-links" aria-label="On this page">
          <a href="#role-details">Responsibilities ↓</a>
          {hasStory && <a href="#career-story">{exampleLabel(role.slug)}</a>}
        </nav>
      </section>

      <section className="experience-section" id="role-details">
        <div className="shell career-content">
          <div>
            <span className="kicker">ROLE DETAILS</span>
            <h2>Responsibilities</h2>
            <ul>
              {role.responsibilities.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <RoleExample slug={role.slug} />

      <section className="shell career-next">
        <span className="kicker">MORE EXPERIENCE</span>
        <div className="career-navigation">
          <Link href="/experience">← All experience</Link>
          <Link href="/">Homepage</Link>
        </div>
      </section>

      <section className="experience-cta">
        <div className="shell">
          <span className="kicker">HIRING IN TOKYO?</span>
          <h2>Let&apos;s talk about your opening.</h2>
          <p>
            I&apos;m seeking a full-time English teaching role in Tokyo and can
            work any day of the week without employer sponsorship.
          </p>
          <Link href="/meeting" className="button-primary">Request an interview →</Link>
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
