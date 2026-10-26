"use client";

import { useState } from "react";
import { PRINCIPLES } from "./content";

// Accordion: one principle open at a time, smooth height animation.
export default function Principles() {
  const [open, setOpen] = useState(0);

  return (
    <ul className="divide-y divide-line border-y border-line">
      {PRINCIPLES.items.map((item, i) => {
        const expanded = open === i;
        const panelId = `principle-panel-${i}`;
        return (
          <li key={item.title}>
            <h3>
              <button
                type="button"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => setOpen(expanded ? -1 : i)}
                className="group flex w-full items-center justify-between gap-6 py-7 text-left"
              >
                <span
                  className={`text-xl font-bold tracking-[-0.02em] transition-colors sm:text-2xl ${
                    expanded ? "text-ink" : "text-ink/60 group-hover:text-ink"
                  }`}
                >
                  {item.title}
                </span>
                {/* plus that turns into a minus */}
                <span
                  aria-hidden="true"
                  className={`relative grid h-11 w-11 shrink-0 place-items-center rounded-full transition-colors duration-300 ${
                    expanded ? "bg-gold" : "bg-white ring-1 ring-line group-hover:ring-ink/30"
                  }`}
                >
                  <span className="absolute h-[2px] w-4 rounded-full bg-ink" />
                  <span
                    className={`absolute h-4 w-[2px] rounded-full bg-ink transition-transform duration-300 ${
                      expanded ? "scale-y-0" : "scale-y-100"
                    }`}
                  />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden" inert={!expanded}>
                <div className="grid gap-6 pb-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:gap-12">
                  <p className="max-w-[44ch] text-lg leading-relaxed text-ink/70">{item.text}</p>
                  <ul className="space-y-3">
                    {item.points.map((point, p) => (
                      <li
                        key={point}
                        style={{ transitionDelay: expanded ? `${150 + p * 80}ms` : "0ms" }}
                        className={`flex gap-3 rounded-2xl bg-white px-5 py-4 text-[15px] leading-snug text-ink ring-1 ring-line transition-[opacity,transform] duration-500 ${
                          expanded ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
                        }`}
                      >
                        <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-[2px] bg-kente-green" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
