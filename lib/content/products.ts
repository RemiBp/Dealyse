export type Product = {
  slug: string;
  name: string;
  headline: string;
  sub: string;
  scenario?: string;
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
    scenario: "Il est 9h du matin. Une data room de 800 documents vient d'être partagée. Sans DEALYSE : quatre cabinets mobilisés, six semaines de travail, 150 000€ de frais. Avec DEALYSE : quatre agents IA en parallèle analysent la data room. À 13h, votre rapport de DD est prêt.",
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
    scenario: "Vous gérez huit mandats simultanément. Chaque deal a ses deadlines, ses acheteurs, ses NDAs. Un email qui passe à travers les mailles peut coûter un deal. DEALYSE centralise tout : plus de surprise, plus d'oubli, zéro opportunité manquée.",
    steps: [
      { num: "01", title: "Centralisez votre pipeline", desc: "Toutes vos cibles, opportunités et mandats dans un seul espace. Kanban visuel ou vue liste — chaque deal à son stade exact." },
      { num: "02", title: "Automatisez le process", desc: "NDA envoyé en un clic, deadline alertée automatiquement, historique complet de chaque interaction consigné sans effort." },
      { num: "03", title: "Collaborez sans friction", desc: "Attribution des tâches, commentaires contextuels, notifications ciblées. Chaque membre de l'équipe sait exactement où en est chaque deal." },
    ],
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
    scenario: "La due diligence est bouclée. Avant, votre analyste passait deux jours à retranscrire les chiffres dans Excel, vérifier les formules, construire les scenarios. Maintenant, le LBO model est prêt dix minutes après la fin de la DD — pré-rempli, versionné, exportable.",
    steps: [
      { num: "01", title: "DEALYSE lit votre DD", desc: "KPIs financiers, EBITDA, dette nette, working capital — extraits automatiquement des documents de la data room." },
      { num: "02", title: "Le modèle se construit", desc: "LBO model pré-rempli en 10 minutes. Structure standard, hypothèses documentées, 3 scenarios générés automatiquement." },
      { num: "03", title: "Vous ajustez, pas vous saisissez", desc: "Modifiez les hypothèses clés depuis l'interface. Le modèle se recalcule en temps réel. Export Excel en un clic." },
    ],
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
    scenario: "Le comité est dans deux heures. Votre analyste rédige encore le memo. Avec DEALYSE, l'IC memo est généré 30 minutes après la fin de la due diligence — structuré, argumenté, prêt à présenter. Votre analyste peut se concentrer sur ce qui compte : l'analyse, pas la rédaction.",
    steps: [
      { num: "01", title: "DEALYSE synthétise la DD", desc: "Thèse d'investissement, risques identifiés, valorisation, métriques clés — structurés automatiquement depuis l'analyse de la data room." },
      { num: "02", title: "L'IC memo se génère", desc: "Document structuré selon les standards de votre comité. Argumentaire, due diligence résumée, recommandation — en 30 minutes." },
      { num: "03", title: "Export et présentation", desc: "PDF pour le comité, PowerPoint pour la présentation, Word pour les modifications — dans le format que vous décidez." },
    ],
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
    scenario: "Un LP vous demande où sont hébergées ses données. Vous répondez : dans un tenant Palantir Foundry dédié, hébergé en Europe, chiffré AES-256, avec audit trail complet et suppression certifiée post-deal. La conversation s'arrête là. C'est ça, la souveraineté réelle.",
    steps: [
      { num: "01", title: "Vos données restent chez vous", desc: "Palantir Foundry isole votre environnement dans un tenant dédié, hébergé en Europe. Aucun document ne transite par des API tierces (OpenAI, Anthropic, etc.)." },
      { num: "02", title: "Chaque action est tracée", desc: "Qui a uploadé quoi, quand. Qui a consulté quel document. Quels extraits ont été utilisés dans le rapport. Audit trail complet, exportable pour vos LPs." },
      { num: "03", title: "Zéro rétention post-deal", desc: "À la clôture, vous décidez. Suppression complète des données si vous le souhaitez. Archivage chiffré si vous préférez. Vous contrôlez le cycle de vie." },
    ],
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
