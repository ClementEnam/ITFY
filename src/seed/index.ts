/**
 * Copies the website's current content into the CMS, so nothing has to be retyped.
 *
 *   npm run seed
 *
 * Safe to run more than once: images already uploaded are reused, the navigation bar,
 * footer and homepage are overwritten with this content, and team members / partners
 * are only added when that list is still empty.
 */
import fs from "fs";
import path from "path";
import { getPayload, type Payload } from "payload";
import config from "@payload-config";

import { CHALLENGE, MISSION, PROGRAMMES, STORIES, TEAM, WHY, CAMPAIGN, GRADUATE, PARTNERS as HOME_PARTNERS } from "../app/(frontend)/components/home/content";
import { PEOPLE } from "../app/(frontend)/components/team/content";
import { PARTNERS } from "../app/(frontend)/components/partners/content";
import { NAV_ITEMS } from "../app/(frontend)/components/navItems";
import { CONTACT, FOOTER_COLUMNS, FOOTER_TAGLINE, LEGAL_LINKS, SOCIALS } from "../app/(frontend)/components/footer/footerContent";
import { HERO_AUDIENCES, TICKER } from "./homeExtras";

const ctx = { skipRevalidate: true };
const PUBLIC = path.resolve(process.cwd(), "public");

/** Finds a file in public/, ignoring upper/lower case differences (Windows doesn't care, Linux does). */
function findPublicFile(webPath: string): string | null {
  let dir = PUBLIC;
  for (const part of webPath.replace(/^\//, "").split("/")) {
    if (!fs.existsSync(dir)) return null;
    const match = fs.readdirSync(dir).find((f) => f.toLowerCase() === part.toLowerCase());
    if (!match) return null;
    dir = path.join(dir, match);
  }
  return fs.statSync(dir).isFile() ? dir : null;
}

// Ids are numbers in the local file database and strings in MongoDB, so they're loosely typed here.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Id = any;

const uploaded = new Map<string, Id>();

/** Uploads an image from public/ once and returns its id (or undefined if the file is missing). */
async function media(payload: Payload, webPath: string | undefined, alt: string): Promise<Id> {
  if (!webPath) return undefined;
  if (uploaded.has(webPath)) return uploaded.get(webPath);
  const file = findPublicFile(webPath);
  if (!file) {
    console.warn(`  ! image not found, skipped: ${webPath}`);
    return undefined;
  }
  const filename = path.basename(file);
  const existing = await payload.find({ collection: "media", where: { filename: { equals: filename } }, limit: 1, depth: 0 });
  const id = existing.docs[0]?.id ?? (await payload.create({ collection: "media", data: { alt: alt || filename }, filePath: file, context: ctx })).id;
  uploaded.set(webPath, id);
  return id;
}

async function seed() {
  const payload = await getPayload({ config });
  console.log("Seeding the CMS…");

  // ---------- Team members ----------
  if ((await payload.count({ collection: "team-members" })).totalDocs === 0) {
    for (const p of PEOPLE) {
      await payload.create({
        collection: "team-members",
        context: ctx,
        data: {
          name: p.name,
          role: p.role,
          bio: p.bio,
          photo: await media(payload, p.photo, p.name),
          email: p.email || undefined,
          linkedin: p.linkedin || undefined,
          featured: Boolean(p.featured),
        },
      });
    }
    console.log(`  ✓ ${PEOPLE.length} team member(s)`);
  } else console.log("  – team members already there, left as they are");

  // ---------- Partners ----------
  if ((await payload.count({ collection: "partners" })).totalDocs === 0) {
    for (const p of PARTNERS) {
      await payload.create({
        collection: "partners",
        context: ctx,
        data: { name: p.name, logo: await media(payload, p.logo, `${p.name} logo`), url: p.url || undefined, role: p.role || undefined },
      });
    }
    console.log(`  ✓ ${PARTNERS.length} partner(s)`);
  } else console.log("  – partners already there, left as they are");

  // ---------- Navigation bar ----------
  await payload.updateGlobal({
    slug: "header",
    context: ctx,
    data: {
      siteName: "IT For Youth Ghana",
      tagline: "Digital skills & opportunity",
      navItems: NAV_ITEMS.map((i) => ({
        label: i.label,
        href: i.href,
        children: (i.children ?? []).map((c) => ({ label: c.label, href: c.href, description: c.description })),
      })),
      applyButton: { label: "Apply now", href: "/apply" },
      donateButton: { label: "Donate", href: "/donate" },
    },
  });
  console.log("  ✓ navigation bar");

  // ---------- Footer ----------
  await payload.updateGlobal({
    slug: "footer",
    context: ctx,
    data: {
      tagline: FOOTER_TAGLINE,
      contact: CONTACT,
      socials: SOCIALS.map((s) => ({ name: s.name, href: s.href })),
      columns: FOOTER_COLUMNS.map((c) => ({ title: c.title, links: c.links })),
      legalLinks: LEGAL_LINKS,
      copyright: "IT For Youth Ghana. Registered NGO. All rights reserved.",
    },
  });
  console.log("  ✓ footer");

  // ---------- Homepage ----------
  const sections = [
    {
      blockType: "audienceHero" as const, blockName: "Hero",
      prompt: "I want to",
      audiences: await Promise.all(
        HERO_AUDIENCES.map(async (a) => ({
          tab: a.tab,
          title: a.title,
          text: a.text,
          image: await media(payload, a.image, a.alt),
          caption: a.caption,
          primary: a.primary,
          secondary: a.secondary,
        })),
      ),
    },
    { blockType: "statsTicker" as const, blockName: "Figures band", items: TICKER },
    {
      blockType: "videoFeature" as const, blockName: "Why we exist",
      label: WHY.label,
      title: WHY.title,
      text: WHY.text,
      quote: WHY.quote,
      action: WHY.action,
      image: await media(payload, WHY.image.src, WHY.image.alt),
      youtube: WHY.youtubeId,
    },
    {
      blockType: "challenge" as const, blockName: "The challenge",
      label: CHALLENGE.label,
      title: CHALLENGE.title,
      text: CHALLENGE.text,
      stats: CHALLENGE.stats.map((s) => ({ value: s.value, label: s.label.replace(/\s*\n\s*/g, "\n") })),
      divide: {
        title: CHALLENGE.divide.title,
        without: { title: CHALLENGE.divide.without.title, points: CHALLENGE.divide.without.points.map((text) => ({ text })) },
        with: { title: CHALLENGE.divide.with.title, points: CHALLENGE.divide.with.points.map((text) => ({ text })) },
      },
      action: CHALLENGE.action,
    },
    {
      blockType: "mission" as const, blockName: "Our mission",
      label: MISSION.label,
      title: MISSION.title,
      text: MISSION.text,
      action: MISSION.action,
      image: await media(payload, MISSION.image.src, MISSION.image.alt),
      stats: MISSION.stats,
    },
    {
      blockType: "cardGrid" as const, blockName: "Our initiatives",
      label: PROGRAMMES.label,
      title: PROGRAMMES.title,
      text: PROGRAMMES.text,
      action: { label: "See all our work", href: "/what-we-do" },
      items: await Promise.all(
        PROGRAMMES.items.map(async (i) => ({ title: i.title, text: i.text, href: i.href, image: await media(payload, i.image, i.title) })),
      ),
    },
    {
      blockType: "campaign" as const, blockName: "Campaign + graduate story",
      campaign: {
        label: CAMPAIGN.label,
        title: CAMPAIGN.title,
        text: CAMPAIGN.text,
        goal: CAMPAIGN.goal,
        raised: CAMPAIGN.raised,
        action: CAMPAIGN.action,
        secondary: CAMPAIGN.secondary,
      },
      story: {
        label: GRADUATE.label,
        title: GRADUATE.title,
        text: GRADUATE.text,
        action: GRADUATE.action,
        image: await media(payload, GRADUATE.image.src, GRADUATE.image.alt),
      },
    },
    {
      blockType: "testimonials" as const, blockName: "Student stories",
      label: STORIES.label,
      title: STORIES.title,
      text: STORIES.text,
      items: await Promise.all(
        STORIES.items.map(async (s) => ({ quote: s.quote, name: s.name, role: s.role, image: await media(payload, s.image, s.name) })),
      ),
    },
    { blockType: "teamGrid" as const, blockName: "Our people", label: TEAM.label, title: TEAM.title, text: TEAM.text, action: TEAM.action },
    {
      blockType: "partnerStrip" as const, blockName: "Our partners",
      label: HOME_PARTNERS.label,
      title: HOME_PARTNERS.title,
      primary: { label: "See all our partners", href: "/who-we-are/partners" },
      secondary: HOME_PARTNERS.action,
    },
  ];

  const home = await payload.find({ collection: "pages", where: { slug: { equals: "home" } }, limit: 1, depth: 0, draft: true });
  const data: Id = { title: "Home", slug: "home", sections, _status: "published" };
  if (home.docs[0]) await payload.update({ collection: "pages", id: home.docs[0].id, data, context: ctx });
  else await payload.create({ collection: "pages", data, context: ctx });
  console.log("  ✓ homepage");

  console.log("Done. Open /admin to see it all.");
}

await seed();
process.exit(0);
