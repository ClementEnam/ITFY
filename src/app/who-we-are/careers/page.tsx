import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
// import { ENGAGE, EXPLORE, HERO, OPENINGS, ROLES } from "../../components/careers/content";
import { ENGAGE, EXPLORE, HERO, OPENINGS, ROLES } from "@/app/components/Content";
import { Arrow, container, h2, sectionSpace, SectionLabel } from "../../components/home/ui";
import ExploreBand from "../../components/shared/ExploreBand";
import NumbersBand from "../../components/shared/NumbersBand";
import { NUMBERS } from "../../components/team/content";
import Reveal from "../../components/who-we-are/Reveal";

export const metadata: Metadata = {
  title: "Join our team | IT For Youth Ghana",
  description: HERO.lead,
};

export default function CareersPage() {
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
              <li aria-current="page" className="font-semibold text-ink">Join our team</li>
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
            <p className="mt-8 max-w-[42ch] animate-hero-rise text-xl leading-relaxed text-ink/75 [animation-delay:150ms] motion-reduce:animate-none sm:text-2xl">
              {HERO.lead}
            </p>
            <p className="mt-5 max-w-[56ch] animate-hero-rise text-[15px] leading-relaxed text-ink/60 [animation-delay:220ms] motion-reduce:animate-none">
              {HERO.note}
            </p>
            <div className="mt-10 flex animate-hero-rise flex-wrap gap-3 [animation-delay:300ms] motion-reduce:animate-none">
              <a href={HERO.actions[0].href} className="rounded-full bg-ink px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-ink-soft">
                {HERO.actions[0].label}
              </a>
              <Link href={HERO.actions[1].href} className="rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-ink ring-1 ring-line transition-colors hover:ring-ink">
                {HERO.actions[1].label}
              </Link>
            </div>
          </div>

          <div className="relative">
            <div aria-hidden="true" className="absolute right-0 top-0 h-[62%] w-[52%] animate-hero-rise rounded-[2rem] bg-gold motion-reduce:animate-none" />
            <div className="relative mr-[9%] mt-[9%] aspect-[5/4] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(16,32,74,0.55)]">
              <Image src={HERO.image.src} alt={HERO.image.alt} fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <NumbersBand label={NUMBERS.label} title={NUMBERS.title} stats={NUMBERS.stats} />

      {/* ---------------- What we look for / how to engage ---------------- */}
      <section className={`bg-white ${sectionSpace}`}>
        <div className={`${container} grid gap-6 lg:grid-cols-2`}>
          {ENGAGE.map((e, i) => (
            <Reveal key={e.title} delay={i * 150} className="h-full">
              <article className={`h-full rounded-[2rem] p-8 sm:p-10 ${i === 0 ? "bg-paper" : "bg-gold/15"}`}>
                <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink">{e.title}</h2>
                <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-ink/75">{e.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- Openings ---------------- */}
      <section id="openings" className={sectionSpace}>
        <div className={container}>
          <Reveal>
            <SectionLabel>{OPENINGS.label}</SectionLabel>
            <h2 className={`${h2} mt-5 text-ink`}>{OPENINGS.title}</h2>
          </Reveal>

          {ROLES.length > 0 ? (
            <ul className="mt-12 space-y-4">
              {ROLES.map((role, i) => (
                <li key={role.title}>
                  <Reveal delay={i * 80}>
                    <a
                      href={role.applyHref}
                      className="group grid gap-4 rounded-[1.75rem] bg-white p-6 ring-1 ring-line transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_48px_-28px_rgba(16,32,74,0.45)] sm:p-8 md:grid-cols-[1fr_auto] md:items-center md:gap-10"
                    >
                      <div>
                        <h3 className="text-2xl font-bold tracking-[-0.02em] text-ink">{role.title}</h3>
                        <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[15px] text-ink/60">
                          <span>{role.type}</span>
                          <span>{role.location}</span>
                          {role.closes && <span>Apply by {role.closes}</span>}
                        </p>
                        <p className="mt-3 max-w-[70ch] text-[15px] leading-relaxed text-ink/70">{role.summary}</p>
                      </div>
                      <span className="inline-flex items-center gap-2 self-start rounded-full bg-ink px-6 py-3 text-[15px] font-semibold text-white md:self-center">
                        Apply for this role
                        <Arrow />
                      </span>
                    </a>
                  </Reveal>
                </li>
              ))}
            </ul>
          ) : (
            <Reveal className="mt-12">
              <div className="rounded-[2rem] bg-white px-6 py-14 text-center ring-1 ring-line sm:px-12">
                <p className="text-2xl font-bold tracking-[-0.02em] text-ink">{OPENINGS.empty.title}</p>
                <p className="mx-auto mt-3 max-w-[52ch] text-[15px] leading-relaxed text-ink/65">{OPENINGS.empty.text}</p>
                <Link
                  href={OPENINGS.empty.action.href}
                  className="mt-8 inline-block rounded-full bg-ink px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-ink-soft"
                >
                  {OPENINGS.empty.action.label}
                </Link>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <ExploreBand label={EXPLORE.label} title={EXPLORE.title} cards={EXPLORE.cards} />
    </>
  );
}
