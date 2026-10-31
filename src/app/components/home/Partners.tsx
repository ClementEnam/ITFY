import Image from "next/image";
import Link from "next/link";
import type { Partner } from "../partners/content";
import Reveal from "../who-we-are/Reveal";
import { PARTNERS } from "./content";
import { container, h2, sectionSpace, SectionLabel } from "./ui";

// Below this many partners the logos sit still in a row; from here up they scroll.
const MIN_FOR_CAROUSEL = 4;

// One logo card. Without a logo yet, the partner's name is shown instead.
function LogoCard({ partner, hidden }: { partner: Partner; hidden?: boolean }) {
  const inner = partner.logo ? (
    <Image src={partner.logo} alt={hidden ? "" : partner.name} fill sizes="220px" className="object-contain p-6" />
  ) : (
    <span className="px-5 text-center text-base font-extrabold leading-tight tracking-[-0.02em] text-ink/75">{partner.name}</span>
  );
  // Card size is set inline as well, so it holds even if a class hasn't been generated yet.
  const box = "relative grid shrink-0 place-items-center rounded-[1.5rem] bg-white ring-1 ring-line transition-all duration-300";
  const size = { width: "clamp(12rem, 18vw, 15rem)", height: "clamp(7rem, 9vw, 8rem)", flex: "none" } as const;

  return partner.url && !hidden ? (
    <a href={partner.url} target="_blank" rel="noopener noreferrer" className={`${box} hover:-translate-y-1 hover:ring-ink`} style={size}>
      {inner}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  ) : (
    <div className={box} style={size}>{inner}</div>
  );
}

export default function Partners() {
  const list = PARTNERS.list;
  const scroll = list.length >= MIN_FOR_CAROUSEL;

  // Repeat short lists so one pass is wider than any screen, then show it twice for a seamless loop.
  const pass: Partner[] = [];
  while (scroll && pass.length < 10) pass.push(...list);

  return (
    <section className={sectionSpace}>
      <div className={container}>
        <Reveal className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">
            <SectionLabel>{PARTNERS.label}</SectionLabel>
          </div>
          <h2 className={`${h2} mt-5 text-ink`}>{PARTNERS.title}</h2>
        </Reveal>
      </div>

      {list.length > 0 && (
        <Reveal delay={150} className="mt-14">
          {scroll ? (
            <>
              {/* Scrolling strip: pauses on hover, fades out at both edges */}
              <div
                className="group overflow-hidden py-2 motion-reduce:hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
                aria-label="Our partners"
                role="region"
              >
                <ul className="flex animate-marquee gap-5 [animation-duration:50s] group-hover:[animation-play-state:paused]" style={{ width: "max-content" }}>
                  {[...pass, ...pass].map((p, i) => {
                    const copy = i >= pass.length || i >= list.length;
                    return (
                      <li key={`${p.name}-${i}`} aria-hidden={copy || undefined} style={{ flex: "none" }}>
                        <LogoCard partner={p} hidden={copy} />
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* Reduced motion: the same logos, standing still */}
              <ul className={`${container} hidden flex-wrap justify-center gap-5 motion-reduce:flex`}>
                {list.map((p) => (
                  <li key={p.name}>
                    <LogoCard partner={p} />
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <ul className={`${container} flex flex-wrap justify-center gap-5`}>
              {list.map((p) => (
                <li key={p.name}>
                  <LogoCard partner={p} />
                </li>
              ))}
            </ul>
          )}
        </Reveal>
      )}

      <div className={container}>
        <Reveal className="mt-12 flex flex-wrap justify-center gap-3">
          <Link
            href="/who-we-are/partners"
            className="rounded-full bg-ink px-7 py-3.5 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-ink-soft"
          >
            See all our partners
          </Link>
          <Link
            href={PARTNERS.action.href}
            className="rounded-full bg-white px-7 py-3.5 text-[0.9375rem] font-semibold text-ink ring-1 ring-line transition-colors hover:ring-ink"
          >
            {PARTNERS.action.label}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}