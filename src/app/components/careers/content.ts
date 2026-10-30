// Content for the Join Our Team page (/who-we-are/careers).

export type Role = {
  title: string;
  type: string; // e.g. "Full-time", "Contract", "Volunteer"
  location: string; // e.g. "Accra", "Hybrid"
  summary: string;
  applyHref: string; // link to the job post, a form, or "mailto:..."
  closes?: string; // e.g. "30 Nov 2026"
};

const VOLUNTEER_HREF = "/contact?topic=volunteering";

export const HERO = {
  label: "Join the mission",
  title: "Join our team",
  lead: "Roles, volunteering and contribution pathways for people who want to build digital opportunity in Ghana.",
  note: "We hire facilitators, programme coordinators, partnership leads and operations staff who are serious about outcomes. We also create structured volunteering and internship routes for professionals and students who want to contribute without a full-time role.",
  actions: [
    { label: "See current openings", href: "#openings" },
    { label: "Propose a volunteering window", href: VOLUNTEER_HREF },
  ],
  image: { src: "/randomPictures/studentsBackcoding.jpg", alt: "Learners at computers during an ITFY training session" },
};

export const ENGAGE = [
  {
    title: "What we look for",
    text: "People who can teach or mentor at a high standard. People who can run operations without drama. People who treat young Ghanaians with respect and high expectations at the same time. Technical skill matters, but character and consistency matter more.",
  },
  {
    title: "How to engage",
    text: "Full-time and contract roles are posted when open. Volunteering windows (mentorship, portfolio review, career talks) can be proposed anytime. Alumni often return as facilitators or mentors, and that pipeline is real.",
  },
];

export const OPENINGS = {
  label: "Current openings",
  title: "Open roles",
  empty: {
    title: "No open roles right now",
    text: "We are not hiring at the moment. Volunteering windows can be proposed anytime, and new roles are announced on our mailing list.",
    action: { label: "Propose a volunteering window", href: VOLUNTEER_HREF },
  },
};

// Add roles here when hiring. While the list is empty, the page shows the "No open roles" message.
export const ROLES: Role[] = [];

export const EXPLORE = {
  label: "Related pages",
  title: "Continue exploring",
  cards: [
    { role: "People", title: "Our team", text: "Meet the facilitators and operations staff already on the ground.", cta: "Meet the team", href: "/who-we-are/team" },
    { role: "Companies", title: "Staff volunteering", text: "Structured ways for company teams to contribute.", cta: "See staff volunteering", href: "/for-organisations/staff-volunteering" },
  ],
};