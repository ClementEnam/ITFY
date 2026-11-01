import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { sqliteAdapter } from "@payloadcms/db-sqlite";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";

import { Media } from "./cms/collections/Media";
import { Pages } from "./cms/collections/Pages";
import { Partners } from "./cms/collections/Partners";
import { TeamMembers } from "./cms/collections/TeamMembers";
import { Users } from "./cms/collections/Users";
import { Footer } from "./cms/globals/Footer";
import { Header } from "./cms/globals/Header";

const dirname = path.dirname(fileURLToPath(import.meta.url));

// Database: with a MongoDB address in DATABASE_URI (on Vercel), content lives in MongoDB Atlas.
// Without one (on your laptop), it lives in a small file, itfy.db, so you can work with no accounts.
const databaseUri = process.env.DATABASE_URI || "";
const db = databaseUri.startsWith("mongodb")
  ? mongooseAdapter({ url: databaseUri })
  : sqliteAdapter({ client: { url: databaseUri || "file:./itfy.db" } });

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
    meta: { titleSuffix: " | ITFY admin" },
    components: {
      graphics: { Logo: "@/cms/admin/Brand#Logo", Icon: "@/cms/admin/Brand#Icon" },
    },
  },
  collections: [Pages, TeamMembers, Partners, Media, Users],
  globals: [Header, Footer],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: { outputFile: path.resolve(dirname, "payload-types.ts") },
  db,
  sharp,
  plugins: [
    // Images go to Vercel Blob when its token is set (on Vercel). Otherwise they're saved in /media on your laptop.
    vercelBlobStorage({
      enabled: Boolean(process.env.BLOB_READ_WRITE_TOKEN),
      collections: { media: true },
      token: process.env.BLOB_READ_WRITE_TOKEN || "",
    }),
  ],
});
