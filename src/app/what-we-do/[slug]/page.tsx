import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import StepsLine from "../../components/apply/StepsLine";
import { container, h2, sectionSpace, SectionLabel } from "../../components/home/ui";
import { getInitiative, INITIATIVES } from "../../components/initiatives/content";
import Faq from "../../components/initiatives/Faq";
import PartnerTile from "../../components/partners/PartnerTile";
import ExploreBand from "../../components/shared/ExploreBand";
import NumbersBand from "../../components/shared/NumbersBand";
import Reveal from "../../components/who-we-are/Reveal";

type Props = { params: Promise<{ slug: string }> };

// One page per initiative listed in components/initiatives/content.ts
export async function generateStaticParams() {
  return INITIATIVES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const initiative = getInitiative((await params).slug);
  if (!initiative) return {};
  return { title: `${initiative.name} | IT For Youth Ghana`, description: initiative.hero.lead };
}

const intro = (label: string, title: string, text?: string, light = false) => (
  <Reveal className="max-w-3xl">
    <SectionLabel light={light}>{label}</SectionLabel>
    <h2 className={`${h2} mt-5 ${light ? "" : "text-ink"}`}>{title}</h2>
    {text && <p className={`mt-6 max-w-[56ch] text-lg leading-relaxed ${light ? "text-white/70" : "text-ink/70"}`}>{text}</p>}
  </Reveal>
);

export default async function InitiativePage({ params }: Props) {
  const it = getInitiative((await params).slug);
  if (!it) notFound();

  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="overflow-hidden">
        <div className={`${container} pt-8`}>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-ink/55">
              <li><Link href="/" className="hover:text-ink">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/what-we-do" className="hover:text-ink">What we do</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-ink">{it.name}</li>
            </ol>
          </nav>
        </div>

        <div className={`${container} grid items-center gap-14 pb-20 pt-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pb-24`}>
          <div>
            <div className="animate-hero-rise motion-reduce:animate-none">
              <SectionLabel>Our initiatives</SectionLabel>
            </div>
            <h1 className="mt-5 animate-hero-rise text-[clamp(3.25rem,8vw,6.5rem)] font-extrabold leading-[0.95] tracking-[-0.05em] text-ink motion-reduce:animate-none">
              {it.name}
            </h1>
            <p className="mt-8 max-w-[40ch] animate-hero-rise text-xl leading-relaxed text-ink/75 [animation-delay:150ms] motion-reduce:animate-none sm:text-2xl">
              {it.hero.lead}
            </p>
            {it.hero.note && (
              <p className="mt-5 max-w-[56ch] animate-hero-rise text-[15px] leading-relaxed text-ink/60 [animation-delay:220ms] motion-reduce:animate-none">
                {it.hero.note}
              </p>
            )}
            <div className="mt-10 flex animate-hero-rise flex-wrap gap-3 [animation-delay:300ms] motion-reduce:animate-none">
              <Link href={it.hero.primary.href} className="rounded-full bg-ink px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-ink-soft">
                {it.hero.primary.label}
              </Link>
              <Link href={it.hero.secondary.href} className="rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-ink ring-1 ring-line transition-colors hover:ring-ink">
                {it.hero.secondary.label}
              </Link>
            </div>
          </div>
          <div className="relative">
            <div aria-hidden="true" className="absolute bottom-0 right-0 h-[62%] w-[52%] animate-hero-rise rounded-[2rem] bg-gold motion-reduce:animate-none" />
            <div className="relative mb-[9%] mr-[9%] aspect-[5/4] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(16,32,74,0.55)]">
              <Image src={it.hero.image.src} alt={it.hero.image.alt} fill priority sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Overview ---------------- */}
      <section className={`bg-white ${sectionSpace}`}>
        <div className={`${container} grid items-center gap-12 lg:grid-cols-2 lg:gap-20`}>
          <Reveal>
            <SectionLabel>Overview</SectionLabel>
            <h2 className={`${h2} mt-5 max-w-[18ch] text-ink`}>{it.overview.title}</h2>
            {it.overview.paragraphs.map((p) => (
              <p key={p} className="mt-6 max-w-[56ch] text-lg leading-relaxed text-ink/70">{p}</p>
            ))}
            {it.overview.quote && (
              <blockquote className="mt-7 max-w-[56ch] border-l-[3px] border-gold pl-5 text-[15px] leading-relaxed text-ink/65">
                {it.overview.quote}
              </blockquote>
            )}
          </Reveal>
          <Reveal variant="wipe" className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image src={it.overview.image.src} alt={it.overview.image.alt} fill sizes="(min-width: 1024px) 45vw, 100vw" className="rounded-[2rem] object-cover" />
          </Reveal>
        </div>
      </section>

      {/* ---------------- Journey ---------------- */}
      <section className={sectionSpace}>
        <div className={container}>
          {intro("How it works", it.journey.title, it.journey.text)}
          <div className="mt-16">
            <StepsLine steps={it.journey.steps} />
          </div>
        </div>
      </section>

      {/* ---------------- Proof ---------------- */}
      {it.proof.stats.length > 0 && <NumbersBand label="Results" title={it.proof.title} stats={it.proof.stats} />}

      {/* ---------------- Who it's for ---------------- */}
      {it.audience && (
        <section className={`bg-white ${sectionSpace}`}>
          <div className={`${container} grid gap-6 lg:grid-cols-[1.2fr_1fr]`}>
            <Reveal className="h-full">
              <article className="h-full rounded-[2rem] bg-ink p-8 text-white sm:p-10">
                <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">{it.audience.title}</h2>
                <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-white/75">{it.audience.text}</p>
                <ul className="mt-8 space-y-3">
                  {it.audience.points.map((p) => (
                    <li key={p} className="flex gap-4 rounded-2xl bg-white/[0.06] px-5 py-4 text-[15px] leading-snug ring-1 ring-white/10">
                      <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-5 w-5 shrink-0 text-gold">
                        <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0z" clipRule="evenodd" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
            <Reveal delay={150} className="h-full">
              <article className="flex h-full flex-col rounded-[2rem] bg-gold/15 p-8 sm:p-10">
                <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink">{it.audience.eligibilityTitle}</h2>
                <p className="mt-5 flex-1 text-lg leading-relaxed text-ink/75">{it.audience.eligibility}</p>
                <Link href="/apply" className="mt-8 self-start rounded-full bg-ink px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-ink-soft">
                  See the current intake
                </Link>
              </article>
            </Reveal>
          </div>
        </section>
      )}

      {/* ---------------- Gallery ---------------- */}
      {it.gallery.photos.length > 0 && (
        <section className={sectionSpace}>
          <div className={container}>
            {intro("In pictures", it.gallery.title, it.gallery.text)}
            <ul className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-4 sm:auto-rows-[260px] lg:grid-cols-4">
              {it.gallery.photos.map((ph, i) => (
                <li
                  key={`${ph.src}-${i}`}
                  // first photo is large; if the rest don't fill the grid evenly, the last one stretches to fill the gap
                  className={
                    i === 0
                      ? "col-span-2 row-span-2"
                      : i === it.gallery.photos.length - 1 && (it.gallery.photos.length - 1) % 2 === 1
                        ? "col-span-2"
                        : ""
                  }
                >
                  <Reveal delay={(i % 4) * 100} className="h-full">
                    <figure className="group relative h-full overflow-hidden rounded-[1.5rem] bg-ink">
                      <Image src={ph.src} alt={ph.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      {ph.caption && (
                        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent px-5 pb-4 pt-12 text-sm font-semibold text-white">
                          {ph.caption}
                        </figcaption>
                      )}
                    </figure>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ---------------- Stories ---------------- */}
      {it.stories.items.length > 0 && (
        <section className={`bg-ink text-white ${sectionSpace}`}>
          <div className={container}>
            {intro("Participant stories", it.stories.title, undefined, true)}
            <ul className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {it.stories.items.map((s, i) => (
                <li key={s.name}>
                  <Reveal delay={(i % 3) * 120} className="h-full">
                    <figure className="flex h-full flex-col rounded-[1.75rem] bg-white/[0.06] p-7 ring-1 ring-white/10">
                      <span aria-hidden="true" className="text-5xl leading-none text-gold">“</span>
                      <blockquote className="mt-2 flex-1 text-lg leading-relaxed">{s.quote}</blockquote>
                      <figcaption className="mt-6 flex items-center gap-3">
                        {s.photo && (
                          <span className="relative h-11 w-11 overflow-hidden rounded-full">
                            <Image src={s.photo} alt="" fill sizes="44px" className="object-cover" />
                          </span>
                        )}
                        <span>
                          <span className="block font-bold">{s.name}</span>
                          <span className="text-sm text-white/60">{s.role}</span>
                        </span>
                      </figcaption>
                    </figure>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ---------------- Partners ---------------- */}
      {it.partners.items.length > 0 && (
        <section className={`bg-white ${sectionSpace}`}>
          <div className={container}>
            {intro("Partners", it.partners.title)}
            <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {it.partners.items.map((p, i) => (
                <li key={p.name}>
                  <Reveal delay={(i % 4) * 100} className="h-full">
                    <PartnerTile partner={{ name: p.name, logo: p.logo, url: p.url, role: p.text }} />
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ---------------- FAQ ---------------- */}
      {it.faq.items.length > 0 && (
        <section className={sectionSpace}>
          <div className={`${container} grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20`}>
            <div className="lg:sticky lg:top-44 lg:self-start">{intro("Questions", it.faq.title)}</div>
            <Reveal delay={150}>
              <Faq items={it.faq.items} />
            </Reveal>
          </div>
        </section>
      )}

      {/* ---------------- Call to action ---------------- */}
      <section className="pt-4">
        <div className={container}>
          <Reveal className="grid gap-8 rounded-[2.5rem] bg-gold px-6 py-12 sm:px-12 sm:py-14 lg:grid-cols-[1.4fr_auto] lg:items-center lg:px-16">
            <div>
              <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-ink">{it.cta.title}</h2>
              <p className="mt-4 max-w-[52ch] text-lg leading-relaxed text-ink/80">{it.cta.text}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <Link href={it.cta.primary.href} className="rounded-full bg-ink px-7 py-3.5 text-center text-[15px] font-semibold text-white transition-colors hover:bg-ink-soft">
                {it.cta.primary.label}
              </Link>
              <Link href={it.cta.secondary.href} className="rounded-full bg-white px-7 py-3.5 text-center text-[15px] font-semibold text-ink transition-colors hover:bg-white/80">
                {it.cta.secondary.label}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <ExploreBand label="Keep exploring" title="Keep exploring the wider work around this initiative" cards={it.explore} />
    </>
  );
}
