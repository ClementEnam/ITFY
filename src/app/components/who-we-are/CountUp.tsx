"use client";

import { useEffect, useState } from "react";
import { useInView } from "./useInView";

// Counts a stat like "3,000+", "85%" or "30.1%" up from zero when it scrolls into view.
// Screen readers always get the final value.
export default function CountUp({ value, className = "" }: { value: string; className?: string }) {
  const match = value.match(/^([^\d]*)([\d,]*\.?\d+)(.*)$/);
  const target = match ? Number(match[2].replace(/,/g, "")) : 0;
  const decimals = match?.[2].split(".")[1]?.length ?? 0;
  const prefix = match?.[1] ?? "";
  const suffix = match?.[3] ?? "";

  const { ref, inView } = useInView<HTMLSpanElement>(0.6);
  const [current, setCurrent] = useState<number | null>(null); // null = show final value

  useEffect(() => {
    if (!match || !inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const duration = 1600;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 4);
      setCurrent(t < 1 ? target * eased : null);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, target]);

  const shown =
    current === null
      ? value
      : `${prefix}${current.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}${suffix}`;

  return (
    <span ref={ref} className={`tabular-nums ${className}`} aria-label={value}>
      <span aria-hidden="true">{shown}</span>
    </span>
  );
}
