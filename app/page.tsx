"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { segments } from "@/lib/content/segments";
import { products } from "@/lib/content/products";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>

        {/* ─── 1. HERO ─────────────────────────────────────────────── */}
        <section style={{ paddingTop: 160, paddingBottom: 120, background: "white", borderBottom: "1px solid #e4e4e7", position: "relative", overflow: "hidden" }}>
          <div className="dot-pattern" style={{ position: "absolute", inset: 0, maskImage: "radial-gradient(ellipse at 60% 30%, transparent 30%, black 100%)", WebkitMaskImage: "radial-gradient(ellipse at 60% 30%, transparent 30%, black 100%)", pointerEvents: "none" }} />
          {/* Corner marks */}
          {[{ top: 80, left: 48 }, { top: 80, right: 48 }, { bottom: 48, left: 48 }, { bottom: 48, right: 48 }].map((pos, i) => (
            <div key={i} style={{ position: "absolute", width: 14, height: 14, borderTop: i < 2 ? "2px solid #00493a" : undefined, borderBottom: i >= 2 ? "2px solid #00493a" : undefined, borderLeft: i % 2 === 0 ? "2px solid #00493a" : undefined, borderRight: i % 2 === 1 ? "2px solid #00493a" : undefined, opacity: 0.25, ...pos }} />
          ))}

          <div className="container" style={{ position: "relative" }}>
            <div style={{ maxWidth: 820 }}>
              <AnimatedSection delay={0}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 36 }}>
                  <span className="label">Propulsé par Palantir Foundry</span>
                  <div style={{ height: 1, width: 32, background: "#00493a", opacity: 0.4 }} />
                  <span className="label" style={{ color: "#a1a1aa" }}>AIP Logic</span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={60}>
                <h1 style={{ fontWeight: 500, letterSpacing: "-0.03em", marginBottom: 28, lineHeight: 1.05 }}>
                  Des semaines de travail.<br />
                  <span style={{ color: "#00493a" }}>En quelques minutes.</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={120}>
                <p style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)", color: "#71717a", maxWidth: 520, lineHeight: 1.65, marginBottom: 48, fontWeight: 400 }}>
                  Le premier Deal OS propulsé par Palantir Foundry — de l'origination au closing, entièrement automatisé.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={180}>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 64 }}>
                  <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#001012", color: "white", padding: "13px 28px", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", transition: "background 0.15s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#00493a")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#001012")}>
                    Voir la démo →
                  </Link>
                  <Link href="/product/due-diligence" style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#001012", padding: "13px 28px", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", border: "1px solid #e4e4e7", transition: "border-color 0.15s, color 0.15s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#00493a"; (e.currentTarget as HTMLElement).style.color = "#00493a"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#e4e4e7"; (e.currentTarget as HTMLElement).style.color = "#001012"; }}>
                    Découvrir le produit
                  </Link>
                </div>
              </AnimatedSection>

              {/* Trust badges */}
              <AnimatedSection delay={240}>
                <div style={{ display: "flex", gap: 0, flexWrap: "wrap", borderTop: "1px solid #e4e4e7", borderLeft: "1px solid #e4e4e7" }}>
                  {["Données souveraines", "4h DD complète", "Palantir Foundry", "Hébergé EU"].map((badge, i) => (
                    <div key={i} style={{ padding: "10px 20px", borderRight: "1px solid #e4e4e7", borderBottom: "1px solid #e4e4e7", fontSize: 11, fontWeight: 700, color: "#71717a", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      {badge}
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            {/* Metrics */}
            <AnimatedSection delay={320}>
              <div style={{ marginTop: 96, paddingTop: 48, borderTop: "1px solid #e4e4e7", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }} className="hero-metrics">
                {[
                  { value: "4h", label: "Due Diligence complète" },
                  { value: "91%", label: "Précision détection" },
                  { value: "−80%", label: "Coût conseil DD" },
                  { value: "×5", label: "Vitesse d'exécution" },
                ].map((s, i) => (
                  <div key={i} style={{ paddingRight: 40, borderRight: i < 3 ? "1px solid #e4e4e7" : "none", paddingLeft: i > 0 ? 40 : 0 }}>
                    <div style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 800, color: "#001012", letterSpacing: "-0.03em", lineHeight: 1, fontFamily: "monospace", marginBottom: 8 }}>{s.value}</div>
                    <div style={{ fontSize: 12, color: "#71717a", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
          <style>{`@media(max-width:768px){.hero-metrics{grid-template-columns:repeat(2,1fr)!important}.hero-metrics>div{padding-left:0!important;border-right:1px solid #e4e4e7!important;padding-bottom:24px}.hero-metrics>div:nth-child(2n){border-right:none!important}}`}</style>
        </section>

        {/* ─── 2. SOCIAL PROOF STRIP ──────────────────────────────── */}
        <section style={{ background: "#001012", padding: "32px 0", borderBottom: "1px solid #18181b" }}>
          <div className="container" style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
            <span style={{ fontSize: 11, fontWeight: 800, color: "#3f3f46", textTransform: "uppercase", letterSpacing: "0.1em", flexShrink: 0 }}>Utilisé par des équipes M&A en Europe</span>
            <div style={{ height: 1, flex: 1, background: "#18181b", minWidth: 20 }} />
            {["Fonds PE · €800M AUM", "Boutique M&A · Paris", "Cabinet d'avocats · 4 associés", "Direction M&A · Groupe CAC40", "IB · mid-market"].map((name) => (
              <span key={name} style={{ fontSize: 12, color: "#3f3f46", fontWeight: 600 }}>{name}</span>
            ))}
          </div>
        </section>

        {/* ─── 3. LE PROBLÈME ─────────────────────────────────────── */}
        <section style={{ background: "#fafafa", padding: "120px 0", borderBottom: "1px solid #e4e4e7" }}>
          <div className="container">
            <AnimatedSection>
              <span className="label" style={{ display: "block", marginBottom: 16 }}>Le problème</span>
              <h2 style={{ fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 64, maxWidth: 600 }}>
                Le M&A mid-market tourne encore sous Excel.
              </h2>
            </AnimatedSection>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, border: "1px solid #e4e4e7" }} className="problem-grid">
              {[
                { num: "01", title: "6 semaines. 150 000€. Pour une DD.", desc: "Une due diligence complète mobilise 4 à 8 personnes, 4 cabinets externes, et coûte entre 80k€ et 200k€. Inchangé depuis 20 ans." },
                { num: "02", title: "5 outils. Zéro coordination.", desc: "Excel pour le modèle. Word pour les memos. Email pour la data room. Slack pour la coordination. Aucun historique, aucune traçabilité." },
                { num: "03", title: "Vos données chez tout le monde.", desc: "Cabinets de conseil, avocats, VDR généralistes. Vos données confidentielles transitent dans des dizaines d'environnements non souverains." },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 80}>
                  <div style={{ background: "white", padding: "40px 36px", borderRight: i < 2 ? "1px solid #e4e4e7" : "none" }}>
                    <div style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 800, color: "#a1a1aa", letterSpacing: "0.1em", marginBottom: 20 }}>{item.num}</div>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: "#001012", letterSpacing: "-0.01em", marginBottom: 12, lineHeight: 1.2 }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: "#71717a", lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:900px){.problem-grid{grid-template-columns:1fr!important}.problem-grid>div{border-right:none!important;border-bottom:1px solid #e4e4e7!important}}`}</style>
        </section>

        {/* ─── 4. LA SOLUTION ─────────────────────────────────────── */}
        <section style={{ background: "white", padding: "120px 0", borderBottom: "1px solid #e4e4e7" }}>
          <div className="container">
            <AnimatedSection>
              <span className="label" style={{ display: "block", marginBottom: 16 }}>La solution</span>
              <h2 style={{ fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 16, maxWidth: 560 }}>Un seul OS pour tout votre deal.</h2>
              <p style={{ fontSize: 15, color: "#71717a", marginBottom: 64, maxWidth: 480 }}>De l'origination au closing — orchestré par AIP Logic sur Palantir Foundry.</p>
            </AnimatedSection>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 0, border: "1px solid #e4e4e7" }} className="solution-grid">
              {products.map((p, i) => (
                <AnimatedSection key={i} delay={i * 60}>
                  <Link href={`/product/${p.slug}`} style={{ display: "block", padding: "32px 24px", borderRight: i < 4 ? "1px solid #e4e4e7" : "none", background: "white", textDecoration: "none", transition: "background 0.15s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#fafafa")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "white")}>
                    <div style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 800, color: "#00c896", letterSpacing: "0.1em", marginBottom: 16 }}>{String(i + 1).padStart(2, "0")}</div>
                    <h4 style={{ fontSize: 14, fontWeight: 700, color: "#001012", marginBottom: 8, lineHeight: 1.3 }}>{p.name}</h4>
                    <p style={{ fontSize: 12, color: "#71717a", lineHeight: 1.55 }}>{p.sub.substring(0, 70)}...</p>
                    <div style={{ marginTop: 20, fontSize: 11, fontWeight: 700, color: "#00493a", textTransform: "uppercase", letterSpacing: "0.06em" }}>Voir →</div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:900px){.solution-grid{grid-template-columns:repeat(2,1fr)!important}.solution-grid>div{border-right:1px solid #e4e4e7!important}.solution-grid>div:nth-child(2n){border-right:none!important}.solution-grid>div{border-bottom:1px solid #e4e4e7!important}}`}</style>
        </section>

        {/* ─── 5. POURQUOI PALANTIR FOUNDRY ───────────────────────── */}
        <section style={{ background: "#001012", padding: "120px 0", borderBottom: "1px solid #18181b" }}>
          <div className="container">
            <AnimatedSection>
              <span style={{ display: "block", fontSize: "0.65rem", fontWeight: 800, color: "#00c896", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 16 }}>Infrastructure</span>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start", marginBottom: 64 }} className="foundry-header">
                <h2 style={{ fontWeight: 500, letterSpacing: "-0.02em", color: "white" }}>Pourquoi Palantir Foundry — l'argument clé</h2>
                <p style={{ fontSize: 15, color: "#52525b", lineHeight: 1.65, paddingTop: 8 }}>
                  La plupart des outils IA pour la finance sont des chatbots habillés. DEALYSE repose sur Palantir Foundry — utilisé par la CIA, le NHS britannique et les plus grandes entreprises mondiales pour gérer leurs données les plus critiques.
                </p>
              </div>
            </AnimatedSection>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, border: "1px solid #18181b" }} className="foundry-grid">
              {[
                { title: "Souveraineté totale", desc: "Vos données ne quittent jamais votre environnement sécurisé. Zéro exfiltration vers des API tierces." },
                { title: "Intelligence cumulative", desc: "Chaque deal enrichit l'ontologie. Votre connaissance s'accumule — contrairement aux chatbots qui oublient tout." },
                { title: "Agents orchestrés AIP", desc: "Orchestration enterprise-grade de 4 agents spécialisés en parallèle. Pas un wrapper sur GPT-4." },
              ].map((item, i) => (
                <AnimatedSection key={i} delay={i * 80}>
                  <div style={{ background: "#0a0a0b", border: "1px solid #18181b", padding: "40px 36px", position: "relative" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 2, background: i === 0 ? "#00493a" : "transparent" }} />
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: "white", marginBottom: 12, letterSpacing: "-0.01em" }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: "#52525b", lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection delay={200}>
              <div style={{ marginTop: 32, textAlign: "center" }}>
                <Link href="/foundry" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 12, fontWeight: 700, color: "#00c896", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  Architecture complète →
                </Link>
              </div>
            </AnimatedSection>
          </div>
          <style>{`@media(max-width:900px){.foundry-header{grid-template-columns:1fr!important}.foundry-grid{grid-template-columns:1fr!important}}`}</style>
        </section>

        {/* ─── 6. SOLUTIONS PAR SEGMENT ───────────────────────────── */}
        <section style={{ background: "#fafafa", padding: "120px 0", borderBottom: "1px solid #e4e4e7" }}>
          <div className="container">
            <AnimatedSection>
              <span className="label" style={{ display: "block", marginBottom: 16 }}>Solutions</span>
              <h2 style={{ fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 64, maxWidth: 560 }}>Adapté à votre métier.</h2>
            </AnimatedSection>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, border: "1px solid #e4e4e7" }} className="seg-grid">
              {segments.slice(0, 3).map((s, i) => (
                <AnimatedSection key={i} delay={i * 60}>
                  <Link href={`/${s.slug}`} style={{ display: "block", background: "white", padding: "40px 36px", borderRight: i < 2 ? "1px solid #e4e4e7" : "none", textDecoration: "none", transition: "background 0.15s", position: "relative" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#fafafa")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "white")}>
                    <div style={{ fontSize: 24, marginBottom: 16 }}>{s.emoji}</div>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: "#001012", marginBottom: 12, letterSpacing: "-0.01em" }}>{s.name}</h3>
                    <p style={{ fontSize: 13, color: "#71717a", lineHeight: 1.65, marginBottom: 24 }}>{s.hero.sub}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 24 }}>
                      {s.metrics.map((m, j) => (
                        <div key={j} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                          <span style={{ fontFamily: "monospace", fontSize: 13, fontWeight: 800, color: "#001012", minWidth: 44 }}>{m.value}</span>
                          <span style={{ fontSize: 12, color: "#71717a" }}>{m.label}</span>
                        </div>
                      ))}
                    </div>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#00493a", textTransform: "uppercase", letterSpacing: "0.06em" }}>Voir la solution →</span>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 0, border: "1px solid #e4e4e7", borderTop: "none" }} className="seg-grid2">
              {segments.slice(3).map((s, i) => (
                <AnimatedSection key={i} delay={(i + 3) * 60}>
                  <Link href={`/${s.slug}`} style={{ display: "block", background: "white", padding: "40px 36px", borderRight: i === 0 ? "1px solid #e4e4e7" : "none", textDecoration: "none", transition: "background 0.15s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#fafafa")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "white")}>
                    <div style={{ fontSize: 24, marginBottom: 16 }}>{s.emoji}</div>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: "#001012", marginBottom: 12, letterSpacing: "-0.01em" }}>{s.name}</h3>
                    <p style={{ fontSize: 13, color: "#71717a", lineHeight: 1.65, marginBottom: 20 }}>{s.hero.sub}</p>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#00493a", textTransform: "uppercase", letterSpacing: "0.06em" }}>Voir la solution →</span>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:900px){.seg-grid{grid-template-columns:1fr!important}.seg-grid>div{border-right:none!important;border-bottom:1px solid #e4e4e7!important}.seg-grid2{grid-template-columns:1fr!important}.seg-grid2>div{border-right:none!important;border-bottom:1px solid #e4e4e7!important}}`}</style>
        </section>

        {/* ─── 7. USE CASES ───────────────────────────────────────── */}
        <section style={{ background: "white", padding: "120px 0", borderBottom: "1px solid #e4e4e7" }}>
          <div className="container">
            <AnimatedSection>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64, flexWrap: "wrap", gap: 16 }}>
                <div>
                  <span className="label" style={{ display: "block", marginBottom: 16 }}>Use Cases</span>
                  <h2 style={{ fontWeight: 500, letterSpacing: "-0.02em", maxWidth: 480 }}>Résultats réels. Chiffrés.</h2>
                </div>
                <Link href="/use-cases" style={{ fontSize: 12, fontWeight: 700, color: "#00493a", textTransform: "uppercase", letterSpacing: "0.06em" }}>Tous les use cases →</Link>
              </div>
            </AnimatedSection>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, border: "1px solid #e4e4e7" }} className="uc-grid">
              {segments.slice(0, 3).map((s, i) => (
                <AnimatedSection key={i} delay={i * 80}>
                  <div style={{ background: i === 1 ? "#001012" : "white", borderRight: i < 2 ? "1px solid #e4e4e7" : "none", padding: "40px 36px", height: "100%", display: "flex", flexDirection: "column" }}>
                    <div style={{ marginBottom: 24, paddingBottom: 20, borderBottom: `1px solid ${i === 1 ? "#27272a" : "#f4f4f5"}` }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: i === 1 ? "#00493a" : "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.emoji} {s.name}</span>
                    </div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: i === 1 ? "white" : "#001012", letterSpacing: "-0.01em", marginBottom: 16, lineHeight: 1.3, flex: 1 }}>{s.useCase.title}</h3>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginBottom: 24 }}>
                      {s.metrics.map((m, j) => (
                        <div key={j} style={{ background: i === 1 ? "#0a0a0b" : "#fafafa", border: `1px solid ${i === 1 ? "#18181b" : "#e4e4e7"}`, padding: "10px 12px" }}>
                          <div style={{ fontSize: 18, fontWeight: 800, fontFamily: "monospace", color: i === 1 ? "white" : "#001012", letterSpacing: "-0.02em" }}>{m.value}</div>
                          <div style={{ fontSize: 10, color: i === 1 ? "#52525b" : "#a1a1aa", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 2 }}>{m.label}</div>
                        </div>
                      ))}
                    </div>
                    <Link href={`/${s.slug}`} style={{ fontSize: 11, fontWeight: 700, color: "#00493a", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      Voir le détail →
                    </Link>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:900px){.uc-grid{grid-template-columns:1fr!important}.uc-grid>div{border-right:none!important;border-bottom:1px solid #e4e4e7!important}}`}</style>
        </section>

        {/* ─── 8. PRICING ─────────────────────────────────────────── */}
        <section id="pricing" style={{ background: "#fafafa", padding: "120px 0", borderBottom: "1px solid #e4e4e7" }}>
          <div className="container">
            <AnimatedSection>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64, flexWrap: "wrap", gap: 16 }}>
                <div>
                  <span className="label" style={{ display: "block", marginBottom: 16 }}>Tarification</span>
                  <h2 style={{ fontWeight: 500, letterSpacing: "-0.02em" }}>Simple. Transparent.</h2>
                </div>
                <Link href="/pricing" style={{ fontSize: 12, fontWeight: 700, color: "#00493a", textTransform: "uppercase", letterSpacing: "0.06em" }}>Détails complets →</Link>
              </div>
            </AnimatedSection>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, border: "1px solid #e4e4e7" }} className="pricing-grid">
              {[
                { badge: "Pour commencer", name: "Free", price: "Gratuit", sub: "1 deal · 50 documents", features: ["1 data room", "Rapport basique", "7 jours chat"], cta: "Démarrer", highlight: false },
                { badge: "Le plus populaire", name: "Pro", price: "499€", sub: "/mois", features: ["Deals illimités", "4 agents IA", "LBO + IC memo", "Support prioritaire"], cta: "Essai 14 jours", highlight: true },
                { badge: "Grands fonds", name: "Enterprise", price: "Sur devis", sub: "Tenant Foundry dédié", features: ["Tenant privé", "SSO / SAML", "SLA 99.9%", "Account manager"], cta: "Nous contacter", highlight: false },
              ].map((plan, i) => (
                <AnimatedSection key={i} delay={i * 80}>
                  <div style={{ background: plan.highlight ? "#001012" : "white", borderRight: i < 2 ? "1px solid #e4e4e7" : "none", padding: "48px 40px", display: "flex", flexDirection: "column", position: "relative" }}>
                    {plan.highlight && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "#00493a" }} />}
                    <div style={{ fontSize: 11, fontWeight: 800, color: plan.highlight ? "#00c896" : "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>{plan.badge}</div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: plan.highlight ? "white" : "#001012", marginBottom: 8 }}>{plan.name}</div>
                    <div style={{ fontSize: "2.2rem", fontWeight: 800, color: plan.highlight ? "white" : "#001012", fontFamily: "monospace", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 6 }}>{plan.price}</div>
                    <div style={{ fontSize: 12, color: plan.highlight ? "#52525b" : "#a1a1aa", marginBottom: 32 }}>{plan.sub}</div>
                    <div style={{ flex: 1, borderTop: `1px solid ${plan.highlight ? "#27272a" : "#f4f4f5"}`, marginBottom: 32 }}>
                      {plan.features.map((f, j) => (
                        <div key={j} style={{ display: "flex", gap: 10, padding: "10px 0", borderBottom: `1px solid ${plan.highlight ? "#18181b" : "#f4f4f5"}` }}>
                          <span style={{ color: "#00493a", fontWeight: 800, fontSize: 11, paddingTop: 2, flexShrink: 0 }}>✓</span>
                          <span style={{ fontSize: 13, color: plan.highlight ? "#a1a1aa" : "#52525b" }}>{f}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/contact" style={{ display: "block", textAlign: "center", padding: "11px 20px", background: plan.highlight ? "#00493a" : "transparent", color: plan.highlight ? "white" : "#001012", border: plan.highlight ? "none" : "1px solid #e4e4e7", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      {plan.cta}
                    </Link>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:900px){.pricing-grid{grid-template-columns:1fr!important}.pricing-grid>div{border-right:none!important;border-bottom:1px solid #e4e4e7!important}}`}</style>
        </section>

        {/* ─── 9. INTÉGRATIONS ────────────────────────────────────── */}
        <section style={{ background: "white", padding: "96px 0", borderBottom: "1px solid #e4e4e7" }}>
          <div className="container">
            <AnimatedSection>
              <span className="label" style={{ display: "block", marginBottom: 16 }}>Intégrations</span>
              <h2 style={{ fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 48 }}>Connecté à votre stack.</h2>
            </AnimatedSection>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, border: "1px solid #e4e4e7" }} className="integ-grid">
              {["DocuSign", "Slack", "Bloomberg", "PitchBook", "Microsoft Outlook", "Google Drive", "SharePoint", "Salesforce"].map((name, i) => (
                <AnimatedSection key={i} delay={i * 40}>
                  <div style={{ padding: "24px", borderRight: (i + 1) % 4 !== 0 ? "1px solid #e4e4e7" : "none", borderBottom: i < 4 ? "1px solid #e4e4e7" : "none", textAlign: "center", background: "white", transition: "background 0.15s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#fafafa")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "white")}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#001012" }}>{name}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:768px){.integ-grid{grid-template-columns:repeat(2,1fr)!important}.integ-grid>div{border-right:1px solid #e4e4e7!important}.integ-grid>div:nth-child(2n){border-right:none!important}}`}</style>
        </section>

        {/* ─── 10. CTA FINAL ──────────────────────────────────────── */}
        <section style={{ background: "#001012", padding: "120px 0" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="cta-final">
              <div>
                <h2 style={{ fontWeight: 500, color: "white", letterSpacing: "-0.02em", marginBottom: 20, lineHeight: 1.1 }}>
                  Votre prochain deal.<br />En quelques minutes.
                </h2>
                <p style={{ fontSize: 15, color: "#52525b", lineHeight: 1.65, marginBottom: 40 }}>
                  Démarrez avec un POC gratuit sur votre prochain deal. Résultats garantis en 4 heures.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#00493a", color: "white", padding: "13px 28px", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Démarrer mon POC →
                  </Link>
                  <Link href="/use-cases" style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "white", padding: "13px 28px", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", border: "1px solid #27272a" }}>
                    Voir les use cases
                  </Link>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid #18181b" }}>
                {[
                  { value: "Gratuit", label: "Sur votre premier deal" },
                  { value: "4 heures", label: "Résultats garantis" },
                  { value: "24h", label: "Temps de réponse" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 24, padding: "20px 0", borderBottom: "1px solid #18181b", alignItems: "center" }}>
                    <span style={{ fontFamily: "monospace", fontSize: "1.3rem", fontWeight: 800, color: "white", minWidth: 80 }}>{item.value}</span>
                    <span style={{ fontSize: 13, color: "#52525b" }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <style>{`@media(max-width:900px){.cta-final{grid-template-columns:1fr!important}}`}</style>
        </section>

      </main>
      <Footer />
    </>
  );
}
