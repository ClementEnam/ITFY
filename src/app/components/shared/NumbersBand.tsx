import { container, h2, sectionSpace, SectionLabel } from "../home/ui";
import CountUp from "../who-we-are/CountUp";
import Reveal from "../who-we-are/Reveal";

type Stat = { value: string; label: string; text: string };

// Navy band of counting figures, used on the Team and Partners pages.
export default function NumbersBand({ label, title, stats }: { label: string; title: string; stats: Stat[] }) {
  return (
    <section className={`bg-ink text-white ${sectionSpace}`}>
      <div className={container}>
        <Reveal>
          <SectionLabel light>{label}</SectionLabel>
          <h2 className={`${h2} mt-5`}>{title}</h2>
        </Reveal>
        <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-[1.75rem] bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="bg-ink p-7 sm:p-8">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <CountUp value={s.value} className="block text-5xl font-extrabold tracking-[-0.04em] text-gold" />
                <span className="mt-3 block text-lg font-semibold">{s.label}</span>
                <span className="mt-1 block max-w-[30ch] text-[15px] leading-snug text-white/65">{s.text}</span>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
