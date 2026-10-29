import Link from "next/link";
import { Arrow, container, SectionLabel } from "../home/ui";
import Reveal from "../who-we-are/Reveal";

type Card = { role: string; title: string; text: string; cta: string; href: string };

// Navy "Continue exploring" card with links to related pages.
export default function ExploreBand({ label, title, cards }: { label: string; title: string; cards: Card[] }) {
  return (
    <section className="py-20 sm:py-24">
      <div className={container}>
        <Reveal className="rounded-[2.5rem] bg-ink px-6 py-14 text-white sm:px-12 sm:py-16 lg:px-16">
          <SectionLabel light>{label}</SectionLabel>
          <h2 className="mt-5 text-[clamp(2rem,4.2vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.035em]">{title}</h2>
          <ul className={`mt-10 grid gap-4 md:grid-cols-2 ${cards.length > 2 ? "lg:grid-cols-3" : ""}`}>
            {cards.map((card) => (
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
                    <Arrow />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
