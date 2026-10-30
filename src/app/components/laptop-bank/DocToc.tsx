"use client";

import { useEffect, useState } from "react";

// "On this page" list for long documents. Highlights the section being read.
export default function DocToc({ items }: { items: { id: string; title: string }[] }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-35% 0px -60% 0px" }
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="On this page">
      <p className="text-sm font-semibold text-ink/55">On this page</p>
      <ol className="mt-4 space-y-1 border-l-2 border-line">
        {items.map((it, i) => {
          const on = it.id === active;
          return (
            <li key={it.id}>
              <a
                href={`#${it.id}`}
                aria-current={on ? "location" : undefined}
                className={`-ml-[2px] flex gap-3 border-l-2 py-1.5 pl-4 text-[15px] transition-colors ${
                  on ? "border-gold font-semibold text-ink" : "border-transparent text-ink/60 hover:text-ink"
                }`}
              >
                <span className="w-4 shrink-0 tabular-nums text-ink/40">{i + 1}</span>
                {it.title}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
