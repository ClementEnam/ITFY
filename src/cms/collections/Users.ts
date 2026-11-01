import type { CollectionConfig } from "payload";

// People who can log in to the admin.
export const Users: CollectionConfig = {
  slug: "users",
  labels: { singular: "Admin user", plural: "Admin users" },
  admin: { useAsTitle: "email", group: "Settings" },
  auth: true,
  fields: [{ name: "name", label: "Name", type: "text" }],
};
