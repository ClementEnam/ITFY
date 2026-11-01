import config from "@payload-config";
import { unstable_cache } from "next/cache";
import { getPayload } from "payload";
import { CMS_TAG } from "./revalidate";

// Every read from the CMS goes through these helpers. Results are cached and
// cleared automatically whenever something is saved in the admin (see revalidate.ts).

const cms = () => getPayload({ config });
const cached = <A extends unknown[], R>(key: string, fn: (...args: A) => Promise<R>) =>
  unstable_cache(fn, [key], { tags: [CMS_TAG] });

export const getHeader = cached("header", async () => (await cms()).findGlobal({ slug: "header", depth: 1 }));

export const getFooter = cached("footer", async () => (await cms()).findGlobal({ slug: "footer", depth: 1 }));

export const getPage = cached("page", async (slug: string) => {
  const res = await (await cms()).find({
    collection: "pages",
    where: { slug: { equals: slug }, _status: { equals: "published" } },
    depth: 2,
    limit: 1,
  });
  return res.docs[0] ?? null;
});

export const getPageSlugs = cached("page-slugs", async () => {
  const res = await (await cms()).find({
    collection: "pages",
    where: { _status: { equals: "published" } },
    depth: 0,
    limit: 1000,
    select: { slug: true },
  });
  return res.docs.map((d) => d.slug);
});

export const getTeam = cached("team", async () => {
  const res = await (await cms()).find({ collection: "team-members", depth: 1, limit: 200, sort: "_order" });
  return res.docs;
});

export const getPartners = cached("partners", async () => {
  const res = await (await cms()).find({ collection: "partners", depth: 1, limit: 200, sort: "_order" });
  return res.docs;
});
