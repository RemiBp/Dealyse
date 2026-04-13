import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "5 red flags que les analystes ratent sous pression — DEALYSE Blog",
  description: "Concentration client, dette hors bilan, clauses d'earn-out. Ces risques sont systématiquement sous-évalués quand les équipes manquent de temps.",
};

export default function Article3() {
  const flags = [
    {
      num: "01",
      title: "Les clauses de changement de contrôle dans les contrats fournisseurs",
      body: "C'est le red flag le plus fréquemment manqué. Dans les data rooms de plus de 300 documents, les contrats fournisseurs sont souvent relégués en bas de la liste de priorités. Or, une clause de changement de contrôle dans le contrat du principal sous-traitant peut remettre en cause l'intégralité de la thèse d'investissement.\n\nCas réel : acquisition d'une PME de logistique. La due diligence avait été correctement menée sur les contrats clients. Mais un contrat de prestation informatique — représentant 40% des coûts opérationnels — contenait une clause permettant au prestataire de résilier avec 30 jours de préavis en cas de changement de contrôle. Découvert post-signing.",
    },
    {
      num: "02",
      title: "Les engagements hors bilan dans les filiales",
      body: "Les engagements hors bilan (leasing opérationnel, garanties accordées à des tiers, engagements de retraite non provisionnés) sont systématiquement sous-estimés quand la cible a des filiales dans plusieurs juridictions.\n\nLe problème structurel : les annexes des comptes de filiales sont souvent rédigées dans la langue locale, par des commissaires aux comptes locaux, avec des normes comptables locales. Un analyste francophone lira les comptes de la holding française mais passera 20 minutes sur les comptes de la filiale polonaise.",
    },
    {
      num: "03",
      title: "La concentration client réelle vs. contractuelle",
      body: "Le management présentera toujours la base clients sous son meilleur jour : \"Nous avons 150 clients.\" Mais combien représentent 80% du chiffre d'affaires réel ? Et parmi ces clients-clés, quels sont les termes exacts de leurs contrats ?\n\nLes analystes regardent le nombre de clients et la répartition théorique. Ils regardent rarement la combinaison de trois facteurs : durée résiduelle des contrats, clauses de renouvellement automatique ou non, et historique de churn par client. La combinaison de ces trois variables donne une image radicalement différente de la vraie concentration.",
    },
    {
      num: "04",
      title: "La qualité de l'EBITDA : les add-backs non récurrents récurrents",
      body: "Chaque management présente ses add-backs avec une conviction absolue. \"Ce coût de restructuration est exceptionnel.\" \"Ces honoraires de conseil ne se reproduiront pas.\" \"Ce litige est clos.\"\n\nMais quand on analyse l'historique des add-backs sur 5 ans, on découvre souvent que les éléments \"exceptionnels\" reviennent tous les 2 à 3 ans avec des noms différents. Un analyste qui lit 3 ans de comptes consolidés voit l'EBITDA ajusté. Un agent IA qui croise 5 ans de comptes avec les détails des notes annexes voit les patterns.",
    },
    {
      num: "05",
      title: "Les engagements de formation et de pension des managers-clés",
      body: "Dans les deals de succession (cession d'un fondateur), les engagements pris oralement ou dans des protocoles d'accord préliminaires sur la rétention des managers-clés sont rarement formalisés correctement dans le SPA.\n\nLe risque : le DAF qui connaît les systèmes comptables depuis 15 ans part 6 mois après le closing parce que son earn-out est mal structuré. Ou le directeur commercial part parce que sa clause de non-concurrence est inapplicable dans sa juridiction de résidence.",
    },
  ];

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 60 }}>
        <section style={{ padding: "80px 0 32px", background: "white", borderBottom: "1px solid #e4e4e7" }}>
          <div className="container" style={{ maxWidth: 720 }}>
            <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
              <span style={{ padding: "3px 10px", border: "1px solid #e4e4e7", fontSize: 10, fontWeight: 700, color: "#71717a", textTransform: "uppercase", letterSpacing: "0.06em" }}>M&A</span>
              <span style={{ fontSize: 12, color: "#a1a1aa", fontFamily: "monospace", paddingTop: 2 }}>Fév 2026 · 5 min</span>
            </div>
            <h1 style={{ fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 20, lineHeight: 1.1 }}>
              5 red flags que les analystes ratent sous pression
            </h1>
            <p style={{ fontSize: 17, color: "#71717a", lineHeight: 1.65 }}>
              Concentration client, dette hors bilan, clauses d'earn-out ambiguës. Ces risques sont systématiquement sous-évalués quand les équipes sont en sous-effectif. Et sous pression, elles le sont toujours.
            </p>
          </div>
        </section>

        <section style={{ padding: "64px 0 120px", background: "white" }}>
          <div className="container" style={{ maxWidth: 720 }}>
            <p style={{ fontSize: 15, color: "#52525b", lineHeight: 1.8, marginBottom: 48 }}>
              Dans notre analyse de 12 transactions mid-market récentes, 73% des red flags matériels identifiés par nos agents IA n'avaient pas été remontés par les équipes DD humaines. Voici les 5 catégories les plus fréquentes.
            </p>

            {flags.map((flag, i) => (
              <div key={i} style={{ marginBottom: 48, paddingBottom: 48, borderBottom: i < flags.length - 1 ? "1px solid #e4e4e7" : "none" }}>
                <div style={{ display: "flex", gap: 16, alignItems: "baseline", marginBottom: 12 }}>
                  <span style={{ fontFamily: "monospace", fontSize: 11, fontWeight: 800, color: "#00493a", letterSpacing: "0.1em", flexShrink: 0 }}>{flag.num}</span>
                  <h2 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#001012", letterSpacing: "-0.01em", lineHeight: 1.3 }}>{flag.title}</h2>
                </div>
                {flag.body.split("\n\n").map((para, j) => (
                  <p key={j} style={{ fontSize: 15, color: "#52525b", lineHeight: 1.8, marginBottom: 12 }}>{para}</p>
                ))}
              </div>
            ))}

            <div style={{ background: "#fafafa", border: "1px solid #e4e4e7", borderLeft: "3px solid #00493a", padding: "28px 32px", marginBottom: 48 }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: "#00493a", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>La conclusion</div>
              <p style={{ fontSize: 15, color: "#001012", lineHeight: 1.75 }}>
                Ces red flags ne sont pas rares. Ils sont systématiques. Et ils ne sont pas ratés par manque de compétence, mais par manque de temps. Un agent IA qui lit 800 documents en 4 heures avec les mêmes critères appliqués à chaque ligne n'a pas ce problème.
              </p>
            </div>

            <div style={{ paddingTop: 40, borderTop: "1px solid #e4e4e7" }}>
              <Link href="/product/due-diligence" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#001012", color: "white", padding: "12px 24px", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Comment DEALYSE détecte ces red flags →
              </Link>
              <Link href="/blog" style={{ display: "inline-flex", alignItems: "center", gap: 8, marginLeft: 12, fontSize: 12, fontWeight: 700, color: "#71717a", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                ← Retour au blog
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
