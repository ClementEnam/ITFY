import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import KenteWeave from "../components/Kenteweave";
import CountUp from "../components/who-we-are/CountUp";
import Ecosystem from "../components/who-we-are/Ecosystem";
import ModelSteps from "../components/who-we-are/ModelSteps";
import Principles from "../components/who-we-are/Principles";
import Reveal from "../components/who-we-are/Reveal";
import SectionNav from "../components/who-we-are/SectionNav";
import {
  BELIEVE,
  DRIVES,
  ECOSYSTEM,
  HERO,
  MODEL,
  NEXT_MOVE,
  PEOPLE,
  PRINCIPLES,
} from "../components/who-we-are/content";

export const metadata: Metadata = {
  title: "Who we are | IT For Youth Ghana",
  description: HERO.lead,
};

const container = "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8";
const sectionSpace = "py-20 sm:py-24 lg:py-32";
const h2 = "text-[clamp(2rem,4.2vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.035em]";

// Small section name with a woven square — matches the "On this page" bar.
function SectionLabel({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <div className={`flex items-center gap-3 text-[15px] font-semibold ${light ? "text-white/70" : "text-ink/55"}`}>
      <Image alt="Nav Photo" src="/logo/logo.png" height={30} width = {30}/>
      {children}
    </div>
  );
}

export default function WhoWeArePage() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="overflow-hidden">
        <div className={`${container} grid items-center gap-14 pb-20 pt-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pb-28 lg:pt-20`}>
          <div>
            <h1 className="animate-hero-rise text-[clamp(3.25rem,9vw,7.5rem)] font-extrabold leading-[0.95] tracking-[-0.05em] text-ink motion-reduce:animate-none">
              {HERO.title}
            </h1>
            <p className="mt-8 max-w-[38ch] animate-hero-rise [animation-delay:150ms] text-xl leading-relaxed text-ink/70 motion-reduce:animate-none sm:text-2xl">
              {HERO.lead}
            </p>
            <div className="mt-10 flex animate-hero-rise [animation-delay:300ms] flex-wrap gap-3 motion-reduce:animate-none">
              <Link
                href={HERO.actions[0].href}
                className="rounded-full bg-ink px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-ink-soft"
              >
                {HERO.actions[0].label}
              </Link>
              <Link
                href={HERO.actions[1].href}
                className="rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-ink ring-1 ring-line transition-colors hover:ring-ink"
              >
                {HERO.actions[1].label}
              </Link>
            </div>
          </div>

          {/* photo framed by the weave */}
          <div className="relative">
            <KenteWeave cols={10} rows={10} animate className="absolute right-0 top-0 w-[52%]" />
            <div className="relative mr-[10%] mt-[10%] aspect-[5/4] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(16,32,74,0.55)]">
              <Image src={HERO.image.src} alt={HERO.image.alt} fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <SectionNav />

      {/* ---------------- What drives us ---------------- */}
      <section id="what-drives-us" className={sectionSpace}>
        <div className={`${container} grid items-center gap-12 lg:grid-cols-2 lg:gap-20`}>
          <Reveal variant="wipe" className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image src={DRIVES.image.src} alt={DRIVES.image.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
          </Reveal>

          <div>
            <Reveal>
              <SectionLabel>{DRIVES.label}</SectionLabel>
              <h2 className={`${h2} mt-5 max-w-[18ch] text-ink`}>{DRIVES.title}</h2>
              <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-ink/70">{DRIVES.text}</p>
            </Reveal>

            <Reveal delay={150} className="mt-10">
              <h3 className="text-base font-bold text-ink">{DRIVES.listTitle}</h3>
              <ul className="mt-4 space-y-3">
                {DRIVES.list.map((point, i) => (
                  <li key={point} className="flex gap-4 rounded-2xl bg-white px-5 py-4 ring-1 ring-line">
                    <span
                      aria-hidden="true"
                      className={`mt-2 h-2.5 w-2.5 shrink-0 rounded-[2px] ${
                        ["bg-gold", "bg-kente-green", "bg-kente-red"][i % 3]
                      }`}
                    />
                    <span className="text-[15px] leading-relaxed text-ink">{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- What we believe (dark) ---------------- */}
      <section id="what-we-believe" className={`bg-ink text-white ${sectionSpace}`}>
        <div className={`${container} grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20`}>
          <Reveal variant="wipe" className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-t-full rounded-b-[2rem] lg:max-w-none">
            <Image src={BELIEVE.image.src} alt={BELIEVE.image.alt} fill sizes="(min-width: 1024px) 38vw, 100vw" className="object-cover" />
          </Reveal>

          <div>
            <Reveal>
              <SectionLabel light>{BELIEVE.label}</SectionLabel>
              <h2 className={`${h2} mt-5 max-w-[20ch]`}>{BELIEVE.title}</h2>
              <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-white/70">{BELIEVE.text}</p>
            </Reveal>

            <dl className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-[1.75rem] bg-white/10 sm:grid-cols-2">
              {BELIEVE.stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 100} className="bg-ink p-7">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <CountUp value={stat.value} className="block text-5xl font-extrabold tracking-[-0.04em] text-gold" />
                    <span className="mt-2 block max-w-[28ch] text-[15px] leading-snug text-white/70">{stat.label}</span>
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ---------------- Operating model ---------------- */}
      <section id="operating-model" className={`bg-white ${sectionSpace}`}>
        <div className={container}>
          <Reveal className="max-w-3xl">
            <SectionLabel>{MODEL.label}</SectionLabel>
            <h2 className={`${h2} mt-5 text-ink`}>{MODEL.title}</h2>
            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-ink/70">{MODEL.text}</p>
          </Reveal>
          <div className="mt-16">
            <ModelSteps />
          </div>
        </div>
      </section>

      {/* ---------------- Principles ---------------- */}
      <section id="principles" className={sectionSpace}>
        <div className={`${container} grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20`}>
          <Reveal className="lg:sticky lg:top-44 lg:self-start">
            <SectionLabel>{PRINCIPLES.label}</SectionLabel>
            <h2 className={`${h2} mt-5 text-ink`}>{PRINCIPLES.title}</h2>
            <p className="mt-6 max-w-[44ch] text-lg leading-relaxed text-ink/70">{PRINCIPLES.text}</p>
          </Reveal>
          <Reveal delay={150}>
            <Principles />
          </Reveal>
        </div>
      </section>

      {/* ---------------- Our people ---------------- */}
      <section id="our-people" className="pb-20 sm:pb-24 lg:pb-32">
        <div className={container}>
          <div className="grid overflow-hidden rounded-[2.5rem] bg-white ring-1 ring-line lg:grid-cols-2">
            <Reveal variant="wipe" className="relative min-h-[320px] sm:min-h-[420px]">
              <Image src={PEOPLE.image.src} alt={PEOPLE.image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </Reveal>
            <Reveal delay={200} className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
              <SectionLabel>{PEOPLE.label}</SectionLabel>
              <h2 className={`${h2} mt-5 text-ink`}>{PEOPLE.title}</h2>
              <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-ink/70">{PEOPLE.text}</p>
              <Link
                href={PEOPLE.action.href}
                className="mt-9 self-start rounded-full bg-ink px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-ink-soft"
              >
                {PEOPLE.action.label}
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------------- Our ecosystem ---------------- */}
      <section id="our-ecosystem" className={`bg-white ${sectionSpace}`}>
        <div className={container}>
          <Reveal className="mx-auto max-w-3xl md:text-center">
            <div className="md:flex md:justify-center">
              <SectionLabel>{ECOSYSTEM.label}</SectionLabel>
            </div>
            <h2 className={`${h2} mt-5 text-ink`}>{ECOSYSTEM.title}</h2>
            <p className="mx-auto mt-6 max-w-[48ch] text-lg leading-relaxed text-ink/70">{ECOSYSTEM.text}</p>
          </Reveal>
          <div className="mt-16">
            <Ecosystem />
          </div>
        </div>
      </section>

      {/* ---------------- Next move ---------------- */}
      <section className="py-20 sm:py-24">
        <div className={container}>
          <Reveal className="rounded-[2.5rem] bg-ink px-6 py-14 text-white sm:px-12 sm:py-20 lg:px-16">
            <h2 className={`${h2} max-w-[22ch]`}>{NEXT_MOVE.title}</h2>
            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-white/70">{NEXT_MOVE.text}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {NEXT_MOVE.actions.map((action, i) => (
                <Link
                  key={action.href}
                  href={action.href}
                  className={`rounded-full px-7 py-3.5 text-center text-[15px] font-semibold transition-colors ${
                    i === 0
                      ? "bg-gold text-ink hover:bg-gold-soft"
                      : "bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15"
                  }`}
                >
                  {action.label}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
