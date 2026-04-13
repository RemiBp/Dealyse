import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Palantir Foundry expliqué aux équipes M&A — DEALYSE Blog",
  description: "Ce que Foundry fait vraiment, pourquoi c'est différent des autres outils IA, et pourquoi c'est la meilleure infrastructure pour le M&A.",
};

export default function Article2() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 60 }}>
        <section style={{ padding: "80px 0 32px", background: "white", borderBottom: "1px solid #e4e4e7" }}>
          <div className="container" style={{ maxWidth: 720 }}>
            <div style={{ display: "flex", gap: 12, marginBottom: 24 }}>
              <span style={{ padding: "3px 10px", border: "1px solid #e4e4e7", fontSize: 10, fontWeight: 700, color: "#71717a", textTransform: "uppercase", letterSpacing: "0.06em" }}>Palantir</span>
              <span style={{ fontSize: 12, color: "#a1a1aa", fontFamily: "monospace", paddingTop: 2 }}>Mar 2026 · 12 min</span>
            </div>
            <h1 style={{ fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 20, lineHeight: 1.1 }}>
              Palantir Foundry expliqué aux équipes M&A
            </h1>
            <p style={{ fontSize: 17, color: "#71717a", lineHeight: 1.65 }}>
              Ce que Foundry fait vraiment, pourquoi c'est fondamentalement différent des chatbots IA, et pourquoi c'est la meilleure infrastructure pour le M&A enterprise.
            </p>
          </div>
        </section>

        <section style={{ padding: "64px 0 120px", background: "white" }}>
          <div className="container" style={{ maxWidth: 720 }}>
            {[
              { h: null, body: "Palantir Foundry est probablement le logiciel enterprise dont vous avez le moins entendu parler — et qui a pourtant le plus d'impact sur les industries les plus critiques du monde. CIA, armée américaine, NHS britannique, Airbus, BP, Airbus. Ce n'est pas un hasard." },
              { h: "Ce que Foundry n'est pas", body: "Foundry n'est pas un outil BI. Ce n'est pas un data warehouse. Ce n'est pas un chatbot sur vos données. Ce n'est pas non plus un ERP.\n\nFoundry est une plateforme d'opérationnalisation de la donnée. Sa fonction centrale : prendre des données disparates, les structurer dans une ontologie cohérente, et permettre à des agents intelligents d'agir dessus en temps réel, de manière traçable et auditable." },
              { h: "L'ontologie : le concept clé", body: "L'ontologie est au cœur de Foundry. Concrètement, c'est un graphe de données structuré qui modélise votre réalité métier.\n\nPour un fonds PE, ça ressemble à ça : une Cible a des Actionnaires, des Contrats, des États Financiers, des Employés, et des Risques. Ces entités sont liées entre elles de manière explicite. Quand vous uploadez un nouveau document dans la data room, il s'intègre automatiquement dans cette structure.\n\nRésultat : vos données s'accumulent deal après deal. Le deuxième deal est plus rapide que le premier. Le dixième est presque automatisé." },
              { h: "AIP Logic : les agents orchestrés", body: "Palantir AIP Logic est le module d'orchestration d'agents de Foundry. C'est ce qui permet à DEALYSE de faire tourner 4 agents spécialisés en parallèle sur votre data room.\n\nChaque agent a un rôle défini : l'Agent Financier analyse les états financiers et détecte les anomalies comptables. L'Agent Juridique lit les contrats et identifie les clauses à risque. L'Agent Opérationnel évalue les process, la RH, la IT. L'Agent Synthèse agrège tout et produit le rapport final.\n\nCes agents ne sont pas des GPT-4 habillés. Ils sont orchestrés dans un pipeline déterministe, avec des garde-fous, des critères de validation, et une traçabilité complète de chaque décision." },
              { h: "Pourquoi la souveraineté des données change tout", body: "Quand vous utilisez ChatGPT ou Claude pour analyser des documents confidentiels, vos données transitent par les serveurs d'OpenAI ou d'Anthropic. Ces sociétés ont des politiques de non-utilisation pour l'entraînement, mais la donnée sort de votre périmètre.\n\nAvec Foundry, vos données ne quittent jamais votre environnement. Le traitement se fait dans un tenant dédié, hébergé en Europe, avec un chiffrement AES-256 end-to-end. C'est exactement le même niveau de contrôle que ce qu'exigent la CIA et le NHS pour leurs données les plus sensibles." },
              { h: "Ce que ça signifie pour un fonds PE ou une banque d'affaires", body: "Pour un fonds PE gérant des positions dans des entreprises cotées ou en cours d'acquisition, la confidentialité des données n'est pas une option. C'est une obligation légale (insider trading, confidentialité mandats) et une condition sine qua non pour maintenir la confiance des cibles et des LPs.\n\nPour une banque d'affaires gérant des mandats sell-side, une fuite de données sur les intentions d'un acquéreur peut compromettre l'ensemble du processus et exposer le cabinet à des poursuites.\n\nFoundry résout ce problème au niveau de l'infrastructure — pas au niveau des politiques ou des promesses contractuelles." },
              { h: "Faut-il être client Palantir pour utiliser DEALYSE ?", body: "Non. Pour les plans Free et Pro, DEALYSE s'occupe de toute l'infrastructure Foundry. Vous n'avez aucun contact direct avec Palantir.\n\nPour les grandes organisations qui sont déjà clientes Palantir Foundry — certains fonds de large cap, certaines banques — DEALYSE peut être déployé directement dans votre tenant existant. Zéro migration de données, intégration transparente avec vos workflows Foundry existants." },
            ].map((section, i) => (
              <div key={i} style={{ marginBottom: 40 }}>
                {section.h && <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#001012", marginBottom: 16, letterSpacing: "-0.01em" }}>{section.h}</h2>}
                {section.body.split("\n\n").map((para, j) => (
                  <p key={j} style={{ fontSize: 15, color: "#52525b", lineHeight: 1.8, marginBottom: 16 }}>{para}</p>
                ))}
              </div>
            ))}

            <div style={{ marginTop: 64, paddingTop: 40, borderTop: "1px solid #e4e4e7" }}>
              <Link href="/foundry" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#001012", color: "white", padding: "12px 24px", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Architecture Foundry en détail →
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
