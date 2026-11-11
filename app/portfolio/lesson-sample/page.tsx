import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../../components/site-header";
import PrintSampleButton from "./print-button";

export const metadata: Metadata = {
  title: "Lesson Sample | Asking for Clarification",
  description: "An original illustrative 30-minute English lesson plan with learner materials, role cards and an assessment checklist.",
  alternates: { canonical: "/portfolio/lesson-sample" },
};
const stages = [
  ["0–3 min", "Find the need", "Ask the learner to arrange a fictional meeting from a short spoken message. Ask which detail they would check if they were unsure. Notice whether they already ask for repetition; do not score the warm-up."],
  ["3–7 min", "Notice the language", "Read the model dialogue together. Have the learner underline the request for repetition and circle the confirmation. Contrast ‘Could you repeat that, please?’ with ‘So, that’s Tuesday at two?’ Model clear, friendly intonation."],
  ["7–12 min", "Supported rehearsal", "Use the phrase bank. Say one meeting detail at a time; the learner asks for repetition and confirms it. Swap roles. Change one detail on each turn rather than asking the learner to memorize the whole dialogue."],
  ["12–21 min", "Information-gap task", "Give each speaker a different role card. They keep the cards private, arrange the meeting and record the agreed day, time and place. Swap roles and use the second card pair. In a one-to-one lesson, the teacher takes the partner role."],
  ["21–26 min", "Check independently", "Remove the phrase bank and use the final-check card. Ask the learner to arrange the meeting, with one detail deliberately left unclear. Observe the three checklist items. Record the words used and whether support was needed; do not prompt during this attempt."],
  ["26–30 min", "Feedback and transfer", "Ask the learner to compare their written details with the speaker’s card. Give one specific success and one next step. Rehearse that next step once, then ask where they could use a clarification question outside class."],
];
const prompts = ["Could you repeat that, please?", "Did you say two or three?", "So, that’s Tuesday at two?", "Where shall we meet?"];
export default function LessonSample() {
  return <main className="lesson-route">
    <div className="lesson-screen-only"><SiteHeader current="/portfolio" /></div>
    <section className="shell lesson-heading" id="main-content" tabIndex={-1}>
      <Link className="button-link lesson-screen-only" href="/portfolio">← Teaching portfolio</Link>
      <span className="kicker">ORIGINAL ILLUSTRATIVE SAMPLE / COMMUNICATION</span>
      <h1>Ask clearly.<br/><em>Confirm the details.</em></h1>
      <p className="lesson-lead">A practical lesson about asking for repetition and checking the details of a meeting.</p>
      <p className="lesson-disclosure">Newly prepared for this portfolio. This is an illustrative lesson design, not a report of a lesson already delivered or of measured student outcomes. All scenarios are fictional.</p>
      <div className="lesson-screen-only lesson-actions"><a className="button-primary" href="/lesson-sample.pdf" download="James_Simmons_Lesson_Sample.pdf">Download lesson PDF ↓</a><PrintSampleButton /><Link className="button-link" href="/meeting">Discuss this lesson →</Link></div>
    </section>
    <section className="shell lesson-sheet">
      <div className="lesson-folio">JAMES SIMMONS / LESSON DESIGN <span>01 / TEACHER PLAN</span></div>
      <h2>The teaching plan</h2>
      <dl className="lesson-facts"><div><dt>Suggested learners</dt><dd>Adults or older teens; approximately A2</dd></div><div><dt>Length and setting</dt><dd>30 minutes; one-to-one or a small group</dd></div><div><dt>Starting point</dt><dd>Familiar with days, times and simple meeting arrangements</dd></div><div><dt>Materials</dt><dd>Printed learner sheet and role cards; paper and pencil</dd></div></dl>
      <h3>Learning objective</h3><p>By the end of the lesson, the learner will request clarification and confirm a meeting’s day, time and place in a short spoken exchange.</p>
      <h3>What success looks like</h3><p>In the final role-play, the learner asks a relevant clarification question, confirms the information aloud, and records all three meeting details accurately. Record this attempt only; a later retrieval check would be needed to assess retention.</p>
      <div className="lesson-stages">{stages.map(([time,title,description])=><article key={time}><strong>{time}</strong><div><h3>{title}</h3><p>{description}</p></div></article>)}</div>
      <h3>Adapt without losing the objective</h3><ul><li><strong>More support:</strong> keep two sentence frames visible, give extra thinking time, and introduce day and time before adding place. Record that the attempt was supported.</li><li><strong>More challenge:</strong> add a change of plan or a second clarification question, while keeping accurate confirmation as the goal.</li><li><strong>Different participation needs:</strong> offer quiet paired rehearsal and written planning before speaking. Do not treat silence alone as proof that the learner does not understand.</li></ul>
    </section>
    <section className="shell lesson-sheet lesson-page-break">
      <div className="lesson-folio">JAMES SIMMONS / LEARNER MATERIAL <span>02 / PRACTICE SHEET</span></div>
      <h2>Make sure you heard it right.</h2><p>When a meeting detail is unclear, ask again. Then say the details back to check them.</p>
      <div className="lesson-model"><h3>Model conversation</h3><p><strong>A:</strong> Let’s meet on Tuesday at two, at the station’s north exit.</p><p><strong>B:</strong> Could you repeat the time, please?</p><p><strong>A:</strong> Two o’clock.</p><p><strong>B:</strong> So, that’s Tuesday at two, at the north exit?</p><p><strong>A:</strong> Yes, that’s right.</p></div>
      <h3>Your phrase bank</h3><ul>{prompts.map(p=><li key={p}>{p}</li>)}</ul>
      <h3>Your task</h3><ol><li>Read your role card. Keep it private.</li><li>Talk to your partner. Ask for clarification when a detail is unclear.</li><li>Say the agreed details back to your partner.</li><li>Write the final arrangement below. Compare it with your partner’s card after the conversation.</li></ol>
      <div className="lesson-answer-lines"><p>Day: <span>________________________________________________</span></p><p>Time: <span>_______________________________________________</span></p><p>Place: <span>_______________________________________________</span></p></div>
      <h3>Reflect</h3><p>Which question helped you? What would you like to say more confidently next time?</p><div className="lesson-writing-space" aria-label="Space for written reflection" />
    </section>
    <section className="shell lesson-sheet lesson-page-break">
      <div className="lesson-folio">JAMES SIMMONS / TASK MATERIAL <span>03 / ROLE CARDS & CHECK</span></div>
      <h2>Two speakers. One clear arrangement.</h2><p>Cut or fold the cards. Give each speaker only their own card. The teacher may read the partner card in a one-to-one lesson.</p>
      <div className="lesson-role-grid">
        <article><span className="kicker">ROUND 1 / SPEAKER A</span><h3>Arrange a meeting.</h3><p>You suggest <strong>Tuesday at 2 p.m., at the station’s north exit</strong>. Say the details naturally. If your partner asks, repeat the relevant detail clearly.</p></article>
        <article><span className="kicker">ROUND 1 / SPEAKER B</span><h3>Check the time.</h3><p>You are free on Tuesday. Your partner suggests a time, but you are unsure whether they said two or three. Ask, confirm all the details, then write the arrangement.</p></article>
        <article><span className="kicker">ROUND 2 / SPEAKER A</span><h3>Check the place.</h3><p>You are free on Thursday afternoon. You know there is a café by the east exit and another by the west exit. Find out which café your partner means, then confirm the arrangement.</p></article>
        <article><span className="kicker">ROUND 2 / SPEAKER B</span><h3>Suggest a place.</h3><p>You suggest <strong>Thursday at 4 p.m., at the café by the west exit</strong>. First say “the café by the station.” Give the exact exit when asked.</p></article>
      </div>
      <div className="lesson-model"><h3>Final check / teacher card</h3><p>Suggest <strong>Wednesday at 3 p.m., outside the library’s south entrance</strong>. First say “outside the library,” leaving the entrance unspecified. Answer the learner’s clarification question. Accept any relevant, understandable wording, not only a memorized phrase.</p></div>
      <h3>Observation checklist</h3><table className="lesson-checklist"><caption>Complete during the final role-play. Leave blank until observed.</caption><thead><tr><th scope="col">Look for</th><th scope="col">Observed / support needed</th></tr></thead><tbody><tr><th scope="row">Requests the missing or unclear detail</th><td>________________________</td></tr><tr><th scope="row">Confirms the meeting aloud</th><td>________________________</td></tr><tr><th scope="row">Records the correct day, time and place</th><td>________________________</td></tr></tbody></table>
      <p className="lesson-note">If a detail is wrong, ask the learner to identify it by comparing the cards, then repeat the exchange with support. A successful rehearsal is useful practice; it is not a measured claim of lasting improvement.</p>
      <div className="lesson-screen-only lesson-actions"><a className="button-primary" href="/lesson-sample.pdf" download="James_Simmons_Lesson_Sample.pdf">Download lesson PDF ↓</a><PrintSampleButton /><Link href="/portfolio" className="button-link">Back to portfolio →</Link></div>
    </section>
    <footer className="mini-footer lesson-screen-only"><div className="shell mini-footer-inner"><span>James Simmons / Teaching Portfolio</span><Link href="/meeting">Discuss my teaching approach →</Link></div></footer>
  </main>;
}
