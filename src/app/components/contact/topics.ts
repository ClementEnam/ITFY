// What people can contact ITFY about. Each topic can point them to a faster route first.
// The id is what other pages use in links, e.g. /contact?topic=volunteering

export type Topic = {
  id: string;
  label: string;
  hint: string; // shown when the topic is picked
  shortcut?: { label: string; href: string; external?: boolean };
};

export const TOPICS: Topic[] = [
  {
    id: "training",
    label: "Joining a training programme",
    hint: "Applications go through the ITFY portal. Use the form if you have a question before applying.",
    shortcut: { label: "Apply on the portal", href: "https://portal.itforyouthghana.org/login", external: true },
  },
  {
    id: "partnership",
    label: "Partnering or sponsoring",
    hint: "Tell us about your organisation and what you'd like to support, and the partnerships team will follow up.",
    shortcut: { label: "See partnership routes", href: "/partner-with-us" },
  },
  {
    id: "volunteering",
    label: "Volunteering or mentoring",
    hint: "Suggest a window that suits you, such as mentoring, portfolio reviews or a career talk.",
    shortcut: { label: "See open roles", href: "/who-we-are/careers" },
  },
  {
    id: "donation",
    label: "Making a donation",
    hint: "Tell us the amount and which fund you'd like to support, and we'll send you the details to complete your gift.",
    shortcut: { label: "Back to the donate page", href: "/donate" },
  },
  {
    id: "laptops",
    label: "Donating laptops or equipment",
    hint: "Let us know what you have and roughly how many devices. We wipe every device before it reaches a learner.",
    shortcut: { label: "What we accept", href: "/laptop-bank/what-we-accept" },
  },
  {
    id: "hiring",
    label: "Hiring our graduates",
    hint: "Share the role and skills you need, and we'll connect you with suitable graduates.",
    shortcut: { label: "Hire our graduates", href: "/for-organisations/hire" },
  },
  {
    id: "media",
    label: "Media or speaking request",
    hint: "Include your publication or event, your deadline and what you'd like to cover.",
  },
  {
    id: "other",
    label: "Something else",
    hint: "Ask us anything, and we'll make sure it reaches the right person.",
  },
];
