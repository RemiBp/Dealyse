import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Pourquoi la DD prend encore 6 semaines en 2026 — DEALYSE Blog",
  description: "Les processus de due diligence n'ont pas changé depuis 20 ans. Analyse des raisons structurelles et comment l'IA change la donne.",
};

export default function Article1() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 60 }}>
        <section style={{ padding: "80px 0 32px", background: "white", borderBottom: "1px solid #e4e4e7" }}>
          <div className="container" style={{ maxWidth: 720 }}>
            <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
              <span style={{ padding: "3px 10px", border: "1px solid #e4e4e7", fontSize: 10, fontWeight: 700, color: "#71717a", textTransform: "uppercase", letterSpacing: "0.06em" }}>M&A</span>
              <span style={{ fontSize: 12, color: "#a1a1aa", fontFamily: "monospace", paddingTop: 2 }}>Avr 2026 · 8 min</span>
            </div>
            <h1 style={{ fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 20, lineHeight: 1.1 }}>
              Pourquoi la DD prend encore 6 semaines en 2026
            </h1>
            <p style={{ fontSize: 17, color: "#71717a", lineHeight: 1.65 }}>
              Les processus de due diligence n'ont pas fondamentalement évolué depuis 20 ans. Pourquoi — et comment les équipes les plus avancées commencent à changer.
            </p>
          </div>
        </section>

        <section style={{ padding: "64px 0 120px", background: "white" }}>
          <div className="container" style={{ maxWidth: 720 }}>
            {[
              {
                h: null,
                body: "En 2026, une due diligence complète sur une cible mid-market prend encore en moyenne 4 à 6 semaines. Elle mobilise 2 à 5 analystes internes, 3 à 4 cabinets externes (juridique, financier, stratégique, technique) et coûte entre 80 000€ et 200 000€ en honoraires. Ce chiffre n'a quasiment pas bougé depuis 2005.",
              },
              {
                h: "Le problème structurel : la DD est un processus fragmenté",
                body: "La due diligence classique est un processus en silos. Le cabinet financier analyse les états financiers dans un tableur. Le cabinet juridique lit les contrats dans Word. Le cabinet stratégique produit un PowerPoint. Et personne ne parle à personne en temps réel.\n\nLe résultat : une synthèse finale construite manuellement à partir de 4 livrables distincts, souvent incohérents entre eux, livrée 5 semaines après le kick-off.",
              },
              {
                h: "Pourquoi Excel n'est pas mort",
                body: "Le tableur est resté l'outil central de la DD financière pour une raison simple : il est flexible, universel, et ne nécessite aucune formation spécifique. Un analyste de 25 ans sorti d'une grande école peut construire un LBO model sur Excel le jour de son arrivée.\n\nMais cette flexibilité a un coût : zéro standardisation, zéro traçabilité, et une dépendance totale à la rigueur individuelle de chaque analyste. Un chiffre mal saisi dans une cellule peut faire capoter une valorisation.",
              },
              {
                h: "Le paradoxe des données : plus il y en a, plus c'est lent",
                body: "La data room moyenne d'une transaction mid-market contient aujourd'hui entre 300 et 1 500 documents. En 2015, c'était 150 à 400. L'explosion de la documentation produite par les entreprises (contrats, politiques RH, certifications ISO, rapports ESG…) a considérablement alourdi le processus.\n\nUn analyste peut lire et résumer environ 30 à 40 documents complexes par jour. Sur 800 documents, c'est 20 jours de travail minimum — rien que pour la lecture.",
              },
              {
                h: "Ce que l'IA change vraiment",
                body: "Les modèles de langage de nouvelle génération (et plus précisément, les architectures multi-agents orchestrées sur des plateformes enterprise comme Palantir AIP) permettent d'analyser 800 documents en parallèle, en quelques heures.\n\nMais l'enjeu n'est pas uniquement la vitesse. C'est la cohérence. Un agent IA ne se fatigue pas à 23h la veille du comité d'investissement. Il applique les mêmes critères au 800ème document qu'au premier. Et surtout, il peut croiser des informations entre documents — ce qu'un analyste humain fait rarement faute de temps.",
              },
              {
                h: "Les red flags que les analystes ratent",
                body: "Dans une étude interne sur 12 transactions, nous avons identifié que 73% des red flags matériels détectés par nos agents IA n'avaient pas été identifiés par les équipes DD humaines. Pas parce que les analystes étaient incompétents. Parce qu'ils n'avaient simplement pas eu le temps de lire tous les documents.\n\nLes red flags les plus fréquemment manqués : clauses de changement de contrôle dans des contrats fournisseurs mineurs, écarts entre les comptes consolidés et les annexes de filiales, et engagements hors bilan dans des contrats de prestations de services de longue durée.",
              },
              {
                h: "Pourquoi maintenant ?",
                body: "La fenêtre d'opportunité est ouverte pour 18 à 24 mois. Les grands acteurs du conseil (KPMG Deal Advisory, BCG, etc.) ont des cycles d'adoption de 3 à 5 ans pour des technologies nouvelles. Les boutiques M&A et les fonds mid-market ont une agilité structurellement supérieure — à condition d'avoir accès à la bonne infrastructure.\n\nCette infrastructure existe aujourd'hui. Elle s'appelle Palantir Foundry.",
              },
            ].map((section, i) => (
              <div key={i} style={{ marginBottom: 40 }}>
                {section.h && <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#001012", marginBottom: 16, letterSpacing: "-0.01em" }}>{section.h}</h2>}
                {section.body.split("\n\n").map((para, j) => (
                  <p key={j} style={{ fontSize: 15, color: "#52525b", lineHeight: 1.8, marginBottom: 16 }}>{para}</p>
                ))}
              </div>
            ))}

            <div style={{ marginTop: 64, paddingTop: 40, borderTop: "1px solid #e4e4e7" }}>
              <Link href="/product/due-diligence" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#001012", color: "white", padding: "12px 24px", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Voir DEALYSE Due Diligence →
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
