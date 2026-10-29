import Link from "next/link";
import PartnerTile from "../partners/PartnerTile";
import Reveal from "../who-we-are/Reveal";
import { PARTNERS } from "./content";
import { container, h2, sectionSpace, SectionLabel } from "./ui";

export default function Partners() {
  return (
    <section className={sectionSpace}>
      <div className={container}>
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <SectionLabel>{PARTNERS.label}</SectionLabel>
          </div>
          <h2 className={`${h2} mt-5 text-ink`}>{PARTNERS.title}</h2>
        </Reveal>

        {PARTNERS.list.length > 0 && (
          <ul className="mx-auto mt-14 flex max-w-5xl flex-wrap justify-center gap-5">
            {PARTNERS.list.map((p, i) => (
              <li key={p.name} className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(25%-0.94rem)]">
                <Reveal delay={(i % 4) * 80} className="h-full">
                  <PartnerTile partner={p} />
                </Reveal>
              </li>
            ))}
          </ul>
        )}

        <Reveal className="mt-12 flex flex-wrap justify-center gap-3">
          <Link
            href="/who-we-are/partners"
            className="rounded-full bg-ink px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-ink-soft"
          >
            See all our partners
          </Link>
          <Link
            href={PARTNERS.action.href}
            className="rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-ink ring-1 ring-line transition-colors hover:ring-ink"
          >
            {PARTNERS.action.label}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
