"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/content/products";
import { useLang } from "@/lib/i18n";

const tabSlugs = ["due-diligence", "deal-management", "modelling", "reporting", "security"] as const;

export default function SolutionTabs() {
  const [active, setActive] = useState(0);
  const { t } = useLang();
  const tabs = t.page.tabs;
  const tab = tabs.items[active];
  const slug = tabSlugs[active];
  const product = products.find((p) => p.slug === slug)!;

  return (
    <section style={{ background: "white", padding: "56px 0 120px", borderBottom: "1px solid #e4e4e7" }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, marginTop: 0, flexWrap: "wrap", gap: 16 }}>
          <div>
            <span className="label" style={{ display: "block", marginBottom: 16 }}>{tabs.label}</span>
            <h2 style={{ fontWeight: 500, letterSpacing: "-0.02em", maxWidth: 520 }}>{tabs.h2}</h2>
            <p style={{ fontSize: 14, color: "#71717a", marginTop: 12, maxWidth: 520, lineHeight: 1.55 }}>{tabs.intro}</p>
          </div>
          <Link href="/contact" style={{ fontSize: 12, fontWeight: 700, color: "#00493a", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            {tabs.cta}
          </Link>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 0, marginBottom: 0, borderBottom: "1px solid #e4e4e7", overflowX: "auto" }}>
          {tabs.tabLabels.map((label, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                padding: "12px 24px",
                background: "none",
                border: "none",
                borderBottom: active === i ? "2px solid #001012" : "2px solid transparent",
                color: active === i ? "#001012" : "#71717a",
                fontSize: 12,
                fontWeight: active === i ? 700 : 600,
                cursor: "pointer",
                fontFamily: "inherit",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                whiteSpace: "nowrap",
                transition: "color 0.15s",
                marginBottom: -1,
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, border: "1px solid #e4e4e7", borderTop: "none" }} className="tab-content">
          {/* Image left */}
          <div className="tab-content__visual" style={{ borderRight: "1px solid #e4e4e7" }}>
            <Image
              src={product.image}
              alt={product.name}
              width={1200}
              height={800}
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ filter: "grayscale(100%) contrast(1.05)", transition: "opacity 0.3s" }}
            />
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 1,
                background: "linear-gradient(to right, transparent 60%, white 100%)",
                pointerEvents: "none",
              }}
            />
          </div>

          {/* Content right */}
          <div style={{ padding: "48px 40px" }}>
            {/* Scenario */}
            <div style={{ background: "#fafafa", borderLeft: "3px solid #00493a", padding: "16px 20px", marginBottom: 28, fontSize: 13, color: "#52525b", lineHeight: 1.65, fontStyle: "italic" }}>
              {tab.scenario}
            </div>

            {/* Bullets */}
            <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 32 }}>
              {tab.bullets.map((b, i) => (
                <div key={i} style={{ display: "flex", gap: 10, padding: "10px 0", borderBottom: i < tab.bullets.length - 1 ? "1px solid #f4f4f5" : "none" }}>
                  <span style={{ color: "#00493a", fontWeight: 800, fontSize: 11, paddingTop: 2, flexShrink: 0 }}>✓</span>
                  <span style={{ fontSize: 14, color: "#001012", lineHeight: 1.5 }}>{b}</span>
                </div>
              ))}
            </div>

            <Link href={`/product/${slug}`} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, color: "#001012", textTransform: "uppercase", letterSpacing: "0.06em", borderBottom: "1px solid #001012", paddingBottom: 2 }}>
              {tabs.viewDetail} {product.name} {tabs.viewDetailSuffix}
            </Link>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:900px){.tab-content{grid-template-columns:1fr!important}.tab-content>div:first-child{min-height:220px!important;border-right:none!important;border-bottom:1px solid #e4e4e7!important}}`}</style>
    </section>
  );
}
