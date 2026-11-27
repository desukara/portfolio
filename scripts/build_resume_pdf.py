import hashlib
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_RIGHT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import HRFlowable, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "J_Simmons_Resume_2026.pdf"
INK = colors.HexColor("#232a31")
MUTED = colors.HexColor("#58636d")
ACCENT = colors.HexColor("#c14d34")
LINE = colors.HexColor("#d7d2c8")

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
    p("TEFL-certified English teacher currently covering classes at Shane English Corporation in Tokyo. Japan teaching roles include BCA English School, Saitama (2020); Kanda Institute of Foreign Languages, Tokyo (2021); and Shane (2026–present), plus online teaching. Also completed U.S. Army training and certification as a Division PM Instructor and taught for four years in Hawaii (2000–2004)."),
    p("ENGLISH TEACHING EXPERIENCE", "Section"),
]
story += role("Shane English Corporation  |  English Teacher — Cover / Substitute", "2026–PRESENT", "Tokyo, Japan", "Teach learners from toddlers to retired adults, using the school’s curriculum and adapting activities, explanations, and pacing to each assigned class.")
story += role("Kanda Institute of Foreign Languages (KIFL)  |  English Teacher", "2021", "Kanda, Tokyo", "Evaluated spoken English examinations and supported oral practice in an interactive virtual environment.")
story += role("BCA English School  |  Full-Time Kindergarten Homeroom Teacher", "2020", "Saitama, Japan", "Planned and taught an English-immersion curriculum across subjects for children ages 5–7.")
story += role("Panda ABC  |  Online English Teacher", "2019", "Online", "Delivered online English lessons, primarily to elementary-aged learners, in one-to-one and larger classes.")
story += [p("U.S. ARMY CLASSROOM INSTRUCTION", "Section")]
story += role("U.S. Army — Regular Army, Active Duty  |  Division PM Instructor", "2000–2004", "Hawaii, USA", "Completed Preventive Medicine training at the U.S. Army Medical Department Center and School and earned Division PM Instructor certification in 2000. Taught full-time and administered written and practical assessments.")
story += [p("TEFL CERTIFICATION", "Section")]
story += role("TEFL Certificate — MyTEFL", "CERTIFIED", "", "")
story += [p("HARVARD EXTENSION SCHOOL COURSEWORK", "Section")]
story += role("Web Development", "2022–PRESENT", "Online · Harvard Extension School", "Online coursework; certificate in progress.")
story += [p("CUSTOMER SERVICE", "Section")]
story += role("Hospitality and customer service", "2005–2018", "New York City and other U.S. locations", "Guest communication, coordinated service, and resolving customer concerns.")
story += [p("U.S. BUSINESS OWNERSHIP", "Section")]
story += role("Simmons Taxi  |  Owner / Operator", "2022–2025", "United States — Boston, South Florida, Charlotte, Atlanta, and Pittsburgh", "Owned and operated a U.S. taxi company, managing daily operations, scheduling, routes, and passenger service across several markets.")

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
sha256 = hashlib.sha256(OUTPUT.read_bytes()).hexdigest()
OUTPUT.with_suffix(OUTPUT.suffix + ".sha256").write_text(sha256 + chr(10), encoding="ascii")
print(OUTPUT)
