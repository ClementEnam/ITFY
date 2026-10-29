// Shape of one initiative page (Girls in Tech, Youth Tech Academy, ...).
// Every section is optional to fill: a section with an empty list is simply left out.

type Img = { src: string; alt: string };
type LinkItem = { label: string; href: string };

export type Initiative = {
  slug: string; // the URL: /what-we-do/[slug]
  name: string;
  hero: { lead: string; note?: string; image: Img; primary: LinkItem; secondary: LinkItem };
  overview: { title: string; paragraphs: string[]; quote?: string; image: Img };
  journey: { title: string; text?: string; steps: { title: string; text: string; image?: Img }[] };
  proof: { title: string; text?: string; stats: { value: string; label: string; text: string }[] };
  audience?: { title: string; text: string; points: string[]; eligibilityTitle: string; eligibility: string };
  gallery: { title: string; text?: string; photos: (Img & { caption?: string })[] };
  stories: { title: string; items: { quote: string; name: string; role: string; photo?: string }[] };
  partners: { title: string; items: { name: string; text: string; logo?: string; url?: string }[] };
  faq: { title: string; items: { q: string; a: string }[] };
  cta: { title: string; text: string; primary: LinkItem; secondary: LinkItem };
  explore: { role: string; title: string; text: string; cta: string; href: string }[];
};
