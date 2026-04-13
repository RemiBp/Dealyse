import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Mentions légales — DEALYSE" };

export default function MentionsLegalesPage() {
  const section = (title: string, children: React.ReactNode) => (
    <div style={{ paddingTop: 40, borderTop: "1px solid #e4e4e7", marginTop: 40 }}>
      <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#001012", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.04em" }}>{title}</h2>
      {children}
    </div>
  );

  const p = (text: string) => (
    <p style={{ fontSize: 14, color: "#52525b", lineHeight: 1.75, marginBottom: 10 }}>{text}</p>
  );

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 60 }}>
        <section style={{ padding: "80px 0 120px", background: "white" }}>
          <div className="container" style={{ maxWidth: 720 }}>
            <span className="label" style={{ display: "block", marginBottom: 16 }}>Informations légales</span>
            <h1 style={{ fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 8 }}>Mentions légales</h1>
            <p style={{ fontSize: 13, color: "#a1a1aa", fontFamily: "monospace", marginBottom: 48 }}>Dernière mise à jour : 13 avril 2026</p>

            {section("Éditeur du site", <>
              {p("Le site dealyse.pro est édité par DEALYSE, opéré dans le cadre de 10x Partners.")}
              {p("Adresse : 7 rue Joanes, 75014 Paris, France")}
              {p("Email : hello@dealyse.io")}
              {p("Directeur de publication : Rémi Barbier")}
            </>)}

            {section("Hébergement", <>
              {p("Le site est hébergé par Vercel Inc., 340 Pine Street Suite 701, San Francisco, California 94104, États-Unis.")}
              {p("Les données sont traitées dans des datacenters situés en Europe (région EU West).")}
              {p("Site Vercel : https://vercel.com")}
            </>)}

            {section("Infrastructure technique", <>
              {p("DEALYSE est construit sur Palantir Foundry, opéré par Palantir Technologies Inc. Les données clients sont hébergées dans des environnements souverains européens.")}
            </>)}

            {section("Propriété intellectuelle", <>
              {p("L'ensemble du contenu de ce site (textes, visuels, architecture, marque DEALYSE) est la propriété exclusive de DEALYSE / 10x Partners. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.")}
            </>)}

            {section("Limitation de responsabilité", <>
              {p("DEALYSE s'efforce de maintenir les informations de ce site à jour et exactes. Toutefois, DEALYSE ne saurait être tenu responsable des erreurs, omissions ou résultats obtenus par un mauvais usage de ces informations.")}
              {p("Les liens vers des sites tiers sont fournis à titre informatif uniquement. DEALYSE n'est pas responsable du contenu de ces sites.")}
            </>)}

            {section("Droit applicable", <>
              {p("Le présent site est soumis au droit français. Tout litige relatif à son utilisation relève de la compétence exclusive des tribunaux de Paris.")}
            </>)}

            {section("Contact", <>
              {p("Pour toute question relative aux présentes mentions légales, contactez-nous à : hello@dealyse.io")}
            </>)}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
