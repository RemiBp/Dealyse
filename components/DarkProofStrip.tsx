"use client";

/**
 * Bandeau sombre « social proof » — deux présentations :
 * - chips : pastilles bordées (références type Palantir / Foundry)
 * - inline : label + séparateurs · (landing)
 */
export default function DarkProofStrip({
  label,
  items,
  variant = "chips",
  paddingY = 40,
}: {
  label: string;
  items: string[];
  variant?: "chips" | "inline";
  paddingY?: number;
}) {
  return (
    <section
      className={`dark-proof-strip ${variant === "inline" ? "dark-proof-strip--inline" : ""}`}
      style={{
        background: "#001012",
        padding: `${paddingY}px 0`,
        borderBottom: "1px solid #18181b",
      }}
    >
      <div className="container">
        {variant === "chips" ? (
          <div className="dark-proof-strip__layout">
            <div className="dark-proof-strip__label-wrap">
              <span className="dark-proof-strip__label">{label}</span>
            </div>
            <ul className="dark-proof-strip__chips" role="list">
              {items.map((name) => (
                <li key={name} className="dark-proof-strip__chip">
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="dark-proof-strip__inline-row">
            <span className="dark-proof-strip__label dark-proof-strip__label--inline">{label}</span>
            <div className="dark-proof-strip__rule" aria-hidden />
            <div className="dark-proof-strip__names">
              {items.map((name, i) => (
                <span key={name} className="dark-proof-strip__name-wrap">
                  {i > 0 ? <span className="dark-proof-strip__sep" aria-hidden>·</span> : null}
                  <span className="dark-proof-strip__name">{name}</span>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
