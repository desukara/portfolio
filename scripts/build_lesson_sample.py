"""Build the original illustrative portfolio handout. No student data is used."""
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak
ROOT=Path(__file__).resolve().parents[1]
INK=colors.HexColor('#153b3c'); MUTED=colors.HexColor('#536b68'); PALE=colors.HexColor('#edf2ec')
styles=getSampleStyleSheet()
styles.add(ParagraphStyle(name='TitleX',fontName='Helvetica-Bold',fontSize=24,leading=27,textColor=INK,spaceAfter=12))
styles.add(ParagraphStyle(name='BodyX',fontName='Helvetica',fontSize=9.5,leading=13,textColor=INK,spaceAfter=8))
styles.add(ParagraphStyle(name='SmallX',parent=styles['BodyX'],fontSize=8.2,leading=11,textColor=MUTED))
styles.add(ParagraphStyle(name='HeadingX',fontName='Helvetica-Bold',fontSize=12,leading=15,textColor=INK,spaceBefore=10,spaceAfter=7))
styles.add(ParagraphStyle(name='CellX',parent=styles['BodyX'],fontSize=8.6,leading=11.5,spaceAfter=0))
def p(s,style='BodyX'):return Paragraph(s,styles[style])
def table(rows,widths,background=False):
 t=Table([[p(c,'CellX') for c in row] for row in rows],colWidths=widths,hAlign='LEFT')
 t.setStyle(TableStyle([('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),9),('RIGHTPADDING',(0,0),(-1,-1),9),('TOPPADDING',(0,0),(-1,-1),8),('BOTTOMPADDING',(0,0),(-1,-1),8),('LINEBELOW',(0,0),(-1,-1),.4,colors.HexColor('#cad6cc'))]+([('BACKGROUND',(0,0),(-1,-1),PALE)] if background else [])))
 return t
story=[]
def heading(k,title):story.extend([p('JAMES SIMMONS / '+k,'SmallX'),Spacer(1,10),p(title,'TitleX')])
heading('ORIGINAL ILLUSTRATIVE LESSON','Ask clearly. Confirm the details.')
story.append(p('Newly prepared for this portfolio. This is an illustrative lesson design, not a report of a lesson already delivered or of measured student outcomes. All scenarios are fictional.','SmallX'))
story.append(table([['<b>Suggested learners</b><br/>Adults or older teens; approximately A2','<b>Setting</b><br/>30 minutes; one-to-one or a small group'],['<b>Starting point</b><br/>Days, times and simple meeting arrangements','<b>Materials</b><br/>Learner sheet, role cards, paper and pencil']],[257,257],True))
story.extend([p('Objective and success criteria','HeadingX'),p('The learner requests clarification and confirms a meeting\'s day, time and place in a short spoken exchange. In the final task, look for a relevant clarification question, spoken confirmation, and an accurate record of all three details. Record support needed; a later check is required to assess retention.')])
stages=[
['0-3 min<br/><b>Find the need</b>','Arrange a fictional meeting from a short spoken message. Ask which detail the learner would check if unsure. Notice existing clarification strategies; do not score this warm-up.'],
['3-7 min<br/><b>Notice language</b>','Read the model dialogue. Underline the repetition request and circle the confirmation. Model clear, friendly intonation and the difference between asking again and checking back.'],
['7-12 min<br/><b>Rehearse</b>','Use the phrase bank. Say one detail at a time; the learner requests clarification and confirms it. Swap roles and change a detail on each turn.'],
['12-21 min<br/><b>Information gap</b>','Give each speaker a different private card. Arrange the meeting and record day, time and place. Swap roles for round 2. In a one-to-one lesson, the teacher takes the partner role.'],
['21-26 min<br/><b>Check independently</b>','Remove the phrase bank. Use the final-check card and leave one detail unspecified. Observe the checklist; record the words used and support needed. Do not prompt during this attempt.'],
['26-30 min<br/><b>Feedback and transfer</b>','Compare the written arrangement with the card. Give one specific success and one next step. Rehearse that next step, then discuss where a clarification question could help outside class.']]
story.append(table(stages,[100,414]))
story.extend([p('Adapt while keeping the objective','HeadingX'),p('<b>More support:</b> keep two sentence frames visible, give thinking time and introduce day/time before place. Label supported attempts. <b>More challenge:</b> introduce a changed plan or second clarification question. <b>Participation:</b> offer quiet paired rehearsal and written planning; silence alone does not establish lack of understanding.','SmallX'),PageBreak()])
heading('LEARNER MATERIAL / 02','Make sure you heard it right.')
story.append(p('When a meeting detail is unclear, ask again. Then say the details back to check them.'))
story.extend([p('Model conversation','HeadingX'),table([['<b>A</b>','Let\'s meet on Tuesday at two, at the station\'s north exit.'],['<b>B</b>','Could you repeat the time, please?'],['<b>A</b>','Two o\'clock.'],['<b>B</b>','So, that\'s Tuesday at two, at the north exit?'],['<b>A</b>','Yes, that\'s right.']],[40,474],True)])
story.append(p('Your phrase bank','HeadingX'))
for line in ['Could you repeat that, please?','Did you say two or three?','So, that\'s Tuesday at two?','Where shall we meet?']:story.append(p(line))
story.extend([p('Your task','HeadingX'),p('1. Read your private role card.<br/>2. Talk to your partner and clarify unclear details.<br/>3. Confirm the arrangement aloud.<br/>4. Write the agreed details. Compare with the partner\'s card afterwards.'),Spacer(1,20)])
for label in ['Day','Time','Place']:story.extend([p(label+': __________________________________________________________________'),Spacer(1,15)])
story.extend([p('Reflect','HeadingX'),p('Which question helped you? What would you like to say more confidently next time?'),Spacer(1,20),p('________________________________________________________________________'),Spacer(1,20),p('________________________________________________________________________'),PageBreak()])
heading('TASK MATERIAL / 03','Role cards and final check')
story.append(p('Cut or fold the cards. Each speaker sees only their own card. The teacher may take the partner role in a one-to-one lesson.'))
rows=[['<b>ROUND 1 / SPEAKER A</b><br/><br/>You suggest <b>Tuesday at 2 p.m., at the station\'s north exit</b>. Say the details naturally. If asked, repeat the relevant detail clearly.','<b>ROUND 1 / SPEAKER B</b><br/><br/>You are free on Tuesday. You are unsure whether your partner said two or three. Ask for clarification, confirm all details, then write the arrangement.'],['<b>ROUND 2 / SPEAKER A</b><br/><br/>You are free on Thursday afternoon. There is a cafe by the east exit and another by the west exit. Find out which cafe your partner means, then confirm the arrangement.','<b>ROUND 2 / SPEAKER B</b><br/><br/>You suggest <b>Thursday at 4 p.m., at the cafe by the west exit</b>. First say "the cafe by the station." Give the exact exit when asked.']]
story.append(table(rows,[257,257],True))
story.extend([p('Final check / teacher card','HeadingX'),p('Suggest <b>Wednesday at 3 p.m., outside the library\'s south entrance</b>. First say "outside the library," leaving the entrance unspecified. Answer the learner\'s clarification question. Accept relevant, understandable wording, not only a memorized phrase.'),p('Observation checklist','HeadingX'),p('Leave blank until observed. Record what happened in this attempt only.','SmallX'),table([['<b>Look for</b>','<b>Observed / support needed</b>'],['Requests the missing or unclear detail','___________________________'],['Confirms the meeting aloud','___________________________'],['Records the correct day, time and place','___________________________']],[290,224]),Spacer(1,15),p('If a detail is wrong, compare the cards and rehearse again with support. Successful rehearsal is useful practice; it does not establish lasting improvement.','SmallX')])
def footer(canvas,doc):
 canvas.saveState();canvas.setStrokeColor(colors.HexColor('#cad6cc'));canvas.line(40,34,555,34);canvas.setFont('Helvetica',8);canvas.setFillColor(MUTED);canvas.drawString(40,21,'James Simmons / Original illustrative portfolio sample');canvas.drawRightString(555,21,str(doc.page));canvas.restoreState()
out=ROOT/'public/lesson-sample.pdf';out.parent.mkdir(exist_ok=True)
SimpleDocTemplate(str(out),pagesize=A4,rightMargin=40,leftMargin=40,topMargin=35,bottomMargin=45,title='Ask clearly. Confirm the details. - Illustrative lesson sample',author='James Simmons - Teaching Portfolio').build(story,onFirstPage=footer,onLaterPages=footer)
print(out)
