import type { Initiative } from "./types";

// One entry per initiative. Add the other seven here and each gets its own page
// at /what-we-do/[slug] automatically.
//
// TODO lines: the reference screenshot was too small to read these. Paste ITFY's
// real wording/figures in. Lists left empty are hidden on the page (so nothing
// made-up appears), e.g. proof.stats, stories.items, partners.items.

const IMG = {
  group: "/randomPictures/happystudentscasual.jpg",
  coding: "/randomPictures/studentsBackcoding.jpg",
  graduation: "/randomPictures/mainGraduationpic.jpg",
};

export const INITIATIVES: Initiative[] = [
  {
    slug: "girls-in-tech",
    name: "Girls in Tech",
    hero: {
      // TODO: ITFY's exact hero text
      lead: "Building the next generation of confident, skilled young women in technology.",
      note: "Hands-on training, mentorship and a supportive community that help girls and young women move from first exposure to real skills, projects and pathways.",
      image: { src: IMG.group, alt: "Girls in Tech participants celebrating together" },
      primary: { label: "Apply to join", href: "/apply" },
      secondary: { label: "Partner with us", href: "/partner-with-us" },
    },
    overview: {
      title: "A focused pathway with clear outcomes",
      // TODO: ITFY's paragraphs and pull quote
      paragraphs: [
        "Girls in Tech is IT For Youth Ghana's flagship programme for girls and young women. It combines practical training, mentorship and a peer community so participants can build real skills and the confidence to use them.",
        "The programme is designed around outcomes: every participant builds projects, works with mentors and leaves with a clear next step into further study, work or enterprise.",
      ],
      quote: "Girls in Tech exists because talent is evenly spread, but access to technology and role models is not.",
      image: { src: IMG.group, alt: "A group of Girls in Tech participants in programme T-shirts" },
    },
    journey: {
      title: "A programme journey that moves from access to confidence",
      text: "Each cohort follows four stages, so participants always know what comes next.",
      // TODO: ITFY's wording for each stage
      steps: [
        { title: "Recruit", text: "We reach girls through schools, communities and partners, focusing on those with the least access to technology.", image: { src: IMG.coding, alt: "A classroom outreach session" } },
        { title: "Train", text: "Participants learn practical digital skills through hands-on projects, from coding basics to design and digital tools.", image: { src: IMG.graduation, alt: "Participants in a training session" } },
        { title: "Mentor", text: "Each participant is supported by mentors who help them stay on track and see what a career in tech can look like.", image: { src: IMG.group, alt: "Mentors with participants" } },
        { title: "Launch", text: "Graduates leave with a portfolio and a clear next step into further study, internships, work or their own ventures.", image: { src: IMG.coding, alt: "Participants presenting their work" } },
      ],
    },
    proof: {
      title: "Proof that the model is translating into real opportunity",
      // TODO: add Girls in Tech's four figures, e.g. { value: "400+", label: "Girls trained", text: "..." }
      stats: [],
    },
    audience: {
      title: "Who it's for",
      // TODO: confirm with ITFY
      text: "Girls in Tech is designed for girls and young women who are curious about technology and ready to commit to structured learning.",
      points: [
        "No prior coding experience needed",
        "Commitment to attend sessions and complete projects",
        "Interest in technology, design or digital work",
      ],
      eligibilityTitle: "Eligibility",
      eligibility: "Age range, location and session times vary by cohort. Check the current intake on the Apply page, or contact the team if you're unsure whether you qualify.",
    },
    gallery: {
      title: "Scenes from the classrooms, workshops and communities behind the work",
      // TODO: Girls in Tech photos and captions
      photos: [
        { src: IMG.group, alt: "Participants celebrating", caption: "Cohort celebration" },
        { src: IMG.coding, alt: "Participants at computers", caption: "Hands-on practical session" },
        { src: IMG.graduation, alt: "Graduates seated at a ceremony", caption: "Graduation day" },
        { src: IMG.coding, alt: "A participant presenting", caption: "Project presentations" },
      ],
    },
    stories: {
      title: "Stories that show what this initiative feels like from the inside",
      // TODO: add participant quotes (with their consent to be named)
      items: [],
    },
    partners: {
      title: "Organisations that help this initiative reach further",
      // TODO: add the partners shown on ITFY's page
      items: [],
    },
    faq: {
      title: "Answers to common questions about the initiative",
      // TODO: confirm questions and add ITFY's answers
      items: [
        { q: "Do participants need prior coding experience?", a: "No. Girls in Tech starts from the basics, so curiosity and commitment matter more than experience." },
        { q: "Is this separate from the Youth Tech Academy?", a: "Yes. Girls in Tech is designed specifically for girls and young women, with its own mentoring and community. Graduates can continue into Youth Tech Academy courses." },
        { q: "How do mentors get involved?", a: "Professionals can volunteer as mentors. Propose a mentoring window through the Join our team page and the team will be in touch." },
      ],
    },
    cta: {
      title: "Ready to explore Girls in Tech?",
      text: "Apply for the next intake, or partner with us to bring Girls in Tech to more schools and communities.",
      primary: { label: "Apply to join", href: "/apply" },
      secondary: { label: "Contact the team", href: "/contact" },
    },
    explore: [
      { role: "Train", title: "Apply for training", text: "Browse courses and upcoming cohorts.", cta: "See courses", href: "/apply" },
      { role: "Partner", title: "Partner with us", text: "Fund, host or co-design a Girls in Tech cohort.", cta: "See partnership routes", href: "/partner-with-us" },
      { role: "Devices", title: "Her First Laptop", text: "Give a girl her first laptop to learn on.", cta: "Learn more", href: "/get-involved/her-first-laptop" },
    ],
  },
  {
    slug: "youth-tech-academy",
    name: "Youth Tech Academy",
    hero: {
      lead: "From curiosity to capability: a disciplined pathway into Ghana's digital workforce.",
      // TODO: ITFY's exact hero note
      note: "A 12-week, cohort-based programme that equips young Ghanaians with practical technical abilities, project experience and career readiness.",
      image: { src: IMG.coding, alt: "Youth Tech Academy learners coding at their workstations" },
      primary: { label: "Apply for Cohort 8", href: "/apply" },
      secondary: { label: "Contact the team", href: "/contact" },
    },
    overview: {
      title: "A focused pathway with clear outcomes",
      // TODO: ITFY's paragraphs and pull quote
      paragraphs: [
        "The Youth Tech Academy is IT For Youth Ghana's flagship training pathway. It combines hands-on instruction in software development, design and digital tools with real project work, mentorship and structured transition support.",
        "The academy exists to transform motivated young people into job-ready digital professionals by delivering rigorous, practical training and visible progression pathways.",
      ],
      quote: "Learners build in-demand technical skills through project-based learning, develop professional habits, and leave with portfolios that demonstrate what they can do.",
      image: { src: IMG.group, alt: "Youth Tech Academy learners celebrating together" },
    },
    journey: {
      title: "A programme journey that moves from access to confidence",
      text: "Each cohort follows four stages, so participants and partners know what to expect from first contact to measurable outcomes.",
      // TODO: ITFY's wording for each stage
      steps: [
        { title: "Apply & assess", text: "Candidates complete an application and short assessment. We select motivated learners ready for a demanding cohort.", image: { src: IMG.coding, alt: "Applicants during an assessment session" } },
        { title: "Train", text: "Participants complete daily technical sessions, assignments and collaborative projects under experienced facilitators.", image: { src: IMG.group, alt: "Learners in a facilitated training session" } },
        { title: "Build & present", text: "Each learner ships portfolio projects, receives feedback and presents work to peers, mentors and industry guests.", image: { src: IMG.coding, alt: "Learners working together on a project" } },
        { title: "Transition", text: "Graduates receive career support, portfolio reviews, interview preparation and direct introductions to hiring partners.", image: { src: IMG.graduation, alt: "Graduates at a transition event" } },
      ],
    },
    proof: {
      title: "Proof that the model is translating into real opportunity",
      text: "These indicators help show who the initiative is reaching, how consistently it is delivering and why it matters.",
      // TODO: confirm the labels and descriptions (the figures were readable, the small text wasn't)
      stats: [
        { value: "1,800+", label: "Graduates to date", text: "Young people who have completed the full academy programme." },
        { value: "85%", label: "Progression rate", text: "Graduates employed, in further training or building ventures within six months." },
        { value: "420+", label: "Portfolio projects", text: "Projects built and presented across recent cohorts." },
        { value: "65+", label: "Hiring partners", text: "Organisations that have engaged with or hired academy graduates." },
      ],
    },
    audience: {
      title: "Who it's for",
      // TODO: confirm age range and details with ITFY
      text: "The Youth Tech Academy is for young Ghanaians who are serious about building a career in technology and can commit to a full-time, 12-week intensive programme.",
      points: [
        "Recent secondary or tertiary graduates seeking their first technical role",
        "Career switchers with demonstrated motivation and basic digital literacy",
        "Young people from underserved communities who need structured access to quality training",
      ],
      eligibilityTitle: "Eligibility",
      eligibility: "Applicants need to be available for the full cohort duration, have basic computer literacy, and have reliable access to a device and internet. Strong preference is given to applicants who show initiative, resilience and clear career intent.",
    },
    gallery: {
      title: "Scenes from the classrooms, workshops and communities behind the work",
      // TODO: Youth Tech Academy photos and captions
      photos: [
        { src: IMG.coding, alt: "Learners at workstations during a coding session", caption: "Daily technical sessions" },
        { src: IMG.group, alt: "Learners collaborating on a project", caption: "Collaborative project work" },
        { src: IMG.graduation, alt: "A facilitator presenting to learners", caption: "Facilitator-led workshops" },
        { src: IMG.coding, alt: "A cohort working together in the lab", caption: "Cohort lab time" },
      ],
    },
    stories: {
      title: "Stories that show what this initiative feels like from the inside",
      // TODO: add the three learner/partner quotes from ITFY's page (with consent to be named)
      items: [],
    },
    partners: {
      title: "Organisations that help this initiative reach further",
      // TODO: add how each partner supports the academy, plus logos and websites
      items: [
        { name: "Microsoft", text: "" },
        { name: "Google.org", text: "" },
      ],
    },
    faq: {
      title: "Answers to common questions about the initiative",
      // TODO: confirm questions and add ITFY's answers
      items: [
        { q: "What kind of courses sit inside the academy?", a: "The academy covers software development, design, data and other digital skills. See the full list and start dates on the Apply page." },
        { q: "How much time does the programme take?", a: "Cohorts run full-time for 12 weeks, so learners need to be available for the whole programme." },
        { q: "What happens after graduation?", a: "Graduates get career support, portfolio reviews, interview preparation and introductions to hiring partners." },
      ],
    },
    cta: {
      title: "Ready to explore Youth Tech Academy?",
      text: "Apply for the next cohort, or partner with us to sponsor learners and hire graduates.",
      primary: { label: "Apply for Cohort 8", href: "/apply" },
      secondary: { label: "Contact the team", href: "/contact" },
    },
    explore: [
      { role: "Train", title: "Browse courses", text: "Compare courses by level, format and start date.", cta: "See courses", href: "/apply#courses" },
      { role: "Hire", title: "Hire our graduates", text: "Meet graduates with portfolios and real project delivery.", cta: "Hire graduates", href: "/for-organisations/hire" },
      { role: "Proof", title: "Impact reports", text: "The data behind every cohort.", cta: "Read the reports", href: "/our-impact/reports" },
    ],
  },
];

export const getInitiative = (slug: string) => INITIATIVES.find((i) => i.slug === slug);