export type Product = {
  slug: string;
  name: string;
  headline: string;
  sub: string;
  features: { title: string; desc: string }[];
  steps?: { num: string; title: string; desc: string }[];
  agents?: { name: string; desc: string }[];
  image: string;
};

export const products: Product[] = [
  {
    slug: "due-diligence",
    name: "Due Diligence IA",
    headline: "De 6 semaines à 4 heures.",
    sub: "La due diligence la plus complète du marché — entièrement automatisée sur Palantir Foundry.",
    steps: [
      {
        num: "01",
        title: "Upload votre data room",
        desc: "Drag & drop, ZIP, ou connexion VDR directe. PDF, Excel, Word, PowerPoint — tous formats acceptés.",
      },
      {
        num: "02",
        title: "4 agents analysent tout",
        desc: "Agent Financier, Juridique, Opérationnel et Synthèse travaillent en parallèle en temps réel.",
      },
      {
        num: "03",
        title: "Rapport complet en 4 heures",
        desc: "PDF exportable, scoring 0–100, red flags priorisés, benchmarks sectoriels, chat contextuel.",
      },
    ],
    agents: [
      {
        name: "Agent Financier",
        desc: "KPIs, benchmarks sectoriels, anomalies comptables, dette hors bilan, qualité de l'EBITDA.",
      },
      {
        name: "Agent Juridique",
        desc: "Clauses à risque, garanties & représentations, engagements hors bilan, litiges en cours.",
      },
      {
        name: "Agent Opérationnel",
        desc: "Process, RH, IT, supply chain, dépendances fournisseurs, concentration clients.",
      },
      {
        name: "Agent Synthèse",
        desc: "Score global 0–100, narratif deal, rapport PDF prêt pour comité d'investissement.",
      },
    ],
    features: [
      { title: "Upload drag & drop", desc: "Tous formats — PDF, Excel, Word, PPT, ZIP, connexion VDR." },
      { title: "Extraction automatique", desc: "Métriques financières, clauses, KPIs extraits sans paramétrage." },
      { title: "Red flags cross-documents", desc: "Incohérences détectées entre bilans, contrats et déclarations." },
      { title: "Chat contextuel", desc: "Interrogez chaque document en langage naturel." },
      { title: "Benchmarks sectoriels", desc: "Comparaison automatique aux standards de l'industrie cible." },
      { title: "Rapport PDF one-click", desc: "Format professionnel prêt pour comité d'investissement." },
    ],
    image: "/images/ui/carrier_allocation.png",
  },
  {
    slug: "deal-management",
    name: "Deal Management",
    headline: "Tous vos deals.\nUne seule vue.",
    sub: "Pipeline, NDA, deadlines, collaboration équipe — orchestrés sur Palantir Foundry.",
    features: [
      { title: "Pipeline Kanban visuel", desc: "Origination → LOI → DD → IC → Closing. Vue complète en temps réel." },
      { title: "NDA tracking", desc: "Signature électronique intégrée, suivi et relances automatiques." },
      { title: "Deadline management", desc: "Alertes automatiques, calendrier deal, jalons trackés." },
      { title: "Historique auditable", desc: "Chaque action tracée, reproductible, exportable pour les LPs." },
      { title: "Collaboration équipe", desc: "Attribution tâches, commentaires contextuels, mentions." },
      { title: "Alertes intelligentes", desc: "Notifications sur changements critiques, deadlines, inactivité." },
    ],
    image: "/images/ui/network_opt.png",
  },
  {
    slug: "modelling",
    name: "Modélisation",
    headline: "LBO model en 10 minutes.\nPré-rempli depuis votre DD.",
    sub: "Modélisation financière automatisée. Plus de saisie manuelle.",
    features: [
      { title: "LBO auto-populated", desc: "Métriques extraites automatiquement de la DD — zéro saisie manuelle." },
      { title: "Scenarios bull/base/bear", desc: "3 scenarios générés en 1 clic depuis les hypothèses de la DD." },
      { title: "Sensibilités automatiques", desc: "Tables de sensibilité sur les variables clés de la thèse." },
      { title: "DCF intégré", desc: "Valorisation DCF avec WACC, croissance terminale, benchmarks." },
      { title: "Export Excel propre", desc: "Fichier Excel formaté, versionné, prêt pour le comité." },
      { title: "Versioning natif", desc: "Historique de toutes les versions du modèle, commenté." },
    ],
    image: "/images/ui/agora_emissions.png",
  },
  {
    slug: "reporting",
    name: "Reporting",
    headline: "IC memo en 30 minutes.\nPrêt pour votre comité.",
    sub: "Génération automatique de tous vos livrables — IC memo, reporting LP, dashboard portfolio.",
    features: [
      { title: "IC memo automatique", desc: "Généré depuis la DD et le modèle — structuré, argumenté, présentable." },
      { title: "Slides IC one-click", desc: "Présentation PowerPoint générée, brandée, prête à présenter." },
      { title: "Dashboard portfolio", desc: "KPIs temps réel de toutes les participations centralisés." },
      { title: "Reporting LP automatisé", desc: "Format LP standard, données extraites automatiquement du portfolio." },
      { title: "Export multi-format", desc: "PDF, PowerPoint, Word, Excel — selon les préférences du comité." },
      { title: "Mise à jour continue", desc: "Rapport mis à jour automatiquement lors de nouvelles données." },
    ],
    image: "/images/ui/single_client_view.png",
  },
  {
    slug: "security",
    name: "Sécurité & Conformité",
    headline: "Le niveau de sécurité\ndes gouvernements du G7.",
    sub: "Vos données M&A protégées avec la même infrastructure que la CIA, le NHS et l'armée américaine.",
    features: [
      { title: "Données hébergées en Europe", desc: "Aucune donnée ne quitte l'Union Européenne — souveraineté garantie." },
      { title: "Chiffrement AES-256", desc: "End-to-end, au repos et en transit. Standard gouvernemental." },
      { title: "Audit trail complet", desc: "Chaque action tracée, exportable, reproductible pour vos LPs." },
      { title: "Zéro rétention post-deal", desc: "Vos données effacées à la clôture si vous le décidez." },
      { title: "Tenant Foundry dédié", desc: "Déployable dans votre propre environnement Palantir Foundry." },
      { title: "RGPD & AI Act", desc: "Conformité native aux réglementations européennes en vigueur." },
    ],
    image: "/images/ui/afc_alerting.png",
  },
];
