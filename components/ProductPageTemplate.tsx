"use client";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import type { Product } from "@/lib/content/products";

export default function ProductPageTemplate({ p }: { p: Product }) {
  return (
    <main style={{ paddingTop: 60 }}>
      {/* Hero */}
      <section style={{ padding: "100px 0 80px", background: "white", borderBottom: "1px solid #e4e4e7", position: "relative", overflow: "hidden" }}>
        <div className="dot-pattern" style={{ position: "absolute", inset: 0, maskImage: "radial-gradient(ellipse at 70% 40%, transparent 40%, black 100%)", WebkitMaskImage: "radial-gradient(ellipse at 70% 40%, transparent 40%, black 100%)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", maxWidth: 760 }}>
          <span className="label" style={{ display: "block", marginBottom: 16 }}>Produit · {p.name}</span>
          <h1 style={{ fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 24, whiteSpace: "pre-line" }}>
            {p.headline}
          </h1>
          <p style={{ fontSize: 16, color: "#71717a", lineHeight: 1.65, marginBottom: 40, maxWidth: 560 }}>
            {p.sub}
          </p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#001012", color: "white", padding: "12px 24px", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", transition: "background 0.15s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#00493a")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#001012")}>
            Tester gratuitement →
          </Link>
        </div>
      </section>

      {/* Scenario narrative */}
      {p.scenario && (
        <section style={{ background: "#fafafa", padding: "0", borderBottom: "1px solid #e4e4e7" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", alignItems: "center", gap: 0 }} >
            <div style={{ padding: "40px 0 40px 0", borderRight: "1px solid #e4e4e7" }}>
              <span style={{ fontSize: "0.65rem", fontWeight: 800, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.12em" }}>Scénario concret</span>
            </div>
            <div style={{ padding: "32px 0 32px 48px" }}>
              <p style={{ fontSize: 15, color: "#52525b", lineHeight: 1.75, fontStyle: "italic", borderLeft: "3px solid #00493a", paddingLeft: 24 }}>
                {p.scenario}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Screenshot */}
      <section style={{ background: "#0a0a0b", padding: "64px 0", borderBottom: "1px solid #18181b" }}>
        <div className="container">
          <div style={{ border: "1px solid #18181b", overflow: "hidden", position: "relative" }}>
            {/* Browser chrome */}
            <div style={{ background: "#111113", borderBottom: "1px solid #18181b", padding: "10px 16px", display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ display: "flex", gap: 5 }}>
                {["#ff5f57","#febc2e","#28c840"].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
              </div>
              <div style={{ flex: 1, background: "#1a1a1c", padding: "3px 10px", fontSize: 11, color: "#a8b0bc", maxWidth: 300, margin: "0 auto", textAlign: "center" }}>
                dealyse.pro — {p.name}
              </div>
            </div>
            <Image src={p.image} alt={p.name} width={1200} height={600} style={{ width: "100%", height: "auto", filter: "grayscale(100%) contrast(1.05) brightness(0.95)", display: "block" }} />
          </div>
        </div>
      </section>

      {/* Steps (if applicable) */}
      {p.steps && (
        <section style={{ background: "white", padding: "96px 0", borderBottom: "1px solid #e4e4e7" }}>
          <div className="container">
            <AnimatedSection>
              <span className="label" style={{ display: "block", marginBottom: 16 }}>Comment ça marche</span>
              <h2 style={{ fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 64 }}>Trois étapes. Un résultat.</h2>
            </AnimatedSection>
            {p.steps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div style={{ display: "grid", gridTemplateColumns: "64px 1fr 1fr", gap: 0, padding: "32px 0", borderBottom: "1px solid #e4e4e7", alignItems: "start" }} className="step-row">
                  <span style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 800, color: "#00493a", letterSpacing: "0.1em", paddingTop: 4 }}>{step.num}</span>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#001012", letterSpacing: "-0.01em", paddingRight: 40 }}>{step.title}</h3>
                  <p style={{ fontSize: 14, color: "#71717a", lineHeight: 1.65 }}>{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <style>{`@media(max-width:768px){.step-row{grid-template-columns:40px 1fr!important}.step-row>p{display:none!important}}`}</style>
        </section>
      )}

      {/* Agents (if applicable) */}
      {p.agents && (
        <section style={{ background: "#0a0a0b", padding: "96px 0", borderBottom: "1px solid #18181b" }}>
          <div className="container">
            <AnimatedSection>
              <span style={{ display: "block", fontSize: "0.65rem", fontWeight: 800, color: "#00c896", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 16 }}>
                Architecture
              </span>
              <h2 style={{ fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 64, color: "white" }}>
                4 agents spécialisés en parallèle
              </h2>
            </AnimatedSection>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2 }} className="agents-grid">
              {p.agents.map((agent, i) => (
                <AnimatedSection key={i} delay={i * 80}>
                  <div style={{ background: "#111113", border: "1px solid #18181b", padding: "36px", position: "relative" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, width: 3, height: "100%", background: "#00493a" }} />
                    <div style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 800, color: "#00c896", letterSpacing: "0.1em", marginBottom: 16 }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: "white", marginBottom: 10 }}>{agent.name}</h3>
                    <p style={{ fontSize: 13, color: "var(--text-muted-on-dark)", lineHeight: 1.65 }}>{agent.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:768px){.agents-grid{grid-template-columns:1fr!important}}`}</style>
        </section>
      )}

      {/* Features */}
      <section style={{ background: "#fafafa", padding: "96px 0", borderBottom: "1px solid #e4e4e7" }}>
        <div className="container">
          <AnimatedSection>
            <span className="label" style={{ display: "block", marginBottom: 16 }}>Fonctionnalités</span>
            <h2 style={{ fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 64 }}>Tout ce dont vous avez besoin.</h2>
          </AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, border: "1px solid #e4e4e7" }} className="feat-grid">
            {p.features.map((feat, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <div style={{ padding: "36px 32px", background: "white", borderRight: (i + 1) % 3 !== 0 ? "1px solid #e4e4e7" : "none", borderBottom: i < 3 ? "1px solid #e4e4e7" : "none", height: "100%" }}>
                  <div style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 800, color: "#00c896", letterSpacing: "0.1em", marginBottom: 16 }}>{String(i + 1).padStart(2, "0")}</div>
                  <h4 style={{ fontSize: 15, fontWeight: 700, color: "#001012", marginBottom: 8 }}>{feat.title}</h4>
                  <p style={{ fontSize: 13, color: "#71717a", lineHeight: 1.65 }}>{feat.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:900px){.feat-grid{grid-template-columns:repeat(2,1fr)!important}}@media(max-width:600px){.feat-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* CTA */}
      <section style={{ background: "#001012", padding: "80px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontWeight: 500, color: "white", letterSpacing: "-0.02em", marginBottom: 16 }}>
            Prêt à voir {p.name} en action ?
          </h2>
          <p style={{ fontSize: 16, color: "var(--text-muted-on-dark)", marginBottom: 40 }}>
            Démarrez avec un POC gratuit sur votre prochain deal.
          </p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#00493a", color: "white", padding: "14px 32px", fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", transition: "background 0.15s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#003d31")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#00493a")}>
            Tester gratuitement →
          </Link>
        </div>
      </section>
    </main>
  );
}
