"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import AnimatedSection from "./AnimatedSection";

export default function CTAForm() {
  const { t } = useLang();
  const f = t.cta;
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", fund: "", volume: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    border: "1px solid #e4e4e7",
    fontSize: 14,
    color: "#001012",
    background: "white",
    outline: "none",
    fontFamily: "inherit",
    transition: "border-color 0.15s",
    borderRadius: 0,
  };

  return (
    <section
      id="contact"
      style={{
        background: "#001012",
        padding: "120px 0",
        borderTop: "1px solid #e4e4e7",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dot pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='rgba(255, 255, 255, 0.04)'/%3E%3C/svg%3E")`,
          backgroundSize: "20px 20px",
          pointerEvents: "none",
        }}
      />

      <div
        className="container"
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 96,
          alignItems: "start",
        }}
      >
        {/* Left — Text */}
        <AnimatedSection>
          <span
            style={{
              display: "block",
              fontSize: "0.65rem",
              fontWeight: 800,
              color: "#00493a",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              marginBottom: 24,
            }}
          >
            POC Gratuit
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 500,
              color: "white",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            {f.title}
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "#52525b",
              lineHeight: 1.65,
              marginBottom: 48,
            }}
          >
            {f.subtitle}
          </p>

          {/* Stats */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
              borderTop: "1px solid #27272a",
            }}
          >
            {[
              { num: "4h", label: "Résultats garantis" },
              { num: "0€", label: "Sur votre premier deal" },
              { num: "24h", label: "Temps de réponse" },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 20,
                  padding: "20px 0",
                  borderBottom: "1px solid #27272a",
                }}
              >
                <span
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 800,
                    fontFamily: "monospace",
                    color: "white",
                    minWidth: 52,
                  }}
                >
                  {item.num}
                </span>
                <span style={{ fontSize: 13, color: "#52525b", fontWeight: 500 }}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Right — Form */}
        <AnimatedSection delay={120}>
          {submitted ? (
            <div
              style={{
                background: "#0a0a0b",
                border: "1px solid #27272a",
                padding: "48px 40px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  background: "#00493a",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  color: "white",
                  fontSize: 20,
                  fontWeight: 700,
                }}
              >
                ✓
              </div>
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "white",
                  marginBottom: 8,
                }}
              >
                Demande envoyée.
              </h3>
              <p style={{ fontSize: 14, color: "#52525b" }}>
                Notre équipe vous recontacte sous 24h.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                background: "white",
                border: "1px solid #e4e4e7",
                padding: "48px 40px",
                display: "flex",
                flexDirection: "column",
                gap: 0,
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  color: "#001012",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 32,
                  paddingBottom: 24,
                  borderBottom: "1px solid #f4f4f5",
                }}
              >
                Démarrer un POC
              </div>

              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                {[
                  { key: "name", placeholder: f.form.name, type: "text" },
                  { key: "email", placeholder: f.form.email, type: "email" },
                  { key: "fund", placeholder: f.form.fund, type: "text" },
                ].map((field) => (
                  <input
                    key={field.key}
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) =>
                      setForm({ ...form, [field.key]: e.target.value })
                    }
                    style={inputStyle}
                    onFocus={(e) =>
                      ((e.target as HTMLInputElement).style.borderColor =
                        "#00493a")
                    }
                    onBlur={(e) =>
                      ((e.target as HTMLInputElement).style.borderColor =
                        "#e4e4e7")
                    }
                  />
                ))}

                <select
                  required
                  value={form.volume}
                  onChange={(e) =>
                    setForm({ ...form, volume: e.target.value })
                  }
                  style={{
                    ...inputStyle,
                    color: form.volume ? "#001012" : "#a1a1aa",
                    appearance: "none",
                    cursor: "pointer",
                  }}
                >
                  <option value="" disabled>
                    {f.form.volume}
                  </option>
                  {f.form.volumeOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="submit"
                style={{
                  marginTop: 24,
                  width: "100%",
                  padding: "14px",
                  background: "#00493a",
                  color: "white",
                  border: "none",
                  fontSize: 12,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "#003d31")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background = "#00493a")
                }
              >
                {f.form.submit}
              </button>

              <p
                style={{
                  marginTop: 16,
                  fontSize: 11,
                  color: "#a1a1aa",
                  textAlign: "center",
                  lineHeight: 1.5,
                }}
              >
                {f.form.disclaimer}
              </p>
            </form>
          )}
        </AnimatedSection>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact .container { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
