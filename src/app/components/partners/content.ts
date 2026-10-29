// Content for the Our Partners page (/who-we-are/partners).
// PARTNERS is shared: the homepage "Our partners" section reads it too.

export type Partner = {
  name: string;
  url?: string; // their website; adds a "Visit" link
  logo?: string; // e.g. "/partners/name.png" in public/. Without one, the name is shown as text.
  role?: string; // short note on how they work with ITFY
};

export const HERO = {
  label: "Credibility",
  title: "Our partners",
  lead: "Google.org, UNICEF Ghana, GIZ, Mastercard Foundation, Vodafone Ghana, Microsoft, Tony Elumelu Foundation and USAID: organisations that have chosen ITFY for delivery.",
  note: "We do not list logos for decoration. Every partner on this page has worked with us on real programmes: funded cohorts, co-designed clubs, sponsored learners or hired graduates. They return because we deliver numbers and stories they can stand behind.",
  actions: [
    { label: "Explore partnership routes", href: "/partner-with-us" },
    { label: "Talk to the team", href: "/contact" },
  ],
  image: { src: "/randomPictures/mainGraduationpic.jpg", alt: "Graduates at the Code Impact Challenge graduation ceremony" },
};

export const VALUE = [
  {
    title: "What partners get",
    text: "Clear proposals. Reliable delivery. Cohort-level reporting. Participant stories with consent. Financial transparency. A Ghanaian organisation that can represent the work credibly in-country and in donor conversations.",
  },
  {
    title: "Partnership principles",
    text: "We say yes to work we can actually do well. We report honestly, including what did not go to plan. We protect learner dignity in all storytelling. We are comfortable being an implementing partner or a visible co-brand, depending on what serves the mission.",
  },
];

export const NETWORK = {
  label: "Partner network",
  title: "Organisations helping shape youth outcomes",
  text: "These organisations support delivery, mentorship, placements and ecosystem growth across IT For Youth Ghana programmes.",
};

// TODO: add every partner named above, with their logo (check each brand's logo-use rules) and website
export const PARTNERS: Partner[] = [
  { name: "Northern Tech Community Awards 2026", url: "" },
];

export const EXPLORE = {
  label: "Related pages",
  title: "Continue exploring",
  cards: [
    { role: "Routes", title: "Partner with us", text: "Five tracks for schools, government, NGOs, development and tech companies.", cta: "See partnership routes", href: "/partner-with-us" },
    { role: "Proof", title: "Impact reports", text: "The data and stories that support every partnership.", cta: "Read the reports", href: "/our-impact/reports" },
  ],
};
