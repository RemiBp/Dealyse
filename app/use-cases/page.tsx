import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const cases = [
  {
    num: "01",
    segment: "Private Equity",
    title: "Carve-out industriel 120M€ — DD en 4 heures",
    context: "Fonds mid-market européen, 800M€ AUM. Acquisition d'une division manufacturière avec 847 documents en 4 langues.",
    challenge: "DD habituelle : 3 semaines, 2 analystes, 4 cabinets externes, 160 000€ de frais.",
    results: ["847 documents analysés en 4h12", "23 red flags identifiés automatiquement", "160 000€ de frais de conseil économisés", "LBO model pré-rempli en 10 minutes"],
    quote: "Ce qui nous prenait 3 semaines avec 2 analystes est maintenant fait en une journée.",
    image: "/images/ui/carrier_allocation.png",
    href: "/private-equity",
  },
  {
    num: "02",
    segment: "Investment Banking",
    title: "Process sell-side PME tech 45M€",
    context: "Banque d'affaires boutique, Paris. Mandat sell-side pour une scale-up SaaS B2B, 12 acheteurs potentiels qualifiés.",
    challenge: "Pitchbook à construire, 12 acheteurs à coordonner, data room à organiser, NDA à gérer — tout manuellement.",
    results: ["Pitchbook généré en 2 heures vs 3 jours", "12 acheteurs onboardés en 48h", "NDA signés électroniquement sous 24h", "Closing 2 semaines plus tôt que prévu"],
    quote: "La qualité des rapports est directement présentable. Game-changer pour notre exécution.",
    image: "/images/ui/network_opt.png",
    href: "/investment-banking",
  },
  {
    num: "03",
    segment: "M&A Advisors",
    title: "Boutique 4 banquiers — 3× plus de mandats",
    context: "Cabinet boutique M&A, Paris. Spécialisé deals 10–50M€, secteur tech & services. 4 banquiers, 0 analyste dédié DD.",
    challenge: "Chaque mandat mobilisait l'équipe entière pour la DD. Impossible de gérer plus de 3 mandats simultanément.",
    results: ["3× mandats gérés simultanément", "DD internalisée : +40% de marges", "Délai livraison réduit de 60%", "Zéro recrutement supplémentaire"],
    quote: "On a triplé notre volume de mandats sans embaucher. DEALYSE a changé notre modèle.",
    image: "/images/ui/motherbrain.png",
    href: "/ma-advisors",
  },
  {
    num: "04",
    segment: "Cabinets d'Avocats",
    title: "340 contrats analysés en 6 heures — retail",
    context: "Cabinet d'avocats d'affaires, Paris. Due diligence juridique pour acquisition d'un réseau de distribution, 340 contrats en 3 langues.",
    challenge: "5 jours pour réviser 340 contrats manuellement. Risque élevé de manquer des clauses critiques sous pression.",
    results: ["340 contrats analysés en 6 heures", "8 clauses critiques détectées", "3 semaines de travail économisées", "Zéro clause non-standard manquée"],
    quote: "8 clauses critiques que nous aurions probablement manquées sous la pression du timing.",
    image: "/images/ui/afc_alerting.png",
    href: "/legal",
  },
  {
    num: "05",
    segment: "Corporate",
    title: "8 acquisitions bolt-on en 1 an — industriel",
    context: "Direction M&A groupe industriel français, 2 personnes. Stratégie bolt-on active sur 3 secteurs.",
    challenge: "8 acquisitions à réaliser en 12 mois avec 2 personnes et zéro budget pour des cabinets externes.",
    results: ["8 acquisitions finalisées en 12 mois", "Zéro cabinet DD externe sollicité", "−80% coûts de conseil DD", "IC memo en 30 minutes vs 3 jours"],
    quote: "On a multiplié notre capacité d'exécution par 4 sans augmenter l'équipe.",
    image: "/images/ui/single_client_view.png",
    href: "/corporate",
  },
];

export default function UseCasesPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 60 }}>
        <section style={{ padding: "100px 0 64px", background: "white", borderBottom: "1px solid #e4e4e7" }}>
          <div className="container" style={{ maxWidth: 760 }}>
            <span className="label" style={{ display: "block", marginBottom: 16 }}>Use Cases</span>
            <h1 style={{ fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 24 }}>Résultats réels.<br />Chiffrés.</h1>
            <p style={{ fontSize: 16, color: "#71717a", lineHeight: 1.65 }}>5 cas concrets — un par segment. Données anonymisées.</p>
          </div>
        </section>

        {cases.map((c, i) => (
          <section key={i} style={{ background: i % 2 === 0 ? "white" : "#fafafa", padding: "80px 0", borderBottom: "1px solid #e4e4e7" }}>
            <div className="container">
              <AnimatedSection>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="uc-row">
                  <div>
                    <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 20 }}>
                      <span style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 800, color: "#00493a", letterSpacing: "0.1em" }}>{c.num}</span>
                      <span style={{ padding: "3px 10px", border: "1px solid #e4e4e7", fontSize: 11, fontWeight: 700, color: "#71717a", textTransform: "uppercase", letterSpacing: "0.06em" }}>{c.segment}</span>
                    </div>
                    <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 700, color: "#001012", letterSpacing: "-0.02em", marginBottom: 16, lineHeight: 1.2 }}>{c.title}</h2>
                    <p style={{ fontSize: 14, color: "#71717a", lineHeight: 1.65, marginBottom: 12 }}>{c.context}</p>
                    <p style={{ fontSize: 13, color: "#a1a1aa", lineHeight: 1.6, borderLeft: "2px solid #e4e4e7", paddingLeft: 16, marginBottom: 32 }}>Défi : {c.challenge}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid #e4e4e7" }}>
                      {c.results.map((r, j) => (
                        <div key={j} style={{ display: "flex", gap: 12, padding: "10px 0", borderBottom: "1px solid #f4f4f5" }}>
                          <span style={{ color: "#00493a", fontWeight: 800, fontSize: 11, paddingTop: 2, flexShrink: 0 }}></span>
                          <span style={{ fontSize: 14, color: "#001012", fontWeight: 500 }}>{r}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ marginTop: 24, borderLeft: "3px solid #00493a", paddingLeft: 16 }}>
                      <p style={{ fontSize: 14, color: "#001012", lineHeight: 1.65, fontStyle: "italic" }}>&ldquo;{c.quote}&rdquo;</p>
                      <p style={{ fontSize: 11, color: "#a1a1aa", marginTop: 8, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>— Client anonymisé</p>
                    </div>
                    <Link href={c.href} style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 32, fontSize: 12, fontWeight: 700, color: "#00493a", textTransform: "uppercase", letterSpacing: "0.06em", borderBottom: "1px solid #00493a", paddingBottom: 2 }}>
                      Voir la solution {c.segment} →
                    </Link>
                  </div>
                  <div style={{ border: "1px solid #e4e4e7", overflow: "hidden" }}>
                    <Image src={c.image} alt={c.title} width={600} height={380} style={{ width: "100%", height: "auto", filter: "grayscale(100%) contrast(1.1)", display: "block" }} />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>
        ))}

        <section style={{ background: "#001012", padding: "80px 0" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <h2 style={{ fontWeight: 500, color: "white", letterSpacing: "-0.02em", marginBottom: 16 }}>Votre use case est ici.</h2>
            <p style={{ fontSize: 15, color: "var(--text-muted-on-dark)", marginBottom: 32 }}>Démarrez avec un POC gratuit sur votre prochain deal.</p>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#00493a", color: "white", padding: "13px 28px", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Demander une démo →
            </Link>
          </div>
        </section>
        <style>{`@media(max-width:900px){.uc-row{grid-template-columns:1fr!important}}`}</style>
      </main>
      <Footer />
    </>
  );
}
