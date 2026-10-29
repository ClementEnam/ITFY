// Content for the Our Team page (/who-we-are/team).
// PEOPLE is shared: the homepage "Meet the people" section reads it too.

export type Person = {
  name: string;
  role: string;
  bio: string;
  photo?: string; // e.g. "/team/peter-duodu.jpg" in public/. Without one, the ITFY logo is shown.
  email?: string;
  linkedin?: string; // full profile URL
  featured?: boolean; // featured people get the wide card at the top
};

export const HERO = {
  title: "Our team",
  lead: "Facilitators, mentors and operations staff who run cohort training, school clubs and partnerships across Ghana.",
  note: "We are practitioners first: people who have built products, taught in classrooms and worked with young people in real Ghanaian contexts. The team combines technical depth, facilitation experience and operational discipline.",
  actions: [
    { label: "See open roles", href: "/who-we-are/careers" },
    { label: "Partner with the team", href: "/partner-with-us" },
  ],
  image: { src: "/randomPictures/happystudentscasual.jpg", alt: "ITFY team members celebrating with students" },
};

export const NUMBERS = {
  label: "In focus",
  title: "The numbers behind the work",
  stats: [
    { value: "3,000+", label: "Youth trained", text: "Across digital skills and employability pathways." },
    { value: "8,500+", label: "Students reached", text: "Through school outreach, clubs and community activations." },
    { value: "40%", label: "Female participation", text: "Driving stronger gender inclusion in technology spaces." },
    { value: "85%", label: "Employment rate", text: "Graduates in work, further learning or business-building pathways." },
  ],
};

export const APPROACH = [
  {
    title: "What the team actually does",
    text: "We design and deliver 12-week cohorts. We train and support school facilitators. We run outreach that turns first exposure into sustained interest. We manage partnerships, track outcomes and publish honest reports. Every role exists to make the learner journey work.",
  },
  {
    title: "How we stay grounded",
    text: "Most of us are Ghanaian or long-term residents. We hire alumni where possible. We spend time in schools and communities, not just offices. We measure what happens to learners after they leave, not just what happens in the room.",
  },
];

export const PEOPLE_INTRO = {
  label: "People & governance",
  title: "The people leading the work.",
};

export const PEOPLE: Person[] = [
  {
    name: "Peter Duodu",
    role: "Executive Director (Program Lead)",
    featured: true,
    bio: "Peter Duodu is the Founder and Executive Director of IT For Youth Ghana, leading the organization's mission to bridge the digital divide for underserved youth across Ghana, with a particular focus on empowering girls through coding, digital skills training, entrepreneurship, employment, and other tech initiatives. He holds an MPhil in Accounting from the University of Ghana and is currently a PhD candidate at the KNUST School of Business, researching digital accountability and SDG performance in nonprofit organizations across Ghana, Kenya, and Nigeria. Peter also brings a strong technical background in systems and network engineering and programming, which he combines with his research expertise to lead the Foundation's research team, driving new initiatives that apply technology to solve pressing societal problems.",
    // TODO: add his photo, email and LinkedIn URL — the buttons appear once they're set
    email: "",
    linkedin: "",
  },
];

export const EXPLORE = {
  label: "Related pages",
  title: "Continue exploring",
  cards: [
    { role: "Credibility", title: "Our partners", text: "The organisations that trust us to deliver at scale.", cta: "See our partners", href: "/who-we-are/partners" },
    { role: "Join", title: "Join our team", text: "Roles, volunteering and ways to contribute your skills.", cta: "View open roles", href: "/who-we-are/careers" },
  ],
};
