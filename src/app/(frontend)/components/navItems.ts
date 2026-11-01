export type NavChild = { label: string; href: string; description?: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

// The menu now comes from the CMS (Site > Navigation bar). This list is only the
// starting content the seed script copies into the CMS.
export const NAV_ITEMS: NavItem[] = [
  {
    label: "Who we are",
    href: "/who-we-are",
    children: [
      { label: "About us", href: "/who-we-are", description: "Mission, vision and values" },
      { label: "Our team", href: "/who-we-are/team", description: "The people behind ITFY" },
      { label: "Departments", href: "/who-we-are/departments", description: "How our work is organised" },
      { label: "Our partners", href: "/who-we-are/partners", description: "Who we work with" },
      { label: "Join our team", href: "/who-we-are/careers", description: "Open roles at ITFY" },
    ],
  },
  {
    label: "What we do",
    href: "/what-we-do",
    children: [
      { label: "Girls in Tech", href: "/what-we-do/girls-in-tech" },
      { label: "Youth Tech Academy", href: "/what-we-do/youth-tech-academy" },
      { label: "Entrepreneurship Hub", href: "/what-we-do/entrepreneurship-hub" },
      { label: "Code Impact Challenge", href: "/what-we-do/code-impact-challenge" },
      { label: "Rural Tech Connect", href: "/what-we-do/rural-tech-connect" },
      { label: "Community Outreach", href: "/what-we-do/community-outreach" },
      { label: "Advocacy", href: "/what-we-do/advocacy" },
      { label: "Tech Clubs", href: "/what-we-do/tech-clubs" },
    ],
  },
  {
    label: "Laptop Bank",
    href: "/laptop-bank",
    children: [
      { label: "How it works", href: "/laptop-bank", description: "From donation to a learner's hands" },
      { label: "What we accept", href: "/laptop-bank/what-we-accept", description: "Laptops and IT equipment we can use" },
      { label: "Data security", href: "/laptop-bank/data-security", description: "How we wipe donated devices" },
      { label: "Donate equipment", href: "/laptop-bank/donate", description: "Give a laptop a second life" },
    ],
  },
  {
    label: "Apply for training",
    href: "/apply",
    children: [
      { label: "Who can apply", href: "/apply/eligibility" },
      { label: "Browse courses", href: "/apply#courses" },
      { label: "How it works", href: "/apply#how-to-apply" },
    ],
  },
  {
    label: "For organisations",
    href: "/for-organisations",
    children: [
      { label: "Corporate training", href: "/for-organisations/corporate-training" },
      { label: "Sponsorships", href: "/for-organisations/sponsorships" },
      { label: "Hire our graduates", href: "/for-organisations/hire" },
      { label: "Staff volunteering", href: "/for-organisations/staff-volunteering" },
    ],
  },
  {
    label: "Get involved",
    href: "/get-involved",
    children: [
      { label: "Her First Laptop", href: "/get-involved/her-first-laptop" },
      { label: "Partner with us", href: "/partner-with-us" },
      { label: "Educational institutions", href: "/get-involved/educational-institutions" },
      { label: "Government", href: "/get-involved/government" },
      { label: "NGOs & foundations", href: "/get-involved/ngos-and-foundations" },
      { label: "International development", href: "/get-involved/international-development" },
      { label: "Technology companies", href: "/get-involved/technology-companies" },
    ],
  },
  {
    label: "Our impact",
    href: "/our-impact",
    children: [
      { label: "Impact reports", href: "/our-impact/reports" },
      { label: "Testimonials", href: "/our-impact/testimonials" },
      { label: "UN SDGs", href: "/our-impact/sdgs" },
    ],
  },
  {
    label: "News & updates",
    href: "/news",
    children: [
      { label: "News", href: "/news" },
      { label: "Blogs", href: "/news/blogs" },
    ],
  },
  { label: "Contact", href: "/contact" },
];
