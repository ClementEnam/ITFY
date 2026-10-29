import Image from "next/image";
import Link from "next/link";
import Reveal from "../who-we-are/Reveal";
import { PARTNERS } from "./content";
import { container, h2, sectionSpace, SectionLabel } from "./ui";

export default function Partners() {
  const hasLogos = PARTNERS.logos.length > 0;

  return (
    <section className={sectionSpace}>
      <div className={container}>
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <SectionLabel>{PARTNERS.label}</SectionLabel>
          </div>
          <h2 className={`${h2} mt-5 text-ink`}>{PARTNERS.title}</h2>
        </Reveal>

        {hasLogos ? (
          <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {PARTNERS.logos.map((p, i) => (
              <li key={p.name}>
                <Reveal delay={(i % 5) * 80}>
                  <div className="relative grid aspect-[3/2] place-items-center rounded-2xl bg-white p-6 ring-1 ring-line">
                    <Image
                      src={p.logo}
                      alt={p.name}
                      fill
                      sizes="(min-width: 1024px) 18vw, 45vw"
                      className="object-contain p-6 grayscale transition duration-300 hover:grayscale-0"
                    />
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        ) : null}

        <Reveal className="mt-12 flex justify-center">
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
