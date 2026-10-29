import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { container, h2, sectionSpace, SectionLabel } from "../../components/home/ui";
import { EXPLORE, HERO, NETWORK, PARTNERS, VALUE } from "../../components/partners/content";
import PartnerTile from "../../components/partners/PartnerTile";
// import ExploreBand from "../../components/shared/ExploreBand";
// import NumbersBand from "../../components/shared/NumbersBand";
import { NUMBERS } from "../../components/team/content";
import Reveal from "../../components/who-we-are/Reveal";

export const metadata: Metadata = {
  title: "Our partners | IT For Youth Ghana",
  description: HERO.lead,
};

export default function PartnersPage() {
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
              <li>
                <Link href="/who-we-are" className="hover:text-ink">Who we are</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-ink">Our partners</li>
            </ol>
          </nav>
        </div>

        <div className={`${container} grid items-center gap-14 pb-20 pt-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pb-24`}>
          <div>
            <div className="animate-hero-rise motion-reduce:animate-none">
              <SectionLabel>{HERO.label}</SectionLabel>
            </div>
            <h1 className="mt-5 animate-hero-rise text-[clamp(3.25rem,8vw,6.5rem)] font-extrabold leading-[0.95] tracking-[-0.05em] text-ink motion-reduce:animate-none">
              {HERO.title}
            </h1>
            <p className="mt-8 max-w-[44ch] animate-hero-rise text-xl leading-relaxed text-ink/75 [animation-delay:150ms] motion-reduce:animate-none">
              {HERO.lead}
            </p>
            <p className="mt-5 max-w-[56ch] animate-hero-rise text-[15px] leading-relaxed text-ink/60 [animation-delay:220ms] motion-reduce:animate-none">
              {HERO.note}
            </p>
            <div className="mt-10 flex animate-hero-rise flex-wrap gap-3 [animation-delay:300ms] motion-reduce:animate-none">
              <Link href={HERO.actions[0].href} className="rounded-full bg-ink px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-ink-soft">
                {HERO.actions[0].label}
              </Link>
              <Link href={HERO.actions[1].href} className="rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-ink ring-1 ring-line transition-colors hover:ring-ink">
                {HERO.actions[1].label}
              </Link>
            </div>
          </div>

          <div className="relative">
            <div aria-hidden="true" className="absolute bottom-0 left-0 h-[62%] w-[52%] animate-hero-rise rounded-[2rem] bg-gold motion-reduce:animate-none" />
            <div className="relative mb-[9%] ml-[9%] aspect-[5/4] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(16,32,74,0.55)]">
              <Image src={HERO.image.src} alt={HERO.image.alt} fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <NumbersBand label={NUMBERS.label} title={NUMBERS.title} stats={NUMBERS.stats} />

      {/* ---------------- What partners get / principles ---------------- */}
      <section className={`bg-white ${sectionSpace}`}>
        <div className={`${container} grid gap-6 lg:grid-cols-2`}>
          {VALUE.map((v, i) => (
            <Reveal key={v.title} delay={i * 150} className="h-full">
              <article className={`h-full rounded-[2rem] p-8 sm:p-10 ${i === 0 ? "bg-paper" : "bg-gold/15"}`}>
                <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink">{v.title}</h2>
                <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-ink/75">{v.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- Partner network ---------------- */}
      <section id="network" className={sectionSpace}>
        <div className={container}>
          <Reveal className="max-w-3xl">
            <SectionLabel>{NETWORK.label}</SectionLabel>
            <h2 className={`${h2} mt-5 text-ink`}>{NETWORK.title}</h2>
            <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-ink/70">{NETWORK.text}</p>
          </Reveal>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {PARTNERS.map((p, i) => (
              <li key={p.name}>
                <Reveal delay={(i % 4) * 100} className="h-full">
                  <PartnerTile partner={p} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ExploreBand label={EXPLORE.label} title={EXPLORE.title} cards={EXPLORE.cards} />
    </>
  );
}
