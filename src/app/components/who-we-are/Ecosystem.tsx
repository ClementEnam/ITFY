"use client";

import Link from "next/link";
import Image from "next/image";
import { ECOSYSTEM } from "./content";
import { useInView } from "./useInView";

// ITFY at the centre, with branches drawing out to its team, partners and careers.
export default function Ecosystem() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  const grow = "transition-transform duration-700 ease-out motion-reduce:transition-none";

  return (
    <div ref={ref}>
      {/* centre node */}
      <div className="flex md:justify-center">
        <div
          className={`flex items-center gap-4 rounded-full bg-ink py-3 pl-3 pr-7 text-white shadow-[0_24px_48px_-24px_rgba(16,32,74,0.6)] transition-[opacity,transform] duration-700 ${
            inView ? "scale-100 opacity-100" : "scale-90 opacity-0"
          } motion-reduce:transform-none motion-reduce:opacity-100`}
        >
          <span className="grid h-14 w-14 place-items-center rounded-full bg-white/10">
            <Image alt="Nav Photo" src="/logo/logo.png" height={40} width = {40}/>
          </span>
          <span className="text-lg font-bold">{ECOSYSTEM.center}</span>
        </div>
      </div>

      {/* branches (desktop) */}
      <div aria-hidden="true" className="relative hidden h-16 md:block">
        <span
          className={`absolute left-1/2 top-0 h-8 w-[3px] -translate-x-1/2 origin-top bg-gold ${grow} ${
            inView ? "scale-y-100" : "scale-y-0"
          }`}
          style={{ transitionDelay: "300ms" }}
        />
        <span
          className={`absolute left-[16.66%] right-[16.66%] top-8 h-[3px] origin-center bg-gold ${grow} ${
            inView ? "scale-x-100" : "scale-x-0"
          }`}
          style={{ transitionDelay: "650ms" }}
        />
        {["left-[16.66%]", "left-1/2", "left-[83.33%]"].map((pos) => (
          <span
            key={pos}
            className={`absolute top-8 h-8 w-[3px] -translate-x-1/2 origin-top bg-gold ${grow} ${pos} ${
              inView ? "scale-y-100" : "scale-y-0"
            }`}
            style={{ transitionDelay: "1000ms" }}
          />
        ))}
      </div>

      {/* nodes */}
      <ul className="relative mt-8 grid gap-5 border-l-[3px] border-gold pl-6 md:mt-0 md:grid-cols-3 md:border-l-0 md:pl-0">
        {ECOSYSTEM.nodes.map((node, i) => (
          <li
            key={node.title}
            style={{ transitionDelay: `${1100 + i * 120}ms` }}
            className={`transition-[opacity,transform] duration-700 ${
              inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            } motion-reduce:transform-none motion-reduce:opacity-100`}
          >
            <Link
              href={node.href}
              className="group flex h-full flex-col rounded-[1.75rem] bg-white p-7 ring-1 ring-line transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(16,32,74,0.45)]"
            >
              <span className="text-sm font-semibold text-kente-green">{node.role}</span>
              <span className="mt-2 text-2xl font-bold tracking-[-0.02em] text-ink">{node.title}</span>
              <span className="mt-3 flex-1 text-[15px] leading-relaxed text-ink/65">{node.text}</span>
              <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-ink">
                {node.cta}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M7.3 15.7a1 1 0 0 1 0-1.4l4.3-4.3-4.3-4.3a1 1 0 1 1 1.4-1.4l5 5a1 1 0 0 1 0 1.4l-5 5a1 1 0 0 1-1.4 0z" />
                </svg>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
