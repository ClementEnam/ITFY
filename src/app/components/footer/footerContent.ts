// Footer links and details. Edit here — the footer reads everything from this file.

export const FOOTER_TAGLINE =
  "Empowering Ghanaian youth with the digital skills, confidence and pathways needed to shape tomorrow's economy.";

export const CONTACT = {
  location: "Accra, Ghana",
  email: "info@itforyouthghana.org",
  phone: "+233 596 244 834",
};

// TODO: replace "#" with ITFY's real profile links
export const SOCIALS = [
  { name: "Facebook", href: "#" },
  { name: "X", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "YouTube", href: "#" },
] as const;

export const FOOTER_COLUMNS = [
  {
    title: "Who we are",
    links: [
      { label: "About us", href: "/who-we-are" },
      { label: "Our team", href: "/who-we-are/team" },
      { label: "Our partners", href: "/who-we-are/partners" },
      { label: "Join our team", href: "/who-we-are/careers" },
    ],
  },
  {
    title: "What we do",
    links: [
      { label: "Overview", href: "/what-we-do" },
      { label: "Girls in Tech", href: "/what-we-do/girls-in-tech" },
      { label: "Youth Tech Academy", href: "/what-we-do/youth-tech-academy" },
      { label: "Entrepreneurship Hub", href: "/what-we-do/entrepreneurship-hub" },
      { label: "Tech Clubs", href: "/what-we-do/tech-clubs" },
    ],
  },
  {
    title: "Apply & partner",
    links: [
      { label: "Apply for training", href: "/apply" },
      { label: "Browse courses", href: "/apply/courses" },
      { label: "For organisations", href: "/for-organisations" },
      { label: "Partner with us", href: "/partner-with-us" },
      { label: "Donate", href: "/donate" },
    ],
  },
  {
    title: "Laptop Bank",
    links: [
      { label: "How it works", href: "/laptop-bank" },
      { label: "What we accept", href: "/laptop-bank/what-we-accept" },
      { label: "Data security", href: "/laptop-bank/data-security" },
      { label: "Donate equipment", href: "/laptop-bank/donate" },
    ],
  },
  {
    title: "Impact & contact",
    links: [
      { label: "Impact overview", href: "/our-impact" },
      { label: "Impact reports", href: "/our-impact/reports" },
      { label: "Testimonials", href: "/our-impact/testimonials" },
      { label: "News", href: "/news" },
      { label: "Blogs", href: "/news/blogs" },
      { label: "Contact us", href: "/contact" },
    ],
  },
];

export const LEGAL_LINKS = [
  { label: "Programmes portal", href: "/portal" },
  { label: "Admin login", href: "/admin" },
  { label: "Contact", href: "/contact" },
];
