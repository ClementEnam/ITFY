"use client";

import { useEffect, useState } from "react";
import { useInView } from "../who-we-are/useInView";
import { CAMPAIGN, CURRENCY } from "./content";

// Progress card. Days remaining and the open/closed badge are worked out in the
// browser from CAMPAIGN.endsOn, so they stay correct without rebuilding the site.
export default function CampaignStats() {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    if (!CAMPAIGN.endsOn) return;
    const end = new Date(`${CAMPAIGN.endsOn}T23:59:59`).getTime();
    setDaysLeft(Math.max(0, Math.ceil((end - Date.now()) / 86_400_000)));
  }, []);

  const pct = CAMPAIGN.goal > 0 ? (CAMPAIGN.raised / CAMPAIGN.goal) * 100 : 0;
  const pctLabel = pct > 0 && pct < 1 ? "<1%" : `${Math.round(pct)}%`;
  const closed = daysLeft === 0;
  const money = (n: number) => `${CURRENCY}${n.toLocaleString("en-US")}`;

  return (
    <div ref={ref} className="flex h-full flex-col rounded-[2rem] bg-white p-7 ring-1 ring-line sm:p-9">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-ink/55">Campaign progress</p>
          <p className="mt-1 text-5xl font-extrabold tracking-[-0.04em] text-ink">{pctLabel}</p>
        </div>
        <span
          className={`rounded-full px-3 py-1.5 text-xs font-bold ${
            closed ? "bg-ink/10 text-ink/60" : "bg-kente-green/10 text-kente-green"
          }`}
        >
          {closed ? "Campaign closed" : "Active now"}
        </span>
      </div>

      <div className="mt-8 flex items-end justify-between gap-4">
        <p>
          <span className="block text-sm text-ink/55">Raised</span>
          <span className="text-3xl font-extrabold tracking-[-0.03em] text-ink">{money(CAMPAIGN.raised)}</span>
        </p>
        <p className="text-right">
          <span className="block text-sm text-ink/55">Goal</span>
          <span className="text-lg font-bold text-ink">{money(CAMPAIGN.goal)}</span>
        </p>
      </div>
      <div
        role="progressbar"
        aria-label="Campaign progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pct)}
        className="mt-4 h-3 overflow-hidden rounded-full bg-paper"
      >
        <div
          className="h-full min-w-2 rounded-full bg-kente-green transition-[width] duration-[1600ms] ease-out motion-reduce:transition-none"
          style={{ width: inView ? `${Math.min(100, pct)}%` : "0%" }}
        />
      </div>

      <dl className="mt-8 grid grid-cols-2 gap-3">
        <div className="rounded-2xl bg-paper p-5">
          <dt className="text-sm text-ink/55">Donors so far</dt>
          <dd className="mt-1 text-2xl font-extrabold text-ink">{CAMPAIGN.donors.toLocaleString("en-US")}</dd>
        </div>
        {daysLeft !== null && (
          <div className="rounded-2xl bg-paper p-5">
            <dt className="text-sm text-ink/55">Days remaining</dt>
            <dd className="mt-1 text-2xl font-extrabold text-ink">{daysLeft}</dd>
          </div>
        )}
      </dl>

      <p className="mt-8 text-[0.9375rem] leading-relaxed text-ink/65">{CAMPAIGN.note}</p>
    </div>
  );
}
