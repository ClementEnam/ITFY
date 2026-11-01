"use client";

import { useRowLabel } from "@payloadcms/ui";

// Shows a readable name on each collapsed row in the admin ("Girls in Tech")
// instead of "Item 01", so editors can find things quickly.
const KEYS = ["title", "name", "tab", "question", "label", "value", "quote", "text"];

export function RowLabel() {
  const { data, rowNumber } = useRowLabel<Record<string, unknown>>();
  const found = KEYS.map((k) => data?.[k]).find((v) => typeof v === "string" && v.trim());
  const text = typeof found === "string" ? found : "";
  return <span>{text ? (text.length > 70 ? `${text.slice(0, 70)}…` : text) : `Item ${(rowNumber ?? 0) + 1}`}</span>;
}
