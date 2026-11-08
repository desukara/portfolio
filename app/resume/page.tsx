import Link from "next/link";
import type { Metadata } from "next";
import { PrintResumeButton } from "./print-button";
export const metadata: Metadata = { title:"Résumé | English Teaching Portfolio",description:"James Simmons — TEFL-certified English teacher, Tokyo. View and print professional résumé." };
export default function ResumePage(){
 return <main className="resume-route">
  <div className="resume-toolbar shell"><Link href="/">← Portfolio home</Link><span>RÉSUMÉ · DRAFT</span><PrintResumeButton /></div>
  <article className="resume-document" id="resume-document">
   <header><h1>James Simmons</h1><p>TEFL-Certified English Teacher | Tokyo, Japan | Seeking Full-Time English Teaching Work</p></header>
   <section className="resume-availability"><h2>Employment Status & Availability</h2><p><strong>Currently employed:</strong> Shane English Corporation, Tokyo. My current contract provides flexibility to accept new employment opportunities at my discretion.</p><p><strong>Seeking:</strong> Full-time English teaching work in Tokyo.</p><p><strong>Schedule requirement:</strong> Not available to work during Shabbat (Friday sunset through Saturday sunset).</p></section>
   <section><h2>Professional Profile</h2><p>TEFL-certified English teacher with experience teaching in Japan and online, including BCA English School in Saitama, KIFL in Kanda, Tokyo, and Panda ABC. Brings additional classroom instruction experience from a full-time U.S. Army active-duty assignment in Hawaii (1999–2004), plus customer-facing communication experience.</p></section>
   <section><h2>English Teaching Experience</h2><h3>Shane English Corporation — English Teacher <span>Tokyo | Current</span></h3><p>Current English-teaching position in Tokyo. Responsibilities and start year to be confirmed.</p>
    <h3>KIFL — English Teacher <span>Kanda, Tokyo | 2021</span></h3><p>English-language teaching role in Tokyo. Specific courses and responsibilities to be confirmed.</p>
    <h3>BCA English School — English Teacher <span>Saitama, Japan | 2020</span></h3><p>English-language teaching role in Saitama. Specific courses and responsibilities to be confirmed.</p>
    <h3>Panda ABC — Online English Teacher <span>2019</span></h3><p>Online English-language instruction through a China-based education company. Student groups and lesson format to be confirmed.</p>
   </section>
   <section><h2>Additional Classroom Instruction</h2><h3>United States Army — Full-Time Classroom Instructor <span>Hawaii | 1999–2004</span></h3><p>Classroom instruction during a full-time active-duty Army assignment. Instructional subject matter and responsibilities to be confirmed. This role is separate from English-language teaching.</p></section>
   <section><h2>Customer Service & Professional Communication</h2><h3>New York City and Other U.S. Locations <span>Approximately 2005–2018</span></h3><p>Customer-facing roles including the following New York City establishments. Individual employment years are intentionally omitted.</p><ul><li><strong>2nd Avenue Deli</strong> — Upper East Side, Manhattan</li><li><strong>Olympic Pita</strong> — Midtown Manhattan</li><li><strong>Sunflower Kosher Diner</strong> — Upper West Side, Manhattan</li></ul>
    <h3>Independent Contractor — Taxi Services <span>2022–2025</span></h3><p>Customer-facing transportation services across Boston, South Florida, Charlotte, Atlanta, and Pittsburgh.</p>
   </section>
   <section><h2>Certification</h2><p><strong>TEFL Certificate</strong> — Issuer and course details to be confirmed.</p></section>
   <p className="resume-draft-note">DRAFT — Professional contact information, education, course details, and specific teaching responsibilities must be completed before sharing with employers.</p>
  </article>
  <div className="resume-postscript shell"><p>To save this page as a PDF, select <strong>Print / Save PDF</strong> and choose your browser’s “Save as PDF” destination.</p></div>
 </main>
}
