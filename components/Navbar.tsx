"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { segments } from "@/lib/content/segments";
import { products } from "@/lib/content/products";

type DropdownKey = "solutions" | "produit" | null;

export default function Navbar() {
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<DropdownKey>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(null);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const labelStyle: React.CSSProperties = {
    fontSize: 12,
    fontWeight: 700,
    color: open ? "#001012" : "#71717a",
    textTransform: "uppercase" as const,
    letterSpacing: "0.06em",
    background: "none",
    border: "none",
    cursor: "pointer",
    fontFamily: "inherit",
    display: "flex",
    alignItems: "center",
    gap: 4,
    padding: "4px 0",
    transition: "color 0.15s",
  };

  const linkStyle: React.CSSProperties = {
    fontSize: 12,
    fontWeight: 700,
    color: "#71717a",
    textTransform: "uppercase" as const,
    letterSpacing: "0.06em",
    transition: "color 0.15s",
  };

  return (
    <nav
      ref={navRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.97)" : "white",
        borderBottom: "1px solid #e4e4e7",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 60,
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{ display: "flex", alignItems: "center", gap: 10 }}
          onClick={() => setOpen(null)}
        >
          <div
            style={{
              width: 26,
              height: 26,
              background: "#00493a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span style={{ color: "white", fontSize: 10, fontWeight: 800, letterSpacing: "0.04em" }}>
              DL
            </span>
          </div>
          <span style={{ fontWeight: 800, fontSize: 14, color: "#001012", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            DEALYSE
          </span>
        </Link>

        {/* Desktop center nav */}
        <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="nav-center">
          {/* Solutions dropdown */}
          <div style={{ position: "relative" }}>
            <button
              style={{ ...labelStyle, color: open === "solutions" ? "#001012" : "#71717a" }}
              onClick={() => setOpen(open === "solutions" ? null : "solutions")}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#001012")}
              onMouseLeave={(e) => { if (open !== "solutions") (e.currentTarget as HTMLElement).style.color = "#71717a"; }}
            >
              {lang === "fr" ? "Solutions" : "Solutions"}
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transition: "transform 0.2s", transform: open === "solutions" ? "rotate(180deg)" : "none" }}>
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {open === "solutions" && (
              <div style={{
                position: "absolute",
                top: "calc(100% + 16px)",
                left: "50%",
                transform: "translateX(-50%)",
                background: "white",
                border: "1px solid #e4e4e7",
                minWidth: 220,
                boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
              }}>
                {segments.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}`}
                    onClick={() => setOpen(null)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "12px 20px",
                      fontSize: 13,
                      color: "#001012",
                      fontWeight: 600,
                      borderBottom: "1px solid #f4f4f5",
                      transition: "background 0.1s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#fafafa")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "white")}
                  >
                    <span style={{ fontSize: 14 }}>{s.emoji}</span>
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Produit dropdown */}
          <div style={{ position: "relative" }}>
            <button
              style={{ ...labelStyle, color: open === "produit" ? "#001012" : "#71717a" }}
              onClick={() => setOpen(open === "produit" ? null : "produit")}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#001012")}
              onMouseLeave={(e) => { if (open !== "produit") (e.currentTarget as HTMLElement).style.color = "#71717a"; }}
            >
              {lang === "fr" ? "Produit" : "Product"}
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transition: "transform 0.2s", transform: open === "produit" ? "rotate(180deg)" : "none" }}>
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {open === "produit" && (
              <div style={{
                position: "absolute",
                top: "calc(100% + 16px)",
                left: "50%",
                transform: "translateX(-50%)",
                background: "white",
                border: "1px solid #e4e4e7",
                minWidth: 220,
                boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
              }}>
                {products.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/product/${p.slug}`}
                    onClick={() => setOpen(null)}
                    style={{
                      display: "block",
                      padding: "12px 20px",
                      fontSize: 13,
                      color: "#001012",
                      fontWeight: 600,
                      borderBottom: "1px solid #f4f4f5",
                      transition: "background 0.1s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#fafafa")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "white")}
                  >
                    {p.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {[
            { href: "/use-cases", label: lang === "fr" ? "Use Cases" : "Use Cases" },
            { href: "/pricing", label: lang === "fr" ? "Tarifs" : "Pricing" },
            { href: "/about", label: lang === "fr" ? "À propos" : "About" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={linkStyle}
              onClick={() => setOpen(null)}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#001012")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#71717a")}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }} className="nav-right">
          {/* Lang */}
          <div style={{ display: "flex", border: "1px solid #e4e4e7" }}>
            {(["fr", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  padding: "4px 9px",
                  background: lang === l ? "#001012" : "transparent",
                  color: lang === l ? "white" : "#a1a1aa",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 10,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontFamily: "inherit",
                }}
              >
                {l}
              </button>
            ))}
          </div>

          <Link
            href="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "#00493a",
              color: "white",
              padding: "8px 18px",
              fontSize: 11,
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              transition: "background 0.15s",
            }}
            className="nav-cta"
            onClick={() => setOpen(null)}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#003d31")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#00493a")}
          >
            {lang === "fr" ? "Demander une démo" : "Request a demo"}
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", display: "none", padding: 4 }}
            className="nav-hamburger"
          >
            <div style={{ width: 20, height: 2, background: "#001012", marginBottom: 4 }} />
            <div style={{ width: 20, height: 2, background: "#001012", marginBottom: 4 }} />
            <div style={{ width: 20, height: 2, background: "#001012" }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "white", borderTop: "1px solid #e4e4e7", padding: "0 24px 24px", maxHeight: "80vh", overflowY: "auto" }}>
          <div style={{ paddingTop: 16, fontSize: 10, fontWeight: 800, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>Solutions</div>
          {segments.map((s) => (
            <Link key={s.slug} href={`/${s.slug}`} onClick={() => setMenuOpen(false)}
              style={{ display: "block", padding: "10px 0", fontSize: 14, color: "#001012", fontWeight: 600, borderBottom: "1px solid #f4f4f5" }}>
              {s.emoji} {s.name}
            </Link>
          ))}
          <div style={{ paddingTop: 16, fontSize: 10, fontWeight: 800, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8, marginTop: 8 }}>Produit</div>
          {products.map((p) => (
            <Link key={p.slug} href={`/product/${p.slug}`} onClick={() => setMenuOpen(false)}
              style={{ display: "block", padding: "10px 0", fontSize: 14, color: "#001012", fontWeight: 600, borderBottom: "1px solid #f4f4f5" }}>
              {p.name}
            </Link>
          ))}
          {["/use-cases", "/pricing", "/about", "/contact"].map((href) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)}
              style={{ display: "block", padding: "10px 0", fontSize: 14, color: "#001012", fontWeight: 600, borderBottom: "1px solid #f4f4f5" }}>
              {href.replace("/", "").replace("-", " ")}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setMenuOpen(false)}
            style={{ display: "block", marginTop: 16, background: "#00493a", color: "white", padding: "12px 20px", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", textAlign: "center" }}>
            Demander une démo
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .nav-center { display: none !important; }
          .nav-cta { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
