import type { Media } from "@/payload-types";

// Helpers that turn CMS values into what the components expect.

type MaybeMedia = number | string | Media | null | undefined;

/** The web address of an uploaded image, or "" if none is set. */
export function src(m: MaybeMedia): string {
  return m && typeof m === "object" && m.url ? m.url : "";
}

/** An image as { src, alt }, or null if none is set. */
export function img(m: MaybeMedia): { src: string; alt: string } | null {
  return m && typeof m === "object" && m.url ? { src: m.url, alt: m.alt ?? "" } : null;
}

/** A button/link, or undefined when its text or address is empty (so the component hides it). */
export function act(l?: { label?: string | null; href?: string | null } | null) {
  return l?.label && l?.href ? { label: l.label, href: l.href } : undefined;
}

/** Turns null into "" so optional text is easy to check. */
export function str(v?: string | null): string {
  return v ?? "";
}
