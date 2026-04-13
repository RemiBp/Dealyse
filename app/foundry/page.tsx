import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import DarkProofStrip from "@/components/DarkProofStrip";

const faq = [
  { q: "Faut-il être client Palantir pour utiliser DEALYSE ?", a: "Non. Pour les plans Free et Pro, DEALYSE s'occupe de tout. L'option Enterprise permet un déploiement dans votre tenant Foundry si vous en avez déjà un." },
  { q: "Peut-on déployer dans notre tenant Foundry existant ?", a: "Oui. L'offre Enterprise permet un déploiement complet dans votre environnement Foundry existant — données qui ne quittent jamais votre infrastructure." },
  { q: "DEALYSE est-il un partenaire Palantir officiel ?", a: "Oui. 10x Partners, qui opère DEALYSE, est un partenaire certifié Palantir Foundry avec des déploiements production en aviation, énergie, healthcare et aerospace MRO." },
  { q: "Mes données vont-elles chez OpenAI ou Anthropic ?", a: "Non. DEALYSE utilise AIP Logic de Palantir pour orchestrer les agents — vos documents ne transitent jamais par des API LLM tierces exposées." },
  { q: "Que se passe-t-il après le deal ?", a: "Vos données restent dans votre environnement jusqu'à suppression explicite. Zéro rétention automatique. Vous contrôlez le cycle de vie complet." },
];

export default function FoundryPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 60 }}>
        <section style={{ padding: "100px 0 80px", background: "white", borderBottom: "1px solid #e4e4e7" }}>
          <div className="container" style={{ maxWidth: 760 }}>
            <span className="label" style={{ display: "block", marginBottom: 16 }}>Infrastructure</span>
            <h1 style={{ fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 24 }}>Pas un chatbot.<br />Une infrastructure de données enterprise.</h1>
            <p style={{ fontSize: 16, color: "#71717a", lineHeight: 1.65, maxWidth: 560 }}>
              La plupart des outils IA pour la finance envoient vos données chez OpenAI ou Anthropic. DEALYSE est construit différemment — sur Palantir Foundry, la plateforme des gouvernements du G7.
            </p>
          </div>
        </section>

        <DarkProofStrip
          label="Utilisé par"
          variant="chips"
          paddingY={48}
          items={["CIA / US DoD", "NHS Royaume-Uni", "Airbus", "BP", "US Army", "Armée française"]}
        />

        {/* Problem with classic AI */}
        <section style={{ background: "#fafafa", padding: "96px 0", borderBottom: "1px solid #e4e4e7" }}>
          <div className="container">
            <AnimatedSection>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }} className="compare-grid">
                <div style={{ background: "white", border: "1px solid #e4e4e7", padding: "48px 40px", position: "relative" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, width: 3, height: "100%", background: "#e4e4e7" }} />
                  <span style={{ display: "block", fontSize: 11, fontWeight: 800, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>Outils IA classiques</span>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#001012", marginBottom: 24 }}>Le problème</h3>
                  {["Données envoyées chez OpenAI / Anthropic", "Pas d'ontologie structurée", "Pas d'audit trail", "Tout oublié à chaque session", "Conformité RGPD douteuse", "Sécurité consumer-grade"].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, padding: "10px 0", borderBottom: "1px solid #f4f4f5" }}>
                      <span style={{ color: "#a1a1aa", fontWeight: 700, fontSize: 12, paddingTop: 1 }}></span>
                      <span style={{ fontSize: 14, color: "#71717a" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div style={{ background: "white", border: "1px solid #e4e4e7", padding: "48px 40px", position: "relative" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, width: 3, height: "100%", background: "#00493a" }} />
                  <span className="label" style={{ display: "block", marginBottom: 20 }}>DEALYSE sur Palantir Foundry</span>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#001012", marginBottom: 24 }}>La différence</h3>
                  {["Données 100% souveraines — zéro exfiltration", "Ontologie cumulative deal après deal", "Audit trail complet et exportable", "Mémoire institutionnelle persistante", "RGPD & AI Act natifs", "Sécurité grade gouvernemental"].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 12, padding: "10px 0", borderBottom: "1px solid #f4f4f5" }}>
                      <span style={{ color: "#00493a", fontWeight: 700, fontSize: 12, paddingTop: 1 }}></span>
                      <span style={{ fontSize: 14, color: "#001012" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
          <style>{`@media(max-width:768px){.compare-grid{grid-template-columns:1fr!important}}`}</style>
        </section>

        {/* Architecture */}
        <section style={{ background: "white", padding: "96px 0", borderBottom: "1px solid #e4e4e7" }}>
          <div className="container">
            <AnimatedSection>
              <span className="label" style={{ display: "block", marginBottom: 16 }}>Architecture</span>
              <h2 style={{ fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 64 }}>Comment ça fonctionne</h2>
            </AnimatedSection>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, border: "1px solid #e4e4e7" }} className="arch-grid">
              {[
                { num: "01", title: "Upload sécurisé", desc: "Vos documents entrent dans un environnement chiffré AES-256, hébergé en Europe." },
                { num: "02", title: "Palantir Foundry", desc: "Ingestion, structuration et ontologie. Vos données ne quittent jamais cet environnement." },
                { num: "03", title: "AIP Logic", desc: "Orchestration des 4 agents spécialisés en parallèle sur votre data room." },
                { num: "04", title: "Output sécurisé", desc: "Rapport, scoring, red flags — exportés dans votre environnement uniquement." },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 80}>
                  <div style={{ padding: "36px 28px", borderRight: i < 3 ? "1px solid #e4e4e7" : "none", background: "white" }}>
                    <div style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 800, color: "#00c896", letterSpacing: "0.1em", marginBottom: 16 }}>{item.num}</div>
                    <h4 style={{ fontSize: 15, fontWeight: 700, color: "#001012", marginBottom: 8 }}>{item.title}</h4>
                    <p style={{ fontSize: 13, color: "#71717a", lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:768px){.arch-grid{grid-template-columns:repeat(2,1fr)!important}.arch-grid>div{border-right:1px solid #e4e4e7!important}.arch-grid>div:nth-child(2n){border-right:none!important}.arch-grid>div{border-bottom:1px solid #e4e4e7!important}}`}</style>
        </section>

        {/* FAQ */}
        <section style={{ background: "#fafafa", padding: "96px 0" }}>
          <div className="container" style={{ maxWidth: 720 }}>
            <span className="label" style={{ display: "block", marginBottom: 16 }}>FAQ Technique</span>
            <h2 style={{ fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 56 }}>Questions fréquentes</h2>
            {faq.map((item, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div style={{ padding: "24px 0", borderBottom: "1px solid #e4e4e7" }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#001012", marginBottom: 8 }}>{item.q}</div>
                  <div style={{ fontSize: 14, color: "#71717a", lineHeight: 1.65 }}>{item.a}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
