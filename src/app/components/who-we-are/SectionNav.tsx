"use client";

import { useEffect, useRef, useState } from "react";
import { SECTIONS } from "./content";

// Sticky "on this page" bar. Highlights the section you're reading
// and keeps the active pill in view on small screens.
export default function SectionNav() {
  const [active, setActive] = useState<string>(SECTIONS[0].id);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // keep the active pill visible in the horizontal scroller
  useEffect(() => {
    const list = listRef.current;
    const pill = list?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (!list || !pill) return;
    const left = pill.offsetLeft - list.clientWidth / 2 + pill.clientWidth / 2;
    list.scrollTo({ left, behavior: "smooth" });
  }, [active]);

  return (
    <nav aria-label="On this page" className="sticky top-20 z-40 xl:top-32 border-y border-line bg-paper/90 backdrop-blur-md">
      <ul
        ref={listRef}
        className="mx-auto flex max-w-[1400px] gap-2 overflow-x-auto px-4 py-3 [scrollbar-width:none] sm:px-6 lg:px-8 [&::-webkit-scrollbar]:hidden"
      >
        {SECTIONS.map((s) => {
          const on = s.id === active;
          return (
            <li key={s.id} data-id={s.id} className="shrink-0">
              <a
                href={`#${s.id}`}
                aria-current={on ? "location" : undefined}
                className={`block whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                  on ? "bg-ink text-white" : "text-ink/60 hover:bg-white hover:text-ink"
                }`}
              >
                {s.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
