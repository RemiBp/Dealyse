"use client";

import { useLang } from "@/lib/i18n";
import AnimatedSection from "./AnimatedSection";

export default function HowItWorks() {
  const { t } = useLang();
  const h = t.how;

  return (
    <section
      id="how"
      style={{
        background: "white",
        padding: "120px 0",
        borderTop: "1px solid #e4e4e7",
      }}
    >
      <div className="container">
        {/* Header */}
        <AnimatedSection>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 80,
              flexWrap: "wrap",
              gap: 24,
            }}
          >
            <div>
              <span className="label" style={{ display: "block", marginBottom: 16 }}>
                Process
              </span>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 500,
                  color: "#001012",
                  letterSpacing: "-0.02em",
                }}
              >
                {h.title}{" "}
                <span style={{ color: "#00493a" }}>{h.titleAccent}</span>
              </h2>
            </div>
          </div>
        </AnimatedSection>

        {/* Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {h.steps.map((step, i) => (
            <AnimatedSection key={step.num} delay={i * 100}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 1fr 1fr",
                  gap: 0,
                  padding: "40px 0",
                  borderBottom: "1px solid #e4e4e7",
                  alignItems: "start",
                  transition: "background 0.2s",
                }}
                className="step-row"
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "#fafafa")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "transparent")
                }
              >
                {/* Step number */}
                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: 11,
                    fontWeight: 800,
                    color: "#00493a",
                    letterSpacing: "0.1em",
                    paddingTop: 4,
                  }}
                >
                  {step.num}
                </div>

                {/* Title */}
                <div style={{ paddingRight: 40 }}>
                  <h3
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      color: "#001012",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.2,
                    }}
                  >
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <div>
                  <p
                    style={{
                      fontSize: 14,
                      color: "#71717a",
                      lineHeight: 1.65,
                      maxWidth: 400,
                    }}
                  >
                    {step.desc}
                  </p>
                  {i === 1 && (
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        marginTop: 12,
                      }}
                    >
                      <div
                        style={{
                          width: 6,
                          height: 6,
                          background: "#00493a",
                          borderRadius: "50%",
                        }}
                      />
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          color: "#00493a",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        }}
                      >
                        Temps réel
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .step-row { grid-template-columns: 40px 1fr !important; }
          .step-row > div:last-child { display: none !important; }
        }
      `}</style>
    </section>
  );
}
