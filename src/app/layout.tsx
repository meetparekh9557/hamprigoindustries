import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@/components/analytics";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { analytics, company, seo } from "@/content/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  // Used for small spec labels only. Preloading it competed with the hero
  // image for bandwidth on the first paint; it can arrive a beat later.
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(company.url),
  title: {
    default: seo.home.title,
    template: `%s | ${company.name}`,
  },
  description: seo.home.description,
  // The homepage had no canonical of its own; every other page sets one.
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: company.name,
    locale: "en_IN",
    url: company.url,
  },
  robots: { index: true, follow: true },
  /**
   * Declared explicitly and served from public/, so the URLs are stable.
   * Put in app/ instead, Next fingerprints them, and the favicon's address
   * changes on every deploy. Google's favicon crawler wants one address that
   * stays put, and it asks for a square whose dimensions are a multiple of
   * 48px, which is why these are 48, 96 and 192 rather than 256 and 512.
   */
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/icon-48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  // Emits the google-site-verification meta tag into <head>.
  verification: { google: analytics.searchConsoleToken },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-ink-strong focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
