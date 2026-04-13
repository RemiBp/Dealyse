import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "DEALYSE — Due diligence augmentée par l'IA",
  description:
    "Analysez une data room complète en 4 heures. Due diligence financière, juridique et opérationnelle entièrement automatisée sur Palantir Foundry.",
  openGraph: {
    title: "DEALYSE — AI-powered due diligence, done in hours",
    description:
      "Analyze a full data room in 4 hours. Financial, legal and operational due diligence fully automated on Palantir Foundry.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={manrope.variable}>
      <body style={{ fontFamily: "var(--font-manrope, 'Manrope', sans-serif)" }}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
