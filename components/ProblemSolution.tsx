"use client";

import { useLang } from "@/lib/i18n";
import AnimatedSection from "./AnimatedSection";

export default function ProblemSolution() {
  const { t } = useLang();
  const p = t.problem;

  return (
    <section
      id="about"
      style={{ background: "#fafafa", padding: "120px 0", borderTop: "1px solid #e4e4e7" }}
    >
      <div className="container">
        {/* Header */}
        <AnimatedSection>
          <div style={{ marginBottom: 80 }}>
            <span className="label" style={{ display: "block", marginBottom: 16 }}>
              Contexte
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 500,
                color: "#001012",
                letterSpacing: "-0.02em",
                maxWidth: 560,
              }}
            >
              {p.title}
            </h2>
          </div>
        </AnimatedSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 2,
          }}
          className="ps-grid"
        >
          {/* Before */}
          <AnimatedSection delay={80}>
            <div
              style={{
                background: "white",
                border: "1px solid #e4e4e7",
                padding: "48px 40px",
                height: "100%",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: 3,
                  height: "100%",
                  background: "#e4e4e7",
                }}
              />
              <span
                className="label"
                style={{ display: "block", marginBottom: 20, color: "#a1a1aa" }}
              >
                {p.label}
              </span>
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#001012",
                  marginBottom: 32,
                  letterSpacing: "-0.01em",
                }}
              >
                {p.title}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {p.items.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 16,
                      padding: "14px 0",
                      borderBottom:
                        i < p.items.length - 1 ? "1px solid #f4f4f5" : "none",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 13,
                        color: "#a1a1aa",
                        fontWeight: 700,
                        flexShrink: 0,
                        paddingTop: 1,
                      }}
                    >
                      ✕
                    </span>
                    <span style={{ fontSize: 14, color: "#71717a", lineHeight: 1.5 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* After */}
          <AnimatedSection delay={160}>
            <div
              style={{
                background: "white",
                border: "1px solid #e4e4e7",
                padding: "48px 40px",
                height: "100%",
                position: "relative",
              }}
            >
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
              <span
                className="label"
                style={{ display: "block", marginBottom: 20 }}
              >
                {p.solutionLabel}
              </span>
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 700,
                  color: "#001012",
                  marginBottom: 32,
                  letterSpacing: "-0.01em",
                }}
              >
                {p.solutionTitle}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {p.solutionItems.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 16,
                      padding: "14px 0",
                      borderBottom:
                        i < p.solutionItems.length - 1
                          ? "1px solid #f4f4f5"
                          : "none",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 13,
                        color: "#00493a",
                        fontWeight: 700,
                        flexShrink: 0,
                        paddingTop: 1,
                      }}
                    >
                      ✓
                    </span>
                    <span style={{ fontSize: 14, color: "#001012", lineHeight: 1.5 }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
