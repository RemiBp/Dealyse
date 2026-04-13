import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata = { title: "À propos — DEALYSE" };

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 60 }}>
        {/* Hero */}
        <section style={{ padding: "100px 0 80px", background: "white", borderBottom: "1px solid #e4e4e7" }}>
          <div className="container" style={{ maxWidth: 760 }}>
            <span className="label" style={{ display: "block", marginBottom: 16 }}>À propos</span>
            <h1 style={{ fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 24 }}>
              Construit par des praticiens du M&A<br />et de Palantir Foundry.
            </h1>
            <p style={{ fontSize: 17, color: "#71717a", lineHeight: 1.65, maxWidth: 560 }}>
              DEALYSE est né du constat simple que le M&A mid-market européen tourne encore sous Excel — pendant que les LLMs multimodaux et Palantir AIP ont atteint une maturité suffisante pour automatiser 80% du travail analytique.
            </p>
          </div>
        </section>

        {/* Vision */}
        <section style={{ background: "#fafafa", padding: "96px 0", borderBottom: "1px solid #e4e4e7" }}>
          <div className="container about-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
            <div>
              <span className="label" style={{ display: "block", marginBottom: 16 }}>La vision</span>
              <h2 style={{ fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 32 }}>Pourquoi DEALYSE existe</h2>
              {[
                { title: "Le gap qu'on comble", desc: "Une DD complète mobilise 4 à 8 personnes pendant 3 à 6 semaines. Elle coûte entre 80 000 et 200 000€. Les erreurs humaines et les red flags manqués sont fréquents faute de temps." },
                { title: "Notre conviction", desc: "Les fonds mid-market n'ont pas les ressources des grands fonds pour mobiliser des équipes entières — mais ils ont maintenant accès à la même infrastructure grâce à Palantir AIP." },
                { title: "La fenêtre d'opportunité", desc: "18 à 24 mois avant que les grands acteurs (BCG, KPMG, Datasite) industrialisent leurs propres solutions. DEALYSE est positionné maintenant." },
              ].map((item, i) => (
                <div key={i} style={{ paddingTop: i === 0 ? 0 : 24, marginTop: i === 0 ? 0 : 24, borderTop: i === 0 ? "none" : "1px solid #e4e4e7" }}>
                  <h4 style={{ fontSize: 14, fontWeight: 700, color: "#001012", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.04em" }}>{item.title}</h4>
                  <p style={{ fontSize: 14, color: "#71717a", lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div>
              <span className="label" style={{ display: "block", marginBottom: 16 }}>Roadmap</span>
              {[
                { period: "2026", label: "Premiers déploiements enterprise", desc: "Déploiement auprès de fonds PE, boutiques M&A et cabinets d'avocats en France et en Europe. Construction de l'ontologie M&A de référence." },
                { period: "2027", label: "Expansion européenne", desc: "Ouverture aux marchés DACH, Benelux et UK. Intégrations Bloomberg, Datasite et VDR majeurs. Certifications SOC 2." },
                { period: "2028", label: "Déploiement global", desc: "Présence US et MENA. Infrastructure Palantir Foundry multi-régions. DEALYSE comme standard du M&A augmenté." },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 20, padding: "24px 0", borderBottom: "1px solid #e4e4e7" }}>
                  <span style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 800, color: "#00493a", minWidth: 40, paddingTop: 2 }}>{item.period}</span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#001012", marginBottom: 4 }}>{item.label}</div>
                    <div style={{ fontSize: 13, color: "#71717a", lineHeight: 1.55 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:900px){.about-grid{grid-template-columns:1fr!important}}`}</style>
        </section>

        {/* Team */}
        <section style={{ background: "white", padding: "96px 0", borderBottom: "1px solid #e4e4e7" }}>
          <div className="container">
            <AnimatedSection>
              <span className="label" style={{ display: "block", marginBottom: 16 }}>Équipe</span>
              <h2 style={{ fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 64 }}>Le fondateur</h2>
            </AnimatedSection>
            <AnimatedSection delay={80}>
              <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: 64, alignItems: "start" }} className="team-grid">
                <div>
                  <div style={{ border: "1px solid #e4e4e7", overflow: "hidden", marginBottom: 20 }}>
                    <Image src="/images/team/remi.png" alt="Rémi Barbier" width={240} height={280} style={{ width: "100%", height: "auto", display: "block", filter: "grayscale(15%)" }} />
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#001012", marginBottom: 4 }}>Rémi Barbier</div>
                  <div style={{ fontSize: 13, color: "#00493a", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>Fondateur & CEO</div>
                </div>
                <div>
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
                    {["X-HEC", "10x Partners", "ex-Tikehau Capital", "Palantir Partner"].map((tag) => (
                      <span key={tag} style={{ padding: "4px 12px", border: "1px solid #e4e4e7", fontSize: 11, fontWeight: 700, color: "#71717a", textTransform: "uppercase", letterSpacing: "0.06em" }}>{tag}</span>
                    ))}
                  </div>
                  <p style={{ fontSize: 16, color: "#001012", lineHeight: 1.7, marginBottom: 24 }}>
                    Partner chez 10x Partners, cabinet spécialisé dans le déploiement de Palantir Foundry & AIP en Europe. Déploiements en aviation, énergie, healthcare, aerospace MRO.
                  </p>
                  <p style={{ fontSize: 16, color: "#001012", lineHeight: 1.7, marginBottom: 32 }}>
                    Anciennement Tikehau Capital — connaissance profonde du monde PE et des processus de due diligence.
                  </p>
                  <div style={{ borderLeft: "3px solid #00493a", paddingLeft: 24 }}>
                    <p style={{ fontSize: 15, color: "#001012", lineHeight: 1.7, fontStyle: "italic" }}>
                      &ldquo;J'ai passé 3 ans à déployer Palantir dans les environnements industriels les plus complexes. Le M&A était la prochaine frontière évidente.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
          <style>{`@media(max-width:768px){.team-grid{grid-template-columns:1fr!important}}`}</style>
        </section>

        {/* Palantir Partner */}
        <section style={{ background: "#001012", padding: "80px 0" }}>
          <div className="container partner-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <span style={{ display: "block", fontSize: "0.65rem", fontWeight: 800, color: "#00c896", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 16 }}>Palantir Partner</span>
              <h2 style={{ fontWeight: 500, color: "white", letterSpacing: "-0.02em", marginBottom: 20 }}>Partenaire officiel Palantir</h2>
              <p style={{ fontSize: 15, color: "var(--text-muted-on-dark)", lineHeight: 1.65 }}>
                10x Partners est un partenaire certifié Palantir Foundry. DEALYSE est construit sur cette relation — accès prioritaire aux dernières fonctionnalités AIP, support technique Palantir, crédibilité enterprise immédiate.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }}>
              {[
                { title: "Foundry Certified", desc: "Déploiements production dans 5 industries" },
                { title: "AIP Logic", desc: "Orchestration d'agents complexes" },
                { title: "EU Deployment", desc: "Hébergement souverain Europe" },
                { title: "Support Palantir", desc: "Accès direct aux équipes techniques" },
              ].map((item, i) => (
                <div key={i} style={{ background: "#0a0a0b", border: "1px solid #18181b", padding: "24px 20px", position: "relative" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 2, background: i === 0 ? "#00493a" : "transparent" }} />
                  <div style={{ fontSize: 12, fontWeight: 700, color: "white", marginBottom: 6 }}>{item.title}</div>
                  <div style={{ fontSize: 12, color: "var(--text-muted-on-dark)" }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:768px){.partner-grid{grid-template-columns:1fr!important}}`}</style>
        </section>

        {/* Contact CTA */}
        <section style={{ background: "#fafafa", padding: "80px 0", borderTop: "1px solid #e4e4e7" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <h2 style={{ fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 12 }}>Parlons de votre deal.</h2>
            <p style={{ fontSize: 15, color: "#71717a", marginBottom: 32 }}>hello@dealyse.io · Paris, France</p>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#001012", color: "white", padding: "13px 28px", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Demander une démo →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
