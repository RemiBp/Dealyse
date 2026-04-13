"use client";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import type { Segment } from "@/lib/content/segments";

export default function SegmentPageTemplate({ s }: { s: Segment }) {
  return (
    <main style={{ paddingTop: 60 }}>
      {/* Hero */}
      <section style={{ padding: "100px 0 80px", background: "white", borderBottom: "1px solid #e4e4e7", position: "relative", overflow: "hidden" }}>
        <div className="dot-pattern" style={{ position: "absolute", inset: 0, maskImage: "radial-gradient(ellipse at 70% 50%, transparent 40%, black 100%)", WebkitMaskImage: "radial-gradient(ellipse at 70% 50%, transparent 40%, black 100%)", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 32 }}>
              <span style={{ fontSize: 20 }}>{s.emoji}</span>
              <span className="label">{s.name}</span>
            </div>
            <h1 style={{ fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 24, whiteSpace: "pre-line" }}>
              {s.hero.headline}
            </h1>
            <p style={{ fontSize: 16, color: "#71717a", lineHeight: 1.65, marginBottom: 40, maxWidth: 480 }}>
              {s.hero.sub}
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#001012", color: "white", padding: "12px 24px", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", transition: "background 0.15s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#00493a")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#001012")}>
                Demander une démo →
              </Link>
              <Link href="/product/due-diligence" style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#001012", padding: "12px 24px", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", border: "1px solid #e4e4e7", transition: "border-color 0.15s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#00493a")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#e4e4e7")}>
                Voir le produit
              </Link>
            </div>
          </div>
          <div>
            <div style={{ position: "relative", border: "1px solid #e4e4e7" }}>
              <Image src={s.image} alt={s.name} width={600} height={380} style={{ width: "100%", height: "auto", filter: "grayscale(100%) contrast(1.1)", display: "block" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(0,73,58,0.05) 0%, transparent 60%)" }} />
            </div>
          </div>
        </div>
        <style>{`@media(max-width:900px){section > .container{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* Metrics */}
      <section style={{ background: "#001012", padding: "48px 0", borderBottom: "1px solid #18181b" }}>
        <div className="container metrics-row" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }}>
          {s.metrics.map((m, i) => (
            <div key={i} style={{ textAlign: "center", padding: "16px 0", borderRight: i < 3 ? "1px solid #18181b" : "none" }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "white", fontFamily: "monospace", letterSpacing: "-0.03em", lineHeight: 1 }}>{m.value}</div>
              <div style={{ fontSize: 11, color: "#52525b", marginTop: 6, textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 700 }}>{m.label}</div>
            </div>
          ))}
        </div>
        <style>{`@media(max-width:768px){.metrics-row{grid-template-columns:repeat(2,1fr)!important}.metrics-row>div:nth-child(2){border-right:none!important}}`}</style>
      </section>

      {/* Pain points */}
      <section style={{ background: "#fafafa", padding: "96px 0", borderBottom: "1px solid #e4e4e7" }}>
        <div className="container">
          <AnimatedSection>
            <span className="label" style={{ display: "block", marginBottom: 16 }}>Contexte</span>
            <h2 style={{ fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 56, maxWidth: 560 }}>
              Ce qui freine votre équipe aujourd'hui
            </h2>
          </AnimatedSection>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid #e4e4e7" }}>
            {s.painPoints.map((p, i) => (
              <AnimatedSection key={i} delay={i * 60}>
                <div style={{ display: "flex", alignItems: "center", gap: 20, padding: "20px 0", borderBottom: "1px solid #e4e4e7" }}>
                  <span style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 800, color: "#a1a1aa", minWidth: 24 }}>{String(i + 1).padStart(2, "0")}</span>
                  <span style={{ fontSize: 15, color: "#001012", fontWeight: 500 }}>→ {p}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section style={{ background: "white", padding: "96px 0", borderBottom: "1px solid #e4e4e7" }}>
        <div className="container">
          <AnimatedSection>
            <span className="label" style={{ display: "block", marginBottom: 16 }}>Solution</span>
            <h2 style={{ fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 56, maxWidth: 560 }}>
              Ce que DEALYSE automatise pour vous
            </h2>
          </AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2 }} className="solution-grid">
            {s.solution.map((sol, i) => (
              <AnimatedSection key={i} delay={i * 80}>
                <div style={{ background: "#fafafa", border: "1px solid #e4e4e7", padding: "40px 36px", position: "relative" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, width: 3, height: "100%", background: "#00493a" }} />
                  <div className="label" style={{ marginBottom: 20 }}>{sol.title}</div>
                  {sol.items.map((item, j) => (
                    <div key={j} style={{ display: "flex", gap: 10, padding: "10px 0", borderBottom: j < sol.items.length - 1 ? "1px solid #f4f4f5" : "none" }}>
                      <span style={{ color: "#00493a", fontWeight: 700, fontSize: 12, paddingTop: 1, flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: 14, color: "#001012" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.solution-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* Use case */}
      <section style={{ background: "#fafafa", padding: "96px 0", borderBottom: "1px solid #e4e4e7" }}>
        <div className="container">
          <AnimatedSection>
            <span className="label" style={{ display: "block", marginBottom: 16 }}>Use Case</span>
            <h2 style={{ fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 16 }}>{s.useCase.title}</h2>
            <p style={{ fontSize: 15, color: "#71717a", marginBottom: 56, maxWidth: 560 }}>{s.useCase.context}</p>
          </AnimatedSection>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2 }} className="uc-grid">
            <AnimatedSection delay={80}>
              <div style={{ background: "white", border: "1px solid #e4e4e7", padding: "40px", position: "relative" }}>
                <div style={{ position: "absolute", top: 0, left: 0, width: 3, height: "100%", background: "#00493a" }} />
                <span className="label" style={{ display: "block", marginBottom: 20 }}>Résultats</span>
                {s.useCase.results.map((r, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, padding: "10px 0", borderBottom: i < s.useCase.results.length - 1 ? "1px solid #f4f4f5" : "none" }}>
                    <span style={{ color: "#00493a", fontWeight: 800, fontSize: 12, paddingTop: 1, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 14, color: "#001012", fontWeight: 500 }}>{r}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={160}>
              <div style={{ background: "#001012", border: "1px solid #18181b", padding: "40px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <p style={{ fontSize: 18, color: "white", lineHeight: 1.65, fontStyle: "italic", fontWeight: 400 }}>
                  &ldquo;{s.useCase.quote}&rdquo;
                </p>
                <div style={{ marginTop: 32, paddingTop: 24, borderTop: "1px solid #27272a" }}>
                  <span style={{ fontSize: 11, color: "#52525b", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    — Client anonymisé · {s.name}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
        <style>{`@media(max-width:768px){.uc-grid{grid-template-columns:1fr!important}}`}</style>
      </section>

      {/* CTA */}
      <section style={{ background: "#00493a", padding: "80px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontWeight: 500, color: "white", letterSpacing: "-0.02em", marginBottom: 16 }}>
            Prêt à transformer votre {s.shortName} ?
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", marginBottom: 40 }}>
            Démarrez avec un POC gratuit sur votre prochain deal.
          </p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "white", color: "#001012", padding: "14px 32px", fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", transition: "background 0.15s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#f4f4f5")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "white")}>
            Voir la démo {s.shortName} →
          </Link>
        </div>
      </section>
    </main>
  );
}
