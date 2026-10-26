// All text and data for the Apply for Training page.
// Courses and cohorts are the parts that will come from Payload later.

export type Level = "beginner" | "intermediate" | "advanced";

export type Course = {
  slug: string;
  title: string;
  category: string;
  level: Level;
  duration: string;
  nextStart: string;
  price: number; // in GHS; 0 = free
  // Optional photo, e.g. "/courses/cyber-security.jpg" (put files in public/courses/).
  // Courses without one show a woven placeholder instead of a broken image.
  image?: string;
};

export type Cohort = {
  title: string;
  description: string;
  starts: string;
  deadline: string;
  status: "open" | "upcoming" | "closed";
  format: string;
  duration: string;
  location: string;
};

export const HERO = {
  title: "Find the right training pathway",
  lead: "Compare current programmes by level, format and focus. Cohort 8 Foundations is now open, with short sprints and career labs starting through August.",
  image: { src: "/randomPictures/mainGraduationpic.jpg", alt: "ITFY graduates seated at their graduation ceremony" },
};

export const GUIDANCE = [
  {
    title: "What you can compare",
    intro: "Use the catalogue to compare course level, duration, delivery mode, cost and start dates before choosing a route.",
    body: "Across more than six pathways, you can weigh software development, design, data, marketing, entrepreneurship and employability against the kind of work you want to pursue. The catalogue also makes the practical differences visible, from free and scholarship-supported options to modest-fee programmes, upcoming start dates and application deadlines.",
    image: { src: "/randomPictures/studentsBackcoding.jpg", alt: "Learners working on laptops together in a classroom" },
  },
  {
    title: "How to shortlist well",
    intro: "A strong shortlist starts with your current stage, not only the trendiest skill. Choose the route that matches what you can commit to now.",
    body: "Choose a beginner route when you need structure and confidence, or an intermediate route when you can practise consistently outside scheduled sessions. Career-focused routes make the most sense when you already have work to refine, package and present to employers or clients.",
    image: { src: "/randomPictures/happystudentscasual.jpg", alt: "An ITFY learner with trainers after a session" },
  },
];

export const COURSES: Course[] = [
  { slug: "cyber-security", title: "Cyber Security", category: "Technology and Digital Skills", level: "beginner", duration: "8 weeks", nextStart: "1 May 2026", price: 300 },
  { slug: "data-analysis-with-python", title: "Data Analysis with Python", category: "Technology and Digital Skills", level: "beginner", duration: "8 weeks", nextStart: "1 May 2026", price: 300 },
  { slug: "data-analytics-with-excel", title: "Data Analytics with Excel", category: "Technology and Digital Skills", level: "beginner", duration: "8 weeks", nextStart: "1 May 2026", price: 300 },
  { slug: "front-end-development", title: "Front-End Development", category: "Technology and Digital Skills", level: "intermediate", duration: "8 weeks", nextStart: "1 May 2026", price: 300 },
  { slug: "ui-ux-design-fundamentals", title: "UI/UX Design Fundamentals", category: "Technology and Digital Skills", level: "beginner", duration: "8 weeks", nextStart: "1 May 2026", price: 300 },
];

export const COHORTS_INTRO = {
  title: "Cohort 8 Foundations is open. More programmes start in July and August.",
  text: "Review exact dates, formats and deadlines so you can plan your application and participation with confidence.",
};

export const COHORTS: Cohort[] = [
  {
    title: "Cohort 8 Foundations",
    description: "A flagship intake for learners starting with core software, design and digital work skills.",
    starts: "1 July 2026",
    deadline: "20 June 2026",
    status: "open",
    format: "Hybrid",
    duration: "12 weeks",
    location: "Accra and online support",
  },
  {
    title: "Creative Tech Sprint",
    description: "A shorter skills sprint for learners testing UX, digital storytelling and product thinking.",
    starts: "20 July 2026",
    deadline: "26 June 2026",
    status: "upcoming",
    format: "In-person",
    duration: "6 weeks",
    location: "Accra",
  },
  {
    title: "Career Launch Lab",
    description: "Portfolio, communication and employability support for learners close to transition points.",
    starts: "17 August 2026",
    deadline: "24 July 2026",
    status: "upcoming",
    format: "Hybrid",
    duration: "4 weeks",
    location: "Accra and remote coaching",
  },
];

export const STEPS_INTRO = {
  title: "Four clear steps from interest to your first class",
  text: "We keep the process transparent. Know what to prepare, when decisions happen, and what support is available before you apply.",
};

export const STEPS = [
  { title: "Choose your route", text: "Start by finding the course or cohort that matches your stage, interests, schedule and confidence level." },
  { title: "Apply with context", text: "Share basic background, motivation and availability so the team can understand your fit and support needs." },
  { title: "Review and confirm", text: "Applications are reviewed, shortlisted learners are contacted, and final places are confirmed before onboarding." },
  { title: "Join the cohort", text: "Accepted learners receive orientation details, start dates and expectations for the next learning cycle." },
];

export const HELP = {
  title: "Not sure which course is right yet?",
  text: "Check eligibility guidance or review the full process before you apply. The team can also answer questions directly.",
  cards: [
    { role: "Fit", title: "Who can apply", text: "Understand whether the training route matches your stage and readiness.", cta: "Check eligibility", href: "/apply/eligibility" },
    { role: "Process", title: "How it works", text: "Know what happens after you choose a route and submit interest.", cta: "See the four steps", href: "#how-to-apply" },
    { role: "Support", title: "Ask a question", text: "Reach the team if you need help choosing the right training pathway.", cta: "Contact the team", href: "/contact" },
  ],
};
