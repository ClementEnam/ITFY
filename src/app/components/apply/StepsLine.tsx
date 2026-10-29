"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useInView } from "../who-we-are/useInView";

type Step = { title: string; text: string; image?: { src: string; alt: string } };

// Numbered steps joined by a gold line that draws as they scroll into view.
// Vertical on phones and tablets, horizontal from large screens up.
export default function StepsLine({ steps }: { steps: Step[] }) {
  const { ref, inView } = useInView<HTMLOListElement>(0.3);

  return (
    <ol
      ref={ref}
      style={{ "--steps": steps.length } as CSSProperties}
      className="relative grid gap-10 lg:grid-cols-[repeat(var(--steps),minmax(0,1fr))] lg:gap-8"
    >
      {/* vertical line (small screens) */}
      <span
        aria-hidden="true"
        className={`absolute bottom-2 left-[1.375rem] top-2 w-[3px] origin-top rounded-full bg-gold transition-transform duration-[1400ms] ease-out lg:hidden ${
          inView ? "scale-y-100" : "scale-y-0"
        }`}
      />
      {/* horizontal line (large screens): from the first circle to the last */}
      <span
        aria-hidden="true"
        className={`absolute left-[1.375rem] right-[calc(100%/var(--steps)-1.375rem)] top-[1.3rem] hidden h-[3px] origin-left rounded-full bg-gold transition-transform duration-[1400ms] ease-out lg:block ${
          inView ? "scale-x-100" : "scale-x-0"
        }`}
      />

      {steps.map((step, i) => {
        const delay = 200 + i * (1200 / steps.length);
        return (
          <li
            key={step.title}
            style={{ transitionDelay: `${delay}ms` }}
            className={`relative flex gap-5 transition-[opacity,transform] duration-700 lg:block ${
              inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            } motion-reduce:transform-none motion-reduce:opacity-100`}
          >
            <span
              style={{ transitionDelay: `${delay + 100}ms` }}
              className={`relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full text-[15px] font-bold transition-colors duration-500 ${
                inView ? "bg-ink text-white" : "bg-white text-ink ring-1 ring-line"
              }`}
            >
              {i + 1}
            </span>
            <div className="min-w-0 flex-1 lg:mt-7">
              <h3 className="text-xl font-bold tracking-[-0.02em] text-ink">{step.title}</h3>
              <p className="mt-2 max-w-[40ch] text-[15px] leading-relaxed text-ink/70">{step.text}</p>
              {step.image && (
                <div className="relative mt-5 aspect-[16/10] overflow-hidden rounded-2xl sm:max-w-md lg:max-w-none">
                  <Image
                    src={step.image.src}
                    alt={step.image.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 28rem, 85vw"
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
