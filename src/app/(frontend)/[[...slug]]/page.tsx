import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPage, getPageSlugs } from "@/cms/data";
import RenderSections from "@/cms/RenderSections";

// Every page made in the CMS (Content > Pages) is shown by this one file.
// The homepage is the page whose web address is "home".
// Pages that still have their own folder (e.g. /apply) win over this one.

type Props = { params: Promise<{ slug?: string[] }> };

const toSlug = (parts?: string[]) => (parts?.length ? parts.join("/") : "home");

export async function generateStaticParams() {
  const slugs = await getPageSlugs();
  const params = slugs.map((s) => ({ slug: s === "home" ? [] : s.split("/") }));
  return params.length ? params : [{ slug: [] }];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = await getPage(toSlug((await params).slug));
  if (!page) return {};
  return {
    title: page.slug === "home" ? { absolute: "IT For Youth Ghana" } : page.title,
    description: page.description ?? undefined,
  };
}

export default async function CmsPage({ params }: Props) {
  const page = await getPage(toSlug((await params).slug));
  if (!page) notFound();
  return <RenderSections sections={page.sections} />;
}
