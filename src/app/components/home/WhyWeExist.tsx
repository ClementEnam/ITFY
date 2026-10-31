import Link from "next/link";
import Reveal from "../who-we-are/Reveal";
import { WHY } from "./content";
import { container, h2, sectionSpace, SectionLabel } from "./ui";
import VideoPhoto from "./VideoPhoto";

export default function WhyWeExist() {
  return (
    <section className={`bg-white ${sectionSpace}`}>
      <div className={`${container} grid items-center gap-12 lg:grid-cols-2 lg:gap-20`}>
        <Reveal>
          <VideoPhoto image={WHY.image} youtubeId={WHY.youtubeId} title="Why IT For Youth Ghana exists" />
        </Reveal>

        <Reveal delay={150}>
          <SectionLabel>{WHY.label}</SectionLabel>
          <h2 className={`${h2} mt-5 max-w-[20ch] text-ink`}>{WHY.title}</h2>
          <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-ink/70">{WHY.text}</p>
          <blockquote className="mt-6 max-w-[54ch] border-l-[3px] border-gold pl-5 text-[0.9375rem] leading-relaxed text-ink/65">
            {WHY.quote}
          </blockquote>
          <Link
            href={WHY.action.href}
            className="mt-9 inline-block rounded-full bg-ink px-7 py-3.5 text-[0.9375rem] font-semibold text-white transition-colors hover:bg-ink-soft"
          >
            {WHY.action.label}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
