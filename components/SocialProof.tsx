"use client";

import { useLang } from "@/lib/i18n";
import AnimatedSection from "./AnimatedSection";

export default function SocialProof() {
  const { t } = useLang();
  const s = t.social;

  return (
    <section
      style={{
        background: "white",
        padding: "120px 0",
        borderTop: "1px solid #e4e4e7",
      }}
    >
      <div className="container">
        {/* Header */}
        <AnimatedSection>
          <div style={{ marginBottom: 80 }}>
            <span className="label" style={{ display: "block", marginBottom: 16 }}>
              Témoignages
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 500,
                color: "#001012",
                letterSpacing: "-0.02em",
              }}
            >
              {s.title}
            </h2>
          </div>
        </AnimatedSection>

        {/* Quotes grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 2,
          }}
          className="quotes-grid"
        >
          {s.quotes.map((q, i) => (
            <AnimatedSection key={i} delay={i * 120}>
              <div
                style={{
                  background: "#fafafa",
                  border: "1px solid #e4e4e7",
                  padding: "48px 40px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                {/* Left border accent */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 3,
                    height: "100%",
                    background: "#00493a",
                  }}
                />

                <p
                  style={{
                    fontSize: 16,
                    color: "#001012",
                    lineHeight: 1.7,
                    flex: 1,
                    marginBottom: 40,
                    fontWeight: 400,
                  }}
                >
                  &ldquo;{q.text}&rdquo;
                </p>

                <div
                  style={{
                    paddingTop: 24,
                    borderTop: "1px solid #e4e4e7",
                    display: "flex",
                    alignItems: "center",
                    gap: 14,
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      background: "#001012",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: 14,
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {q.author[0]}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#001012",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {q.author}
                    </div>
                    <div
                      style={{ fontSize: 12, color: "#71717a", marginTop: 2 }}
                    >
                      {q.fund}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Trust marks */}
        <AnimatedSection delay={200}>
          <div
            style={{
              marginTop: 80,
              paddingTop: 48,
              borderTop: "1px solid #e4e4e7",
              display: "flex",
              alignItems: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                color: "#a1a1aa",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginRight: 8,
              }}
            >
              Infrastructure
            </span>
            {["Palantir Foundry", "AIP Logic", "SOC 2", "GDPR"].map((name) => (
              <div
                key={name}
                style={{
                  padding: "6px 14px",
                  border: "1px solid #e4e4e7",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#71717a",
                  letterSpacing: "0.04em",
                }}
              >
                {name}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .quotes-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
