"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import KenteWeave from "./Kenteweave";
import Image from "next/image";


type NavChild = { label: string; href: string; description?: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

// Edit labels/links here — desktop and mobile menus both read from this list.
export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Who we are",
    href: "/who-we-are",
    children: [
      { label: "Our story", href: "/who-we-are", description: "Mission, vision and values" },
      { label: "Our team", href: "/who-we-are/team", description: "The people behind ITFY" },
      { label: "Partners", href: "/who-we-are/partners", description: "Who we work with" },
      { label: "Careers", href: "/who-we-are/careers", description: "Work with us" },
    ],
  },
  {
    label: "What we do",
    href: "/what-we-do",
    children: [
      { label: "Programmes", href: "/what-we-do/programmes" },
      { label: "Digital skills training", href: "/what-we-do/training" },
      { label: "Community outreach", href: "/what-we-do/outreach" },
    ],
  },
  {
    label: "Apply for training",
    href: "/apply",
    children: [
      { label: "Available courses", href: "/apply/courses" },
      { label: "Who can apply", href: "/apply/eligibility" },
      { label: "Questions about applying", href: "/apply/faqs" },
    ],
  },
  {
    label: "For organisations",
    href: "/for-organisations",
    children: [
      { label: "Hire our graduates", href: "/for-organisations/hire" },
      { label: "Corporate training", href: "/for-organisations/training" },
    ],
  },
  {
    label: "Partner with us",
    href: "/partner-with-us",
    children: [
      { label: "Sponsorship", href: "/partner-with-us/sponsorship" },
      { label: "Volunteer", href: "/partner-with-us/volunteer" },
    ],
  },
  {
    label: "Our impact",
    href: "/our-impact",
    children: [
      { label: "Success stories", href: "/our-impact/stories" },
      { label: "Reports", href: "/our-impact/reports" },
    ],
  },
  {
    label: "News",
    href: "/news",
    children: [
      { label: "Latest news", href: "/news" },
      { label: "Events", href: "/news/events" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`h-4 w-4 shrink-0 opacity-60 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  const closeAll = () => {
    setOpenMenu(null);
    setMobileOpen(false);
    setMobileExpanded(null);
  };

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const linkBase =
    "relative flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-[15px] font-medium transition-colors";

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/85 text-ink backdrop-blur-md">
      <div ref={navRef} className="mx-auto flex h-20 max-w-[1400px] items-center gap-3 px-4 sm:gap-6 sm:px-6 lg:px-8">
        {/* Logo: small woven mark + name */}
        <Link href="/" onClick={closeAll} className="flex shrink-0 items-center gap-3">
          <Image alt="Nav Photo" src="/logo/logo.png" height={90} width = {90}/>
          <span className="leading-tight">
            <span className="block text-[15px] font-bold tracking-[-0.01em] sm:text-[17px]">IT For Youth Ghana</span>
            <span className="hidden text-[13px] text-ink/55 sm:block">Digital skills &amp; opportunity</span>
          </span>
        </Link>

        {/* Desktop menu */}
        <nav aria-label="Main" className="ml-auto hidden 2xl:block">
          <ul className="flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              const open = openMenu === item.label;
              const tone = active ? "text-ink" : "text-ink/65 hover:text-ink";
              // small gold bar under the current section
              const marker = active && (
                <span aria-hidden="true" className="absolute inset-x-3 -bottom-0.5 h-[3px] rounded-full bg-gold" />
              );

              if (!item.children) {
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={closeAll}
                      aria-current={active ? "page" : undefined}
                      className={`${linkBase} ${tone}`}
                    >
                      {item.label}
                      {marker}
                    </Link>
                  </li>
                );
              }

              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.label)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-haspopup="true"
                    onClick={() => setOpenMenu(open ? null : item.label)}
                    className={`${linkBase} ${tone}`}
                  >
                    {item.label}
                    <Chevron open={open} />
                    {marker}
                  </button>

                  <div
                    className={`absolute left-0 top-full pt-3 transition duration-150 ${
                      open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"
                    }`}
                  >
                    <ul className="w-72 rounded-2xl border border-line bg-white p-2 shadow-[0_24px_48px_-24px_rgba(16,32,74,0.35)]">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={closeAll}
                            className="block rounded-xl px-4 py-3 transition-colors hover:bg-paper"
                          >
                            <span className="block text-[15px] font-semibold">{child.label}</span>
                            {child.description && (
                              <span className="mt-0.5 block text-sm text-ink/55">{child.description}</span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Actions */}
        <div className="ml-auto flex shrink-0 items-center gap-2 2xl:ml-3">
          <Link
            href="/apply"
            onClick={closeAll}
            className="hidden whitespace-nowrap rounded-full bg-ink px-5 py-2.5 text-[15px] font-semibold text-white transition-colors hover:bg-ink-soft sm:block"
          >
            Apply now
          </Link>
          <Link
            href="/donate"
            onClick={closeAll}
            className="whitespace-nowrap rounded-full bg-gold px-4 py-2.5 text-[15px] font-semibold text-ink sm:px-5 transition-colors hover:bg-gold-soft"
          >
            Donate
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="ml-1 grid h-11 w-11 place-items-center rounded-full border border-line bg-white 2xl:hidden"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
              {mobileOpen ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile / tablet menu */}
      {mobileOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="h-[calc(100dvh-5rem)] overflow-y-auto border-t border-line bg-paper px-4 pb-10 pt-2 2xl:hidden"
        >
          <ul className="mx-auto max-w-2xl divide-y divide-line">
            {NAV_ITEMS.map((item) => {
              const expanded = mobileExpanded === item.label;
              const active = isActive(item.href);
              return (
                <li key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        aria-expanded={expanded}
                        onClick={() => setMobileExpanded(expanded ? null : item.label)}
                        className={`flex w-full items-center justify-between py-4 text-left text-lg font-semibold ${
                          active ? "text-ink" : "text-ink/75"
                        }`}
                      >
                        {item.label}
                        <Chevron open={expanded} />
                      </button>
                      {expanded && (
                        <ul className="mb-4 space-y-1 border-l-[3px] border-gold pl-4">
                          {item.children.map((child) => (
                            <li key={child.href}>
                              <Link
                                href={child.href}
                                onClick={closeAll}
                                className="block rounded-lg px-2 py-2 text-[15px] text-ink/75 hover:bg-white hover:text-ink"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeAll}
                      className={`block py-4 text-lg font-semibold ${active ? "text-ink" : "text-ink/75"}`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
          <Link
            href="/apply"
            onClick={closeAll}
            className="mx-auto mt-8 block max-w-2xl rounded-full bg-ink py-3.5 text-center font-semibold text-white sm:hidden"
          >
            Apply now
          </Link>
        </nav>
      )}
    </header>
  );
}
