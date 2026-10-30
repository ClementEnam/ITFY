import type { Metadata } from "next";
import Link from "next/link";
import { container, h2, sectionSpace, SectionLabel } from "../components/home/ui";
import { CTA, HERO, STAGES } from "../components/laptop-bank/content";
import Reveal from "../components/who-we-are/Reveal";

export const metadata: Metadata = {
  title: "How the Laptop Bank works | IT For Youth Ghana",
  description: HERO.lead,
};

function DocIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-4 w-4 shrink-0 text-kente-green">
      <path d="M5 2.5A1.5 1.5 0 0 0 3.5 4v12A1.5 1.5 0 0 0 5 17.5h10a1.5 1.5 0 0 0 1.5-1.5V7.1a1.5 1.5 0 0 0-.44-1.06l-3.1-3.1A1.5 1.5 0 0 0 11.9 2.5H5zm2 8a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 7 10.5zm.75 2.25a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5h-4.5z" />
    </svg>
  );
}

export default function LaptopBankPage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="bg-ink text-white">
        <div className={`${container} pb-20 pt-8 sm:pb-24`}>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li>Laptop Bank</li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-white">How it works</li>
            </ol>
          </nav>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <div className="animate-hero-rise motion-reduce:animate-none">
                <SectionLabel light>{HERO.label}</SectionLabel>
              </div>
              <h1 className="mt-5 animate-hero-rise text-[clamp(3rem,8vw,6.5rem)] font-extrabold leading-[0.95] tracking-[-0.05em] motion-reduce:animate-none">
                {HERO.title}
              </h1>
              <p className="mt-7 max-w-[54ch] animate-hero-rise text-lg leading-relaxed text-white/75 [animation-delay:150ms] motion-reduce:animate-none">
                {HERO.lead}
              </p>
            </div>
            {/* the nine stages at a glance */}
            <ol aria-label="The nine stages" className="grid animate-hero-rise grid-cols-3 gap-2 [animation-delay:250ms] motion-reduce:animate-none">
              {STAGES.map((s, i) => (
                <li key={s.title}>
                  <a
                    href={`#stage-${i + 1}`}
                    className="flex h-full flex-col rounded-2xl bg-white/[0.07] p-3 ring-1 ring-white/10 transition-colors hover:bg-white/[0.14]"
                  >
                    <span className="text-2xl font-extrabold text-gold">{i + 1}</span>
                    <span className="mt-1 text-xs font-medium leading-snug text-white/80 sm:text-[13px]">{s.short}</span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------- Summary ---------- */}
      <section className={`bg-white ${sectionSpace}`}>
        <div className={container}>
          <Reveal className="max-w-3xl">
            <SectionLabel>Every stage</SectionLabel>
            <h2 className={`${h2} mt-5 text-ink`}>Every stage, what it takes, and what you receive</h2>
          </Reveal>

          <Reveal className="mt-12">
            <div className="overflow-hidden rounded-[1.75rem] ring-1 ring-line">
              {/* header row (tablet and up) */}
              <div className="hidden grid-cols-[1.3fr_0.8fr_1.6fr] gap-6 bg-paper px-7 py-4 text-sm font-semibold text-ink/55 md:grid">
                <span>Stage</span>
                <span>Duration</span>
                <span>What you receive</span>
              </div>
              <ol>
                {STAGES.map((s, i) => (
                  <li
                    key={s.title}
                    className="grid gap-2 border-t border-line px-6 py-5 first:border-t-0 md:grid-cols-[1.3fr_0.8fr_1.6fr] md:items-center md:gap-6 md:px-7 md:first:border-t"
                  >
                    <a href={`#stage-${i + 1}`} className="flex items-center gap-3 font-semibold text-ink hover:underline hover:decoration-gold hover:decoration-2 hover:underline-offset-4">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-ink text-sm font-bold text-white">{i + 1}</span>
                      {s.short}
                    </a>
                    {/* empty durations keep their column on tablet/desktop but take no space on phones */}
                    <span className={`pl-11 text-[15px] text-ink/60 md:block md:pl-0 ${s.duration ? "" : "hidden"}`}>{s.duration}</span>
                    <span className="flex gap-2 pl-11 text-[15px] text-ink/80 md:pl-0">
                      <DocIcon />
                      {s.receive}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- In detail ---------- */}
      <section className={sectionSpace}>
        <div className={`${container} grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20`}>
          <Reveal className="lg:sticky lg:top-44 lg:self-start">
            <SectionLabel>In detail</SectionLabel>
            <h2 className={`${h2} mt-5 text-ink`}>What happens at each stage, who owns it, and what it produces</h2>
          </Reveal>

          <ol className="space-y-3">
            {STAGES.map((s, i) => (
              <li key={s.title} id={`stage-${i + 1}`} className="scroll-mt-40">
                <details className="group rounded-[1.5rem] bg-white ring-1 ring-line open:ring-2 open:ring-gold">
                  <summary className="flex cursor-pointer list-none items-center gap-4 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-paper text-[15px] font-bold text-ink transition-colors group-open:bg-ink group-open:text-white">
                      {i + 1}
                    </span>
                    <span className="flex-1 text-lg font-bold tracking-[-0.01em] text-ink sm:text-xl">{s.title}</span>
                    <span aria-hidden="true" className="relative grid h-9 w-9 shrink-0 place-items-center rounded-full ring-1 ring-line">
                      <span className="absolute h-[2px] w-3.5 rounded-full bg-ink" />
                      <span className="absolute h-3.5 w-[2px] rounded-full bg-ink transition-transform duration-300 group-open:scale-y-0" />
                    </span>
                  </summary>
                  <div className="px-5 pb-6 sm:px-6 sm:pl-[5.25rem]">
                    <p className="max-w-[62ch] text-[15px] leading-relaxed text-ink/75 sm:text-base">{s.detail}</p>
                    <dl className="mt-5 grid gap-3 sm:grid-cols-3">
                      <div className="rounded-2xl bg-paper p-4">
                        <dt className="text-xs font-semibold text-ink/55">Owned by</dt>
                        <dd className="mt-1 text-sm font-semibold text-ink">{s.owner}</dd>
                      </div>
                      {s.duration && (
                        <div className="rounded-2xl bg-paper p-4">
                          <dt className="text-xs font-semibold text-ink/55">Duration</dt>
                          <dd className="mt-1 text-sm font-semibold text-ink">{s.duration}</dd>
                        </div>
                      )}
                      <div className="rounded-2xl bg-gold/15 p-4">
                        <dt className="text-xs font-semibold text-ink/55">You receive</dt>
                        <dd className="mt-1 text-sm font-semibold text-ink">{s.receive}</dd>
                      </div>
                    </dl>
                  </div>
                </details>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="pb-20 sm:pb-24">
        <div className={container}>
          <Reveal className="grid gap-8 rounded-[2.5rem] bg-gold px-6 py-12 sm:px-12 sm:py-14 lg:grid-cols-[1.4fr_auto] lg:items-center lg:px-16">
            <div>
              <h2 className="max-w-[22ch] text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-ink">{CTA.title}</h2>
              <p className="mt-4 max-w-[48ch] text-lg leading-relaxed text-ink/80">{CTA.text}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link href={CTA.primary.href} className="rounded-full bg-ink px-7 py-3.5 text-center text-[15px] font-semibold text-white transition-colors hover:bg-ink-soft">
                {CTA.primary.label}
              </Link>
              <Link href={CTA.secondary.href} className="rounded-full bg-white px-7 py-3.5 text-center text-[15px] font-semibold text-ink transition-colors hover:bg-white/80">
                {CTA.secondary.label}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
