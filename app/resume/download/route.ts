import { teaching } from "../resume-data";

export const runtime = "nodejs";

function ascii(value: string) {
  return value.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[\u2018\u2019]/g, "'").replace(/[\u2013\u2014]/g, "-").replace(/[^\x20-\x7E]/g, " ");
}
function esc(value: string) { return ascii(value).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)"); }
function wrap(value: string, limit = 92) {
  const words = ascii(value).split(/\s+/); const lines: string[] = []; let line = "";
  for (const word of words) { if ((line + " " + word).trim().length > limit) { if (line) lines.push(line); line = word; } else line = (line + " " + word).trim(); }
  if (line) lines.push(line); return lines;
}
type Line = {text:string; bold?:boolean; gap?:number};
const lines: Line[] = [];
const heading = (text:string) => lines.push({text, bold:true, gap:13});
const paragraph = (text:string) => wrap(text).forEach(t=>lines.push({text:t}));
const entry = (title:string, details:string, description:string) => {
  lines.push({text:title,bold:true,gap:7}); paragraph(details); paragraph(description); lines.push({text:"",gap:6});
};
heading("JAMES SIMMONS");
paragraph("ENGLISH TEACHER / TOKYO, JAPAN");
paragraph("Seeking full-time English teaching work | Currently employed at Shane English Corporation");
heading("PROFESSIONAL PROFILE");
paragraph("TEFL-certified English teacher working with learners from age three through retirement. Experienced in curriculum-guided instruction, rapport-building, and adapting activities to individual learners. Previous English teaching in Tokyo, Saitama, and online instruction. Previously served as a full-time U.S. Army classroom instructor in Hawaii (2000-2004).");
heading("CURRENT EMPLOYMENT & AVAILABILITY");
paragraph("Current: Shane English Corporation, Tokyo. Seeking: Full-time English teaching in Tokyo. My current contract provides flexibility to accept new work at my discretion. Not available during Shabbat (Friday sunset through Saturday sunset).");
heading("ENGLISH TEACHING EXPERIENCE");
for (const item of teaching) entry(item.employer+" | "+item.role,item.location+" | "+item.dates,item.summary);
heading("U.S. ARMY CLASSROOM INSTRUCTION");
entry("United States Army | Full-Time Classroom Instructor","Hawaii, USA | 2000-2004","Delivered full-time instruction in field sanitation and preventive medicine, and administered written and practical assessments. This role is separate from English-language teaching.");
heading("EDUCATION & PROFESSIONAL TRAINING");
entry("Harvard Extension School | Web Development","Cambridge, Massachusetts | 2022-PRESENT","Web Development studies; certificate in progress.");
entry("U.S. Army Medical Department Center and School","Fort Sam Houston, San Antonio, Texas | 2000","Preventive Medicine training.");
heading("CUSTOMER SERVICE & PROFESSIONAL COMMUNICATION");
entry("New York City and other U.S. locations","Approx. 2005-2018","2nd Avenue Deli (Upper East Side); Olympic Pita (Midtown); Sunflower Kosher Diner (Upper West Side).");
entry("Independent Contractor | Taxi Services","2022-2025","Customer-facing transportation services in Boston, South Florida, Charlotte, Atlanta and Pittsburgh.");
heading("CERTIFICATION");
paragraph("TEFL Certificate");

export async function GET() {
  const pages:string[] = []; let commands:string[] = []; let y=790;
  const finish=()=>{pages.push(commands.join("\n"));commands=[];y=790;};
  for(const line of lines){
    y -= line.gap ?? 13;
    if(y<55){finish();y-=line.gap??13;}
    if(line.text){commands.push("BT /"+(line.bold?"F2":"F1")+" "+(line.bold?11:9.5)+" Tf 45 "+y+" Td ("+esc(line.text)+") Tj ET");}
  }
  if(commands.length) finish();
  const objects:string[] = ["", "<< /Type /Catalog /Pages 2 0 R >>", "", "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>", "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>"];
  const pageIds:number[]=[];
  for(const stream of pages){const contentId=objects.length;objects.push("<< /Length "+Buffer.byteLength(stream,"ascii")+" >>\nstream\n"+stream+"\nendstream");const pageId=objects.length;objects.push("<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents "+contentId+" 0 R >>");pageIds.push(pageId);}
  objects[2]="<< /Type /Pages /Count "+pageIds.length+" /Kids ["+pageIds.map(id=>id+" 0 R").join(" ")+"] >>";
  let pdf="%PDF-1.4\n";const offsets=[0];
  for(let i=1;i<objects.length;i++){offsets[i]=Buffer.byteLength(pdf,"ascii");pdf+=i+" 0 obj\n"+objects[i]+"\nendobj\n";}
  const xref=Buffer.byteLength(pdf,"ascii");pdf+="xref\n0 "+objects.length+"\n0000000000 65535 f \n";
  for(let i=1;i<objects.length;i++)pdf+=String(offsets[i]).padStart(10,"0")+" 00000 n \n";
  pdf+="trailer\n<< /Size "+objects.length+" /Root 1 0 R >>\nstartxref\n"+xref+"\n%%EOF";
  return new Response(Buffer.from(pdf,"ascii"),{headers:{"Content-Type":"application/pdf","Content-Disposition":'attachment; filename="James-Simmons-Resume.pdf"',"Cache-Control":"public, max-age=3600"}});
}
