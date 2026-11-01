import Hero from "@/app/(frontend)/components/Hero";
import StatsTicker from "@/app/(frontend)/components/StatsTicker";
import Campaign from "@/app/(frontend)/components/home/Campaign";
import Challenge from "@/app/(frontend)/components/home/Challenge";
import Mission from "@/app/(frontend)/components/home/Mission";
import Partners from "@/app/(frontend)/components/home/Partners";
import Programmes from "@/app/(frontend)/components/home/Programmes";
import StudentStories from "@/app/(frontend)/components/home/StudentStories";
import Team from "@/app/(frontend)/components/home/Team";
import WhyWeExist from "@/app/(frontend)/components/home/WhyWeExist";
import type { Page } from "@/payload-types";
import { getPartners, getTeam } from "./data";
import { act, img, src, str } from "./media";

type Section = NonNullable<Page["sections"]>[number];

// Turns the list of sections an editor built in the admin into the site's components.
// To add a new kind of section: define it in src/cms/blocks, then add a case here.
async function RenderSection({ section }: { section: Section }) {
  switch (section.blockType) {
    case "audienceHero":
      return (
        <Hero
          prompt={str(section.prompt) || "I want to"}
          audiences={(section.audiences ?? []).map((a, i) => {
            const picture = img(a.image);
            return {
              id: a.id ?? `tab-${i}`,
              tab: a.tab,
              title: a.title,
              text: str(a.text),
              image: picture?.src ?? "",
              alt: picture?.alt ?? "",
              caption: str(a.caption),
              primary: act(a.primary) ?? { label: "", href: "#" },
              secondary: act(a.secondary),
            };
          })}
        />
      );

    case "statsTicker":
      return <StatsTicker items={(section.items ?? []).map((s) => ({ value: s.value, label: s.label }))} />;

    case "videoFeature": {
      const picture = img(section.image);
      if (!picture) return null;
      return (
        <WhyWeExist
          data={{
            label: str(section.label),
            title: section.title,
            text: str(section.text),
            quote: str(section.quote),
            action: act(section.action),
            image: picture,
            youtubeId: str(section.youtube),
          }}
        />
      );
    }

    case "challenge":
      return (
        <Challenge
          data={{
            label: str(section.label),
            title: section.title,
            text: str(section.text),
            stats: (section.stats ?? []).map((s) => ({ value: s.value, label: s.label })),
            divide: {
              title: str(section.divide?.title),
              without: {
                title: str(section.divide?.without?.title),
                points: (section.divide?.without?.points ?? []).map((p) => p.text),
              },
              with: {
                title: str(section.divide?.with?.title),
                points: (section.divide?.with?.points ?? []).map((p) => p.text),
              },
            },
            action: act(section.action),
          }}
        />
      );

    case "mission": {
      const picture = img(section.image);
      if (!picture) return null;
      return (
        <Mission
          data={{
            label: str(section.label),
            title: section.title,
            text: str(section.text),
            action: act(section.action),
            image: picture,
            stats: (section.stats ?? []).map((s) => ({ value: s.value, label: s.label })),
          }}
        />
      );
    }

    case "cardGrid":
      return (
        <Programmes
          data={{
            label: str(section.label),
            title: section.title,
            text: str(section.text),
            action: act(section.action),
            items: (section.items ?? []).map((c) => ({ title: c.title, text: str(c.text), href: c.href, image: src(c.image) })),
          }}
        />
      );

    case "campaign": {
      const c = section.campaign;
      const s = section.story;
      const picture = img(s?.image);
      if (!picture) return null;
      return (
        <Campaign
          data={{
            campaign: {
              label: str(c?.label),
              title: c?.title ?? "",
              text: str(c?.text),
              goal: c?.goal ?? 0,
              raised: c?.raised ?? 0,
              action: act(c?.action),
              secondary: act(c?.secondary),
            },
            story: { label: str(s?.label), title: s?.title ?? "", text: str(s?.text), action: act(s?.action), image: picture },
          }}
        />
      );
    }

    case "testimonials":
      return (
        <StudentStories
          data={{
            label: str(section.label),
            title: section.title,
            text: str(section.text),
            items: (section.items ?? []).map((t) => ({ quote: t.quote, name: t.name, role: str(t.role), image: src(t.image) || undefined })),
          }}
        />
      );

    case "teamGrid": {
      const team = await getTeam();
      const people = section.limit ? team.slice(0, section.limit) : team;
      return (
        <Team
          data={{
            label: str(section.label),
            title: section.title,
            text: str(section.text),
            action: act(section.action),
            members: people.map((p) => ({ name: p.name, role: p.role, image: src(p.photo) || undefined })),
          }}
        />
      );
    }

    case "partnerStrip": {
      const partners = await getPartners();
      return (
        <Partners
          data={{
            label: str(section.label),
            title: section.title,
            list: partners.map((p) => ({ name: p.name, logo: src(p.logo) || undefined, url: str(p.url) || undefined })),
            primary: act(section.primary),
            secondary: act(section.secondary),
          }}
        />
      );
    }

    default:
      return null;
  }
}

export default function RenderSections({ sections }: { sections: Page["sections"] }) {
  return (
    <>
      {(sections ?? []).map((section, i) => (
        <RenderSection key={section.id ?? i} section={section} />
      ))}
    </>
  );
}
