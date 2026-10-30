// All text and data for the Apply for Training page.
// Courses and cohorts are the parts that will come from Payload later.

// Where every "Apply" button on the Apply page sends people (the ITFY applications portal).
export const APPLY_PORTAL_URL = "https://portal.itforyouthghana.org/login";

export type Level = "beginner" | "intermediate" | "advanced" | "all-levels";
export type Delivery = "In-person" | "Hybrid" | "Online";

export const LEVEL_LABEL: Record<Level, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
  "all-levels": "All levels",
};

export type Course = {
  slug: string;
  title: string;
  category: string;
  level: Level;
  description: string;
  duration: string;
  nextStart: string;
  price: number; // in GHS; 0 = free
  delivery?: Delivery;
  // Optional photo, e.g. "/courses/cyber-security.jpg" (put files in public/courses/).
  // Courses without one show the ITFY logo instead of a broken image.
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
  note: "Every pathway is project-driven, with clear start dates, deadlines and progression support. Use the cohort dates and the four steps below to plan your application.",
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

// Photos: swap each `image` for the course's own photo (files go in public/).
export const COURSES: Course[] = [
  {
    slug: "front-end-web-development-foundations",
    title: "Front-End Web Development Foundations",
    category: "Software Development",
    level: "beginner",
    description: "A practical entry route into building responsive web experiences and understanding front-end fundamentals.",
    duration: "12 weeks",
    nextStart: "15 Jun 2026",
    price: 0,
    delivery: "Hybrid",
    image: "/randomPictures/studentsBackcoding.jpg",
  },
  {
    slug: "digital-marketing-and-content-strategy",
    title: "Digital Marketing and Content Strategy",
    category: "Marketing",
    level: "beginner",
    description: "A route into digital visibility, messaging and content systems for growing brands and ideas.",
    duration: "6 weeks",
    nextStart: "29 Jun 2026",
    price: 0,
    delivery: "Online",
    image: "/randomPictures/happystudentscasual.jpg",
  },
  {
    slug: "creative-coding-for-teens",
    title: "Creative Coding for Teens",
    category: "Emerging Tech",
    level: "beginner",
    description: "An accessible first step for younger learners exploring technology through creativity and teamwork.",
    duration: "8 weeks",
    nextStart: "6 Jul 2026",
    price: 300,
    delivery: "In-person",
    image: "/randomPictures/happystudentscasual.jpg",
  },
  {
    slug: "ux-design-essentials",
    title: "UX Design Essentials",
    category: "Design",
    level: "beginner",
    description: "An introduction to UX research, prototyping and thoughtful digital product design.",
    duration: "10 weeks",
    nextStart: "20 Jul 2026",
    price: 350,
    delivery: "In-person",
    image: "/randomPictures/studentsBackcoding.jpg",
  },
  {
    slug: "entrepreneurship-lab-for-digital-creators",
    title: "Entrepreneurship Lab for Digital Creators",
    category: "Entrepreneurship",
    level: "all-levels",
    description: "For learners who want to connect digital skills to business ideas, freelancing or venture experimentation.",
    duration: "6 weeks",
    nextStart: "3 Aug 2026",
    price: 0,
    delivery: "In-person",
    image: "/randomPictures/studentsBackcoding.jpg",
  },
  {
    slug: "data-analytics-essentials",
    title: "Data Analytics Essentials",
    category: "Data",
    level: "intermediate",
    description: "A skills path for learners who want to interpret data, spot patterns and communicate insights clearly.",
    duration: "8 weeks",
    nextStart: "17 Aug 2026",
    price: 450,
    delivery: "Hybrid",
    image: "/randomPictures/studentsBackcoding.jpg",
  },
  {
    slug: "career-launch-lab",
    title: "Career Launch Lab",
    category: "Employability",
    level: "all-levels",
    description: "A short intensive focused on employability, confidence and presenting your work well.",
    duration: "4 weeks",
    nextStart: "17 Aug 2026",
    price: 0,
    delivery: "Hybrid",
    image: "/randomPictures/mainGraduationpic.jpg",
  },
  {
    slug: "python-for-problem-solving",
    title: "Python for Problem Solving",
    category: "Software Development",
    level: "intermediate",
    description: "A next-step coding track for learners ready to move beyond basic digital fluency into programming.",
    duration: "10 weeks",
    nextStart: "7 Sep 2026",
    price: 500,
    // delivery: confirm with ITFY (hidden in the reference screenshot)
    image: "/randomPictures/happystudentscasual.jpg",
  },
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
  {
    title: "Choose your route",
    text: "Start by finding the course or cohort that matches your stage, interests, schedule and confidence level.",
    image: { src: "/randomPictures/studentsBackcoding.jpg", alt: "Learners comparing work around a classroom table" },
  },
  {
    title: "Apply with context",
    text: "Share basic background, motivation and availability so the team can understand your fit and support needs.",
    image: { src: "/randomPictures/happystudentscasual.jpg", alt: "Applicants working on laptops together" },
  },
  {
    title: "Review and confirm",
    text: "Applications are reviewed, shortlisted learners are contacted, and final places are confirmed before onboarding.",
    image: { src: "/randomPictures/mainGraduationpic.jpg", alt: "A trainer presenting to a room of learners" },
  },
  {
    title: "Join the cohort",
    text: "Accepted learners receive orientation details, start dates and expectations for the next learning cycle.",
    image: { src: "/randomPictures/studentsBackcoding.jpg", alt: "A new cohort in class on their first day" },
  },
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