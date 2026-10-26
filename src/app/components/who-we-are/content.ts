// All text and images for the Who We Are page live here.
// Swap in ITFY's exact wording below — the components never need to change.
// (Later, this is the shape the Payload "Who We Are" global will return.)

export type LinkItem = { label: string; href: string };

export const SECTIONS = [
  { id: "what-drives-us", label: "What drives us" },
  { id: "what-we-believe", label: "What we believe" },
  { id: "operating-model", label: "Operating model" },
  { id: "principles", label: "Principles" },
  { id: "our-people", label: "Our people" },
  { id: "our-ecosystem", label: "Our ecosystem" },
] as const;

export const HERO = {
  title: "Who we are",
  lead: "IT For Youth Ghana trains young people in practical digital skills and supports them into work, enterprise and further study.",
  actions: [
    { label: "Contact the team", href: "/contact" },
    { label: "Support the mission", href: "/donate" },
  ] satisfies LinkItem[],
  image: { src: "/randomPictures/studentsBackcoding.jpg", alt: "Trainees coding at computer workstations in Accra" },
};

export const DRIVES = {
  label: "What drives us",
  title: "Built around access, confidence and visible outcomes.",
  text: "Talent is everywhere in Ghana, but access to quality digital training is not. We exist to close that gap with training that is practical, inclusive and judged by what young people go on to do.",
  listTitle: "What the work keeps in focus",
  list: [
    "Access to training young people can actually reach, whatever their background",
    "Confidence built through hands-on projects that prove what each learner can do",
    "Outcomes we can see in work, further learning and enterprise",
  ],
  image: { src: "/randomPictures/studentsBackcoding.jpg", alt: "A trainer leading a class of young learners" },
};

export const BELIEVE = {
  label: "What we believe",
  title: "Trust, inclusion and accountability as the work grows.",
  text: "As we reach more young people, we hold ourselves to the same standards: earn trust through delivery, make room for everyone, and report honestly on results.",
  stats: [
    { value: "3,000+", label: "young people trained" },
    { value: "8,500+", label: "students reached through schools and communities" },
    { value: "40%", label: "female participation" },
    { value: "85%", label: "move into work, learning or enterprise within six months" },
  ],
  image: { src: "/randomPictures/happystudentscasual.jpg", alt: "Students celebrating together after a practical session" },
};

export const MODEL = {
  label: "Operating model",
  title: "The way we turn mission into repeatable delivery.",
  text: "Every cohort follows the same model, so quality holds as we grow.",
  steps: [
    {
      title: "Reach",
      text: "We find young people through school and community partnerships, with more than 8,500 students reached so far.",
    },
    {
      title: "Train",
      text: "Cohort-based training in Accra, built around practical projects, mentorship and real deadlines.",
    },
    {
      title: "Progress",
      text: "We support graduates into work, further learning or their own enterprise, and check in six months later.",
    },
  ],
};

export const PRINCIPLES = {
  label: "Principles",
  title: "A strong organisation is more than programmes on a calendar.",
  text: "These principles guide how we decide, deliver and report.",
  items: [
    {
      title: "How we build trust",
      text: "We earn trust by doing what we say, cohort after cohort.",
      points: [
        "Clear selection criteria shared with every applicant",
        "Programmes delivered on the dates we publish",
        "Open communication with learners, families and partners",
      ],
    },
    {
      title: "How we include",
      text: "We design for the young people most likely to be left out.",
      points: [
        "Active outreach to young women and girls",
        "Training that starts from where each learner is",
        "Support with devices and access where it is needed",
      ],
    },
    {
      title: "How we stay accountable",
      text: "We measure what happens after training, not only attendance.",
      points: [
        "Graduate progress tracked six months after each cohort",
        "Results reported honestly to partners and supporters",
        "Feedback from learners used to improve the next cohort",
      ],
    },
  ],
};

export const PEOPLE = {
  label: "Our people",
  title: "Built by people who keep the work close to the learner.",
  text: "Our trainers, mentors and staff work alongside learners every day, so decisions start with what young people actually need.",
  action: { label: "Meet the team", href: "/who-we-are/team" } satisfies LinkItem,
  image: { src: "/randomPictures/mainGraduationpic.jpg", alt: "ITFY team members with graduates on graduation day" },
};

export const ECOSYSTEM = {
  label: "Our ecosystem",
  title: "No organisation builds an ecosystem alone.",
  text: "Our work depends on the people, partners and supporters around it.",
  center: "IT For Youth Ghana",
  nodes: [
    { role: "People", title: "Our team", text: "The trainers, mentors and staff who deliver every cohort.", cta: "Meet the team", href: "/who-we-are/team" },
    { role: "Credibility", title: "Our partners", text: "Schools, companies and funders who back the work.", cta: "See our partners", href: "/who-we-are/partners" },
    { role: "Join", title: "Join our team", text: "Open roles for people who want to grow digital talent in Ghana.", cta: "View open roles", href: "/who-we-are/careers" },
  ],
};

export const NEXT_MOVE = {
  title: "Start with the route that matches how you want to join the mission.",
  text: "Whether you want to learn, partner or give, there's a clear next step.",
  actions: [
    { label: "Apply for training", href: "/apply" },
    { label: "Partner with us", href: "/partner-with-us" },
    { label: "Donate", href: "/donate" },
  ] satisfies LinkItem[],
};
