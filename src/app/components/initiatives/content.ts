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
];

export const getInitiative = (slug: string) => INITIATIVES.find((i) => i.slug === slug);
