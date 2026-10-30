// Content for the Who We Are / About us page (/who-we-are), taken from ITFY's page.

export const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "operating-model", label: "Operating model" },
  { id: "principles", label: "Principles" },
  { id: "explore", label: "Explore" },
];

export const HERO = {
  label: "About ITFY Ghana",
  title: "Who we are",
  lead: "A Ghanaian organisation building digital skills, confidence and pathways for young people, especially young women and those in underserved communities.",
  note: "We run cohort-based training, school clubs, outreach and entrepreneurship support that turns curiosity into careers. 3,000+ youth trained. 85% of graduates in work, further study or building within six months. We work with schools, companies and development partners who want measurable outcomes, not just activity.",
  actions: [
    { label: "Meet the team", href: "/who-we-are/team" },
    { label: "See our partners", href: "/who-we-are/partners" },
  ],
  image: { src: "/randomPictures/happystudentscasual.jpg", alt: "Students celebrating together in a school library" },
};

export const DRIVES = {
  label: "What drives us",
  title: "Built around access, confidence and visible outcomes",
  text: "IT For Youth Ghana exists to make digital opportunity practical, welcoming and measurable for young people who are ready to build.",
  highlight:
    "We run cohort-based training, school clubs, outreach and entrepreneurship support that turns curiosity into careers. 3,000+ youth trained. 85% of graduates in work, further study or building within six months. We work with schools, companies and development partners who want measurable outcomes, not just activity.",
  image: { src: "/randomPictures/happystudentscasual.jpg", alt: "A large group of ITFY students celebrating" },
};

export const MODEL = {
  label: "Operating model",
  title: "The way we turn mission into repeatable delivery",
  text: "How ITFY moves from intent to learning environments, evidence and partner trust.",
  cards: [
    {
      title: "How we work",
      text: "Everything we run is cohort-based or club-based so learners get repetition, peer support and real projects. We measure progression, not just attendance. We publish impact data and stories because partners and participants deserve transparency.",
      note: "Cohorts, clubs and outreach programmes are designed around repeated practice. Learners build visible projects instead of only completing lessons. Facilitators and mentors help translate skills into next-step readiness.",
    },
    {
      title: "What we measure",
      text: "We keep the work accountable by tracking access, completion, confidence, project output, and progression into employment, further study, entrepreneurship or community leadership.",
      note: "Attendance and completion show whether the environment is working. Portfolios and presentations show whether learners can apply the skills. Follow-up outcomes show whether training is becoming real opportunity.",
    },
    {
      title: "Who we build with",
      text: "The organisation works best as a bridge between learners, schools, companies, development partners, mentors and volunteers. Each partner role is shaped around what learners need next.",
      note: "Schools and communities help us reach learners early. Companies and mentors bring industry relevance into the room. Funding and implementation partners help us scale without diluting quality.",
    },
  ],
};

export const PRINCIPLES = {
  label: "Principles",
  title: "A strong organisation is more than programmes on a calendar",
  text: "How decisions are made, what standards matter, and why partners can trust the delivery model.",
  feature: {
    label: "What we protect",
    title: "Trust, inclusion and accountability as the work grows.",
    image: { src: "/randomPictures/studentsBackcoding.jpg", alt: "A facilitator leading a class of young women at laptops" },
  },
  cards: [
    {
      title: "What we protect",
      text: "As the work grows, we protect the standards that made it trusted: safe learning environments, inclusion for young women, honest reporting, and programmes that are useful beyond graduation day.",
      note: "Inclusion is designed into recruitment, facilitation and support. Safeguarding and learner dignity shape how programmes are delivered. Impact stories are paired with data so the narrative stays honest.",
    },
    {
      title: "Where we are going",
      text: "The next chapter is a stronger connected pathway: early exposure, deeper technical training, entrepreneurship support, employer relationships, alumni community, and partner-backed growth across more communities.",
      note: "Every route into ITFY should be a clear entry point into the mission. We'll keep the story current as the work grows, and scale partnerships around outcomes, not one-off activity.",
    },
  ],
};

export const EXPLORE = {
  label: "Keep exploring",
  title: "Meet the people, partners and opportunities behind the mission",
  cards: [
    { role: "People", title: "Our team", text: "The facilitators, mentors and operations team behind the programmes.", cta: "Meet the team", href: "/who-we-are/team" },
    { role: "Credibility", title: "Our partners", text: "Google.org, UNICEF, GIZ, Mastercard Foundation and others who trust us with delivery.", cta: "See our partners", href: "/who-we-are/partners" },
    { role: "Join", title: "Join our team", text: "Roles, volunteering and ways to contribute your skills to the mission.", cta: "View open roles", href: "/who-we-are/careers" },
  ],
};

export const NEXT_MOVE = {
  label: "Next move",
  title: "Start with the route that matches how you want to join the mission.",
  text: "Whether you want to meet the team, partner with delivery or support the next cohort, choose a clear next step.",
  routes: [
    { label: "Meet the team", href: "/who-we-are/team" },
    { label: "See our partners", href: "/who-we-are/partners" },
    { label: "Join our team", href: "/who-we-are/careers" },
  ],
};
