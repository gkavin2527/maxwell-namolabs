import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { SkipLink } from "@/components/layout/SkipLink";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/seo/CookieConsent";
import { Analytics } from "@/components/seo/Analytics";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/content/site-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Maxwell Financial Services | Independent Insurance Adviser NZ",
    template: "%s | Maxwell Financial Services",
  },
  description:
    "Independent New Zealand insurance adviser. Tailored life, health, trauma, mortgage protection, and business insurance with Roger Venkatesh (FSP 539026). Get a free quote.",
  authors: [{ name: "Roger Venkatesh, Maxwell Financial Services Ltd" }],
  keywords: [
    "insurance adviser nz",
    "life insurance auckland",
    "trauma insurance nz",
    "health insurance new zealand",
    "income protection nz",
    "business insurance",
    "roger venkatesh",
    "maxwell financial services",
  ],
  alternates: {
    canonical: siteConfig.siteUrl,
  },
  openGraph: {
    title: "Maxwell Financial Services | Independent Insurance Adviser NZ",
    description:
      "Tailored insurance solutions for NZ families and businesses. Compare AIA, nib, Chubb, Partners Life, and Tower with licensed adviser Roger Venkatesh.",
    url: siteConfig.siteUrl,
    siteName: "Maxwell Financial Services",
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxwell Financial Services | Independent Insurance Adviser NZ",
    description:
      "Licensed New Zealand Financial Advice Provider. Life, health, disability, and commercial insurance.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-NZ"
      className={`${inter.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f9f9f9] text-[#4f4f4f]">
        <SkipLink />
        <JsonLd />
        <Header />
        <main id="main-content" className="flex-1 pt-[88px]">
          {children}
        </main>
        <Footer />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
