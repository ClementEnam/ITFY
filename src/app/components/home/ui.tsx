// Small shared pieces for the homepage sections.

export const container = "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8";
export const sectionSpace = "py-20 sm:py-24 lg:py-28";
export const h2 = "text-[clamp(2rem,4.2vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.035em]";

export function SectionLabel({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <div className={`flex items-center gap-3 text-[0.9375rem] font-semibold ${light ? "text-white/70" : "text-ink/55"}`}>
      <span aria-hidden="true" className="h-[3px] w-6 rounded-full bg-gold" />
      {children}
    </div>
  );
}

export function Arrow({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className={`${className} transition-transform duration-300 group-hover:translate-x-1`}>
      <path d="M7.3 15.7a1 1 0 0 1 0-1.4l4.3-4.3-4.3-4.3a1 1 0 1 1 1.4-1.4l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4 0z" />
    </svg>
  );
}
