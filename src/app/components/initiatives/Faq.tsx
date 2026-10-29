// Accessible FAQ list using native <details>, so it works without JavaScript.
export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left [&::-webkit-details-marker]:hidden">
            <span className="text-lg font-bold tracking-[-0.01em] text-ink sm:text-xl">{item.q}</span>
            <span
              aria-hidden="true"
              className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white ring-1 ring-line transition-colors group-open:bg-gold group-open:ring-gold"
            >
              <span className="absolute h-[2px] w-4 rounded-full bg-ink" />
              <span className="absolute h-4 w-[2px] rounded-full bg-ink transition-transform duration-300 group-open:scale-y-0" />
            </span>
          </summary>
          <p className="max-w-[70ch] pb-7 text-[15px] leading-relaxed text-ink/70 sm:text-base">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
