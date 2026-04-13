"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "11px 14px",
  border: "1px solid #e4e4e7",
  fontSize: 14,
  color: "#001012",
  background: "white",
  outline: "none",
  fontFamily: "inherit",
  borderRadius: 0,
  transition: "border-color 0.15s",
  appearance: "none" as const,
};

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", company: "",
    segment: "", volume: "", message: "",
  });
  const [loading, setLoading] = useState(false);

  const update = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  };

  const focus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    ((e.target as HTMLElement).style.borderColor = "#00493a");
  const blur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    ((e.target as HTMLElement).style.borderColor = "#e4e4e7");

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 60 }}>

        {/* Hero */}
        <section style={{ padding: "80px 0 64px", background: "white", borderBottom: "1px solid #e4e4e7" }}>
          <div className="container" style={{ maxWidth: 760 }}>
            <span className="label" style={{ display: "block", marginBottom: 16 }}>Contact</span>
            <h1 style={{ fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 16 }}>
              Parlons de votre prochain deal.
            </h1>
            <p style={{ fontSize: 16, color: "#71717a", lineHeight: 1.65 }}>
              Notre équipe vous répond sous 24h. Aucun engagement — juste une conversation sur vos besoins.
            </p>
          </div>
        </section>

        {/* Main grid */}
        <section style={{ background: "#fafafa", padding: "64px 0", borderBottom: "1px solid #e4e4e7" }}>
          <div className="container contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>

            {/* Left — infos */}
            <div>
              <div style={{ background: "white", border: "1px solid #e4e4e7", padding: "40px" }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: "#001012", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 24, paddingBottom: 16, borderBottom: "1px solid #f4f4f5" }}>
                  Informations
                </div>
                {[
                  { label: "Email", value: "hello@dealyse.io" },
                  { label: "Localisation", value: "Paris, France" },
                  { label: "Réponse", value: "Sous 24 heures" },
                  { label: "POC gratuit", value: "Sur votre premier deal" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 20, padding: "14px 0", borderBottom: "1px solid #f4f4f5" }}>
                    <span style={{ fontSize: 11, fontWeight: 800, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.08em", minWidth: 90, paddingTop: 1 }}>{item.label}</span>
                    <span style={{ fontSize: 14, color: "#001012", fontWeight: 500 }}>{item.value}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 16, background: "#001012", border: "1px solid #18181b", padding: "36px 40px" }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: "var(--on-dark-strip-label)", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 20 }}>
                  Ce que vous obtenez
                </div>
                {[
                  "Demo personnalisée sur votre use case",
                  "POC gratuit sur votre prochain deal",
                  "Évaluation de l'adéquation DEALYSE à votre workflow",
                  "Présentation de l'architecture Palantir Foundry",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, padding: "8px 0", borderBottom: "1px solid #18181b" }}>
                    <span style={{ color: "#00c896", fontWeight: 800, fontSize: 11, paddingTop: 2, flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: 13, color: "var(--text-muted-on-dark)", lineHeight: 1.55 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div>
              {submitted ? (
                <div style={{ background: "white", border: "1px solid #e4e4e7", padding: "64px 40px", textAlign: "center" }}>
                  <div style={{ width: 48, height: 48, background: "#00493a", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", color: "white", fontSize: 20, fontWeight: 700 }}>✓</div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "#001012", marginBottom: 10 }}>Message envoyé.</h3>
                  <p style={{ fontSize: 14, color: "#71717a", lineHeight: 1.65, marginBottom: 24 }}>
                    Notre équipe vous contacte sous 24h pour planifier votre démo.
                  </p>
                  <div style={{ padding: "16px", background: "#fafafa", border: "1px solid #e4e4e7", fontSize: 13, color: "#52525b" }}>
                    Vous préférez réserver directement ?{" "}
                    <a href="https://calendly.com/remibarbier/30min" target="_blank" rel="noopener noreferrer" style={{ color: "#00493a", fontWeight: 700 }}>
                      Choisir un créneau →
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ background: "white", border: "1px solid #e4e4e7", padding: "40px" }}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: "#001012", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 24, paddingBottom: 16, borderBottom: "1px solid #f4f4f5" }}>
                    Demander une démo
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>

                    {/* Name row */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                      <input type="text" placeholder="Prénom *" required value={form.firstName}
                        onChange={update("firstName")} style={inputStyle} onFocus={focus} onBlur={blur} />
                      <input type="text" placeholder="Nom *" required value={form.lastName}
                        onChange={update("lastName")} style={inputStyle} onFocus={focus} onBlur={blur} />
                    </div>

                    <input type="email" placeholder="Email professionnel *" required value={form.email}
                      onChange={update("email")} style={inputStyle} onFocus={focus} onBlur={blur} />

                    <input type="text" placeholder="Fonds / Cabinet / Société *" required value={form.company}
                      onChange={update("company")} style={inputStyle} onFocus={focus} onBlur={blur} />

                    <select required value={form.segment} onChange={update("segment")}
                      style={{ ...inputStyle, color: form.segment ? "#001012" : "#a1a1aa", cursor: "pointer" }}
                      onFocus={focus} onBlur={blur}>
                      <option value="" disabled>Votre activité *</option>
                      {["Private Equity", "Investment Banking", "M&A Advisors", "Cabinet d'Avocats M&A", "Corporate / Family Office", "Autre"].map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>

                    <select required value={form.volume} onChange={update("volume")}
                      style={{ ...inputStyle, color: form.volume ? "#001012" : "#a1a1aa", cursor: "pointer" }}
                      onFocus={focus} onBlur={blur}>
                      <option value="" disabled>Volume de deals / an *</option>
                      {["1 à 3 deals", "3 à 10 deals", "10 à 20 deals", "20+ deals"].map((v) => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>

                    <textarea placeholder="Message (optionnel) — décrivez votre use case principal"
                      value={form.message} onChange={update("message")}
                      style={{ ...inputStyle, minHeight: 90, resize: "vertical" as const, lineHeight: 1.6 }}
                      onFocus={focus} onBlur={blur} />

                    <button type="submit" disabled={loading}
                      style={{ width: "100%", padding: "14px", background: loading ? "#52525b" : "#00493a", color: "white", border: "none", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", cursor: loading ? "not-allowed" : "pointer", fontFamily: "inherit", transition: "background 0.15s" }}>
                      {loading ? "Envoi en cours..." : "Demander une démo →"}
                    </button>

                    <p style={{ fontSize: 11, color: "#a1a1aa", textAlign: "center", lineHeight: 1.55 }}>
                      En soumettant, vous acceptez notre{" "}
                      <Link href="/confidentialite" style={{ color: "#71717a", textDecoration: "underline" }}>politique de confidentialité</Link>.
                      {" "}Aucun engagement, aucune carte bancaire.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
          <style>{`@media(max-width:900px){.contact-grid{grid-template-columns:1fr!important}}`}</style>
        </section>

        {/* Calendly alternative */}
        <section style={{ background: "white", padding: "64px 0", borderBottom: "1px solid #e4e4e7" }}>
          <div className="container" style={{ maxWidth: 720, textAlign: "center" }}>
            <div style={{ fontSize: 11, fontWeight: 800, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
              Vous préférez choisir vous-même ?
            </div>
            <h2 style={{ fontWeight: 500, letterSpacing: "-0.02em", fontSize: "clamp(1.4rem, 3vw, 2rem)", marginBottom: 12 }}>
              Réservez directement un créneau.
            </h2>
            <p style={{ fontSize: 14, color: "#71717a", marginBottom: 32, lineHeight: 1.65 }}>
              30 minutes · Démo + discussion de votre use case · Sans engagement
            </p>
            <a href="https://calendly.com/remibarbier/30min" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#001012", color: "white", padding: "13px 28px", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Choisir un créneau →
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
