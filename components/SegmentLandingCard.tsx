"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";
import type { Segment } from "@/lib/content/segments";

export default function SegmentLandingCard({
  s,
  cta,
  delay,
}: {
  s: Segment;
  cta: string;
  delay: number;
}) {
  return (
    <AnimatedSection delay={delay}>
      <Link
        href={`/${s.slug}`}
        className="segment-landing-card"
        style={{ position: "relative", display: "block", overflow: "hidden" }}
      >
        <div className="segment-landing-card__visual">
          <Image
            src={s.image}
            alt={s.name}
            width={1200}
            height={480}
            sizes="(max-width: 900px) 100vw, 33vw"
            style={{
              filter: "grayscale(100%) contrast(1.08) brightness(0.96)",
            }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              background:
                "linear-gradient(180deg, transparent 35%, rgba(0,16,18,0.55) 100%)",
              pointerEvents: "none",
            }}
          />
          <div
            aria-hidden
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: 3,
              zIndex: 2,
              background: "#00493a",
              pointerEvents: "none",
            }}
          />
        </div>
        <div
          style={{
            padding: "26px 28px 30px",
            borderLeft: "3px solid #00493a",
            background: "#fff",
          }}
        >
          <h3
            style={{
              fontSize: 19,
              fontWeight: 700,
              color: "#001012",
              marginBottom: 10,
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            {s.name}
          </h3>
          <p
            style={{
              fontSize: 13,
              color: "#52525b",
              lineHeight: 1.65,
              marginBottom: 18,
            }}
          >
            {s.hero.sub}
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "8px 10px",
              marginBottom: 20,
            }}
          >
            {s.metrics.map((m, j) => (
              <div
                key={j}
                style={{
                  padding: "9px 10px",
                  background: "#fafafa",
                  border: "1px solid #f4f4f5",
                }}
              >
                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: 14,
                    fontWeight: 800,
                    color: "#001012",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {m.value}
                </div>
                <div
                  style={{
                    fontSize: 10,
                    color: "#71717a",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    marginTop: 3,
                    lineHeight: 1.3,
                  }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#00493a",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            {cta}
          </span>
        </div>
      </Link>
    </AnimatedSection>
  );
}
