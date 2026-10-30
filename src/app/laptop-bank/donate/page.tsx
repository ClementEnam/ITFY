import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT } from "../../components/footer/footerContent";
import { container, SectionLabel } from "../../components/home/ui";

import OfferForm from "../../components/laptop-bank/OfferForm";
import { REPLY_TIME } from "../../components/laptop-bank/offer";

export const metadata: Metadata = {
  title: "Offer your equipment | IT For Youth Laptop Bank",
  description: "Tell us what your organisation can donate. We reply with what we can take, what we cannot, and how we would handle the rest.",
};

export default function OfferEquipmentPage() {
  const intro = [
    "Five minutes now saves a meeting later.",
    REPLY_TIME
      ? `We reply within ${REPLY_TIME} with what we can take, what we cannot, and how we would handle the rest.`
      : "We reply with what we can take, what we cannot, and how we would handle the rest.",
    "If you have an asset list, attach it and skip most of this form.",
  ].join(" ");

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="bg-ink text-white">
        <div className={`${container} pb-36 pt-8 sm:pb-40`}>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/60">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/laptop-bank" className="hover:text-white">Laptop Bank</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-white">Offer your equipment</li>
            </ol>
          </nav>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <div className="animate-hero-rise motion-reduce:animate-none">
                <SectionLabel light>IT For Youth Laptop Bank</SectionLabel>
              </div>
              <h1 className="mt-5 animate-hero-rise text-[clamp(2.75rem,7vw,5.75rem)] font-extrabold leading-[0.95] tracking-[-0.05em] motion-reduce:animate-none">
                Offer your equipment
              </h1>
            </div>
            <p className="max-w-[46ch] animate-hero-rise text-lg leading-relaxed text-white/75 [animation-delay:150ms] motion-reduce:animate-none">
              {intro}
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Form + side notes, overlapping the hero ---------- */}
      <section className="pb-20 sm:pb-24">
        <div className={`${container} -mt-24 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-10`}>
          <div className="min-w-0 animate-hero-rise rounded-[2rem] shadow-[0_40px_80px_-40px_rgba(16,32,74,0.55)] [animation-delay:200ms] motion-reduce:animate-none">
            <OfferForm />
          </div>

          <aside className="space-y-5 lg:pt-24">
            <div className="rounded-[1.75rem] bg-white p-7 ring-1 ring-line">
              <h2 className="text-lg font-bold text-ink">Would rather talk to someone?</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/70">
                Email{" "}
                <a href={`mailto:${CONTACT.email}`} className="font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4 [overflow-wrap:anywhere]">
                  {CONTACT.email}
                </a>{" "}
                with roughly what you have and when. Some organisations never use a web form, and that is fine.
              </p>
            </div>
            <div className="rounded-[1.75rem] bg-gold/15 p-7">
              <h2 className="text-lg font-bold text-ink">Before you start</h2>
              <ul className="mt-3 space-y-2 text-[15px] text-ink/75">
                <li>
                  <Link href="/laptop-bank/what-we-accept" className="font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4">
                    What we accept
                  </Link>{" "}
                  — our minimum specification
                </li>
                <li>
                  <Link href="/laptop-bank" className="font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4">
                    How it works
                  </Link>{" "}
                  — the nine stages after you offer
                </li>
              </ul>
            </div>
            <p className="px-2 text-sm leading-relaxed text-ink/60">
              Everything you send here is handled as described in our{" "}
              <Link href="/laptop-bank/data-security" className="font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4">
                Laptop Bank data handling statement
              </Link>
              .
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
