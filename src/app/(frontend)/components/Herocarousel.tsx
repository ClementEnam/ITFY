"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Slide = {
  tag: string;
  title: string;
  highlight?: string; // pink italic words at the end of the title
  text: string;
  image: string;
  alt: string;
  caption: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

// Edit slides here. Images go in public/hero/
const SLIDES: Slide[] = [
  {
    tag: "For young Ghanaians",
    title: "Build practical digital skills. Gain confidence.",
    highlight: "Shape your future.",
    text: "Cohort-based training in Accra for young people ready to move from curiosity to real digital careers, entrepreneurship, or further study. 3,000+ youth trained. 85% of graduates progress into work, learning, or enterprise within six months.",
    image: "/randomPictures/mainGraduationpic.jpg",
    alt: "ITFY graduates in gowns holding their certificates",
    caption: "Graduation day, Accra",
    primary: { label: "Apply for Cohort 8", href: "/apply" },
    secondary: { label: "See who can apply", href: "/apply/eligibility" },
  },
  {
    tag: "For supporters",
    title: "Invest in Ghana's next generation of digital talent.",
    text: "3,000+ youth trained. 8,500+ students reached through school and community partnerships. 40% female participation. Your support funds scholarships, devices, mentorship, and measurable pathways into work and enterprise.",
    image: "/randomPictures/happystudentscasual.jpg",
    alt: "Students celebrating together during a practical session",
    caption: "Practical session, group work",
    primary: { label: "Support Cohort 8", href: "/donate" },
    secondary: { label: "See our impact", href: "/our-impact" },
  },
  {
    tag: "For organisations",
    title: "Train your teams. Sponsor talent.",
    highlight: "Hire job-ready graduates.",
    text: "Partner with IT For Youth Ghana for corporate training, staff volunteering, scholarship sponsorship, or direct access to graduates who have built portfolios and demonstrated real project delivery.",
    image: "/randomPictures/studentsBackcoding.jpg",
    alt: "Trainees coding at computer workstations",
    caption: "Cohort workstations, Accra",
    primary: { label: "Partner with us", href: "/partner-with-us" },
    secondary: { label: "Hire our graduates", href: "/for-organisations/hire" },
  },
];

const INTERVAL = 6000; // ms per slide
const pad = (n: number) => String(n).padStart(2, "0");

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const count = SLIDES.length;

  const go = (i: number) => setIndex((i + count) % count);

  // Autoplay — restarts after any manual change, pauses on hover/focus,
  // and stays off for people who prefer reduced motion.
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => setIndex((i) => (i + 1) % count), INTERVAL);
    return () => clearTimeout(id);
  }, [index, paused, count]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Highlights"
      className="px-4 py-6 sm:px-6 lg:px-12"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? index + 1 : index - 1);
        touchX.current = null;
      }}
    >
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#13214d] p-4 text-white sm:p-8 lg:p-10">
        {/* decorative ring */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full border-[5rem] border-white/[0.04]"
        />

        <div className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* ---------- Images (stacked, cross-fade) ---------- */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] sm:rounded-t-[10rem] lg:aspect-auto lg:h-[600px]">
            {SLIDES.map((slide, i) => (
              <div
                key={slide.image}
                aria-hidden={i !== index}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={i === 0}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className={`object-cover transition-transform duration-[6000ms] ease-out ${
                    i === index ? "scale-105" : "scale-100"
                  }`}
                />
              </div>
            ))}

            {/* slide number badge */}
            <span className="absolute right-6 top-6 grid h-16 w-16 place-items-center rounded-full bg-white text-lg font-bold text-[#13214d] shadow-lg sm:right-10 sm:top-10">
              {pad(index + 1)}
            </span>

            {/* caption card — sits inside the image so it never covers the buttons */}
            <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white px-5 py-4 text-[#13214d] shadow-xl sm:right-auto sm:min-w-72 sm:rounded-3xl sm:px-7 sm:py-5">
              <span className="mb-3 block h-1.5 w-12 rounded-full bg-pink-500" />
              <p className="text-base font-semibold sm:text-lg">{SLIDES[index].caption}</p>
            </div>
          </div>

          {/* ---------- Text (stacked in one grid cell so height never jumps) ---------- */}
          <div className="grid">
            {SLIDES.map((slide, i) => {
              const active = i === index;
              return (
                <div
                  key={slide.title}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${count}`}
                  aria-hidden={!active}
                  inert={!active}
                  className={`col-start-1 row-start-1 transition-all duration-700 ${
                    active ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
                  }`}
                >
                  <span className="inline-block rounded-full bg-pink-500 px-6 py-3 text-xs font-bold uppercase tracking-[0.25em] text-[#13214d]">
                    {slide.tag}
                  </span>

                  <h2 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl xl:text-6xl">
                    {slide.title}{" "}
                    {slide.highlight && (
                      <span className="font-semibold italic text-pink-400">{slide.highlight}</span>
                    )}
                  </h2>

                  <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                    {slide.text}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href={slide.primary.href}
                      className="rounded-xl bg-pink-600 px-7 py-4 font-semibold text-white transition-colors hover:bg-pink-500"
                    >
                      {slide.primary.label}
                    </Link>
                    <Link
                      href={slide.secondary.href}
                      className="rounded-xl bg-white px-7 py-4 font-semibold text-[#13214d] transition-colors hover:bg-white/90"
                    >
                      {slide.secondary.label}
                    </Link>
                  </div>
                </div>
              );
            })}

            {/* ---------- Controls ---------- */}
            <div className="mt-10 flex items-center gap-5">
              <button
                type="button"
                onClick={() => go(index - 1)}
                aria-label="Previous slide"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                  <path d="M12.7 4.3a1 1 0 0 1 0 1.4L8.4 10l4.3 4.3a1 1 0 1 1-1.4 1.4l-5-5a1 1 0 0 1 0-1.4l5-5a1 1 0 0 1 1.4 0z" />
                </svg>
              </button>

              <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-2.5">
                {SLIDES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => go(i)}
                    aria-label={`Go to slide ${i + 1}`}
                    aria-current={i === index}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      i === index ? "w-16 bg-pink-500" : "w-3 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => go(index + 1)}
                aria-label="Next slide"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/20 transition-colors hover:bg-white/10"
              >
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                  <path d="M7.3 15.7a1 1 0 0 1 0-1.4l4.3-4.3-4.3-4.3a1 1 0 1 1 1.4-1.4l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4 0z" />
                </svg>
              </button>

              <span className="font-semibold text-white/60" aria-live="polite">
                {pad(index + 1)} <span className="mx-1 text-white/30">/</span> {pad(count)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}