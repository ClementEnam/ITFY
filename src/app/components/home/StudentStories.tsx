"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "../who-we-are/Reveal";
import { STORIES } from "./content";
import { container, h2, sectionSpace, SectionLabel } from "./ui";

const AUTOPLAY_MS = 8000;

const initials = (name: string) =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

// Testimonial carousel: arrows, dots, swipe on phones, and it moves on by itself
// every few seconds (pausing while someone hovers, focuses or reads with reduced motion).
export default function StudentStories() {
  const items = STORIES.items;
  const count = items.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const touchX = useRef<number | null>(null);

  const go = useCallback((i: number) => setIndex(((i % count) + count) % count), [count]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  // Auto-advance. Restarts whenever the story changes, so a click gives a full read.
  useEffect(() => {
    if (count < 2 || paused || reduced) return;
    const t = window.setTimeout(() => go(index + 1), AUTOPLAY_MS);
    return () => window.clearTimeout(t);
  }, [index, paused, reduced, count, go]);

  if (count === 0) return null;
  const story = items[index];
  const running = count > 1 && !paused && !reduced;

  return (
    <section className={`bg-ink text-white ${sectionSpace}`} aria-roledescription="carousel" aria-label="Student stories">
      <style>{`@keyframes story-progress { from { width: 0 } to { width: 100% } }`}</style>
      <div className={`${container} grid gap-12 lg:grid-cols-[0.8fr_1.6fr] lg:items-center lg:gap-20`}>
        <Reveal>
          <SectionLabel light>{STORIES.label}</SectionLabel>
          <h2 className={`${h2} mt-5 max-w-[14ch]`}>{STORIES.title}</h2>
          {STORIES.text && <p className="mt-5 max-w-[34ch] text-lg leading-relaxed text-white/65">{STORIES.text}</p>}
        </Reveal>

        <Reveal delay={150}>
          <div
            className="relative rounded-[2rem] bg-white/[0.04] p-6 ring-1 ring-white/10 sm:p-10"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
            onBlurCapture={() => setPaused(false)}
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              if (Math.abs(dx) > 50) go(index + (dx < 0 ? 1 : -1));
              touchX.current = null;
            }}
          >
            {/* key replays the entrance animation each time the story changes */}
            <figure
              key={index}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${count}`}
              className="animate-hero-rise motion-reduce:animate-none"
            >
              <span aria-hidden="true" className="block text-6xl leading-none text-gold">“</span>
              <blockquote className="mt-2 min-h-[9em] text-[clamp(1.15rem,2vw,1.6rem)] font-semibold leading-snug tracking-[-0.01em]">
                {story.quote}
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-4">
                <span className="relative grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-full bg-gold text-base font-bold text-ink ring-2 ring-gold">
                  {story.image ? (
                    <Image src={story.image} alt="" fill sizes="56px" className="object-cover" />
                  ) : (
                    <span aria-hidden="true">{initials(story.name)}</span>
                  )}
                </span>
                <span className="min-w-0">
                  <span className="block font-bold">{story.name}</span>
                  <span className="block text-[0.9375rem] text-white/60">{story.role}</span>
                </span>
              </figcaption>
            </figure>

            {count > 1 && (
              <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-6">
                <div className="flex items-center gap-2" role="group" aria-label="Choose a story">
                  {items.map((s, i) => (
                    <button
                      key={s.name + i}
                      type="button"
                      onClick={() => go(i)}
                      aria-label={`Story ${i + 1}: ${s.name}`}
                      aria-current={i === index ? "true" : undefined}
                      className="group grid h-8 place-items-center"
                    >
                      <span
                        className={`relative block h-1.5 overflow-hidden rounded-full transition-all duration-500 ${
                          i === index ? "w-12 bg-white/20" : "w-4 bg-white/30 group-hover:bg-white/60"
                        }`}
                      >
                        {i === index && (
                          <span
                            key={`${index}-${running}`}
                            className={`absolute inset-y-0 left-0 rounded-full bg-gold ${running ? "w-0" : "w-full"}`}
                            style={running ? { animation: `story-progress ${AUTOPLAY_MS}ms linear forwards` } : undefined}
                          />
                        )}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-sm tabular-nums text-white/60" aria-live="polite">
                    {index + 1} / {count}
                  </span>
                  {[
                    { label: "Previous story", step: -1, d: "M12.7 4.3a1 1 0 0 1 0 1.4L8.4 10l4.3 4.3a1 1 0 1 1-1.4 1.4l-5-5a1 1 0 0 1 0-1.4l5-5a1 1 0 0 1 1.4 0z" },
                    { label: "Next story", step: 1, d: "M7.3 15.7a1 1 0 0 1 0-1.4l4.3-4.3-4.3-4.3a1 1 0 1 1 1.4-1.4l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4 0z" },
                  ].map((b) => (
                    <button
                      key={b.label}
                      type="button"
                      onClick={() => go(index + b.step)}
                      aria-label={b.label}
                      className="grid h-11 w-11 place-items-center rounded-full ring-1 ring-white/25 transition-colors hover:bg-white hover:text-ink"
                    >
                      <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                        <path d={b.d} />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}