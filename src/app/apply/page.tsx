import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import KenteWeave from "../components/Kenteweave";
import CourseCatalog from "../components/apply/CourseCatalog";
import StepsLine from "../components/apply/StepsLine";
import Reveal from "../components/who-we-are/Reveal";
import {
  COHORTS,
  COHORTS_INTRO,
  GUIDANCE,
  HELP,
  HERO,
  STEPS,
  STEPS_INTRO,
  type Cohort,
} from "../components/apply/content";

export const metadata: Metadata = {
  title: "Apply for training | IT For Youth Ghana",
  description: HERO.lead,
};

const container = "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8";
const sectionSpace = "py-20 sm:py-24 lg:py-28";
const h2 = "text-[clamp(2rem,4.2vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-ink";

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 text-[15px] font-semibold text-ink/55">
      <KenteWeave cols={2} rows={2} gapClassName="gap-[2px]" className="w-3.5" />
      {children}
    </div>
  );
}

const STATUS: Record<Cohort["status"], { label: string; className: string }> = {
  open: { label: "Applications open", className: "bg-kente-green text-white" },
  upcoming: { label: "Upcoming", className: "bg-gold/25 text-ink" },
  closed: { label: "Closed", className: "bg-ink/10 text-ink/60" },
};

export default function ApplyPage() {
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
              <li aria-current="page" className="font-semibold text-ink">Apply for training</li>
            </ol>
          </nav>
        </div>

        <div className={`${container} grid items-center gap-14 pb-20 pt-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pb-24`}>
          <div>
            <h1 className="animate-hero-rise max-w-[14ch] text-[clamp(3rem,7vw,6rem)] font-extrabold leading-[0.98] tracking-[-0.045em] text-ink motion-reduce:animate-none">
              {HERO.title}
            </h1>
            <p className="mt-7 max-w-[44ch] animate-hero-rise text-xl leading-relaxed text-ink/70 [animation-delay:150ms] motion-reduce:animate-none">
              {HERO.lead}
            </p>
            <div className="mt-10 flex animate-hero-rise flex-wrap gap-3 [animation-delay:300ms] motion-reduce:animate-none">
              <a href="#courses" className="rounded-full bg-ink px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-ink-soft">
                Browse courses
              </a>
              <a href="#cohorts" className="rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-ink ring-1 ring-line transition-colors hover:ring-ink">
                See upcoming cohorts
              </a>
            </div>
          </div>

          <div className="relative">
            <KenteWeave cols={10} rows={10} animate className="absolute bottom-0 left-0 w-[50%]" />
            <div className="relative mb-[9%] ml-[9%] aspect-[5/4] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(16,32,74,0.55)]">
              <Image src={HERO.image.src} alt={HERO.image.alt} fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Choosing guidance ---------------- */}
      <section className={`bg-white ${sectionSpace}`}>
        <div className={`${container} grid gap-6 lg:grid-cols-2`}>
          {GUIDANCE.map((g, i) => (
            <Reveal key={g.title} delay={i * 150} className="h-full">
              <article className={`flex h-full flex-col overflow-hidden rounded-[2rem] ${i === 0 ? "bg-paper text-ink" : "bg-ink text-white"}`}>
                <div className="relative aspect-[16/9]">
                  <Image src={g.image.src} alt={g.image.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-7 sm:p-10">
                  <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">{g.title}</h2>
                  <p className={`mt-4 text-lg leading-relaxed ${i === 0 ? "text-ink/80" : "text-white/85"}`}>{g.intro}</p>
                  <p className={`mt-5 border-l-[3px] border-gold pl-5 text-[15px] leading-relaxed ${i === 0 ? "text-ink/65" : "text-white/65"}`}>
                    {g.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------------- Course catalogue ---------------- */}
      <section id="courses" className={sectionSpace}>
        <div className={container}>
          <Reveal className="max-w-3xl">
            <SectionLabel>Course catalogue</SectionLabel>
            <h2 className={`${h2} mt-5`}>Compare courses side by side.</h2>
            <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-ink/70">
              Filter by category, level and price to find the strongest fit.
            </p>
          </Reveal>
          <div className="mt-12">
            <CourseCatalog />
          </div>
        </div>
      </section>

      {/* ---------------- Upcoming cohorts ---------------- */}
      <section id="cohorts" className={`bg-white ${sectionSpace}`}>
        <div className={container}>
          <Reveal className="max-w-3xl">
            <SectionLabel>Upcoming cohorts</SectionLabel>
            <h2 className={`${h2} mt-5`}>{COHORTS_INTRO.title}</h2>
            <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-ink/70">{COHORTS_INTRO.text}</p>
          </Reveal>

          <div className="mt-14 space-y-5">
            {COHORTS.map((c, i) => {
              const status = STATUS[c.status];
              return (
                <Reveal key={c.title} delay={i * 120}>
                  <article
                    className={`grid gap-6 rounded-[2rem] p-6 sm:p-8 lg:grid-cols-[13rem_1fr_auto] lg:items-center lg:gap-10 ${
                      c.status === "open" ? "bg-paper ring-2 ring-kente-green/40" : "bg-white ring-1 ring-line"
                    }`}
                  >
                    {/* date */}
                    <div className="flex items-center justify-between gap-4 lg:block">
                      <p>
                        <span className="block text-sm text-ink/55">Starts</span>
                        <span className="block text-3xl font-extrabold leading-tight tracking-[-0.03em] text-ink">{c.starts}</span>
                      </p>
                      <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold lg:mt-3 ${status.className}`}>
                        {status.label}
                      </span>
                    </div>

                    {/* details */}
                    <div>
                      <h3 className="text-2xl font-bold tracking-[-0.02em] text-ink">{c.title}</h3>
                      <p className="mt-2 max-w-[60ch] text-[15px] leading-relaxed text-ink/70">{c.description}</p>
                      <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3 text-sm">
                        {[
                          ["Format", c.format],
                          ["Duration", c.duration],
                          ["Location", c.location],
                        ].map(([k, v]) => (
                          <div key={k}>
                            <dt className="text-ink/55">{k}</dt>
                            <dd className="font-semibold text-ink">{v}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>

                    {/* deadline + action */}
                    <div className="flex flex-wrap items-center gap-4 border-t border-line pt-5 lg:block lg:border-0 lg:pt-0 lg:text-right">
                      <p className="text-sm text-ink/60">
                        Apply by <span className="font-semibold text-ink">{c.deadline}</span>
                      </p>
                      {c.status === "open" && (
                        <Link
                          href={`/apply/form?cohort=${encodeURIComponent(c.title)}`}
                          className="inline-block rounded-full bg-ink px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-ink-soft lg:mt-3"
                        >
                          Apply now
                        </Link>
                      )}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- How to apply ---------------- */}
      <section id="how-to-apply" className={sectionSpace}>
        <div className={container}>
          <Reveal className="max-w-3xl">
            <SectionLabel>How to apply</SectionLabel>
            <h2 className={`${h2} mt-5`}>{STEPS_INTRO.title}</h2>
            <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-ink/70">{STEPS_INTRO.text}</p>
          </Reveal>
          <div className="mt-16">
            <StepsLine steps={STEPS} />
          </div>
        </div>
      </section>

      {/* ---------------- Help choosing ---------------- */}
      <section className="pb-20 sm:pb-24">
        <div className={container}>
          <Reveal className="rounded-[2.5rem] bg-ink px-6 py-14 text-white sm:px-12 sm:py-16 lg:px-16">
            <h2 className="max-w-[20ch] text-[clamp(2rem,4.2vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.035em]">
              {HELP.title}
            </h2>
            <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-white/70">{HELP.text}</p>

            <ul className="mt-12 grid gap-4 md:grid-cols-3">
              {HELP.cards.map((card) => (
                <li key={card.title}>
                  <Link
                    href={card.href}
                    className="group flex h-full flex-col rounded-[1.75rem] bg-white/[0.06] p-7 ring-1 ring-white/10 transition-colors hover:bg-white/10"
                  >
                    <span className="text-sm font-semibold text-gold">{card.role}</span>
                    <span className="mt-2 text-xl font-bold">{card.title}</span>
                    <span className="mt-2 flex-1 text-[15px] leading-relaxed text-white/65">{card.text}</span>
                    <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold">
                      {card.cta}
                      <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
                        <path d="M7.3 15.7a1 1 0 0 1 0-1.4l4.3-4.3-4.3-4.3a1 1 0 1 1 1.4-1.4l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4 0z" />
                      </svg>
                    </span>
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
