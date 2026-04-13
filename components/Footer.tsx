"use client";
import Link from "next/link";
import { segments } from "@/lib/content/segments";
import { products } from "@/lib/content/products";

export default function Footer() {
  return (
    <footer style={{ background: "#0a0a0b", borderTop: "1px solid #18181b" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 64, padding: "72px 0 64px", borderBottom: "1px solid #18181b" }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{ width: 26, height: 26, background: "#00493a", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "white", fontSize: 10, fontWeight: 800, letterSpacing: "0.05em" }}>DL</span>
              </div>
              <span style={{ fontWeight: 800, fontSize: 13, color: "white", textTransform: "uppercase", letterSpacing: "0.08em" }}>DEALYSE</span>
            </div>
            <p style={{ fontSize: 13, color: "#52525b", lineHeight: 1.6, maxWidth: 240, marginBottom: 20 }}>
              Le premier Deal OS propulsé par Palantir Foundry.
            </p>
            <p style={{ fontSize: 11, color: "#3f3f46", fontFamily: "monospace" }}>hello@dealyse.io</p>
            <p style={{ fontSize: 11, color: "#27272a", fontFamily: "monospace", marginTop: 4 }}>48.8566°N 2.3522°E — Paris</p>
          </div>

          {/* Solutions */}
          <div>
            <div style={{ fontSize: 10, fontWeight: 800, color: "#3f3f46", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>Solutions</div>
            {segments.map((s) => (
              <Link key={s.slug} href={`/${s.slug}`}
                style={{ display: "block", fontSize: 13, color: "#52525b", marginBottom: 10, transition: "color 0.15s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "white")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#52525b")}>
                {s.shortName}
              </Link>
            ))}
          </div>

          {/* Produit */}
          <div>
            <div style={{ fontSize: 10, fontWeight: 800, color: "#3f3f46", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>Produit</div>
            {products.map((p) => (
              <Link key={p.slug} href={`/product/${p.slug}`}
                style={{ display: "block", fontSize: 13, color: "#52525b", marginBottom: 10, transition: "color 0.15s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "white")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#52525b")}>
                {p.name}
              </Link>
            ))}
          </div>

          {/* Ressources */}
          <div>
            <div style={{ fontSize: 10, fontWeight: 800, color: "#3f3f46", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>Ressources</div>
            {[
              { href: "/use-cases", label: "Use Cases" },
              { href: "/foundry", label: "Pourquoi Foundry" },
              { href: "/pricing", label: "Tarifs" },
              { href: "/about", label: "À propos" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <Link key={l.href} href={l.href}
                style={{ display: "block", fontSize: 13, color: "#52525b", marginBottom: 10, transition: "color 0.15s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "white")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#52525b")}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 0", flexWrap: "wrap", gap: 8 }}>
          <span style={{ fontSize: 12, color: "#3f3f46", fontFamily: "monospace" }}>
            © 2026 DEALYSE. Propulsé par Palantir Foundry.
          </span>
          <div style={{ display: "flex", gap: 24 }}>
            {[{ label: "Mentions légales", href: "/mentions-legales" }, { label: "Confidentialité", href: "/confidentialite" }].map((l) => (
              <Link key={l.label} href={l.href} style={{ fontSize: 12, color: "#3f3f46", transition: "color 0.15s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#52525b")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#3f3f46")}>
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
