import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CampaignStats from "../components/donate/CampaignStats";
import { CAMPAIGN, HERO, OTHER_WAYS } from "../components/donate/content";
import GiveForm from "../components/donate/GiveForm";
import { Arrow, container, sectionSpace, SectionLabel } from "../components/home/ui";
import ExploreBand from "../components/shared/ExploreBand";
import Reveal from "../components/who-we-are/Reveal";

export const metadata: Metadata = {
  title: "Donate | IT For Youth Ghana",
  description: HERO.lead,
};

export default function DonatePage() {
  return (
    <>
      {/* ---------- Navy hero ---------- */}
      <section className="bg-ink text-white">
        <div className={`${container} pb-36 pt-8 sm:pb-40`}>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-white">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-white">Donate</li>
            </ol>
          </nav>
          <div className="mt-10 max-w-4xl">
            <div className="animate-hero-rise motion-reduce:animate-none">
              <SectionLabel light>{HERO.label}</SectionLabel>
            </div>
            <h1 className="mt-5 animate-hero-rise text-[clamp(2.75rem,6.5vw,5.5rem)] font-extrabold leading-[0.98] tracking-[-0.045em] motion-reduce:animate-none">
              {HERO.title}
            </h1>
            <p className="mt-6 max-w-[52ch] animate-hero-rise text-lg leading-relaxed text-white/75 [animation-delay:150ms] motion-reduce:animate-none sm:text-xl">
              {HERO.lead}
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Give form + photo, overlapping the hero ---------- */}
      <section id="give" className="scroll-mt-40">
        <div className={`${container} -mt-24 grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-10`}>
          <div className="min-w-0 animate-hero-rise rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(16,32,74,0.55)] [animation-delay:200ms] motion-reduce:animate-none">
            <GiveForm />
          </div>
          <div className="relative hidden min-h-[420px] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(16,32,74,0.55)] lg:block">
            <Image src={HERO.image.src} alt={HERO.image.alt} fill priority sizes="30vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* ---------- Active campaign ---------- */}
      <section className={sectionSpace}>
        <div className={`${container} grid gap-6 lg:grid-cols-[1.25fr_0.75fr]`}>
          <Reveal className="h-full">
            <article className="relative flex h-full flex-col overflow-hidden rounded-[2rem] bg-ink p-8 text-white sm:p-10">
              <Image src={CAMPAIGN.image.src} alt="" fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover opacity-20" />
              <div className="relative flex h-full flex-col">
                <SectionLabel light>{CAMPAIGN.label}</SectionLabel>
                <h2 className="mt-5 max-w-[20ch] text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.035em]">
                  {CAMPAIGN.title}
                </h2>
                <p className="mt-5 max-w-[56ch] text-lg leading-relaxed text-white/80">{CAMPAIGN.text}</p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                  {CAMPAIGN.points.map((pt) => (
                    <li key={pt} className="rounded-2xl bg-white/[0.08] p-5 text-[15px] leading-snug ring-1 ring-white/15 backdrop-blur-sm">
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-3 pt-10">
                  <a href="#give" className="rounded-full bg-gold px-7 py-3.5 text-[15px] font-bold text-ink transition-colors hover:bg-gold-soft">
                    Donate now
                  </a>
                  <Link
                    href="/our-impact"
                    className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-7 py-3.5 text-[15px] font-semibold ring-1 ring-white/25 transition-colors hover:bg-white/15"
                  >
                    See how donations create impact
                    <Arrow />
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
          <Reveal delay={150} className="h-full">
            <CampaignStats />
          </Reveal>
        </div>
      </section>

      <ExploreBand label="Other ways to give" title="Not ready to give money? There are other ways to help." cards={OTHER_WAYS} />
    </>
  );
}
