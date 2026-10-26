"use client";

import { useEffect, useState } from "react";

// Appears after scrolling down a screen or so; smooth-scrolls to the top.
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-5 right-5 z-40 grid h-12 w-12 place-items-center rounded-full bg-ink text-white shadow-[0_16px_32px_-12px_rgba(16,32,74,0.6)] ring-1 ring-white/15 transition-[opacity,transform] duration-300 hover:bg-ink-soft sm:bottom-8 sm:right-8 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <svg aria-hidden="true" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
        <path d="M10 4a1 1 0 0 1 .7.3l5 5a1 1 0 0 1-1.4 1.4L11 7.4V15a1 1 0 1 1-2 0V7.4l-3.3 3.3a1 1 0 0 1-1.4-1.4l5-5A1 1 0 0 1 10 4z" />
      </svg>
    </button>
  );
}
