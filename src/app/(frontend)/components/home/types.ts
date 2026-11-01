// Shapes of the data each homepage section receives.
// The CMS (src/cms/RenderSections.tsx) turns what editors enter into these shapes.

export type Img = { src: string; alt: string };
export type Action = { label: string; href: string };
export type Stat = { value: string; label: string; text?: string };

export type WhyData = { label?: string; title: string; text?: string; quote?: string; action?: Action; image: Img; youtubeId?: string };
export type ChallengeData = {
  label?: string;
  title: string;
  text?: string;
  stats: Stat[];
  divide: { title?: string; without: { title?: string; points: string[] }; with: { title?: string; points: string[] } };
  action?: Action;
};
export type MissionData = { label?: string; title: string; text?: string; action?: Action; image: Img; stats: Stat[] };
export type ProgrammesData = {
  label?: string;
  title: string;
  text?: string;
  action?: Action;
  items: { title: string; text?: string; href: string; image: string }[];
};
export type CampaignData = {
  campaign: { label?: string; title: string; text?: string; goal: number; raised: number; action?: Action; secondary?: Action };
  story: { label?: string; title: string; text?: string; action?: Action; image: Img };
};
export type Story = { quote: string; name: string; role?: string; image?: string };
export type StoriesData = { label?: string; title: string; text?: string; items: Story[] };
export type TeamData = { label?: string; title: string; text?: string; action?: Action; members: { name: string; role: string; image?: string }[] };
export type PartnerItem = { name: string; logo?: string; url?: string };
export type PartnersData = { label?: string; title: string; list: PartnerItem[]; primary?: Action; secondary?: Action };
