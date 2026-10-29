// Content for the Departments page (/who-we-are/departments).
// Each department links to /who-we-are/departments/[slug] for its own page later.

export type Department = {
  slug: string;
  area: string; // short label shown above the name
  name: string;
  text: string;
  image?: string; // without one, the card shows the ITFY logo
};

export const HERO = {
  title: "Departments that keep youth digital opportunity moving",
  lead: "Explore how IT For Youth Ghana organises delivery, learning design, partnerships, outreach, operations, impact, communications and people systems.",
  image: { src: "/randomPictures/mainGraduationpic.jpg", alt: "ITFY graduates at a graduation ceremony" },
};

// TODO: swap in each department's own photo
export const DEPARTMENTS: Department[] = [
  {
    slug: "programmes",
    area: "Delivery",
    name: "Programmes Department",
    text: "Owns learner pathways, cohort delivery, mentoring rhythms and programme quality.",
    image: "/randomPictures/happystudentscasual.jpg",
  },
  {
    slug: "training-and-curriculum",
    area: "Learning design",
    name: "Training & Curriculum Department",
    text: "Builds curriculum, facilitator guides, learning projects and assessment standards.",
    image: "/randomPictures/studentsBackcoding.jpg",
  },
  {
    slug: "partnerships",
    area: "External relations",
    name: "Partnerships Department",
    text: "Builds relationships with schools, funders, employers, NGOs, government and technology partners.",
    image: "/randomPictures/mainGraduationpic.jpg",
  },
  {
    slug: "community-outreach",
    area: "Access",
    name: "Community Outreach Department",
    text: "Connects schools and communities to digital skills opportunities, events, clubs and learner recruitment.",
    image: "/randomPictures/happystudentscasual.jpg",
  },
  {
    slug: "monitoring-evaluation-and-learning",
    area: "Evidence",
    name: "Monitoring, Evaluation & Learning Department",
    text: "Tracks outcomes, learner progression, reporting evidence and learning loops for improvement.",
    image: "/randomPictures/studentsBackcoding.jpg",
  },
  {
    slug: "operations",
    area: "Systems",
    name: "Operations Department",
    text: "Keeps finance, logistics, procurement, facilities, compliance and delivery support running.",
  },
  {
    slug: "communications",
    area: "Storytelling",
    name: "Communications Department",
    text: "Manages storytelling, campaigns, media, content, brand, newsletters and public updates.",
    image: "/randomPictures/mainGraduationpic.jpg",
  },
  {
    slug: "people-and-governance",
    area: "Stewardship",
    name: "People & Governance Department",
    text: "Supports staff, mentors, volunteers, governance routines, policies and organisational culture.",
    image: "/randomPictures/happystudentscasual.jpg",
  },
];

export const NEXT = {
  title: "Want to work in one of these teams?",
  text: "We hire alumni where possible, and welcome volunteers and mentors across every department.",
  actions: [
    { label: "View open roles", href: "/who-we-are/careers" },
    { label: "Meet the team", href: "/who-we-are/team" },
  ],
};
