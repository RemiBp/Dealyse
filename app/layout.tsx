import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";
import { Analytics } from "@vercel/analytics/react";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dealyse.pro"),
  title: {
    default: "DEALYSE — Le Deal OS propulsé par Palantir Foundry",
    template: "%s — DEALYSE",
  },
  description:
    "Analysez une data room complète en 4 heures. Due diligence financière, juridique et opérationnelle entièrement automatisée sur Palantir Foundry. Pour le M&A mid-market.",
  keywords: [
    "due diligence IA", "deal management", "Palantir Foundry", "M&A software",
    "private equity tools", "investment banking", "LBO model", "IC memo", "data room",
  ],
  authors: [{ name: "DEALYSE", url: "https://dealyse.pro" }],
  creator: "DEALYSE",
  openGraph: {
    title: "DEALYSE — Le Deal OS propulsé par Palantir Foundry",
    description:
      "Des semaines de travail. En quelques minutes. Due diligence complète en 4h sur Palantir Foundry.",
    url: "https://dealyse.pro",
    siteName: "DEALYSE",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DEALYSE — Le Deal OS propulsé par Palantir Foundry",
    description: "Due diligence M&A en 4 heures. Propulsé par Palantir Foundry.",
    creator: "@dealyse",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://dealyse.pro",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={manrope.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body style={{ fontFamily: "var(--font-manrope, 'Manrope', sans-serif)" }}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
