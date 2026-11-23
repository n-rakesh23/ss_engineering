import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";
import { showDrafts } from "@/lib/content";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { DraftBanner } from "@/components/ui/Draft";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], display: "swap" });

/** Indexing is allowed only on the confirmed production domain with drafts hidden. */
const indexable = Boolean(site.url) && !showDrafts;

export const metadata: Metadata = {
  metadataBase: new URL(site.url ?? "http://localhost:3000"),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: `${site.name} — ${site.businessType.toLowerCase()}.`,
  applicationName: site.name,
  robots: indexable ? { index: true, follow: true } : { index: false, follow: false },
  openGraph: { siteName: site.name, type: "website", locale: "en" },
};

export const viewport: Viewport = {
  themeColor: "#102a43",
};

function OrganizationJsonLd() {
  if (!site.url) return null;
  // Only verified facts are included — never placeholders.
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
  };
  if (site.logo.src) data.logo = `${site.url}${site.logo.src}`;
  if (site.contact.phone.confirmed) data.telephone = site.contact.phone.value;
  if (site.contact.email.confirmed) data.email = site.contact.email.value;
  if (site.contact.address.confirmed) data.address = site.contact.address.value;
  if (site.social.length) data.sameAs = site.social.map((s) => s.href);
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-[60] rounded-md bg-navy px-4 py-3 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to main content
        </a>
        {showDrafts && <DraftBanner />}
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <OrganizationJsonLd />
      </body>
    </html>
  );
}
