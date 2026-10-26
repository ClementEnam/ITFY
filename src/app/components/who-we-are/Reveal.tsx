"use client";

import type { ReactNode } from "react";
import { useInView } from "./useInView";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number; // ms
  // "rise": fades up. "wipe": an image uncovers from the bottom up.
  variant?: "rise" | "wipe";
};

const reduced = "motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:[clip-path:none]";

export default function Reveal({ children, className = "", delay = 0, variant = "rise" }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  if (variant === "wipe") {
    // The outer box is what gets observed (a fully clipped element can't be "seen").
    // Give it a size and `relative` through className; the image fills the inner layer.
    return (
      <div ref={ref} className={className}>
        <div
          style={{ transitionDelay: `${delay}ms` }}
          className={`absolute inset-0 transition-[clip-path] duration-[1100ms] ease-[cubic-bezier(0.7,0,0.2,1)] ${
            inView ? "[clip-path:inset(0_0_0_0)]" : "[clip-path:inset(100%_0_0_0)]"
          } ${reduced}`}
        >
          {children}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,transform] duration-700 ease-out ${
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${reduced} ${className}`}
    >
      {children}
    </div>
  );
}
