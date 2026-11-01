// Content and settings for the Donate page (/donate).

// TODO: paste ITFY's online payment link here (e.g. a Paystack, Flutterwave or PayPal
// donation page). While it's empty, "Continue" sends donors to the contact form instead,
// so nobody hits a dead end.
export const PAYMENT_URL = "";

export const CURRENCY = "$"; // shown before amounts

export const HERO = {
  label: "Donate",
  title: "Your gift opens the door to a first career in tech.",
  lead: "Every contribution funds training, devices, mentorship and the step from learning into work or enterprise for young Ghanaians.",
  image: { src: "/randomPictures/happystudentscasual.jpg", alt: "ITFY learners celebrating together" },
};

export const FUNDS = [
  {
    id: "general",
    title: "The general fund",
    text: "Training, mentorship and progression across every pathway. Use this if you would rather we put your gift where it is needed most.",
  },
  {
    id: "her-first-laptop",
    title: "Her First Laptop",
    text: "A refurbished machine of her own, and the training to use it. Your gift covers sanitisation, parts, licensing, logistics and a year of support.",
  },
];

export const AMOUNTS = [25, 50, 100, 250]; // suggested amounts, in CURRENCY

export const CAMPAIGN = {
  label: "Active campaign",
  title: "Fund scholarships for Cohort 8 learners",
  text: "Your support removes financial barriers for young Ghanaians ready to build careers in technology. Every contribution funds tuition, devices, mentorship and structured pathways from training into work or enterprise.",
  points: [
    "Sponsor full training access for learners who could not otherwise participate.",
    "Increase girls' participation through targeted scholarships and mentoring.",
    "Support graduates with career readiness, internships and entrepreneurship pathways.",
  ],
  note: "Every contribution helps us cover tuition support, devices, mentorship and transition-to-work opportunities for young people who are ready to build a future in tech.",
  image: { src: "/randomPictures/studentsBackcoding.jpg", alt: "Learners coding in an ITFY lab" },
  // TODO: keep these figures up to date
  raised: 200,
  goal: 67500,
  donors: 186,
  endsOn: "", // e.g. "2026-12-31". Leave empty to hide "days remaining".
};

export const OTHER_WAYS = [
  { role: "Equipment", title: "Donate a laptop", text: "Give a used laptop a second life with a young learner.", cta: "Donate equipment", href: "/laptop-bank/donate" },
  { role: "Organisations", title: "Sponsor a cohort", text: "Fund scholarships or a full cohort as a company or foundation.", cta: "Partner with us", href: "/partner-with-us" },
  { role: "Time", title: "Volunteer or mentor", text: "Share your skills through mentoring, reviews or career talks.", cta: "See open roles", href: "/who-we-are/careers" },
];
