export type CareerRole = {
  slug: string;
  name: string;
  title: string;
  location: string;
  dates: string;
  category: string;
  summary: string;
  responsibilities: string[];
};

export const careerRoles: CareerRole[] = [
  {
    slug: "shane-english",
    name: "Shane English Corporation",
    title: "English Teacher — Cover / Substitute Teaching",
    location: "Tokyo, Japan",
    dates: "2026–present",
    category: "English teaching",
    summary:
      "I began working as a cover teacher at Shane English Corporation in 2026, teaching when regular teachers are absent. I move between teaching locations and work with learners from toddlers to retired adults.",
    responsibilities: [
      "Receive cover assignments, usually one or more days ahead; the class schedule often arrives the day before.",
      "Arrive early to review the assigned materials and prepare before classes begin.",
      "Teach different classes and age groups, from toddlers to retired adults.",
      "Follow Shane’s curriculum, textbooks, and teacher guides while adjusting activities, explanations, and pacing for the class.",
      "Establish rapport with students I may be meeting for the first time and keep lessons focused on their objectives.",
    ],
  },
  {
    slug: "kifl",
    name: "Kanda Institute of Foreign Languages (KIFL)",
    title: "English Teacher",
    location: "Kanda, Tokyo",
    dates: "2021",
    category: "English teaching",
    summary:
      "At KIFL, I assessed face-to-face spoken English exams and taught in an avatar-based learning environment. My learners ranged from upper elementary school through college age, as well as adults practicing conversational English.",
    responsibilities: [
      "Evaluate face-to-face English oral exams against the institute’s assessment standards.",
      "Assess pronunciation and articulation, including R/L distinctions, katakana-influenced pronunciation, and whether students could sustain communication in English.",
      "Teach learners from upper elementary school through college age, as well as adults practicing conversation.",
      "Use a virtual learning environment where students and I controlled avatars, explored worlds, and completed missions together.",
      "Guide real-time spoken interaction through headsets in an English-language interface.",
    ],
  },
  {
    slug: "bca-english-school",
    name: "BCA English School",
    title: "Full-Time Kindergarten Homeroom Teacher",
    location: "Saitama, Japan",
    dates: "2020",
    category: "English-immersion teaching",
    summary:
      "I was the full-time homeroom teacher for a class of children aged 5–7 at BCA English School, a private international school in Saitama. I planned and taught their daily curriculum in English from early morning to about 3 p.m.",
    responsibilities: [
      "Plan and prepare lessons across kindergarten subjects, including mathematics, history, science, and art.",
      "Teach subject lessons in English within the school’s English-immersion environment.",
      "Lead the same class through its full school day as its homeroom teacher.",
      "Manage daily classroom instruction; school-wide staff provided interpretation and practical childcare support when needed.",
      "Choreograph and rehearse a Sports Day dance performance with the class.",
    ],
  },
  {
    slug: "panda-abc",
    name: "Panda ABC",
    title: "Online English Teacher",
    location: "Online · China-based education company",
    dates: "2019",
    category: "Online teaching",
    summary:
      "I taught company-provided English lessons on Panda ABC’s online platform, mainly to early-elementary and elementary-aged children, and also to toddlers and adults. Lessons included one-to-one classes and groups of 30 or more students joining through a classroom screen.",
    responsibilities: [
      "Deliver company-developed lessons through Panda ABC’s online teaching platform.",
      "Teach mostly early-elementary and elementary-aged learners, with some toddler and adult students.",
      "Lead one-to-one lessons, sometimes with a parent assisting a younger learner.",
      "Teach large classes of 30 or more students, supported by an on-site Chinese-speaking assistant when needed.",
      "Use clear speech, gestures, and expressive delivery to invite participation and help younger learners follow spoken English.",
      "Build rapport with returning students; several requested my lessons again.",
    ],
  },
  {
    slug: "us-army",
    name: "U.S. Army — Regular Army, Active Duty",
    title: "Division PM Instructor",
    location: "Hawaii, USA",
    dates: "2000–2004",
    category: "Military classroom instruction",
    summary:
      "I completed U.S. Army training and certification as a Division PM Instructor, then taught field sanitation and preventive medicine full-time in Hawaii for four years while serving on active duty in the Regular Army.",
    responsibilities: [
      "Teach field sanitation, preventive medicine, disease prevention, and prevention of non-battle injuries.",
      "Instruct adult military personnel across ranks, including soldiers senior to me.",
      "Train soldiers assigned by their units to formal certification courses.",
      "Prepare students for field sanitation and preventive medicine duties at company and, in some cases, squad level.",
      "Administer and grade written exams on course material.",
      "Conduct and assess practical exams at stations where students demonstrate required skills.",
      "Work with a small team of instructors supporting training and certification.",
    ],
  },
  {
    slug: "independent-transportation",
    name: "Simmons Taxi",
    title: "Owner / Operator",
    location: "United States · Boston, South Florida, Charlotte, Atlanta, and Pittsburgh",
    dates: "2022–2025",
    category: "U.S. business ownership",
    summary:
      "I owned and operated Simmons Taxi, a U.S.-based taxi company, from 2022 to 2025. I managed day-to-day operations, scheduling, routes, and passenger service across several U.S. markets.",
    responsibilities: [
      "Manage daily operations and passenger transportation.",
      "Plan schedules and routes across several U.S. markets.",
      "Assist passengers with luggage, directions, and individual requests.",
      "Communicate with passengers from varied backgrounds and respond to service issues.",
      "Make day-to-day decisions with attention to reliability and passenger safety.",
    ],
  },
];

export function careerIndex(slug: string) {
  return careerRoles.findIndex((role) => role.slug === slug);
}
