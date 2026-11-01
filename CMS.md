# ITFY website: CMS guide

The site uses **Payload CMS**. The admin lives at **`/admin`** on the same site
(e.g. `http://localhost:3000/admin` on your laptop).

## Run it on your laptop

1. Copy `.env.example` to `.env` and set `PAYLOAD_SECRET` to any long random string:
   ```
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```
   Leave `DATABASE_URI` and `BLOB_READ_WRITE_TOKEN` empty. Content is then stored in a
   file called `itfy.db`, and uploaded images in a `media` folder. Both stay on your laptop
   (they're in `.gitignore`).
2. `npm install`
3. `npm run seed` copies all the site's current text and images into the CMS.
4. `npm run dev`, then open `http://localhost:3000/admin` and create your admin account.

## What can be edited

| In the admin | What it controls |
|---|---|
| **Content › Pages** | Every CMS page. A page is a list of **sections**: add one with *Add Section*, drag the handle to reorder, use the ⋯ menu to duplicate or remove. The homepage is the page with web address `home`. |
| **Content › Team members** | Our Team page + the homepage team section. Drag rows to reorder. |
| **Content › Partners** | Our Partners page + the homepage logo carousel. Drag rows to reorder. |
| **Content › Images** | Every uploaded photo and logo. |
| **Site › Navigation bar** | Menu, dropdowns, logo, Apply and Donate buttons. |
| **Site › Footer & contact details** | Footer text, contact details, social links, link columns. |
| **Settings › Admin users** | Who can log in. |

Pages have **Save draft** and **Publish**. Visitors only see published changes, and the
*Versions* tab lets you go back to any earlier version.

Changes appear on the live site as soon as they're published.

## Deploy on Vercel

1. **Database:** create a free cluster on MongoDB Atlas. Under *Network Access* allow
   `0.0.0.0/0` (Vercel's addresses change), create a database user, and copy the connection
   string. Add `/itfy` before the `?` so the database is called itfy.
2. **Images:** in your Vercel project, open *Storage › Create › Blob* and connect it to the
   project. Vercel adds `BLOB_READ_WRITE_TOKEN` for you.
3. **Environment variables** (Vercel › Settings › Environment Variables):
   `PAYLOAD_SECRET` (a new random string) and `DATABASE_URI` (the Atlas string).
4. **Fill the live database before deploying.** Run the seed from your laptop with the live values
   (copy `BLOB_READ_WRITE_TOKEN` from Vercel › Storage › your Blob store):
   ```
   # PowerShell
   $env:DATABASE_URI="mongodb+srv://..."; $env:BLOB_READ_WRITE_TOKEN="vercel_blob_rw_..."; npm run seed
   ```
   Close that terminal afterwards so your laptop goes back to the local database.
5. **Redeploy** on Vercel. Then open `https://your-site.vercel.app/admin` and create the admin account.

Deploys need `DATABASE_URI` set: without it the build has no database to read from and fails.

## For developers

- CMS code is in `src/cms/` (collections, globals, sections) and `src/payload.config.ts`.
- New kind of section: define it in `src/cms/blocks/`, add it to the `Pages` collection,
  then render it in `src/cms/RenderSections.tsx`.
- After changing fields, run `npm run generate:types` (updates `src/payload-types.ts`) and
  `npm run generate:importmap` if you added admin components.
- Pages that still have their own folder in `src/app/(frontend)/` (e.g. `apply`) are read
  from their `content.ts` files until they're moved into the CMS.
