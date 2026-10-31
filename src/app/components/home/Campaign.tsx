import Image from "next/image";
import Link from "next/link";
import Reveal from "../who-we-are/Reveal";
import { CAMPAIGN, GRADUATE } from "./content";
import ProgressBar from "./ProgressBar";
import { Arrow, container, sectionSpace, SectionLabel } from "./ui";

// Two feature cards side by side: the live fundraising campaign and a graduate story.
export default function Campaign() {
  return (
    <section className={sectionSpace}>
      <div className={`${container} grid gap-6 lg:grid-cols-2`}>
        {/* campaign */}
        <Reveal className="h-full">
          <article className="flex h-full flex-col rounded-[2rem] bg-white p-8 ring-1 ring-line sm:p-10">
            <SectionLabel>{CAMPAIGN.label}</SectionLabel>
            <h2 className="mt-5 max-w-[18ch] text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-[1.1] tracking-[-0.03em] text-ink">
              {CAMPAIGN.title}
            </h2>
            <p className="mt-4 max-w-[48ch] text-lg leading-relaxed text-ink/70">{CAMPAIGN.text}</p>

            {CAMPAIGN.goal > 0 && (
              <div className="mt-8">
                <ProgressBar raised={CAMPAIGN.raised} goal={CAMPAIGN.goal} />
              </div>
            )}

            <div className="mt-auto flex flex-wrap items-center gap-x-7 gap-y-4 pt-10">
              <Link
                href={CAMPAIGN.action.href}
                className="rounded-full bg-gold px-7 py-3.5 text-[0.9375rem] font-semibold text-ink transition-colors hover:bg-gold-soft"
              >
                {CAMPAIGN.action.label}
              </Link>
              <Link
                href={CAMPAIGN.secondary.href}
                className="text-[0.9375rem] font-semibold text-ink underline decoration-gold decoration-[3px] underline-offset-[6px] hover:decoration-ink"
              >
                {CAMPAIGN.secondary.label}
              </Link>
            </div>
          </article>
        </Reveal>

        {/* graduate story */}
        <Reveal delay={150} className="h-full">
          <Link
            href={GRADUATE.action.href}
            className="group relative flex h-full min-h-[440px] flex-col justify-end overflow-hidden rounded-[2rem] bg-ink p-8 text-white sm:p-10"
          >
            <Image
              src={GRADUATE.image.src}
              alt={GRADUATE.image.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* darkens the lower half so the text stays readable on any photo */}
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/10" />
            <div className="relative">
              <SectionLabel light>{GRADUATE.label}</SectionLabel>
              <h2 className="mt-5 max-w-[20ch] text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">
                {GRADUATE.title}
              </h2>
              <p className="mt-4 max-w-[48ch] text-[0.9375rem] leading-relaxed text-white/80">{GRADUATE.text}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-[0.9375rem] font-semibold">
                {GRADUATE.action.label}
                <Arrow />
              </span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
