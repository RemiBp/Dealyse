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
    default: "DEALYSE — Deal OS M&A sur Palantir Foundry",
    template: "%s — DEALYSE",
  },
  description:
    "Deal OS M&A : data room, analyses, modèles et mémos sur une plateforme souveraine Palantir Foundry. DD et exécution accélérées — mid-market.",
  keywords: [
    "due diligence IA", "deal management", "Palantir Foundry", "M&A software",
    "private equity tools", "investment banking", "LBO model", "IC memo", "data room",
  ],
  authors: [{ name: "DEALYSE", url: "https://dealyse.pro" }],
  creator: "DEALYSE",
  openGraph: {
    title: "DEALYSE — Deal OS M&A sur Palantir Foundry",
    description:
      "Des semaines de travail. En quelques minutes. DD, pipeline et comité — une couche unique sur Palantir Foundry.",
    url: "https://dealyse.pro",
    siteName: "DEALYSE",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DEALYSE — Deal OS M&A sur Palantir Foundry",
    description: "Due diligence et exécution deal accélérées. Plateforme souveraine Palantir Foundry.",
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
