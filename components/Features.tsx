"use client";

import { useLang } from "@/lib/i18n";
import AnimatedSection from "./AnimatedSection";

export default function Features() {
  const { t } = useLang();
  const f = t.features;

  return (
    <section
      id="features"
      style={{
        background: "#fafafa",
        padding: "120px 0",
        borderTop: "1px solid #e4e4e7",
      }}
    >
      <div className="container">
        {/* Header */}
        <AnimatedSection>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              marginBottom: 80,
              alignItems: "end",
            }}
            className="feat-header"
          >
            <div>
              <span className="label" style={{ display: "block", marginBottom: 16 }}>
                Fonctionnalités
              </span>
              <h2
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 500,
                  color: "#001012",
                  letterSpacing: "-0.02em",
                }}
              >
                {f.title}
              </h2>
            </div>
            <p
              style={{
                fontSize: 15,
                color: "#71717a",
                lineHeight: 1.65,
                maxWidth: 380,
              }}
            >
              {f.subtitle}
            </p>
          </div>
        </AnimatedSection>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0,
            border: "1px solid #e4e4e7",
          }}
          className="feat-grid"
        >
          {f.items.map((item, i) => (
            <AnimatedSection key={i} delay={i * 50}>
              <div
                style={{
                  padding: "36px 32px",
                  borderRight:
                    (i + 1) % 3 !== 0 ? "1px solid #e4e4e7" : "none",
                  borderBottom: i < 3 ? "1px solid #e4e4e7" : "none",
                  background: "white",
                  transition: "background 0.2s",
                  cursor: "default",
                  height: "100%",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "#fafafa")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "white")
                }
              >
                {/* Number */}
                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: 11,
                    fontWeight: 800,
                    color: "#00493a",
                    letterSpacing: "0.1em",
                    marginBottom: 20,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h4
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#001012",
                    letterSpacing: "-0.01em",
                    marginBottom: 10,
                    lineHeight: 1.3,
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontSize: 13,
                    color: "#71717a",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .feat-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .feat-grid > div { border-right: 1px solid #e4e4e7 !important; }
          .feat-grid > div:nth-child(2n) { border-right: none !important; }
          .feat-header { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
        @media (max-width: 600px) {
          .feat-grid { grid-template-columns: 1fr !important; }
          .feat-grid > div { border-right: none !important; }
        }
      `}</style>
    </section>
  );
}
