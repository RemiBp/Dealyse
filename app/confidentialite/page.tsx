import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Politique de confidentialité — DEALYSE" };

export default function ConfidentialitePage() {
  const section = (title: string, children: React.ReactNode) => (
    <div style={{ paddingTop: 40, borderTop: "1px solid #e4e4e7", marginTop: 40 }}>
      <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#001012", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.04em" }}>{title}</h2>
      {children}
    </div>
  );

  const p = (text: string) => (
    <p style={{ fontSize: 14, color: "#52525b", lineHeight: 1.75, marginBottom: 10 }}>{text}</p>
  );

  const li = (items: string[]) => (
    <ul style={{ paddingLeft: 0, listStyle: "none" }}>
      {items.map((item, i) => (
        <li key={i} style={{ display: "flex", gap: 10, fontSize: 14, color: "#52525b", lineHeight: 1.75, marginBottom: 6 }}>
          <span style={{ color: "#00493a", fontWeight: 700, flexShrink: 0 }}>→</span>
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 60 }}>
        <section style={{ padding: "80px 0 120px", background: "white" }}>
          <div className="container" style={{ maxWidth: 720 }}>
            <span className="label" style={{ display: "block", marginBottom: 16 }}>Protection des données</span>
            <h1 style={{ fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 8 }}>Politique de confidentialité</h1>
            <p style={{ fontSize: 13, color: "#a1a1aa", fontFamily: "monospace", marginBottom: 48 }}>Dernière mise à jour : 13 avril 2026 — conforme RGPD</p>

            {section("1. Responsable du traitement", <>
              {p("DEALYSE / 10x Partners — 7 rue Joanes, 75014 Paris, France")}
              {p("Contact DPO : hello@dealyse.io")}
            </>)}

            {section("2. Données collectées", <>
              {p("Via le formulaire de contact, nous collectons :")}
              {li(["Prénom et nom", "Adresse email professionnelle", "Nom de la société / du fonds", "Segment d'activité (PE, IB, Legal…)", "Volume de deals annuel", "Message libre optionnel"])}
              {p("Ces données sont collectées avec votre consentement explicite (envoi volontaire du formulaire).")}
            </>)}

            {section("3. Finalités du traitement", <>
              {p("Vos données sont utilisées exclusivement pour :")}
              {li(["Vous répondre dans le cadre de votre demande de démo", "Vous contacter pour une présentation commerciale de DEALYSE", "Améliorer notre produit et nos services"])}
              {p("Vos données ne sont pas utilisées à des fins de prospection automatisée non sollicitée.")}
            </>)}

            {section("4. Base légale", <>
              {p("Le traitement repose sur votre consentement (Art. 6.1.a RGPD) et sur notre intérêt légitime à répondre à vos sollicitations commerciales (Art. 6.1.f RGPD).")}
            </>)}

            {section("5. Durée de conservation", <>
              {p("Vos données sont conservées 3 ans à compter de votre dernier contact avec DEALYSE, ou jusqu'à votre demande de suppression.")}
            </>)}

            {section("6. Destinataires des données", <>
              {p("Vos données peuvent être partagées avec :")}
              {li(["Les membres de l'équipe DEALYSE / 10x Partners impliqués dans le traitement de votre demande", "Vercel Inc. (hébergeur du site — traitement en Europe)", "Aucun tiers commercial, aucune revente de données"])}
            </>)}

            {section("7. Transferts hors UE", <>
              {p("DEALYSE s'engage à héberger vos données dans des datacenters situés dans l'Union Européenne. Vercel dispose de clauses contractuelles types (SCCs) conformes au RGPD.")}
            </>)}

            {section("8. Vos droits", <>
              {p("Conformément au RGPD, vous disposez des droits suivants :")}
              {li(["Droit d'accès à vos données personnelles", "Droit de rectification", "Droit à l'effacement (droit à l'oubli)", "Droit à la limitation du traitement", "Droit à la portabilité", "Droit d'opposition au traitement", "Droit de retirer votre consentement à tout moment"])}
              {p("Pour exercer ces droits, contactez-nous : hello@dealyse.io — Réponse garantie sous 30 jours.")}
            </>)}

            {section("9. Cookies", <>
              {p("Ce site utilise uniquement des cookies techniques nécessaires au bon fonctionnement (session, préférences langue). Aucun cookie publicitaire ou de tracking tiers n'est déposé sans votre consentement.")}
              {p("Nous utilisons Vercel Analytics en mode privacy-first (anonymisation des IPs, sans cookie persistant).")}
            </>)}

            {section("10. Sécurité", <>
              {p("Vos données sont protégées par :")}
              {li(["Chiffrement TLS 1.3 en transit", "Hébergement sur infrastructure Vercel (SOC 2 Type II certifié)", "Accès restreint aux seuls membres autorisés de l'équipe", "Audit trail de tous les accès"])}
            </>)}

            {section("11. Réclamation", <>
              {p("Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL : cnil.fr — 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07.")}
            </>)}

            {section("12. Contact", <>
              {p("Pour toute question relative à cette politique : hello@dealyse.io")}
            </>)}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
