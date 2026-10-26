import Image from "next/image";
import Link from "next/link";
import type { Course } from "./content";

const LEVEL_STYLE: Record<Course["level"], string> = {
  beginner: "bg-kente-green/10 text-kente-green",
  intermediate: "bg-gold/20 text-ink",
  advanced: "bg-kente-red/10 text-kente-red",
};

export default function CourseCard({ course }: { course: Course }) {
  const price = course.price === 0 ? "Free" : `GHS ${course.price.toLocaleString("en-US")}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-line transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(16,32,74,0.45)]">
      {/* image, or a woven placeholder when there isn't one */}
      <div className="relative aspect-[16/10] overflow-hidden bg-ink">
        {course.image ? (
          <Image
            src={course.image}
            alt=""
            fill
            sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_70%_30%,var(--color-ink-soft),var(--color-ink)_70%)]">
            <Image alt="Nav Photo" src="/logo/logo.png" height={90} width = {90}/>
          </div>
        )}
        <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold capitalize backdrop-blur ${LEVEL_STYLE[course.level]} ${course.image ? "bg-white/90" : "bg-white"}`}>
          {course.level}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm font-medium text-ink/55">{course.category}</p>
        <h3 className="mt-2 text-xl font-bold leading-snug tracking-[-0.02em] text-ink">{course.title}</h3>

        <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
          <div className="rounded-2xl bg-paper px-4 py-3">
            <dt className="text-ink/55">Duration</dt>
            <dd className="mt-0.5 font-semibold text-ink">{course.duration}</dd>
          </div>
          <div className="rounded-2xl bg-paper px-4 py-3">
            <dt className="text-ink/55">Next start</dt>
            <dd className="mt-0.5 font-semibold text-ink">{course.nextStart}</dd>
          </div>
        </dl>

        <div className="mt-auto flex items-end justify-between gap-4 pt-6">
          <p>
            <span className="block text-sm text-ink/55">Price</span>
            <span className="text-2xl font-extrabold tracking-[-0.03em] text-ink">{price}</span>
          </p>
          <div className="flex items-center gap-2">
            <Link
              href={`/apply/courses/${course.slug}`}
              className="rounded-full px-3 py-2.5 text-sm font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4 hover:decoration-ink"
            >
              Details
            </Link>
            <Link
              href={`/apply/form?course=${course.slug}`}
              aria-label={`Apply for ${course.title}`}
              className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-ink-soft"
            >
              Apply
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
