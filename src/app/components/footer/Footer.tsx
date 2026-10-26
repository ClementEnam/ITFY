import { cacheLife } from "next/cache";
import Link from "next/link";
import Image from "next/image";
import KenteWeave from "../Kenteweave";
import BackToTop from "./BackToTop";
import NewsletterForm from "./NewsletterForm";
import SocialIcon from "./SocialIcon";
import { CONTACT, FOOTER_COLUMNS, FOOTER_TAGLINE, LEGAL_LINKS, SOCIALS } from "./footerContent";

const container = "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8";

// Cache Components won't let a page read the clock while it's being pre-built.
// "use cache" says the year may be cached; cacheLife("days") refreshes it daily,
// so it rolls over on its own each January.
async function CurrentYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

export default function Footer() {
  return (
    <footer className="mt-auto">
      

      <div className="bg-ink text-white">
        {/* ---------- Newsletter ---------- */}
        <div className={`${container} grid gap-8 border-b border-white/10 py-14 lg:grid-cols-2 lg:items-center lg:gap-16 lg:py-16`}>
          <div>
            <h2 className="max-w-[22ch] text-[clamp(1.75rem,3vw,2.5rem)] font-extrabold leading-[1.1] tracking-[-0.03em]">
              Stay close to the work as new cohorts, stories and opportunities go live.
            </h2>
            <p className="mt-4 max-w-[52ch] text-base leading-relaxed text-white/65">
              Join the mailing list for programme openings, impact updates, upcoming events, and stories from the
              learners and partners shaping the mission.
            </p>
          </div>
          <div className="lg:justify-self-end lg:w-full lg:max-w-xl">
            <NewsletterForm />
          </div>
        </div>

        {/* ---------- Brand + link columns ---------- */}
        <div className={`${container} grid gap-14 py-14 lg:grid-cols-[1fr_2.4fr] lg:gap-16 lg:py-20`}>
          {/* brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10">
                <Image alt="Nav Photo" src="/logo/logo.png" height={90} width = {90}/>
              </span>
              <span className="text-xl font-bold tracking-[-0.01em]">IT For Youth Ghana</span>
            </Link>
            <p className="mt-5 max-w-[36ch] text-[15px] leading-relaxed text-white/65">{FOOTER_TAGLINE}</p>

            <address className="mt-7 space-y-2 text-[15px] not-italic text-white/80">
              <p>{CONTACT.location}</p>
              <p>
                <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-gold">
                  {CONTACT.email}
                </a>
              </p>
              <p>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-gold">
                  {CONTACT.phone}
                </a>
              </p>
            </address>

            <ul className="mt-7 flex flex-wrap gap-2" aria-label="ITFY on social media">
              {SOCIALS.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`IT For Youth Ghana on ${s.name}`}
                    className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-gold hover:text-ink"
                  >
                    <SocialIcon name={s.name} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* link columns */}
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
            {FOOTER_COLUMNS.map((col) => (
              <div key={col.title}>
                <h3 className="text-[15px] font-bold text-white">{col.title}</h3>
                <span aria-hidden="true" className="mt-3 block h-[3px] w-8 rounded-full bg-gold" />
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[15px] text-white/65 underline-offset-4 transition-colors hover:text-white hover:underline hover:decoration-gold"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* ---------- Bottom bar ---------- */}
        <div className="border-t border-white/10">
          {/* extra bottom/right room so the back-to-top button never covers a link */}
          <div className={`${container} flex flex-col gap-4 pb-24 pt-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between sm:pb-6 sm:pr-28`}>
            <p>© <CurrentYear /> IT For Youth Ghana. Registered NGO. All rights reserved.</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <BackToTop />
    </footer>
  );
}