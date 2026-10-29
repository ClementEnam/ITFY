import Image from "next/image";
import Link from "next/link";
import Reveal from "../who-we-are/Reveal";
import { TEAM } from "./content";
import { Arrow, container, h2, sectionSpace, SectionLabel } from "./ui";

export default function Team() {
  return (
    <section className={`bg-white ${sectionSpace}`}>
      <div className={container}>
        <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionLabel>{TEAM.label}</SectionLabel>
            <h2 className={`${h2} mt-5 max-w-[18ch] text-ink`}>{TEAM.title}</h2>
            <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-ink/70">{TEAM.text}</p>
          </div>
          <Link
            href={TEAM.action.href}
            className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-ink px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-ink-soft md:self-end"
          >
            {TEAM.action.label}
            <Arrow />
          </Link>
        </Reveal>

        {TEAM.members.length > 0 && (
          <ul className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {TEAM.members.map((m, i) => (
              <li key={m.name}>
                <Reveal delay={(i % 4) * 100}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-paper">
                    {m.image ? (
                      <Image src={m.image} alt={m.name} fill sizes="(min-width: 1024px) 22vw, 45vw" className="object-cover" />
                    ) : (
                      // no photo yet: show the ITFY logo instead
                      <span className="grid h-full place-items-center p-[22%]">
                        <Image src="/logo/logo.png" alt="" width={90} height={90} className="h-full w-full object-contain" />
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-lg font-bold text-ink">{m.name}</p>
                  <p className="text-[15px] text-ink/60">{m.role}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
