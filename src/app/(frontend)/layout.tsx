import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { getFooter, getHeader } from "@/cms/data";
import { act, src, str } from "@/cms/media";
import Navbar from "./components/Navbar";
import Footer from "./components/footer/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: { default: "IT For Youth Ghana", template: "%s | IT For Youth Ghana" },
  description: "Digital skills, mentorship and pathways into work for young Ghanaians.",
};

// Pages are rebuilt whenever something is saved in the CMS, and at least once a day.
export const revalidate = 86400;

const DEFAULT_LOGO = "/logo/logo.png";

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  // The navigation bar and footer are edited under "Site" in the admin.
  const [header, footer] = await Promise.all([getHeader(), getFooter()]);
  const logo = src(header.logo) || DEFAULT_LOGO;
  const siteName = str(header.siteName) || "IT For Youth Ghana";
  const links = (list?: { label: string; href: string }[] | null) =>
    (list ?? []).map((l) => ({ label: l.label, href: l.href }));

  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <Navbar
          items={(header.navItems ?? []).map((item) => ({
            label: item.label,
            href: item.href,
            children: item.children?.length
              ? item.children.map((c) => ({ label: c.label, href: c.href, description: c.description ?? undefined }))
              : undefined,
          }))}
          siteName={siteName}
          tagline={str(header.tagline)}
          logo={logo}
          apply={act(header.applyButton) ?? { label: "Apply now", href: "/apply" }}
          donate={act(header.donateButton) ?? { label: "Donate", href: "/donate" }}
        />
        <main className="flex-1">{children}</main>
        <Footer
          siteName={siteName}
          logo={logo}
          tagline={str(footer.tagline)}
          contact={{
            location: str(footer.contact?.location),
            email: str(footer.contact?.email),
            phone: str(footer.contact?.phone),
          }}
          socials={(footer.socials ?? []).map((s) => ({ name: s.name, href: s.href }))}
          columns={(footer.columns ?? []).map((c) => ({ title: c.title, links: links(c.links) }))}
          legal={links(footer.legalLinks)}
          copyright={str(footer.copyright)}
        />
      </body>
    </html>
  );
}
