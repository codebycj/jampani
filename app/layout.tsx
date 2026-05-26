import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ThemeScript } from "@/components/ThemeScript";
import { CommandPalette } from "@/components/CommandPalette";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const siteUrl = "https://jampani.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Chaitanya Jampani — Senior Frontend Engineer",
    template: "%s — Chaitanya Jampani",
  },
  description:
    "Senior frontend engineer specializing in enterprise web apps for fintech and banking. 10+ years shipping accessible, performant React and Next.js at scale.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "Chaitanya Jampani",
    title: "Chaitanya Jampani — Senior Frontend Engineer",
    description:
      "Senior frontend engineer specializing in enterprise web apps for fintech and banking.",
    images: [{ url: "/og/default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaitanya Jampani — Senior Frontend Engineer",
    description:
      "Senior frontend engineer specializing in enterprise web apps for fintech and banking.",
    images: ["/og/default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  authors: [{ name: "Chaitanya Jampani", url: siteUrl }],
  creator: "Chaitanya Jampani",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-screen flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <CommandPalette />
      </body>
    </html>
  );
}
