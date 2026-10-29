"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "../who-we-are/Reveal";
import { STORIES } from "./content";
import { container, h2, sectionSpace, SectionLabel } from "./ui";

// Testimonial slider. Arrows only appear when there is more than one story.
export default function StudentStories() {
  const [index, setIndex] = useState(0);
  const count = STORIES.items.length;
  const story = STORIES.items[index];
  const go = (i: number) => setIndex((i + count) % count);

  return (
    <section className={`bg-ink text-white ${sectionSpace}`} aria-roledescription="carousel" aria-label="Student stories">
      <div className={`${container} grid gap-12 lg:grid-cols-[0.8fr_1.6fr] lg:items-center lg:gap-20`}>
        <Reveal>
          <SectionLabel light>{STORIES.label}</SectionLabel>
          <h2 className={`${h2} mt-5 max-w-[14ch]`}>{STORIES.title}</h2>
        </Reveal>

        <Reveal delay={150}>
          <figure className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-start">
            <div className="relative h-28 w-28 overflow-hidden rounded-full ring-4 ring-gold sm:h-32 sm:w-32">
              <Image key={story.image + index} src={story.image} alt="" fill sizes="128px" className="animate-hero-rise object-cover" />
            </div>
            <div>
              {/* key replays the entrance animation when the story changes */}
              <blockquote key={index} className="animate-hero-rise text-[clamp(1.25rem,2.2vw,1.75rem)] font-semibold leading-snug tracking-[-0.01em] motion-reduce:animate-none">
                <span aria-hidden="true" className="mb-2 block text-6xl leading-none text-gold">“</span>
                {story.quote}
              </blockquote>
              <figcaption className="mt-8">
                <span className="block font-bold">{story.name}</span>
                <span className="text-[15px] text-white/60">{story.role}</span>
              </figcaption>

              {count > 1 && (
                <div className="mt-10 flex items-center gap-3">
                  {[
                    { label: "Previous story", step: -1, d: "M12.7 4.3a1 1 0 0 1 0 1.4L8.4 10l4.3 4.3a1 1 0 1 1-1.4 1.4l-5-5a1 1 0 0 1 0-1.4l5-5a1 1 0 0 1 1.4 0z" },
                    { label: "Next story", step: 1, d: "M7.3 15.7a1 1 0 0 1 0-1.4l4.3-4.3-4.3-4.3a1 1 0 1 1 1.4-1.4l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4 0z" },
                  ].map((b) => (
                    <button
                      key={b.label}
                      type="button"
                      onClick={() => go(index + b.step)}
                      aria-label={b.label}
                      className="grid h-12 w-12 place-items-center rounded-full ring-1 ring-white/25 transition-colors hover:bg-white/10"
                    >
                      <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                        <path d={b.d} />
                      </svg>
                    </button>
                  ))}
                  <span className="ml-2 text-sm text-white/60" aria-live="polite">
                    Story {index + 1} of {count}
                  </span>
                </div>
              )}
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
