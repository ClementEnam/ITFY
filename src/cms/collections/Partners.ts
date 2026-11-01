import type { CollectionConfig } from "payload";
import { revalidateHooks } from "../revalidate";

// The Our Partners page and the homepage logo carousel both read this list.
// Drag rows in the list view to change the order.
export const Partners: CollectionConfig = {
  slug: "partners",
  labels: { singular: "Partner", plural: "Partners" },
  orderable: true,
  admin: { useAsTitle: "name", group: "Content", defaultColumns: ["name", "logo", "url"] },
  access: { read: () => true },
  hooks: revalidateHooks,
  fields: [
    { name: "name", label: "Name", type: "text", required: true },
    { name: "logo", label: "Logo", type: "upload", relationTo: "media", admin: { description: "Without one, the name is shown as text." } },
    { name: "url", label: "Website", type: "text" },
    { name: "role", label: "How they work with ITFY (short note)", type: "textarea" },
  ],
};
