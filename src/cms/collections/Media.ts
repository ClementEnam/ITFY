import type { CollectionConfig } from "payload";
import { revalidateHooks } from "../revalidate";

// Every photo and logo on the site. Upload once, use anywhere.
export const Media: CollectionConfig = {
  slug: "media",
  labels: { singular: "Image", plural: "Images" },
  admin: { group: "Content", defaultColumns: ["filename", "alt", "updatedAt"] },
  access: { read: () => true },
  hooks: revalidateHooks,
  upload: {
    mimeTypes: ["image/*"],
    focalPoint: true,
    crop: true,
  },
  fields: [
    {
      name: "alt",
      label: "Description (for screen readers and search engines)",
      type: "text",
      required: true,
      admin: { description: "Say what the picture shows, e.g. \"Students coding at their desks\"." },
    },
  ],
};
