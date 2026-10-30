import type { Metadata } from "next";
import Link from "next/link";
import { container, h2, sectionSpace, SectionLabel } from "../../components/home/ui";
import { ACCEPTED, CHECK, CTA, HERO, NOT_ACCEPTED, WHY } from "../../components/laptop-bank/accept";
import Reveal from "../../components/who-we-are/Reveal";

export const metadata: Metadata = {
  title: "What we accept | IT For Youth Laptop Bank",
  description: WHY.text,
};

const Tick = () => (
  <span aria-hidden="true" className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-kente-green text-white">
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0z" clipRule="evenodd" />
    </svg>
  </span>
);

const Cross = () => (
  <span aria-hidden="true" className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-kente-red/10 text-kente-red">
    <svg viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M5.3 5.3a1 1 0 0 1 1.4 0L10 8.6l3.3-3.3a1 1 0 1 1 1.4 1.4L11.4 10l3.3 3.3a1 1 0 0 1-1.4 1.4L10 11.4l-3.3 3.3a1 1 0 0 1-1.4-1.4L8.6 10 5.3 6.7a1 1 0 0 1 0-1.4z" />
    </svg>
  </span>
);

export default function WhatWeAcceptPage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="bg-ink text-white">
        <div className={`${container} pb-20 pt-8 sm:pb-24`}>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/laptop-bank" className="hover:text-white">Laptop Bank</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-white">What we accept</li>
            </ol>
          </nav>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <div>
              <div className="animate-hero-rise motion-reduce:animate-none">
                <SectionLabel light>{HERO.label}</SectionLabel>
              </div>
              <h1 className="mt-5 animate-hero-rise text-[clamp(3rem,8vw,6.5rem)] font-extrabold leading-[0.95] tracking-[-0.05em] motion-reduce:animate-none">
                {HERO.title}
              </h1>
            </div>
            <p className="max-w-[52ch] animate-hero-rise text-lg leading-relaxed text-white/75 [animation-delay:150ms] motion-reduce:animate-none">
              {WHY.text}
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Check two things ---------- */}
      <section className="-mt-10 sm:-mt-12">
        <div className={container}>
          <Reveal className="grid gap-8 rounded-[2rem] bg-gold p-7 shadow-[0_40px_80px_-40px_rgba(16,32,74,0.55)] sm:p-10 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-14">
            <div>
              <p className="text-sm font-bold text-ink/70">Before you offer anything</p>
              <h2 className="mt-2 text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink">{CHECK.title}</h2>
              <p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed text-ink/80 sm:text-base">{CHECK.text}</p>
            </div>
            <ol className="space-y-3">
              {CHECK.items.map((it, i) => (
                <li key={it} className="flex items-center gap-4 rounded-2xl bg-white p-5 text-[15px] font-semibold text-ink">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ink text-sm font-bold text-white">{i + 1}</span>
                  {it}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* ---------- Accepted ---------- */}
      <section className={sectionSpace}>
        <div className={container}>
          <Reveal className="max-w-3xl">
            <SectionLabel>The specification</SectionLabel>
            <h2 className={`${h2} mt-5 text-ink`}>Every unit is tested against these minimums</h2>
          </Reveal>

          <Reveal className="mt-12">
            <h3 className="flex items-center gap-3 text-2xl font-bold tracking-[-0.02em] text-ink">
              <Tick /> What we accept
            </h3>
            <ul className="mt-6 overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-line">
              <li aria-hidden="true" className="hidden grid-cols-[0.9fr_1.6fr_1.4fr] gap-8 bg-paper px-7 py-4 text-sm font-semibold text-ink/55 md:grid">
                <span>Item</span>
                <span>Minimum accepted</span>
                <span>Notes</span>
              </li>
              {ACCEPTED.map((a) => (
                <li key={a.item} className="grid gap-2 border-t border-line px-6 py-5 first:border-t-0 md:grid-cols-[0.9fr_1.6fr_1.4fr] md:gap-8 md:px-7">
                  <span className="font-bold text-ink">{a.item}</span>
                  <span className="text-[15px] text-ink/85">
                    <span className="mr-1 text-ink/50 md:hidden">Minimum:</span>
                    {a.minimum}
                  </span>
                  <span className="text-[15px] text-ink/60">{a.note}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="mt-14">
            <h3 className="flex items-center gap-3 text-2xl font-bold tracking-[-0.02em] text-ink">
              <Cross /> What we cannot accept
            </h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {NOT_ACCEPTED.map((n) => (
                <li key={n.item} className="flex gap-4 rounded-[1.5rem] bg-white p-5 ring-1 ring-line">
                  <Cross />
                  <span>
                    <span className="block font-bold text-ink">{n.item}</span>
                    {n.note && <span className="mt-1 block text-[15px] leading-snug text-ink/60">{n.note}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="pb-20 sm:pb-24">
        <div className={container}>
          <Reveal className="grid gap-8 rounded-[2.5rem] bg-ink px-6 py-12 text-white sm:px-12 sm:py-14 lg:grid-cols-[1.4fr_auto] lg:items-center lg:px-16">
            <p className="max-w-[44ch] text-[clamp(1.4rem,2.6vw,2rem)] font-bold leading-snug tracking-[-0.02em]">{CTA.text}</p>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href={CTA.primary.href} className="rounded-full bg-gold px-7 py-3.5 text-center text-[15px] font-bold text-ink transition-colors hover:bg-gold-soft">
                {CTA.primary.label}
              </Link>
              <Link href={CTA.secondary.href} className="rounded-full bg-white/10 px-7 py-3.5 text-center text-[15px] font-semibold ring-1 ring-white/25 transition-colors hover:bg-white/15">
                {CTA.secondary.label}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
