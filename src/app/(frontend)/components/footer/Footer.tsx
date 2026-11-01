import Link from "next/link";
import Image from "next/image";
import BackToTop from "./BackToTop";
import NewsletterForm from "./NewsletterForm";
import SocialIcon from "./SocialIcon";
type L = { label: string; href: string };
export type FooterProps = {
  tagline: string;
  contact: { location: string; email: string; phone: string };
  socials: { name: string; href: string }[];
  columns: { title: string; links: L[] }[];
  legal: L[];
  copyright: string;
  siteName: string;
  logo: string;
};

const container = "mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8";

// The year is worked out when the page is built; the site rebuilds daily and on every CMS change.
function CurrentYear() {
  return <>{new Date().getFullYear()}</>;
}

export default function Footer({ tagline, contact: CONTACT, socials, columns, legal, copyright, siteName, logo }: FooterProps) {
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
        <div className={`${container} grid gap-14 py-14 xl:grid-cols-[1fr_3fr] xl:gap-16 xl:py-20`}>
          {/* brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              {/* white tile keeps the logo visible on the navy background */}
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white p-1.5">
                <Image height={90} width={90} alt="" src={logo} className="h-full w-full object-contain" />
              </span>
              <span className="text-xl font-bold tracking-[-0.01em]">{siteName}</span>
            </Link>
            <p className="mt-5 max-w-[36ch] text-[0.9375rem] leading-relaxed text-white/65">{tagline}</p>

            <address className="mt-7 space-y-2 text-[0.9375rem] not-italic text-white/80">
              {CONTACT.location && <p>{CONTACT.location}</p>}
              {CONTACT.email && (
              <p>
                <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-gold">
                  {CONTACT.email}
                </a>
              </p>
              )}
              {CONTACT.phone && (
              <p>
                <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-gold">
                  {CONTACT.phone}
                </a>
              </p>
              )}
            </address>

            <ul className="mt-7 flex flex-wrap gap-2" aria-label="ITFY on social media">
              {socials.map((s) => (
                <li key={s.name + s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${siteName} on ${s.name}`}
                    className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-gold hover:text-ink"
                  >
                    <SocialIcon name={s.name} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* link columns */}
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 xl:grid-cols-5">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-[0.9375rem] font-bold text-white">{col.title}</h3>
                <span aria-hidden="true" className="mt-3 block h-[3px] w-8 rounded-full bg-gold" />
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="text-[0.9375rem] text-white/65 underline-offset-4 transition-colors hover:text-white hover:underline hover:decoration-gold"
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
            <p>© <CurrentYear /> {copyright}</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legal.map((link) => (
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
