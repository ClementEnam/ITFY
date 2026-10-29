import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DEPARTMENTS, HERO, NEXT } from "../../components/departments/content";
import { Arrow, container, sectionSpace, SectionLabel } from "../../components/home/ui";
import Reveal from "../../components/who-we-are/Reveal";

export const metadata: Metadata = {
  title: "Departments | IT For Youth Ghana",
  description: HERO.lead,
};

export default function DepartmentsPage() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="overflow-hidden">
        <div className={`${container} pt-8`}>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-ink/55">
              <li>
                <Link href="/" className="hover:text-ink">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/who-we-are" className="hover:text-ink">Who we are</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-ink">Departments</li>
            </ol>
          </nav>
        </div>

        <div className={`${container} grid items-center gap-14 pb-20 pt-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:pb-24`}>
          <div>
            <h1 className="max-w-[16ch] animate-hero-rise text-[clamp(2.75rem,6vw,5rem)] font-extrabold leading-[1] tracking-[-0.045em] text-ink motion-reduce:animate-none">
              {HERO.title}
            </h1>
            <p className="mt-8 max-w-[48ch] animate-hero-rise text-xl leading-relaxed text-ink/70 [animation-delay:150ms] motion-reduce:animate-none">
              {HERO.lead}
            </p>
            <a
              href="#departments"
              className="mt-10 inline-block animate-hero-rise rounded-full bg-ink px-7 py-3.5 text-[15px] font-semibold text-white transition-colors [animation-delay:300ms] hover:bg-ink-soft motion-reduce:animate-none"
            >
              See all {DEPARTMENTS.length} departments
            </a>
          </div>

          <div className="relative">
            <div aria-hidden="true" className="absolute left-0 top-0 h-[62%] w-[52%] animate-hero-rise rounded-[2rem] bg-gold motion-reduce:animate-none" />
            <div className="relative ml-[9%] mt-[9%] aspect-[5/4] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(16,32,74,0.55)]">
              <Image src={HERO.image.src} alt={HERO.image.alt} fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Departments ---------------- */}
      <section id="departments" className={`bg-white ${sectionSpace}`}>
        <div className={container}>
          <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {DEPARTMENTS.map((d, i) => (
              <li key={d.slug}>
                <Reveal delay={(i % 3) * 100} className="h-full">
                  <Link
                    href={`/who-we-are/departments/${d.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-paper ring-1 ring-line transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(16,32,74,0.45)]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-ink">
                      {d.image ? (
                        <Image
                          src={d.image}
                          alt=""
                          fill
                          sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 100vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        // no photo yet: ITFY logo on navy
                        <span className="absolute inset-0 grid place-items-center">
                          <span className="grid h-20 w-20 place-items-center rounded-2xl bg-white p-2 transition-transform duration-500 group-hover:scale-110">
                            <Image src="/logo/logo.png" alt="" width={90} height={90} className="h-full w-full object-contain" />
                          </span>
                        </span>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <p className="text-sm font-semibold text-kente-green">{d.area}</p>
                      <h2 className="mt-2 text-xl font-bold leading-snug tracking-[-0.02em] text-ink sm:text-2xl">{d.name}</h2>
                      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/70">{d.text}</p>
                      <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-ink">
                        View department
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

      {/* ---------------- Next step ---------------- */}
      <section className="py-20 sm:py-24">
        <div className={container}>
          <Reveal className="rounded-[2.5rem] bg-ink px-6 py-14 text-white sm:px-12 sm:py-16 lg:px-16">
            <SectionLabel light>Join us</SectionLabel>
            <h2 className="mt-5 max-w-[20ch] text-[clamp(2rem,4.2vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.035em]">
              {NEXT.title}
            </h2>
            <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-white/70">{NEXT.text}</p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              {NEXT.actions.map((a, i) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className={`rounded-full px-7 py-3.5 text-center text-[15px] font-semibold transition-colors ${
                    i === 0 ? "bg-gold text-ink hover:bg-gold-soft" : "bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15"
                  }`}
                >
                  {a.label}
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
