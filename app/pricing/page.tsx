"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

const plans = [
  {
    badge: "Pour commencer",
    name: "Free",
    monthly: "Gratuit",
    annual: "Gratuit",
    sub: "1 deal · 50 documents",
    features: ["1 data room", "50 documents max", "Rapport basique", "Chat 7 jours"],
    cta: "Démarrer",
    href: "/contact",
    highlight: false,
  },
  {
    badge: "Le plus populaire",
    name: "Pro",
    monthly: "499€",
    annual: "399€",
    sub: "/mois · Deals illimités",
    features: ["Deals illimités", "Documents illimités", "4 agents IA", "LBO model", "IC memo", "Benchmarks sectoriels", "Chat contextuel", "Rapport PDF", "Support prioritaire"],
    cta: "Essai gratuit 14 jours",
    href: "/contact",
    highlight: true,
  },
  {
    badge: "Pour les grands fonds",
    name: "Enterprise",
    monthly: "Sur devis",
    annual: "Sur devis",
    sub: "Tenant Foundry dédié",
    features: ["Tenant Foundry privé", "SSO / SAML", "On-premise disponible", "SLA garanti 99.9%", "Account manager dédié", "Intégrations custom", "Formation équipe"],
    cta: "Nous contacter",
    href: "/contact",
    highlight: false,
  },
];

const faq = [
  { q: "Puis-je changer de plan ?", a: "Oui, à tout moment. Le changement est effectif immédiatement, avec prorata au mois." },
  { q: "Y a-t-il des frais cachés ?", a: "Non. Le prix affiché inclut tout. Pas de frais par document, par utilisateur, ou par export." },
  { q: "Comment fonctionne l'essai gratuit ?", a: "14 jours sans engagement, accès complet Pro. Aucune carte bancaire requise pour commencer." },
  { q: "Que se passe-t-il si j'annule ?", a: "Vos données restent accessibles 30 jours après annulation pour export. Aucune rétention ensuite." },
  { q: "Faut-il avoir Palantir Foundry ?", a: "Non pour les plans Free et Pro. L'Enterprise inclut l'option de déploiement dans votre tenant Foundry existant." },
];

export default function PricingPage() {
  const [annual, setAnnual] = useState(false);

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 60 }}>
        <section style={{ padding: "100px 0 80px", background: "white", borderBottom: "1px solid #e4e4e7" }}>
          <div className="container" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
            <span className="label" style={{ display: "block", marginBottom: 16 }}>Tarification</span>
            <h1 style={{ fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 16 }}>Simple. Transparent.<br />Sans surprise.</h1>
            <p style={{ fontSize: 16, color: "#71717a", marginBottom: 40 }}>Commencez gratuitement.</p>
            {/* Toggle */}
            <div style={{ display: "inline-flex", border: "1px solid #e4e4e7" }}>
              {[{ label: "Mensuel", val: false }, { label: "Annuel (−20%)", val: true }].map((opt) => (
                <button key={String(opt.val)} onClick={() => setAnnual(opt.val)}
                  style={{ padding: "8px 20px", background: annual === opt.val ? "#001012" : "transparent", color: annual === opt.val ? "white" : "#71717a", border: "none", cursor: "pointer", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", fontFamily: "inherit" }}>
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Plans */}
        <section style={{ background: "#fafafa", padding: "64px 0", borderBottom: "1px solid #e4e4e7" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, border: "1px solid #e4e4e7" }} className="plans-grid">
              {plans.map((plan, i) => (
                <div key={i} style={{ background: plan.highlight ? "#001012" : "white", borderRight: i < 2 ? "1px solid #e4e4e7" : "none", padding: "48px 40px", display: "flex", flexDirection: "column", position: "relative" }}>
                  {plan.highlight && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "#00493a" }} />}
                  <div style={{ fontSize: 11, fontWeight: 800, color: plan.highlight ? "#00c896" : "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 24 }}>{plan.badge}</div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: plan.highlight ? "white" : "#001012", marginBottom: 8 }}>{plan.name}</div>
                  <div style={{ fontSize: "2.5rem", fontWeight: 800, color: plan.highlight ? "white" : "#001012", fontFamily: "monospace", letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 6 }}>
                    {annual ? plan.annual : plan.monthly}
                  </div>
                  <div style={{ fontSize: 12, color: plan.highlight ? "var(--text-muted-on-dark)" : "#a1a1aa", marginBottom: 40 }}>{plan.sub}</div>
                  <div style={{ flex: 1, borderTop: `1px solid ${plan.highlight ? "#27272a" : "#f4f4f5"}`, marginBottom: 32 }}>
                    {plan.features.map((feat, j) => (
                      <div key={j} style={{ display: "flex", gap: 10, padding: "10px 0", borderBottom: `1px solid ${plan.highlight ? "#18181b" : "#f4f4f5"}` }}>
                        <span style={{ color: plan.highlight ? "#00c896" : "#00493a", fontWeight: 800, fontSize: 11, paddingTop: 2, flexShrink: 0 }}>✓</span>
                        <span style={{ fontSize: 13, color: plan.highlight ? "var(--text-muted-on-dark)" : "#52525b" }}>{feat}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={plan.href} style={{ display: "block", textAlign: "center", padding: "12px 20px", background: plan.highlight ? "#00493a" : "transparent", color: plan.highlight ? "white" : "#001012", border: plan.highlight ? "none" : "1px solid #e4e4e7", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", transition: "all 0.15s" }}>
                    {plan.cta}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <style>{`@media(max-width:900px){.plans-grid{grid-template-columns:1fr!important}.plans-grid>div{border-right:none!important;border-bottom:1px solid #e4e4e7!important}}`}</style>
        </section>

        {/* FAQ */}
        <section style={{ background: "white", padding: "96px 0" }}>
          <div className="container" style={{ maxWidth: 720 }}>
            <span className="label" style={{ display: "block", marginBottom: 16 }}>FAQ</span>
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
