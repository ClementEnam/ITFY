"use client";

import { MODEL } from "./content";
import { useInView } from "./useInView";

// Reach → Train → Progress. A gold line draws through the steps
// as they scroll into view; each step lights up in turn.
export default function ModelSteps() {
  const { ref, inView } = useInView<HTMLOListElement>(0.3);
  const count = MODEL.steps.length;

  return (
    <ol ref={ref} className="relative grid gap-10 md:grid-cols-3 md:gap-8">
      {/* connecting line — vertical on mobile, horizontal on desktop */}
      <span
        aria-hidden="true"
        className={`absolute left-[1.375rem] top-2 bottom-2 w-[3px] origin-top rounded-full bg-gold transition-transform duration-[1400ms] ease-out md:hidden ${
          inView ? "scale-y-100" : "scale-y-0"
        }`}
      />
      <span
        aria-hidden="true"
        className={`absolute left-[1.375rem] right-[calc(33.33%-1.375rem)] top-[1.3rem] hidden h-[3px] origin-left rounded-full bg-gold transition-transform duration-[1400ms] ease-out md:block ${
          inView ? "scale-x-100" : "scale-x-0"
        }`}
      />

      {MODEL.steps.map((step, i) => (
        <li
          key={step.title}
          style={{ transitionDelay: `${200 + i * (1200 / count)}ms` }}
          className={`relative flex gap-5 transition-[opacity,transform] duration-700 md:block ${
            inView ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          } motion-reduce:transform-none motion-reduce:opacity-100`}
        >
          <span
            className={`relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full text-[15px] font-bold transition-colors duration-500 ${
              inView ? "bg-ink text-white" : "bg-white text-ink ring-1 ring-line"
            }`}
            style={{ transitionDelay: `${300 + i * (1200 / count)}ms` }}
          >
            {i + 1}
          </span>
          <div className="md:mt-7">
            <h3 className="text-2xl font-bold tracking-[-0.02em] text-ink">{step.title}</h3>
            <p className="mt-3 max-w-[36ch] text-base leading-relaxed text-ink/70">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
