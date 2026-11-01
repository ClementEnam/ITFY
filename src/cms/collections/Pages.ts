import type { CollectionConfig } from "payload";
import { HOME_BLOCKS } from "../blocks/home";
import { revalidateHooks } from "../revalidate";

// Every page built in the CMS. A page is a stack of sections that can be
// added, edited, dragged into a new order or removed.
export const Pages: CollectionConfig = {
  slug: "pages",
  labels: { singular: "Page", plural: "Pages" },
  admin: {
    useAsTitle: "title",
    group: "Content",
    defaultColumns: ["title", "slug", "_status", "updatedAt"],
    preview: (doc) => (doc?.slug ? `/${doc.slug === "home" ? "" : doc.slug}` : null),
  },
  access: { read: () => true },
  versions: { drafts: true, maxPerDoc: 25 },
  hooks: revalidateHooks,
  fields: [
    { name: "title", label: "Page title", type: "text", required: true },
    {
      name: "slug",
      label: "Web address",
      type: "text",
      required: true,
      unique: true,
      index: true,
      admin: {
        position: "sidebar",
        description: "The part after the domain, e.g. get-involved/government. Use home for the homepage.",
      },
      validate: (value: unknown) =>
        typeof value === "string" && /^[a-z0-9]+(?:[-/][a-z0-9]+)*$/.test(value)
          ? true
          : "Use lowercase letters, numbers, dashes and slashes only, e.g. get-involved/government",
    },
    {
      name: "description",
      label: "Search engine description",
      type: "textarea",
      admin: { position: "sidebar", description: "One or two sentences shown on Google and when the page is shared." },
    },
    {
      name: "sections",
      label: "Sections",
      type: "blocks",
      blocks: HOME_BLOCKS,
      admin: { initCollapsed: true },
    },
  ],
};
