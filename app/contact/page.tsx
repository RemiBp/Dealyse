"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", segment: "", volume: "", message: "" });

  const inputStyle: React.CSSProperties = { width: "100%", padding: "11px 14px", border: "1px solid #e4e4e7", fontSize: 14, color: "#001012", background: "white", outline: "none", fontFamily: "inherit", borderRadius: 0, transition: "border-color 0.15s" };

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 60 }}>
        <section style={{ padding: "100px 0", background: "white", borderBottom: "1px solid #e4e4e7" }}>
            <div className="container contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
            <div>
              <span className="label" style={{ display: "block", marginBottom: 16 }}>Contact</span>
              <h1 style={{ fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 24 }}>Parlons de votre prochain deal.</h1>
              <p style={{ fontSize: 15, color: "#71717a", lineHeight: 1.65, marginBottom: 48 }}>Notre équipe vous répond sous 24h pour planifier une démo ou discuter de votre POC.</p>
              <div style={{ borderTop: "1px solid #e4e4e7" }}>
                {[
                  { label: "Email", value: "hello@dealyse.io" },
                  { label: "Localisation", value: "Paris, France" },
                  { label: "Réponse", value: "Sous 24 heures" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 24, padding: "16px 0", borderBottom: "1px solid #e4e4e7" }}>
                    <span style={{ fontSize: 11, fontWeight: 800, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.08em", minWidth: 80 }}>{item.label}</span>
                    <span style={{ fontSize: 14, color: "#001012", fontWeight: 500 }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              {submitted ? (
                <div style={{ background: "#fafafa", border: "1px solid #e4e4e7", padding: "48px 40px", textAlign: "center" }}>
                  <div style={{ width: 40, height: 40, background: "#00493a", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", color: "white", fontSize: 18, fontWeight: 700 }}>✓</div>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#001012", marginBottom: 8 }}>Message envoyé.</h3>
                  <p style={{ fontSize: 14, color: "#71717a" }}>Notre équipe vous répond sous 24h.</p>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ background: "#fafafa", border: "1px solid #e4e4e7", padding: "40px" }}>
                  <div style={{ fontSize: 11, fontWeight: 800, color: "#001012", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 24, paddingBottom: 20, borderBottom: "1px solid #e4e4e7" }}>
                    Demander une démo
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                    {[
                      { key: "name", placeholder: "Prénom Nom", type: "text" },
                      { key: "email", placeholder: "Email professionnel", type: "email" },
                      { key: "company", placeholder: "Société / Fonds", type: "text" },
                    ].map((f) => (
                      <input key={f.key} type={f.type} placeholder={f.placeholder} required value={form[f.key as keyof typeof form]} onChange={(e) => setForm({ ...form, [f.key]: e.target.value })} style={inputStyle}
                        onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "#00493a")}
                        onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "#e4e4e7")} />
                    ))}
                    <select required value={form.segment} onChange={(e) => setForm({ ...form, segment: e.target.value })} style={{ ...inputStyle, appearance: "none", color: form.segment ? "#001012" : "#a1a1aa", cursor: "pointer" }}>
                      <option value="" disabled>Votre segment</option>
                      {["Private Equity", "Investment Banking", "M&A Advisors", "Cabinet d'Avocats", "Corporate / Family Office"].map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                    <select required value={form.volume} onChange={(e) => setForm({ ...form, volume: e.target.value })} style={{ ...inputStyle, appearance: "none", color: form.volume ? "#001012" : "#a1a1aa", cursor: "pointer" }}>
                      <option value="" disabled>Volume de deals / an</option>
                      {["1–5 deals", "5–10 deals", "10–20 deals", "20+ deals"].map((v) => <option key={v} value={v}>{v}</option>)}
                    </select>
                    <textarea placeholder="Message (optionnel)" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} style={{ ...inputStyle, minHeight: 80, resize: "vertical" as const }}
                      onFocus={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = "#00493a")}
                      onBlur={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = "#e4e4e7")} />
                    <button type="submit" style={{ width: "100%", padding: "13px", background: "#00493a", color: "white", border: "none", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", cursor: "pointer", fontFamily: "inherit", transition: "background 0.15s" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#003d31")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#00493a")}>
                      Envoyer →
                    </button>
                    <p style={{ fontSize: 11, color: "#a1a1aa", textAlign: "center" }}>Vos données restent confidentielles. Aucun engagement.</p>
                  </div>
                </form>
              )}
            </div>
          </div>
          <style>{`@media(max-width:900px){.contact-grid{grid-template-columns:1fr!important}}`}</style>
        </section>
      </main>
      <Footer />
    </>
  );
}
