import { revalidateTag } from "next/cache";

// Everything the site reads from the CMS is cached under this one tag.
// Saving anything in the admin clears it, so the change shows on the live site straight away.
export const CMS_TAG = "cms";

type HookArgs = { req: { context?: Record<string, unknown> } };

export function revalidateSite({ req }: HookArgs) {
  if (req.context?.skipRevalidate) return; // set by the seed script, which runs outside Next.js
  try {
    revalidateTag(CMS_TAG, { expire: 0 }); // the very next visit gets the new content
  } catch {
    // Not running inside Next.js (e.g. a command-line script): nothing to clear.
  }
}

export const revalidateHooks = {
  afterChange: [revalidateSite],
  afterDelete: [revalidateSite],
};
