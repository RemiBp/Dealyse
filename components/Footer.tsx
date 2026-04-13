"use client";
import Link from "next/link";
import { segments } from "@/lib/content/segments";
import { products } from "@/lib/content/products";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;
  return (
    <footer style={{ background: "#0a0a0b", borderTop: "1px solid #18181b" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 64, padding: "72px 0 64px", borderBottom: "1px solid #18181b" }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              {/* Logo mark — inverted for dark bg */}
              <svg width="20" height="22" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="0,0 15,0 22,7 22,24 0,24" fill="#00493a"/>
                <polyline points="15,0 15,7 22,7" fill="none" stroke="#00c896" strokeWidth="1.5"/>
                <rect x="4" y="11" width="11" height="2" fill="#00c896"/>
                <rect x="4" y="15.5" width="8" height="1.5" fill="#00c896" opacity="0.55"/>
              </svg>
              <span style={{ fontWeight: 800, fontSize: 13, color: "white", textTransform: "uppercase", letterSpacing: "0.08em" }}>DEALYSE</span>
            </div>
            <p style={{ fontSize: 13, color: "var(--footer-muted)", lineHeight: 1.6, maxWidth: 240, marginBottom: 20 }}>
              {f.tagline}
            </p>
            <p style={{ fontSize: 11, color: "var(--footer-link)", fontFamily: "monospace" }}>hello@dealyse.io</p>
            <p style={{ fontSize: 11, color: "var(--text-subtle-on-dark)", fontFamily: "monospace", marginTop: 4 }}>48.8566°N 2.3522°E — Paris</p>
          </div>

          {/* Solutions */}
          <div>
            <div style={{ fontSize: 10, fontWeight: 800, color: "var(--on-dark-strip-label)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>{f.solutions}</div>
            {segments.map((s) => (
              <Link key={s.slug} href={`/${s.slug}`}
                style={{ display: "block", fontSize: 13, color: "var(--footer-link)", marginBottom: 10, transition: "color 0.15s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "white")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--footer-link)")}>
                {s.shortName}
              </Link>
            ))}
          </div>

          {/* Produit */}
          <div>
            <div style={{ fontSize: 10, fontWeight: 800, color: "var(--on-dark-strip-label)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>{f.product}</div>
            {products.map((p) => (
              <Link key={p.slug} href={`/product/${p.slug}`}
                style={{ display: "block", fontSize: 13, color: "var(--footer-link)", marginBottom: 10, transition: "color 0.15s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "white")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--footer-link)")}>
                {p.name}
              </Link>
            ))}
          </div>

          {/* Ressources */}
          <div>
            <div style={{ fontSize: 10, fontWeight: 800, color: "var(--on-dark-strip-label)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>{f.resources}</div>
            {f.resourceLinks.map((l) => (
              <Link key={l.href} href={l.href}
                style={{ display: "block", fontSize: 13, color: "var(--footer-link)", marginBottom: 10, transition: "color 0.15s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "white")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--footer-link)")}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0", flexWrap: "wrap", gap: 8 }}>
          <span style={{ fontSize: 12, color: "var(--footer-muted)", fontFamily: "monospace" }}>
            {f.copyright}
          </span>
          <div style={{ display: "flex", gap: 24 }}>
            {f.legalLinks.map((l) => (
              <Link key={l.label} href={l.href} style={{ fontSize: 12, color: "var(--footer-muted)", transition: "color 0.15s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--footer-link)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--footer-muted)")}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 600px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
