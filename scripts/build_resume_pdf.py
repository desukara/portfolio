from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import HRFlowable, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "J_Simmons_Resume_2026.pdf"
INK = colors.HexColor("#192e31")
MUTED = colors.HexColor("#53696b")
ACCENT = colors.HexColor("#b65d3f")
LINE = colors.HexColor("#dce2db")

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="Name", parent=styles["Title"], fontName="Helvetica-Bold", fontSize=21, leading=24, textColor=INK, alignment=TA_LEFT, spaceAfter=2))
styles.add(ParagraphStyle(name="Subhead", parent=styles["Normal"], fontName="Helvetica-Bold", fontSize=9, leading=12, textColor=ACCENT, spaceAfter=3))
styles.add(ParagraphStyle(name="Contact", parent=styles["Normal"], fontName="Helvetica", fontSize=7.5, leading=10, textColor=MUTED))
styles.add(ParagraphStyle(name="Section", parent=styles["Heading2"], fontName="Helvetica-Bold", fontSize=9, leading=11, textColor=INK, spaceBefore=7, spaceAfter=4, uppercase=True))
styles.add(ParagraphStyle(name="BodyCompact", parent=styles["BodyText"], fontName="Helvetica", fontSize=7.5, leading=10, textColor=INK, spaceAfter=2))
styles.add(ParagraphStyle(name="RoleTitle", parent=styles["BodyText"], fontName="Helvetica-Bold", fontSize=8, leading=10, textColor=INK))
styles.add(ParagraphStyle(name="Date", parent=styles["BodyText"], fontName="Helvetica-Bold", fontSize=7, leading=9, textColor=MUTED, alignment=TA_RIGHT))
styles.add(ParagraphStyle(name="SmallMuted", parent=styles["BodyText"], fontName="Helvetica", fontSize=7, leading=9, textColor=MUTED))


def p(text: str, style: str = "BodyCompact") -> Paragraph:
    return Paragraph(text, styles[style])


def role(title: str, dates: str, location: str, description: str):
    row = Table([[p(title, "RoleTitle"), p(dates, "Date")], [p(location, "SmallMuted"), ""]], colWidths=[125 * mm, 50 * mm])
    row.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("SPAN", (0, 1), (1, 1)),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("TOPPADDING", (0, 0), (-1, -1), 0),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0),
    ]))
    return [row, p(description), Spacer(1, 2)]


story = [
    p("JAMES SIMMONS", "Name"),
    p("ENGLISH TEACHER  |  TOKYO, JAPAN", "Subhead"),
    p("meet@eastokyo.com  ·  Authorized to work in Japan without employer sponsorship  ·  Available any day of the week", "Contact"),
    HRFlowable(width="100%", thickness=1, color=LINE, spaceBefore=5, spaceAfter=2),
    p("PROFESSIONAL PROFILE", "Section"),
    p("TEFL-certified English teacher with teaching experience in Japan dating back to 2020, plus online instruction. Experienced with early-childhood, school-age, and adult learners. Completed U.S. Army classroom instructor training and certification on active duty in the Regular Army, followed by four years of classroom instruction in Hawaii."),
    p("ENGLISH TEACHING EXPERIENCE", "Section"),
]
story += role("Shane English Corporation  |  English Teacher — Cover / Substitute", "CURRENT", "Tokyo, Japan", "Teach learners from toddlers to retired adults, using the school’s curriculum and adapting activities, explanations, and pacing to each assigned class.")
story += role("Kanda Institute of Foreign Languages (KIFL)  |  English Teacher", "2021", "Kanda, Tokyo", "Evaluated spoken English examinations and supported oral practice in an interactive virtual environment.")
story += role("BCA English School  |  Full-Time Kindergarten Homeroom Teacher", "2020", "Saitama, Japan", "Planned and taught an English-immersion curriculum across subjects for children ages 5–7.")
story += role("Panda ABC  |  Online English Teacher", "2019", "Online", "Delivered online English lessons, primarily to elementary-aged learners, in one-to-one and larger classes.")
story += [p("U.S. ARMY CLASSROOM INSTRUCTION", "Section")]
story += role("United States Army — Active Duty, Regular Army  |  Classroom Instructor", "2000–2004", "Hawaii, USA", "Completed U.S. Army classroom instructor training and certification. Taught field sanitation and preventive medicine, and administered written and practical assessments.")
story += [p("CERTIFICATIONS &amp; ADDITIONAL TRAINING", "Section")]
story += role("U.S. Army Classroom Instructor Training &amp; Certification", "", "Active duty, Regular Army", "Formal military training and certification for classroom instruction.")
story += role("TEFL Certificate — MyTEFL", "CERTIFIED", "", "")
story += role("U.S. Army Medical Department Center and School  |  Preventive Medicine Training", "2000", "Fort Sam Houston, Texas", "")
story += [p("ADDITIONAL EXPERIENCE", "Section")]
story += role("Simmons Taxi  |  Owner / Operator", "2022–2025", "United States — Boston, South Florida, Charlotte, Atlanta, and Pittsburgh", "Owned and operated a U.S. taxi company, managing daily operations, scheduling, routes, and passenger service across several markets.")
story += [p("Additional customer-service experience in New York City and other U.S. locations (approximately 2005–2018).", "SmallMuted")]

doc = SimpleDocTemplate(
    str(OUTPUT),
    pagesize=A4,
    rightMargin=18 * mm,
    leftMargin=18 * mm,
    topMargin=14 * mm,
    bottomMargin=13 * mm,
    title="James Simmons — English Teacher, Tokyo",
    author="James Simmons",
)


def footer(canvas, document):
    canvas.saveState()
    canvas.setStrokeColor(LINE)
    canvas.line(18 * mm, 9 * mm, A4[0] - 18 * mm, 9 * mm)
    canvas.setFont("Helvetica", 7)
    canvas.setFillColor(MUTED)
    canvas.drawString(18 * mm, 5.5 * mm, "James Simmons  |  English Teaching Portfolio")
    canvas.drawRightString(A4[0] - 18 * mm, 5.5 * mm, str(document.page))
    canvas.restoreState()


doc.build(story, onFirstPage=footer, onLaterPages=footer)
print(OUTPUT)
