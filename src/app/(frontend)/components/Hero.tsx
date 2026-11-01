"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";

type Audience = {
  id: string;
  tab: string;
  title: string;
  text?: string;
  image: string;
  alt: string;
  caption?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export type { Audience };

export default function Hero({ prompt = "I want to", audiences: AUDIENCES }: { prompt?: string; audiences: Audience[] }) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = AUDIENCES[active];

  // Arrow keys move between tabs (standard tab-list keyboard behaviour)
  const onTabKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const last = AUDIENCES.length - 1;
    let next: number | null = null;
    if (e.key === "ArrowRight") next = active === last ? 0 : active + 1;
    if (e.key === "ArrowLeft") next = active === 0 ? last : active - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next !== null) {
      e.preventDefault();
      setActive(next);
      tabRefs.current[next]?.focus();
    }
  };

  return (
    <section className="overflow-hidden">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-4 pb-20 pt-12 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-20 lg:px-8 lg:pb-28 lg:pt-20">
        {/* ---------- Text side ---------- */}
        <div>
          {/* "I want to [learn | support | hire]" */}
          <div className="flex flex-wrap items-center gap-3">
            <span id="hero-audience-label" className="text-[0.9375rem] font-medium text-ink/60">
              {prompt}
            </span>
            <div
              role="tablist"
              aria-labelledby="hero-audience-label"
              onKeyDown={onTabKeyDown}
              className="inline-flex rounded-full border border-line bg-white p-1"
            >
              {AUDIENCES.map((a, i) => {
                const on = i === active;
                return (
                  <button
                    key={a.id}
                    ref={(el) => {
                      tabRefs.current[i] = el;
                    }}
                    type="button"
                    role="tab"
                    id={`hero-tab-${a.id}`}
                    aria-selected={on}
                    aria-controls={`hero-panel-${a.id}`}
                    tabIndex={on ? 0 : -1}
                    onClick={() => setActive(i)}
                    className={`rounded-full px-5 py-2 text-[0.9375rem] font-semibold transition-colors duration-200 ${
                      on ? "bg-ink text-white" : "text-ink/65 hover:text-ink"
                    }`}
                  >
                    {a.tab}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Panels share one grid cell, so the height never jumps */}
          <div className="mt-10 grid">
            {AUDIENCES.map((a, i) => {
              const on = i === active;
              return (
                <div
                  key={a.id}
                  role="tabpanel"
                  id={`hero-panel-${a.id}`}
                  aria-labelledby={`hero-tab-${a.id}`}
                  aria-hidden={!on}
                  inert={!on}
                  className={`col-start-1 row-start-1 transition-[opacity,transform] duration-500 ease-out ${
                    on ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
                  }`}
                >
                  <h1 className="max-w-[16ch] text-[clamp(2.5rem,5.2vw,4.5rem)] font-extrabold leading-[1.02] tracking-[-0.035em] text-ink">
                    {a.title}
                  </h1>
                  <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-ink/70">{a.text}</p>
                  <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
                    <Link
                      href={a.primary.href}
                      className="rounded-full bg-ink px-7 py-3.5 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-ink-soft"
                    >
                      {a.primary.label}
                    </Link>
                    {a.secondary && (
                    <Link
                      href={a.secondary.href}
                      className="text-[0.9375rem] font-semibold text-ink underline decoration-gold decoration-[3px] underline-offset-[6px] transition-colors hover:decoration-ink"
                    >
                      {a.secondary.label}
                    </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ---------- Image side ---------- */}
        <div className="relative">
          {/* offset gold block peeking out behind the photo */}
          <div aria-hidden="true" className="absolute bottom-0 left-0 h-[62%] w-[58%] animate-hero-rise rounded-[2rem] bg-gold motion-reduce:animate-none" />

          <div className="relative mb-[11%] ml-[11%] aspect-[4/3] overflow-hidden rounded-[2rem] bg-ink/10 shadow-[0_40px_80px_-40px_rgba(16,32,74,0.55)]">
            {AUDIENCES.map((a, i) => (
              <div
                key={a.id}
                aria-hidden={i !== active}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={a.image}
                  alt={a.alt}
                  fill
                  priority={i === 0}
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}

            {current?.caption && (
              <p className="absolute bottom-4 right-4 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-ink backdrop-blur">
                {current.caption}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
