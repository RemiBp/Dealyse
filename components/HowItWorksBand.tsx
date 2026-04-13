"use client";

import AnimatedSection from "./AnimatedSection";
import { useLang } from "@/lib/i18n";

export default function HowItWorksBand({
  compact = false,
  background = "#ffffff",
}: {
  compact?: boolean;
  background?: string;
}) {
  const { t } = useLang();
  const h = t.page.howItWorks;

  const Tag = compact ? "div" : "section";
  return (
    <Tag
      style={{
        background,
        padding: compact ? "0 0 28px" : "72px 0",
        borderBottom: compact ? "none" : "1px solid #e4e4e7",
      }}
    >
      <div className="container">
        <AnimatedSection delay={0}>
          <span className="label" style={{ display: "block", marginBottom: compact ? 8 : 16 }}>
            {h.label}
          </span>
          <h2
            style={{
              fontWeight: 500,
              letterSpacing: "-0.02em",
              marginBottom: compact ? 6 : 12,
              maxWidth: 560,
              fontSize: compact ? "clamp(1.1rem, 2.2vw, 1.4rem)" : undefined,
            }}
          >
            {h.h2}
          </h2>
          {!compact && (
            <p style={{ fontSize: 15, color: "#71717a", marginBottom: 40, maxWidth: 560 }}>{h.sub}</p>
          )}
        </AnimatedSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0,
            border: compact ? "1px solid #e4e4e7" : "1px solid #e4e4e7",
            marginBottom: compact ? 0 : 0,
          }}
          className="how-steps-grid"
        >
          {h.steps.map((step, i) => (
            <div
              key={i}
              className="how-step-cell"
              style={{
                borderRight: i < 2 ? "1px solid #e4e4e7" : "none",
                padding: compact ? "16px 20px" : "28px 28px",
              }}
            >
              <AnimatedSection delay={compact ? 0 : 40 + i * 50}>
                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: 11,
                    fontWeight: 800,
                    color: "#00493a",
                    letterSpacing: "0.1em",
                    marginBottom: 10,
                  }}
                >
                  {step.num}
                </div>
                <div
                  style={{
                    fontSize: compact ? 14 : 16,
                    fontWeight: 700,
                    color: "#001012",
                    marginBottom: compact ? 4 : 10,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.35,
                  }}
                >
                  {step.title}
                </div>
                {!compact && (
                  <p style={{ fontSize: 14, color: "#71717a", lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                )}
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .how-steps-grid { grid-template-columns: 1fr !important; }
          .how-step-cell {
            border-right: none !important;
            border-bottom: 1px solid #e4e4e7;
          }
          .how-step-cell:last-child { border-bottom: none !important; }
        }
      `}</style>
    </Tag>
  );
}
