"use client";

import { useInView } from "../who-we-are/useInView";

// Fundraising bar that fills up when it scrolls into view.
export default function ProgressBar({ raised, goal }: { raised: number; goal: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.5);
  const pct = Math.min(100, Math.round((raised / goal) * 100));
  const ghs = (n: number) => `GHS ${n.toLocaleString("en-US")}`;

  return (
    <div ref={ref}>
      <div className="flex items-end justify-between gap-4">
        <p>
          <span className="block text-4xl font-extrabold tracking-[-0.04em] text-ink">{ghs(raised)}</span>
          <span className="text-[0.9375rem] text-ink/60">raised of {ghs(goal)}</span>
        </p>
        <span className="text-2xl font-bold text-kente-green">{pct}%</span>
      </div>
      <div
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Campaign progress"
        className="mt-5 h-3 overflow-hidden rounded-full bg-line"
      >
        <div
          className="h-full rounded-full bg-kente-green transition-[width] duration-[1600ms] ease-out motion-reduce:transition-none"
          style={{ width: inView ? `${pct}%` : "0%" }}
        />
      </div>
    </div>
  );
}
