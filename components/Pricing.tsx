"use client";

import { useLang } from "@/lib/i18n";
import AnimatedSection from "./AnimatedSection";

export default function Pricing() {
  const { t } = useLang();
  const p = t.pricing;

  return (
    <section
      id="pricing"
      style={{
        background: "#fafafa",
        padding: "120px 0",
        borderTop: "1px solid #e4e4e7",
      }}
    >
      <div className="container">
        {/* Header */}
        <AnimatedSection>
          <div style={{ marginBottom: 80 }}>
            <span className="label" style={{ display: "block", marginBottom: 16 }}>
              Tarification
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 500,
                color: "#001012",
                letterSpacing: "-0.02em",
                marginBottom: 16,
              }}
            >
              {p.title}
            </h2>
            <p style={{ fontSize: 15, color: "#71717a" }}>{p.subtitle}</p>
          </div>
        </AnimatedSection>

        {/* Plans */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0,
            border: "1px solid #e4e4e7",
          }}
          className="pricing-grid"
        >
          {p.plans.map((plan, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div
                style={{
                  padding: "48px 40px",
                  borderRight: i < 2 ? "1px solid #e4e4e7" : "none",
                  background: plan.highlight ? "#001012" : "white",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                {/* Top green line for highlighted plan */}
                {plan.highlight && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 3,
                      background: "#00493a",
                    }}
                  />
                )}

                {/* Badge */}
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: plan.highlight ? "#00493a" : "#a1a1aa",
                    marginBottom: 32,
                  }}
                >
                  {plan.badge}
                </div>

                {/* Name */}
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: plan.highlight ? "white" : "#001012",
                    letterSpacing: "-0.01em",
                    marginBottom: 8,
                  }}
                >
                  {plan.name}
                </div>

                {/* Price */}
                <div style={{ marginBottom: 40 }}>
                  <div
                    style={{
                      fontSize: "clamp(2rem, 3vw, 2.5rem)",
                      fontWeight: 800,
                      color: plan.highlight ? "white" : "#001012",
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                      fontFamily: "monospace",
                    }}
                  >
                    {plan.price}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      color: plan.highlight ? "#71717a" : "#a1a1aa",
                      marginTop: 6,
                      fontWeight: 500,
                    }}
                  >
                    {plan.priceSub}
                  </div>
                </div>

                {/* Features */}
                <div
                  style={{
                    flex: 1,
                    marginBottom: 40,
                    borderTop: `1px solid ${plan.highlight ? "#27272a" : "#f4f4f5"}`,
                  }}
                >
                  {plan.features.map((feat, j) => (
                    <div
                      key={j}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 12,
                        padding: "12px 0",
                        borderBottom: `1px solid ${
                          plan.highlight ? "#27272a" : "#f4f4f5"
                        }`,
                      }}
                    >
                      <span
                        style={{
                          fontSize: 12,
                          color: "#00493a",
                          fontWeight: 700,
                          paddingTop: 1,
                          flexShrink: 0,
                        }}
                      >
                        ✓
                      </span>
                      <span
                        style={{
                          fontSize: 13,
                          color: plan.highlight ? "#a1a1aa" : "#52525b",
                          lineHeight: 1.5,
                        }}
                      >
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "12px 20px",
                    fontSize: 12,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    background: plan.highlight ? "#00493a" : "transparent",
                    color: plan.highlight ? "white" : "#001012",
                    border: plan.highlight ? "none" : "1px solid #e4e4e7",
                    transition: "all 0.15s",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    if (plan.highlight) {
                      el.style.background = "#003d31";
                    } else {
                      el.style.borderColor = "#001012";
                      el.style.background = "#001012";
                      el.style.color = "white";
                    }
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    if (plan.highlight) {
                      el.style.background = "#00493a";
                    } else {
                      el.style.borderColor = "#e4e4e7";
                      el.style.background = "transparent";
                      el.style.color = "#001012";
                    }
                  }}
                >
                  {plan.cta}
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
          .pricing-grid > div { border-right: none !important; border-bottom: 1px solid #e4e4e7 !important; }
          .pricing-grid > div:last-child { border-bottom: none !important; }
        }
      `}</style>
    </section>
  );
}
