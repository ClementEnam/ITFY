import type { CollectionConfig } from "payload";
import { revalidateHooks } from "../revalidate";

// The Our Team page and the homepage team section both read this list.
// Drag rows in the list view to change the order people appear in.
export const TeamMembers: CollectionConfig = {
  slug: "team-members",
  labels: { singular: "Team member", plural: "Team members" },
  orderable: true,
  admin: { useAsTitle: "name", group: "Content", defaultColumns: ["name", "role", "featured"] },
  access: { read: () => true },
  hooks: revalidateHooks,
  fields: [
    {
      type: "row",
      fields: [
        { name: "name", label: "Name", type: "text", required: true, admin: { width: "50%" } },
        { name: "role", label: "Role", type: "text", required: true, admin: { width: "50%" } },
      ],
    },
    { name: "photo", label: "Photo", type: "upload", relationTo: "media", admin: { description: "Without one, the ITFY logo is shown." } },
    { name: "bio", label: "Bio", type: "textarea" },
    {
      type: "row",
      fields: [
        { name: "email", label: "Email", type: "email", admin: { width: "50%" } },
        { name: "linkedin", label: "LinkedIn profile URL", type: "text", admin: { width: "50%" } },
      ],
    },
    {
      name: "featured",
      label: "Featured (shown as the wide card at the top of Our Team)",
      type: "checkbox",
      admin: { position: "sidebar" },
    },
  ],
};
