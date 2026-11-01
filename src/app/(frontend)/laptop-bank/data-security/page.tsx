import type { Metadata } from "next";
import Link from "next/link";
import { container, SectionLabel } from "../../components/home/ui";
import DocToc from "../../components/laptop-bank/DocToc";
import { HERO, SECTIONS, STATEMENT_PDF } from "../../components/laptop-bank/security";
import Reveal from "../../components/who-we-are/Reveal";

export const metadata: Metadata = {
  title: "Data security | IT For Youth Laptop Bank",
  description: HERO.lead,
};

export default function DataSecurityPage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="bg-ink text-white">
        <div className={`${container} pb-20 pt-8 sm:pb-24`}>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/laptop-bank" className="hover:text-white">Laptop Bank</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-white">Data security</li>
            </ol>
          </nav>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <div>
              <div className="animate-hero-rise motion-reduce:animate-none">
                <SectionLabel light>{HERO.label}</SectionLabel>
              </div>
              <h1 className="mt-5 animate-hero-rise text-[clamp(3rem,8vw,6.5rem)] font-extrabold leading-[0.95] tracking-[-0.05em] motion-reduce:animate-none">
                {HERO.title}
              </h1>
            </div>
            <p className="max-w-[46ch] animate-hero-rise text-lg leading-relaxed text-white/75 [animation-delay:150ms] motion-reduce:animate-none sm:text-xl">
              {HERO.lead}
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Document ---------- */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className={`${container} grid gap-12 lg:grid-cols-[17rem_1fr] lg:gap-20`}>
          <aside className="hidden lg:block">
            <div className="sticky top-44">
              <DocToc items={SECTIONS} />
            </div>
          </aside>

          <article className="max-w-3xl">
            {SECTIONS.map((s, i) => (
              <Reveal key={s.id}>
                <section id={s.id} className="scroll-mt-44 border-t border-line py-10 first:border-t-0 first:pt-0">
                  <p className="text-sm font-semibold text-ink/50">Section {i + 1}</p>
                  <h2 className="mt-2 text-[clamp(1.6rem,2.6vw,2.1rem)] font-extrabold tracking-[-0.025em] text-ink">{s.title}</h2>
                  {s.paragraphs.map((p) => (
                    <p key={p} className="mt-4 text-[1.0625rem] leading-[1.75] text-ink/75">
                      {p}
                    </p>
                  ))}
                </section>
              </Reveal>
            ))}
          </article>
        </div>
      </section>

      {/* ---------- Statement document ---------- */}
      <section className="pb-20 sm:pb-24">
        <div className={container}>
          <Reveal className="grid gap-8 rounded-[2.5rem] bg-white p-7 ring-1 ring-line sm:p-10 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-14 lg:p-12">
            <div>
              <SectionLabel>Document</SectionLabel>
              <h2 className="mt-4 text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold tracking-[-0.03em] text-ink">Our data handling statement</h2>
              <p className="mt-3 max-w-[48ch] text-lg text-ink/70">The full statement, versioned and dated, for your records.</p>
            </div>
            <div className="flex items-center gap-4 rounded-[1.5rem] bg-paper p-5">
              <span aria-hidden="true" className="grid h-14 w-12 shrink-0 place-items-center rounded-lg bg-ink text-xs font-bold text-white">
                PDF
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-bold text-ink">Data handling statement</p>
                <p className="text-sm text-ink/55">{STATEMENT_PDF ? "PDF document" : "Being finalised"}</p>
              </div>
              {STATEMENT_PDF ? (
                <a href={STATEMENT_PDF} download className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ink-soft">
                  Download
                </a>
              ) : (
                <Link
                  href="/contact?topic=laptops"
                  className="shrink-0 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink ring-1 ring-line transition-colors hover:ring-ink"
                >
                  Request a copy
                </Link>
              )}
            </div>
          </Reveal>

          <Reveal className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/laptop-bank/donate" className="rounded-full bg-gold px-7 py-3.5 text-center text-[0.9375rem] font-bold text-ink transition-colors hover:bg-gold-soft">
              Offer your equipment
            </Link>
            <Link href="/laptop-bank/what-we-accept" className="rounded-full bg-white px-7 py-3.5 text-center text-[0.9375rem] font-semibold text-ink ring-1 ring-line transition-colors hover:ring-ink">
              What we accept
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
