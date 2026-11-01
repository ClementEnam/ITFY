import type { GlobalConfig } from "payload";
import { link } from "../fields";
import { revalidateHooks } from "../revalidate";

const rowLabel = { components: { RowLabel: "@/cms/admin/RowLabel#RowLabel" } };

// The top navigation bar on every page.
export const Header: GlobalConfig = {
  slug: "header",
  label: "Navigation bar",
  admin: { group: "Site" },
  access: { read: () => true },
  hooks: { afterChange: revalidateHooks.afterChange },
  fields: [
    {
      type: "row",
      fields: [
        { name: "siteName", label: "Name next to the logo", type: "text", defaultValue: "IT For Youth Ghana", admin: { width: "50%" } },
        { name: "tagline", label: "Small line under the name", type: "text", defaultValue: "Digital skills & opportunity", admin: { width: "50%" } },
      ],
    },
    { name: "logo", label: "Logo", type: "upload", relationTo: "media", admin: { description: "Leave empty to use the standard ITFY logo." } },
    {
      name: "navItems",
      label: "Menu",
      type: "array",
      labels: { singular: "Menu item", plural: "Menu items" },
      admin: rowLabel,
      fields: [
        {
          type: "row",
          fields: [
            { name: "label", label: "Text", type: "text", required: true, admin: { width: "50%" } },
            { name: "href", label: "Goes to", type: "text", required: true, admin: { width: "50%" } },
          ],
        },
        {
          name: "children",
          label: "Dropdown links (optional)",
          type: "array",
          labels: { singular: "Dropdown link", plural: "Dropdown links" },
          admin: { ...rowLabel, initCollapsed: true },
          fields: [
            {
              type: "row",
              fields: [
                { name: "label", label: "Text", type: "text", required: true, admin: { width: "50%" } },
                { name: "href", label: "Goes to", type: "text", required: true, admin: { width: "50%" } },
              ],
            },
            { name: "description", label: "Short description (optional)", type: "text" },
          ],
        },
      ],
    },
    link("applyButton", "Apply button"),
    link("donateButton", "Donate button"),
  ],
};
