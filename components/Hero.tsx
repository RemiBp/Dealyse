"use client";

import { useLang } from "@/lib/i18n";
import AnimatedSection from "./AnimatedSection";

export default function Hero() {
  const { t } = useLang();

  return (
    <section
      style={{
        paddingTop: 160,
        paddingBottom: 120,
        background: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot pattern background */}
      <div
        className="dot-pattern"
        style={{
          position: "absolute",
          inset: 0,
          maskImage:
            "radial-gradient(ellipse at 60% 40%, transparent 30%, black 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 60% 40%, transparent 30%, black 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Corner marks */}
      {[
        { top: 80, left: 48 },
        { top: 80, right: 48 },
        { bottom: 48, left: 48 },
        { bottom: 48, right: 48 },
      ].map((pos, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: 16,
            height: 16,
            borderTop: i < 2 ? "2px solid #00493a" : undefined,
            borderBottom: i >= 2 ? "2px solid #00493a" : undefined,
            borderLeft: i % 2 === 0 ? "2px solid #00493a" : undefined,
            borderRight: i % 2 === 1 ? "2px solid #00493a" : undefined,
            opacity: 0.3,
            ...pos,
          }}
        />
      ))}

      <div className="container" style={{ position: "relative" }}>
        <div style={{ maxWidth: 760 }}>
          {/* Label */}
          <AnimatedSection delay={0}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 40,
              }}
            >
              <span className="label">Palantir Foundry · AIP Logic</span>
              <div
                style={{
                  height: 1,
                  width: 40,
                  background: "#00493a",
                  opacity: 0.4,
                }}
              />
            </div>
          </AnimatedSection>

          {/* Headline */}
          <AnimatedSection delay={60}>
            <h1
              style={{
                fontSize: "clamp(2.8rem, 6vw, 5rem)",
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "#001012",
                marginBottom: 32,
              }}
            >
              {t.hero.h1a}
              <br />
              <span style={{ color: "#00493a" }}>{t.hero.h1b}</span>
            </h1>
          </AnimatedSection>

          {/* Subtitle */}
          <AnimatedSection delay={120}>
            <p
              style={{
                fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                color: "#71717a",
                maxWidth: 560,
                lineHeight: 1.65,
                marginBottom: 48,
                fontWeight: 400,
              }}
            >
              {t.hero.sub}
            </p>
          </AnimatedSection>

          {/* CTAs */}
          <AnimatedSection delay={180}>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#001012",
                  color: "white",
                  padding: "13px 28px",
                  fontSize: 13,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "#00493a")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "#001012")
                }
              >
                {t.hero.ctaPrimary}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M2 7h10M8 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#how"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  background: "transparent",
                  color: "#001012",
                  padding: "13px 28px",
                  fontSize: 13,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  border: "1px solid #e4e4e7",
                  transition: "border-color 0.15s, color 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#00493a";
                  (e.currentTarget as HTMLElement).style.color = "#00493a";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#e4e4e7";
                  (e.currentTarget as HTMLElement).style.color = "#001012";
                }}
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </AnimatedSection>
        </div>

        {/* Metrics — horizontal rule style */}
        <AnimatedSection delay={280}>
          <div
            style={{
              marginTop: 96,
              paddingTop: 48,
              borderTop: "1px solid #e4e4e7",
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 0,
            }}
            className="metrics-grid"
          >
            {[
              { value: "847", label: t.hero.stat1label },
              { value: "4h", label: t.hero.stat2label },
              { value: "91%", label: t.hero.stat3label },
            ].map((stat, i) => (
              <div
                key={i}
                style={{
                  paddingRight: 48,
                  borderRight: i < 2 ? "1px solid #e4e4e7" : "none",
                  paddingLeft: i > 0 ? 48 : 0,
                }}
              >
                <div
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 800,
                    color: "#001012",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    fontFamily: "monospace",
                    marginBottom: 8,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "#71717a",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .metrics-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .metrics-grid > div { border-right: none !important; padding-left: 0 !important; padding-right: 0 !important; }
        }
      `}</style>
    </section>
  );
}
