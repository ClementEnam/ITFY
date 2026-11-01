import type { GlobalConfig } from "payload";
import { revalidateHooks } from "../revalidate";

const rowLabel = { components: { RowLabel: "@/cms/admin/RowLabel#RowLabel" } };
const linkRow = [
  {
    type: "row" as const,
    fields: [
      { name: "label", label: "Text", type: "text" as const, required: true, admin: { width: "50%" } },
      { name: "href", label: "Goes to", type: "text" as const, required: true, admin: { width: "50%" } },
    ],
  },
];

// The footer on every page, and the contact details used across the site.
export const Footer: GlobalConfig = {
  slug: "footer",
  label: "Footer & contact details",
  admin: { group: "Site" },
  access: { read: () => true },
  hooks: { afterChange: revalidateHooks.afterChange },
  fields: [
    { name: "tagline", label: "Short description under the logo", type: "textarea" },
    {
      name: "contact",
      label: "Contact details",
      type: "group",
      fields: [
        {
          type: "row",
          fields: [
            { name: "location", label: "Location", type: "text", admin: { width: "33%" } },
            { name: "email", label: "Email", type: "email", admin: { width: "33%" } },
            { name: "phone", label: "Phone", type: "text", admin: { width: "34%" } },
          ],
        },
      ],
    },
    {
      name: "socials",
      label: "Social media",
      type: "array",
      labels: { singular: "Profile", plural: "Profiles" },
      admin: { components: { RowLabel: "@/cms/admin/RowLabel#RowLabel" } },
      fields: [
        {
          type: "row",
          fields: [
            {
              name: "name",
              label: "Platform",
              type: "select",
              required: true,
              options: ["Facebook", "X", "LinkedIn", "Instagram", "YouTube", "TikTok", "WhatsApp"],
              admin: { width: "35%" },
            },
            { name: "href", label: "Profile link", type: "text", required: true, admin: { width: "65%" } },
          ],
        },
      ],
    },
    {
      name: "columns",
      label: "Link columns",
      type: "array",
      labels: { singular: "Column", plural: "Columns" },
      admin: rowLabel,
      fields: [
        { name: "title", label: "Column heading", type: "text", required: true },
        { name: "links", label: "Links", type: "array", admin: rowLabel, fields: linkRow },
      ],
    },
    { name: "legalLinks", label: "Links in the bottom bar", type: "array", admin: rowLabel, fields: linkRow },
    {
      name: "copyright",
      label: "Copyright line",
      type: "text",
      defaultValue: "IT For Youth Ghana. Registered NGO. All rights reserved.",
      admin: { description: "The © sign and the current year are added automatically." },
    },
  ],
};
