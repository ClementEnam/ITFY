"use client";

import { useMemo, useState } from "react";
import CourseCard from "./CourseCard";
import { COURSES, LEVEL_LABEL, type Level } from "./content";

// only offer levels and categories that at least one course actually uses
const LEVEL_ORDER: Level[] = ["beginner", "intermediate", "advanced", "all-levels"];
// ("All levels" courses aren't an option: they already appear under every level)
const LEVELS = LEVEL_ORDER.filter((l) => l !== "all-levels" && COURSES.some((c) => c.level === l));
const CATEGORIES = Array.from(new Set(COURSES.map((c) => c.category))).sort();

const field =
  "h-12 w-full rounded-full bg-white px-5 text-[0.9375rem] text-ink ring-1 ring-line transition-shadow focus:outline-none focus:ring-2 focus:ring-ink";

function Select({
  label,
  value,
  onChange,
  children,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  children: React.ReactNode;
}) {
  return (
    <label className="relative block">
      <span className="sr-only">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)} className={`${field} appearance-none pr-11`}>
        {children}
      </select>
      <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/50">
        <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06z" />
      </svg>
    </label>
  );
}

export default function CourseCatalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [level, setLevel] = useState("all");
  const [price, setPrice] = useState("all");

  // "All levels" courses suit everyone, so they show under any level filter
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return COURSES.filter(
      (c) =>
        (!q || `${c.title} ${c.category} ${c.description} ${LEVEL_LABEL[c.level]}`.toLowerCase().includes(q)) &&
        (category === "all" || c.category === category) &&
        (level === "all" || c.level === level || c.level === "all-levels") &&
        (price === "all" || (price === "free" ? c.price === 0 : c.price > 0))
    );
  }, [query, category, level, price]);

  const filtered = query !== "" || category !== "all" || level !== "all" || price !== "all";
  const clear = () => {
    setQuery("");
    setCategory("all");
    setLevel("all");
    setPrice("all");
  };

  return (
    <div>
      {/* filters */}
      <div className="grid gap-3 rounded-[2rem] bg-paper p-3 ring-1 ring-line md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <label className="relative block">
          <span className="sr-only">Search courses</span>
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/45">
            <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 3.4 9.83l3.13 3.14a.75.75 0 1 0 1.06-1.06l-3.13-3.14A5.5 5.5 0 0 0 9 3.5zM5 9a4 4 0 1 1 8 0 4 4 0 0 1-8 0z" clipRule="evenodd" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search courses or skills"
            className={`${field} pl-11`}
          />
        </label>
        <Select label="Category" value={category} onChange={setCategory}>
          <option value="all">All categories</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </Select>
        <Select label="Level" value={level} onChange={setLevel}>
          <option value="all">Any level</option>
          {LEVELS.map((l) => (
            <option key={l} value={l}>
              {LEVEL_LABEL[l]}
            </option>
          ))}
        </Select>
        <Select label="Price" value={price} onChange={setPrice}>
          <option value="all">Free and paid</option>
          <option value="free">Free only</option>
          <option value="paid">Paid only</option>
        </Select>
      </div>

      <div className="mt-6 flex min-h-10 items-center justify-between gap-4">
        <p role="status" className="text-[0.9375rem] font-semibold text-ink">
          {results.length} {results.length === 1 ? "course" : "courses"}
          {filtered ? (results.length === 1 ? " matches your filters" : " match your filters") : " available"}
        </p>
        {filtered && (
          <button type="button" onClick={clear} className="rounded-full px-4 py-2 text-sm font-semibold text-ink ring-1 ring-line hover:ring-ink">
            Clear filters
          </button>
        )}
      </div>

      {results.length > 0 ? (
        // keyed by the filters, so cards replay their entrance when results change
        <ul key={`${query}|${category}|${level}|${price}`} className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {results.map((course, i) => (
            <li
              key={course.slug}
              className="animate-hero-rise motion-reduce:animate-none"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <CourseCard course={course} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-6 rounded-[2rem] bg-white px-6 py-16 text-center ring-1 ring-line">
          <p className="text-xl font-bold text-ink">No courses match these filters.</p>
          <p className="mt-2 text-ink/65">Try a different search, or clear the filters to see every course.</p>
          <button type="button" onClick={clear} className="mt-6 rounded-full bg-ink px-6 py-3 text-[0.9375rem] font-semibold text-white hover:bg-ink-soft">
            Show all courses
          </button>
        </div>
      )}
    </div>
  );
}
