import Image from "next/image";
import Link from "next/link";
import Reveal from "../who-we-are/Reveal";
import { PROGRAMMES } from "./content";
import { Arrow, container, h2, sectionSpace, SectionLabel } from "./ui";

export default function Programmes() {
  return (
    <section className={`bg-white ${sectionSpace}`}>
      <div className={`${container} grid gap-12 lg:grid-cols-[0.8fr_1.6fr] lg:gap-16`}>
        {/* intro stays in view while the cards scroll past (large screens) */}
        <Reveal className="lg:sticky lg:top-44 lg:self-start">
          <SectionLabel>{PROGRAMMES.label}</SectionLabel>
          <h2 className={`${h2} mt-5 text-ink`}>{PROGRAMMES.title}</h2>
          <p className="mt-6 max-w-[40ch] text-lg leading-relaxed text-ink/70">{PROGRAMMES.text}</p>
          <Link
            href="/what-we-do"
            className="group mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-ink underline decoration-gold decoration-[3px] underline-offset-[6px] hover:decoration-ink"
          >
            See all our work
            <Arrow />
          </Link>
        </Reveal>

        <ul className="grid gap-5 sm:grid-cols-2">
          {PROGRAMMES.items.map((item, i) => (
            <li key={item.title}>
              <Reveal delay={(i % 2) * 120} className="h-full">
                <Link
                  href={item.href}
                  className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-paper ring-1 ring-line transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(16,32,74,0.45)]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-xl font-bold tracking-[-0.02em] text-ink">{item.title}</h3>
                    <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink/65">{item.text}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-ink">
                      Explore {item.title}
                      <Arrow />
                    </span>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
