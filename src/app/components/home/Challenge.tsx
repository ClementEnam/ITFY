import Link from "next/link";
import CountUp from "../who-we-are/CountUp";
import Reveal from "../who-we-are/Reveal";
import { CHALLENGE } from "./content";
import { container, h2, sectionSpace, SectionLabel } from "./ui";

export default function Challenge() {
  const { divide } = CHALLENGE;

  return (
    <section className={`bg-ink text-white ${sectionSpace}`}>
      <div className={container}>
        <Reveal className="max-w-3xl">
          <SectionLabel light>{CHALLENGE.label}</SectionLabel>
          <h2 className={`${h2} mt-5`}>{CHALLENGE.title}</h2>
          <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-white/70">{CHALLENGE.text}</p>
        </Reveal>

        {/* figures */}
        <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-[1.75rem] bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {CHALLENGE.stats.map((stat, i) => (
            <Reveal key={stat.value} delay={i * 100} className="bg-ink p-7 sm:p-8">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <CountUp value={stat.value} className="block text-5xl font-extrabold tracking-[-0.04em] text-gold" />
                <span className="mt-3 block max-w-[28ch] text-[15px] leading-snug text-white/70">{stat.label}</span>
              </dd>
            </Reveal>
          ))}
        </dl>

        {/* before / after */}
        <Reveal className="mt-20">
          <h3 className="text-2xl font-bold tracking-[-0.02em]">{divide.title}</h3>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.75rem] p-7 ring-1 ring-white/15 sm:p-9">
              <h4 className="text-lg font-semibold text-white/70">{divide.without.title}</h4>
              <ul className="mt-5 space-y-4">
                {divide.without.points.map((p) => (
                  <li key={p} className="flex gap-4 text-[15px] leading-relaxed text-white/65">
                    <span aria-hidden="true" className="mt-2.5 h-[2px] w-3 shrink-0 bg-white/40" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[1.75rem] bg-white p-7 text-ink sm:p-9">
              <h4 className="text-lg font-semibold">{divide.with.title}</h4>
              <ul className="mt-5 space-y-4">
                {divide.with.points.map((p) => (
                  <li key={p} className="flex gap-4 text-[15px] leading-relaxed text-ink/80">
                    <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-5 w-5 shrink-0 text-kente-green">
                      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0z" clipRule="evenodd" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link
            href={CHALLENGE.action.href}
            className="mt-10 inline-block rounded-full bg-gold px-7 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:bg-gold-soft"
          >
            {CHALLENGE.action.label}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
