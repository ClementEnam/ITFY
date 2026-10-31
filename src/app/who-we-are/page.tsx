import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DRIVES, EXPLORE, HERO, MODEL, NEXT_MOVE, PRINCIPLES, SECTIONS } from "../components/about/content";
import { Arrow, container, h2, sectionSpace, SectionLabel } from "../components/home/ui";
import ExploreBand from "../components/shared/ExploreBand";
import NumbersBand from "../components/shared/NumbersBand";
import { NUMBERS } from "../components/team/content";
import Reveal from "../components/who-we-are/Reveal";
import SectionNav from "../components/who-we-are/SectionNav";

export const metadata: Metadata = {
  title: "Who we are | IT For Youth Ghana",
  description: HERO.lead,
};

export default function WhoWeArePage() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="overflow-hidden">
        <div className={`${container} pt-8`}>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-ink/55">
              <li>
                <Link href="/" className="hover:text-ink">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-ink">Who we are</li>
            </ol>
          </nav>
        </div>

        <div className={`${container} grid items-center gap-14 pb-20 pt-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pb-24`}>
          <div>
            <div className="animate-hero-rise motion-reduce:animate-none">
              <SectionLabel>{HERO.label}</SectionLabel>
            </div>
            <h1 className="mt-5 animate-hero-rise text-[clamp(3.25rem,9vw,7.5rem)] font-extrabold leading-[0.95] tracking-[-0.05em] text-ink motion-reduce:animate-none">
              {HERO.title}
            </h1>
            <p className="mt-8 max-w-[40ch] animate-hero-rise text-xl leading-relaxed text-ink/75 [animation-delay:150ms] motion-reduce:animate-none sm:text-2xl">
              {HERO.lead}
            </p>
            <div className="mt-10 flex animate-hero-rise flex-wrap gap-3 [animation-delay:300ms] motion-reduce:animate-none">
              <Link href={HERO.actions[0].href} className="rounded-full bg-ink px-7 py-3.5 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-ink-soft">
                {HERO.actions[0].label}
              </Link>
              <Link href={HERO.actions[1].href} className="rounded-full bg-white px-7 py-3.5 text-[0.9375rem] font-semibold text-ink ring-1 ring-line transition-colors hover:ring-ink">
                {HERO.actions[1].label}
              </Link>
            </div>
          </div>

          <div className="relative">
            <div aria-hidden="true" className="absolute right-0 top-0 h-[62%] w-[52%] animate-hero-rise rounded-[2rem] bg-gold motion-reduce:animate-none" />
            <div className="relative mr-[10%] mt-[10%] aspect-[5/4] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(16,32,74,0.55)]">
              <Image src={HERO.image.src} alt={HERO.image.alt} fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <SectionNav sections={SECTIONS} />

      {/* ---------------- Overview: what drives us ---------------- */}
      <section id="overview" className={sectionSpace}>
        <div className={`${container} grid items-center gap-12 lg:grid-cols-2 lg:gap-20`}>
          <div>
            <Reveal>
              <SectionLabel>{DRIVES.label}</SectionLabel>
              <h2 className={`${h2} mt-5 max-w-[18ch] text-ink`}>{DRIVES.title}</h2>
              <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-ink/70">{DRIVES.text}</p>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-8 rounded-[1.75rem] border-l-[4px] border-gold bg-white p-7 text-lg leading-relaxed text-ink/80 ring-1 ring-line sm:p-8">
                {DRIVES.highlight}
              </p>
            </Reveal>
          </div>
          <Reveal variant="wipe" className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image src={DRIVES.image.src} alt={DRIVES.image.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="rounded-[2rem] object-cover" />
          </Reveal>
        </div>
      </section>

      <NumbersBand label={NUMBERS.label} title={NUMBERS.title} stats={NUMBERS.stats} />

      {/* ---------------- Operating model ---------------- */}
      <section id="operating-model" className={`bg-white ${sectionSpace}`}>
        <div className={container}>
          <Reveal className="mx-auto max-w-3xl md:text-center">
            <div className="md:flex md:justify-center">
              <SectionLabel>{MODEL.label}</SectionLabel>
            </div>
            <h2 className={`${h2} mt-5 text-ink`}>{MODEL.title}</h2>
            <p className="mx-auto mt-6 max-w-[52ch] text-lg leading-relaxed text-ink/70">{MODEL.text}</p>
          </Reveal>

          <ol className="mt-14 grid gap-6 lg:grid-cols-3">
            {MODEL.cards.map((card, i) => (
              <li key={card.title}>
                <Reveal delay={i * 120} className="h-full">
                  <article className="flex h-full flex-col rounded-[2rem] bg-paper p-8 ring-1 ring-line sm:p-9">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-ink text-[0.9375rem] font-bold text-white">{i + 1}</span>
                    <h3 className="mt-6 text-2xl font-bold tracking-[-0.02em] text-ink">{card.title}</h3>
                    <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink/75">{card.text}</p>
                    <p className="mt-6 border-l-[3px] border-gold pl-5 text-[0.9375rem] leading-relaxed text-ink/60">
                      {card.note}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------------- Principles ---------------- */}
      <section id="principles" className={`bg-ink text-white ${sectionSpace}`}>
        <div className={`${container} grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16`}>
          {/* photo with the headline statement on it; stays in view on large screens */}
          <Reveal className="lg:sticky lg:top-44 lg:self-start">
            <figure className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image src={PRINCIPLES.feature.image.src} alt={PRINCIPLES.feature.image.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
                <SectionLabel light>{PRINCIPLES.feature.label}</SectionLabel>
                <p className="mt-4 max-w-[16ch] text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-[1.08] tracking-[-0.03em]">
                  {PRINCIPLES.feature.title}
                </p>
              </figcaption>
            </figure>
          </Reveal>

          <div>
            <Reveal>
              <SectionLabel light>{PRINCIPLES.label}</SectionLabel>
              <h2 className={`${h2} mt-5`}>{PRINCIPLES.title}</h2>
              <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-white/70">{PRINCIPLES.text}</p>
            </Reveal>
            <div className="mt-10 space-y-5">
              {PRINCIPLES.cards.map((card, i) => (
                <Reveal key={card.title} delay={i * 120}>
                  <article className="rounded-[1.75rem] bg-white/[0.06] p-7 ring-1 ring-white/15 sm:p-9">
                    <h3 className="text-2xl font-bold tracking-[-0.02em]">{card.title}</h3>
                    <p className="mt-4 text-[0.9375rem] leading-relaxed text-white/80 sm:text-base">{card.text}</p>
                    <p className="mt-6 border-l-[3px] border-gold pl-5 text-[0.9375rem] leading-relaxed text-white/65">{card.note}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Explore ---------------- */}
      <div id="explore">
        <ExploreBand label={EXPLORE.label} title={EXPLORE.title} cards={EXPLORE.cards} />
      </div>

      {/* ---------------- Next move ---------------- */}
      <section className="pb-20 sm:pb-24">
        <div className={container}>
          <Reveal className="grid gap-10 rounded-[2.5rem] bg-gold px-6 py-12 sm:px-12 sm:py-14 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:px-16">
            <div>
              {/* navy bar instead of gold, so it shows on the gold card */}
              <div className="flex items-center gap-3 text-[0.9375rem] font-semibold text-ink/70">
                <span aria-hidden="true" className="h-[3px] w-6 rounded-full bg-ink" />
                {NEXT_MOVE.label}
              </div>
              <h2 className="mt-5 max-w-[20ch] text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-ink">
                {NEXT_MOVE.title}
              </h2>
              <p className="mt-5 max-w-[48ch] text-lg leading-relaxed text-ink/80">{NEXT_MOVE.text}</p>
            </div>
            <ul className="space-y-3">
              {NEXT_MOVE.routes.map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="group flex items-center justify-between rounded-full bg-white px-7 py-4 text-[0.9375rem] font-semibold text-ink shadow-[0_16px_32px_-20px_rgba(16,32,74,0.5)] transition-colors hover:bg-ink hover:text-white"
                  >
                    {r.label}
                    <Arrow />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
