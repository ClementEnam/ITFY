import type { Field } from "payload";

// Small building blocks reused by every collection, global and section below.
// Keeping them here means a "link" or "image" looks and behaves the same everywhere in the admin.

/** A button or text link: what it says, and where it goes. */
export const link = (name: string, label?: string, required = true): Field => ({
  name,
  label: label ?? name,
  type: "group",
  admin: { hideGutter: true },
  fields: [
    {
      type: "row",
      fields: [
        { name: "label", label: "Button text", type: "text", required, admin: { width: "50%" } },
        {
          name: "href",
          label: "Goes to",
          type: "text",
          required,
          admin: {
            width: "50%",
            description: "A page on this site, like /apply, or a full web address starting with https://",
          },
        },
      ],
    },
  ],
});

/** A picture from the media library. */
export const image = (name = "image", label = "Image", required = false): Field => ({
  name,
  label,
  type: "upload",
  relationTo: "media",
  required,
});

/** The small gold-dash label that sits above each section heading. */
export const sectionLabel: Field = {
  name: "label",
  label: "Small label above the heading",
  type: "text",
};

/** A list of figures, e.g. "3,000+" / "young people trained". */
export const stats = (name = "stats", withText = false): Field => ({
  name,
  label: "Figures",
  type: "array",
  labels: { singular: "Figure", plural: "Figures" },
  admin: { initCollapsed: true, components: { RowLabel: "@/cms/admin/RowLabel#RowLabel" } },
  fields: [
    {
      type: "row",
      fields: [
        { name: "value", label: "Number", type: "text", required: true, admin: { width: "30%", description: "e.g. 3,000+ or 85%" } },
        { name: "label", label: "What it counts", type: "text", required: true, admin: { width: "70%" } },
      ],
    },
    ...(withText ? [{ name: "text", label: "Short explanation", type: "textarea" } as Field] : []),
  ],
});

/** A simple list of sentences (bullet points). */
export const points = (name = "points", label = "Bullet points"): Field => ({
  name,
  label,
  type: "array",
  labels: { singular: "Point", plural: "Points" },
  admin: { components: { RowLabel: "@/cms/admin/RowLabel#RowLabel" } },
  fields: [{ name: "text", label: "Text", type: "text", required: true }],
});
