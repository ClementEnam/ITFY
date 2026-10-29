import Image from "next/image";
import Link from "next/link";
import CountUp from "../who-we-are/CountUp";
import Reveal from "../who-we-are/Reveal";
import { MISSION } from "./content";
import { container, h2, sectionSpace, SectionLabel } from "./ui";

export default function Mission() {
  return (
    <section className={sectionSpace}>
      <div className={container}>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionLabel>{MISSION.label}</SectionLabel>
            <h2 className={`${h2} mt-5 max-w-[16ch] text-ink`}>{MISSION.title}</h2>
            <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-ink/70">{MISSION.text}</p>
            <Link
              href={MISSION.action.href}
              className="mt-9 inline-block rounded-full bg-ink px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-ink-soft"
            >
              {MISSION.action.label}
            </Link>
          </Reveal>
          <Reveal variant="wipe" className="relative aspect-[4/3]">
            <Image
              src={MISSION.image.src}
              alt={MISSION.image.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="rounded-[2rem] object-cover"
            />
          </Reveal>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {MISSION.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100} className="rounded-[1.75rem] bg-white p-6 ring-1 ring-line sm:p-7">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <CountUp value={stat.value} className="block text-4xl font-extrabold tracking-[-0.04em] text-ink sm:text-5xl" />
                <span className="mt-2 block text-[15px] leading-snug text-ink/65">{stat.label}</span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
