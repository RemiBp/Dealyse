"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import SolutionTabs from "@/components/SolutionTabs";
import SegmentLandingCard from "@/components/SegmentLandingCard";
import DarkProofStrip from "@/components/DarkProofStrip";
import HowItWorksBand from "@/components/HowItWorksBand";
import { segments } from "@/lib/content/segments";
import { useLang } from "@/lib/i18n";

export default function Home() {
  const { t } = useLang();
  const p = t.page;

  return (
    <>
      <Navbar />
      <main>

        {/* ─── 1. HERO ─────────────────────────────────────────────── */}
        <section style={{ paddingTop: 160, paddingBottom: 120, background: "white", borderBottom: "1px solid #e4e4e7", position: "relative", overflow: "hidden" }}>
          <div className="dot-pattern" style={{ position: "absolute", inset: 0, maskImage: "radial-gradient(ellipse at 60% 30%, transparent 30%, black 100%)", WebkitMaskImage: "radial-gradient(ellipse at 60% 30%, transparent 30%, black 100%)", pointerEvents: "none" }} />
          {[{ top: 80, left: 48 }, { top: 80, right: 48 }, { bottom: 48, left: 48 }, { bottom: 48, right: 48 }].map((pos, i) => (
            <div key={i} style={{ position: "absolute", width: 14, height: 14, borderTop: i < 2 ? "2px solid #00493a" : undefined, borderBottom: i >= 2 ? "2px solid #00493a" : undefined, borderLeft: i % 2 === 0 ? "2px solid #00493a" : undefined, borderRight: i % 2 === 1 ? "2px solid #00493a" : undefined, opacity: 0.25, ...pos }} />
          ))}

          <div className="container" style={{ position: "relative" }}>
            <div style={{ maxWidth: 820 }}>
              <AnimatedSection delay={0}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 36 }}>
                  <span className="label">{p.hero.badge1}</span>
                  <div style={{ height: 1, width: 32, background: "#00493a", opacity: 0.4 }} />
                  <span className="label" style={{ color: "#a1a1aa" }}>{p.hero.badge2}</span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={60}>
                <h1 style={{ fontWeight: 500, letterSpacing: "-0.03em", marginBottom: 28, lineHeight: 1.05 }}>
                  {p.hero.h1a}<br />
                  <span style={{ color: "#00493a" }}>{p.hero.h1b}</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <p
                  style={{
                    fontSize: "clamp(1rem, 1.75vw, 1.15rem)",
                    color: "#001012",
                    maxWidth: 600,
                    lineHeight: 1.65,
                    marginBottom: 16,
                    fontWeight: 500,
                  }}
                >
                  {p.hero.foundryHook}
                </p>
              </AnimatedSection>
              <AnimatedSection delay={140}>
                <p style={{ fontSize: "clamp(0.95rem, 1.65vw, 1.1rem)", color: "#71717a", maxWidth: 600, lineHeight: 1.7, marginBottom: 48, fontWeight: 400 }}>
                  {p.hero.dealOsExplain}
                </p>
              </AnimatedSection>

              <AnimatedSection delay={180}>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 64 }}>
                  <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#001012", color: "white", padding: "13px 28px", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", transition: "background 0.15s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#00493a")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#001012")}>
                    {p.hero.ctaPrimary}
                  </Link>
                  <Link href="/product/due-diligence" style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "#001012", padding: "13px 28px", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", border: "1px solid #e4e4e7", transition: "border-color 0.15s, color 0.15s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#00493a"; (e.currentTarget as HTMLElement).style.color = "#00493a"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#e4e4e7"; (e.currentTarget as HTMLElement).style.color = "#001012"; }}>
                    {p.hero.ctaSecondary}
                  </Link>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={240}>
                <div style={{ display: "flex", gap: 0, flexWrap: "wrap", borderTop: "1px solid #e4e4e7", borderLeft: "1px solid #e4e4e7" }}>
                  {p.hero.badges.map((badge, i) => (
                    <div key={i} style={{ padding: "10px 20px", borderRight: "1px solid #e4e4e7", borderBottom: "1px solid #e4e4e7", fontSize: 11, fontWeight: 700, color: "#71717a", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      {badge}
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={320}>
              <div style={{ marginTop: 96, paddingTop: 48, borderTop: "1px solid #e4e4e7", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 }} className="hero-metrics">
                {p.hero.metrics.map((s, i) => (
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

        {/* ─── 2. COMMENT ÇA MARCHE (flux concret) ───────────────── */}
        <HowItWorksBand />

        {/* ─── 3. SOCIAL PROOF STRIP ──────────────────────────────── */}
        <DarkProofStrip label={p.proof.label} items={p.proof.items} variant="inline" paddingY={36} />

        {/* ─── 4. LE PROBLÈME + AVANT/APRÈS ───────────────────────── */}
        <section style={{ background: "#fafafa", padding: "120px 0", borderBottom: "1px solid #e4e4e7" }}>
          <div className="container">
            <AnimatedSection>
              <span className="label" style={{ display: "block", marginBottom: 16 }}>{p.problem.label}</span>
              <h2 style={{ fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 16, maxWidth: 600 }}>{p.problem.h2}</h2>
              <p style={{ fontSize: 15, color: "#71717a", marginBottom: 64, maxWidth: 520 }}>{p.problem.sub}</p>
            </AnimatedSection>

            <AnimatedSection delay={80}>
              <div style={{ border: "1px solid #e4e4e7", marginBottom: 0 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", background: "#001012" }} className="ba-header">
                  <div style={{ padding: "14px 28px", fontSize: 11, fontWeight: 800, color: "var(--text-subtle-on-dark)", textTransform: "uppercase", letterSpacing: "0.1em", borderRight: "1px solid #18181b" }}>
                    {p.problem.beforeHeader}
                  </div>
                  <div style={{ padding: "14px 28px", fontSize: 11, fontWeight: 800, color: "#00c896", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    {p.problem.afterHeader}
                  </div>
                </div>
                {p.problem.rows.map((row, i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: "1px solid #e4e4e7" }} className="ba-row">
                    <div style={{ padding: "16px 28px", fontSize: 14, color: "#a1a1aa", borderRight: "1px solid #e4e4e7", background: i % 2 === 0 ? "white" : "#fafafa", textDecoration: "line-through", textDecorationColor: "#d4d4d8" }}>
                      {row.before}
                    </div>
                    <div style={{ padding: "16px 28px", fontSize: 14, color: "#001012", fontWeight: 600, background: i % 2 === 0 ? "white" : "#fafafa" }}>
                      <span style={{ color: "#00493a", fontWeight: 800, marginRight: 8, fontSize: 11 }}>✓</span>{row.after}
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
          <style>{`@media(max-width:768px){.ba-header,.ba-row{grid-template-columns:1fr!important}.ba-header>div:first-child,.ba-row>div:first-child{border-right:none!important;border-bottom:1px solid #e4e4e7!important}}`}</style>
        </section>

        {/* ─── 5. LA SOLUTION — TABS ───────────────────────────────── */}
        <SolutionTabs />

        {/* ─── 6. POURQUOI PALANTIR FOUNDRY ───────────────────────── */}
        <section style={{ background: "#001012", padding: "120px 0", borderBottom: "1px solid #18181b" }}>
          <div className="container">
            <AnimatedSection>
              <span style={{ display: "block", fontSize: "0.65rem", fontWeight: 800, color: "#00c896", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 16 }}>{p.foundry.label}</span>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start", marginBottom: 64 }} className="foundry-header">
                <h2 style={{ fontWeight: 500, letterSpacing: "-0.02em", color: "white" }}>{p.foundry.h2}</h2>
                <p style={{ fontSize: 15, color: "var(--text-muted-on-dark)", lineHeight: 1.65, paddingTop: 8 }}>{p.foundry.sub}</p>
              </div>
            </AnimatedSection>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, border: "1px solid #18181b" }} className="foundry-grid">
              {p.foundry.cards.map((item, i) => (
                <AnimatedSection key={i} delay={i * 80}>
                  <div style={{ background: "#0a0a0b", border: "1px solid #18181b", padding: "40px 36px", position: "relative" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 2, background: i === 0 ? "#00493a" : "transparent" }} />
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: "white", marginBottom: 12, letterSpacing: "-0.01em" }}>{item.title}</h3>
                    <p style={{ fontSize: 14, color: "var(--text-muted-on-dark)", lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection delay={200}>
              <div style={{ marginTop: 32, textAlign: "center" }}>
                <Link href="/foundry" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 12, fontWeight: 700, color: "#00c896", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                  {p.foundry.link}
                </Link>
              </div>
            </AnimatedSection>
          </div>
          <style>{`@media(max-width:900px){.foundry-header{grid-template-columns:1fr!important}.foundry-grid{grid-template-columns:1fr!important}}`}</style>
        </section>

        {/* ─── 7. SOLUTIONS PAR SEGMENT ───────────────────────────── */}
        <section style={{ background: "#fafafa", padding: "120px 0", borderBottom: "1px solid #e4e4e7" }}>
          <div className="container">
            <AnimatedSection>
              <span className="label" style={{ display: "block", marginBottom: 16 }}>{p.segments.label}</span>
              <h2 style={{ fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 48, maxWidth: 560 }}>{p.segments.h2}</h2>
            </AnimatedSection>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="seg-landing-top">
              {segments.slice(0, 3).map((s, i) => (
                <SegmentLandingCard key={s.slug} s={s} cta={p.segments.cta} delay={i * 60} />
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, marginTop: 24 }} className="seg-landing-bottom">
              {segments.slice(3).map((s, i) => (
                <SegmentLandingCard key={s.slug} s={s} cta={p.segments.cta} delay={(i + 3) * 60} />
              ))}
            </div>
          </div>
          <style>{`@media(max-width:900px){.seg-landing-top,.seg-landing-bottom{grid-template-columns:1fr!important}}`}</style>
        </section>

        {/* ─── 8. USE CASES ───────────────────────────────────────── */}
        <section style={{ background: "white", padding: "120px 0", borderBottom: "1px solid #e4e4e7" }}>
          <div className="container">
            <AnimatedSection>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64, flexWrap: "wrap", gap: 16 }}>
                <div>
                  <span className="label" style={{ display: "block", marginBottom: 16 }}>{p.useCases.label}</span>
                  <h2 style={{ fontWeight: 500, letterSpacing: "-0.02em", maxWidth: 520 }}>{p.useCases.h2}</h2>
                  <p style={{ fontSize: 14, color: "#71717a", marginTop: 12, maxWidth: 520, lineHeight: 1.55 }}>{p.useCases.sub}</p>
                </div>
                <Link href="/use-cases" style={{ fontSize: 12, fontWeight: 700, color: "#00493a", textTransform: "uppercase", letterSpacing: "0.06em", alignSelf: "end" }}>{p.useCases.link}</Link>
              </div>
            </AnimatedSection>
            <div style={{ border: "1px solid #e4e4e7" }} className="uc-wrap">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0 }} className="uc-row1">
                {segments.slice(0, 3).map((s, i) => {
                  const dark = i === 1;
                  return (
                    <AnimatedSection key={s.slug} delay={i * 80}>
                      <div className="uc-cell" style={{ background: dark ? "#001012" : "white", borderRight: i < 2 ? "1px solid #e4e4e7" : "none", padding: "40px 36px", height: "100%", display: "flex", flexDirection: "column" }}>
                        <div style={{ marginBottom: 24, paddingBottom: 20, borderBottom: `1px solid ${dark ? "#27272a" : "#f4f4f5"}` }}>
                          <span style={{ fontSize: 11, fontWeight: 700, color: dark ? "#00c896" : "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.name}</span>
                        </div>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: dark ? "white" : "#001012", letterSpacing: "-0.01em", marginBottom: 16, lineHeight: 1.3, flex: 1 }}>{s.useCase.title}</h3>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginBottom: 24 }}>
                          {s.metrics.map((m, j) => (
                            <div key={j} style={{ background: dark ? "#0a0a0b" : "#fafafa", border: `1px solid ${dark ? "#18181b" : "#e4e4e7"}`, padding: "10px 12px" }}>
                              <div style={{ fontSize: 18, fontWeight: 800, fontFamily: "monospace", color: dark ? "white" : "#001012", letterSpacing: "-0.02em" }}>{m.value}</div>
                              <div style={{ fontSize: 11, color: dark ? "var(--text-muted-on-dark)" : "#a1a1aa", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 2 }}>{m.label}</div>
                            </div>
                          ))}
                        </div>
                        <Link href={`/${s.slug}`} style={{ fontSize: 11, fontWeight: 700, color: dark ? "#00c896" : "#00493a", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                          {p.useCases.cardCta}
                        </Link>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 0, borderTop: "1px solid #e4e4e7" }} className="uc-row2">
                {segments.slice(3, 5).map((s, i) => {
                  const idx = i + 3;
                  return (
                    <AnimatedSection key={s.slug} delay={idx * 80}>
                      <div className="uc-cell" style={{ background: "white", borderRight: i === 0 ? "1px solid #e4e4e7" : "none", padding: "40px 36px", height: "100%", display: "flex", flexDirection: "column" }}>
                        <div style={{ marginBottom: 24, paddingBottom: 20, borderBottom: "1px solid #f4f4f5" }}>
                          <span style={{ fontSize: 11, fontWeight: 700, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.name}</span>
                        </div>
                        <h3 style={{ fontSize: 16, fontWeight: 700, color: "#001012", letterSpacing: "-0.01em", marginBottom: 16, lineHeight: 1.3, flex: 1 }}>{s.useCase.title}</h3>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, marginBottom: 24 }}>
                          {s.metrics.map((m, j) => (
                            <div key={j} style={{ background: "#fafafa", border: "1px solid #e4e4e7", padding: "10px 12px" }}>
                              <div style={{ fontSize: 18, fontWeight: 800, fontFamily: "monospace", color: "#001012", letterSpacing: "-0.02em" }}>{m.value}</div>
                              <div style={{ fontSize: 11, color: "#a1a1aa", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 2 }}>{m.label}</div>
                            </div>
                          ))}
                        </div>
                        <Link href={`/${s.slug}`} style={{ fontSize: 11, fontWeight: 700, color: "#00493a", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                          {p.useCases.cardCta}
                        </Link>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </div>
          <style>{`@media(max-width:900px){.uc-row1,.uc-row2{grid-template-columns:1fr!important}.uc-cell{border-right:none!important;border-bottom:1px solid #e4e4e7!important}.uc-row2 .uc-cell:last-child{border-bottom:none!important}}`}</style>
        </section>

        {/* ─── 9. PRICING ─────────────────────────────────────────── */}
        <section id="pricing" style={{ background: "#fafafa", padding: "120px 0", borderBottom: "1px solid #e4e4e7" }}>
          <div className="container">
            <AnimatedSection>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 64, flexWrap: "wrap", gap: 16 }}>
                <div>
                  <span className="label" style={{ display: "block", marginBottom: 16 }}>{p.pricing.label}</span>
                  <h2 style={{ fontWeight: 500, letterSpacing: "-0.02em" }}>{p.pricing.h2}</h2>
                </div>
                <Link href="/pricing" style={{ fontSize: 12, fontWeight: 700, color: "#00493a", textTransform: "uppercase", letterSpacing: "0.06em" }}>{p.pricing.link}</Link>
              </div>
            </AnimatedSection>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, border: "1px solid #e4e4e7" }} className="pricing-grid">
              {p.pricing.plans.map((plan, i) => (
                <AnimatedSection key={i} delay={i * 80}>
                  <div style={{ background: i === 1 ? "#001012" : "white", borderRight: i < 2 ? "1px solid #e4e4e7" : "none", padding: "48px 40px", display: "flex", flexDirection: "column", position: "relative" }}>
                    {i === 1 && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "#00493a" }} />}
                    <div style={{ fontSize: 11, fontWeight: 800, color: i === 1 ? "#00c896" : "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>{plan.badge}</div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: i === 1 ? "white" : "#001012", marginBottom: 8 }}>{plan.name}</div>
                    <div style={{ fontSize: "2.2rem", fontWeight: 800, color: i === 1 ? "white" : "#001012", fontFamily: "monospace", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 6 }}>{plan.price}</div>
                    <div style={{ fontSize: 12, color: i === 1 ? "var(--text-muted-on-dark)" : "#a1a1aa", marginBottom: 32 }}>{plan.sub}</div>
                    <div style={{ flex: 1, borderTop: `1px solid ${i === 1 ? "#27272a" : "#f4f4f5"}`, marginBottom: 32 }}>
                      {plan.features.map((f, j) => (
                        <div key={j} style={{ display: "flex", gap: 10, padding: "10px 0", borderBottom: `1px solid ${i === 1 ? "#18181b" : "#f4f4f5"}` }}>
                          <span style={{ color: i === 1 ? "#00c896" : "#00493a", fontWeight: 800, fontSize: 11, paddingTop: 2, flexShrink: 0 }}>✓</span>
                          <span style={{ fontSize: 13, color: i === 1 ? "var(--text-muted-on-dark)" : "#52525b" }}>{f}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/contact" style={{ display: "block", textAlign: "center", padding: "11px 20px", background: i === 1 ? "#00493a" : "transparent", color: i === 1 ? "white" : "#001012", border: i === 1 ? "none" : "1px solid #e4e4e7", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      {plan.cta}
                    </Link>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:900px){.pricing-grid{grid-template-columns:1fr!important}.pricing-grid>div{border-right:none!important;border-bottom:1px solid #e4e4e7!important}}`}</style>
        </section>

        {/* ─── 10. INTÉGRATIONS ───────────────────────────────────── */}
        <section style={{ background: "white", padding: "96px 0", borderBottom: "1px solid #e4e4e7" }}>
          <div className="container">
            <AnimatedSection>
              <span className="label" style={{ display: "block", marginBottom: 16 }}>{p.integrations.label}</span>
              <h2 style={{ fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 48 }}>{p.integrations.h2}</h2>
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

        {/* ─── 11. CTA FINAL ──────────────────────────────────────── */}
        <section style={{ background: "#001012", padding: "120px 0" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="cta-final">
              <div>
                <h2 style={{ fontWeight: 500, color: "white", letterSpacing: "-0.02em", marginBottom: 20, lineHeight: 1.1 }}>
                  {p.ctaFinal.h2a}<br /><span style={{ color: "#00c896" }}>{p.ctaFinal.h2b}</span>
                </h2>
                <p style={{ fontSize: 15, color: "var(--text-muted-on-dark)", lineHeight: 1.65, marginBottom: 40 }}>{p.ctaFinal.sub}</p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#00493a", color: "white", padding: "13px 28px", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    {p.ctaFinal.ctaPrimary}
                  </Link>
                  <Link href="/use-cases" style={{ display: "inline-flex", alignItems: "center", background: "transparent", color: "white", padding: "13px 28px", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", border: "1px solid #27272a" }}>
                    {p.ctaFinal.ctaSecondary}
                  </Link>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid #18181b" }}>
                {p.ctaFinal.stats.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 24, padding: "20px 0", borderBottom: "1px solid #18181b", alignItems: "center" }}>
                    <span style={{ fontFamily: "monospace", fontSize: "1.3rem", fontWeight: 800, color: "white", minWidth: 80 }}>{item.value}</span>
                    <span style={{ fontSize: 13, color: "var(--text-muted-on-dark)" }}>{item.label}</span>
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
