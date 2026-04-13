export type Segment = {
  slug: string;
  emoji: string;
  name: string;
  shortName: string;
  hero: { headline: string; sub: string };
  painPoints: string[];
  solution: { title: string; items: string[] }[];
  workflow: string[];
  useCase: { title: string; context: string; results: string[]; quote: string };
  metrics: { value: string; label: string }[];
  image: string;
};

export const segments: Segment[] = [
  {
    slug: "private-equity",
    emoji: "🏦",
    name: "Private Equity",
    shortName: "Private Equity",
    hero: {
      headline: "Gérez 10 deals simultanément\navec l'équipe que vous avez.",
      sub: "DD, LBO, IC memo, reporting LP — tout automatisé sur Palantir Foundry.",
    },
    painPoints: [
      "DD prend 6 semaines et mobilise 4 cabinets externes",
      "IC memo prend 3 jours à un analyste senior",
      "Pipeline de cibles géré dans Excel",
      "Suivi post-closing dispersé dans des emails",
      "LPs exigent plus de reporting, plus vite",
    ],
    solution: [
      {
        title: "Due Diligence",
        items: [
          "Data room intégrée — tous formats",
          "4 agents IA en parallèle",
          "Red flags détectés automatiquement",
          "Rapport complet en 4 heures",
        ],
      },
      {
        title: "Modélisation",
        items: [
          "LBO model pré-rempli depuis la DD",
          "Scenarios bull/base/bear en 1 clic",
          "Sensibilités automatiques",
          "Export Excel propre",
        ],
      },
      {
        title: "IC & Closing",
        items: [
          "IC memo généré automatiquement",
          "Slides IC prêtes à présenter",
          "Tracking conditions suspensives",
          "Archivage deal complet",
        ],
      },
      {
        title: "Portfolio",
        items: [
          "Reporting LP automatisé",
          "KPIs portfolio temps réel",
          "Alertes performance",
          "Dashboard unifié",
        ],
      },
    ],
    workflow: [
      "Origination",
      "Due Diligence",
      "Modélisation",
      "IC",
      "Closing",
      "Portfolio",
    ],
    useCase: {
      title: "Carve-out industriel 120M€ — DD en 4 heures",
      context:
        "Fonds mid-market européen, 800M€ AUM. Acquisition d'une division manufacturière avec 847 documents en 4 langues.",
      results: [
        "847 documents analysés en 4h12",
        "23 red flags identifiés automatiquement",
        "160 000€ de frais de conseil économisés",
        "LBO model pré-rempli en 10 minutes",
      ],
      quote:
        "Ce qui nous prenait 3 semaines avec 2 analystes est maintenant fait en une journée.",
    },
    metrics: [
      { value: "4h", label: "vs 6 semaines" },
      { value: "-80%", label: "coût DD" },
      { value: "×5", label: "vitesse IC" },
      { value: "0", label: "red flag manqué" },
    ],
    image: "/images/ui/carrier_allocation.png",
  },
  {
    slug: "investment-banking",
    emoji: "💼",
    name: "Investment Banking",
    shortName: "IB",
    hero: {
      headline: "Exécutez plus de mandats.\nAvec plus de précision.",
      sub: "Pitchbooks, process sell-side, data room — automatisés sur Palantir Foundry.",
    },
    painPoints: [
      "Pitchbook construit manuellement en 2 à 3 jours",
      "Comps tables outdatées au moment de la présentation",
      "Coordination acheteurs chaotique par email",
      "CRM généraliste mal adapté aux mandats M&A",
      "NDA et process letter gérés manuellement",
    ],
    solution: [
      {
        title: "Pitchbook",
        items: [
          "Génération automatique depuis templates",
          "Comps tables live (Bloomberg intégré)",
          "Métriques sectorielles auto-actualisées",
          "Export PowerPoint one-click",
        ],
      },
      {
        title: "Process Management",
        items: [
          "Pipeline acheteurs centralisé",
          "NDA tracking + signature électronique",
          "Process letter automatisée",
          "Deadline management",
        ],
      },
      {
        title: "Data Room",
        items: [
          "Upload et organisation automatique",
          "Q&A management intelligent",
          "Analytics : qui consulte quoi",
          "Sécurité enterprise native",
        ],
      },
      {
        title: "Closing",
        items: [
          "Comparaison offres indicatives",
          "Tracking best offer / LOI",
          "Suivi conditions SPA",
          "Archivage deal complet",
        ],
      },
    ],
    workflow: [
      "Origination mandat",
      "Pitchbook",
      "Data Room",
      "Process acheteurs",
      "Best Offer",
      "Closing",
    ],
    useCase: {
      title: "Process sell-side PME tech 45M€ — 6 semaines",
      context:
        "Banque d'affaires boutique, Paris. Mandat sell-side pour une scale-up SaaS avec 12 acheteurs potentiels.",
      results: [
        "Pitchbook généré en 2 heures vs 3 jours",
        "12 acheteurs onboardés en 48h",
        "NDA signés électroniquement en 24h",
        "Closing 2 semaines plus tôt que prévu",
      ],
      quote:
        "La qualité des rapports est directement présentable en comité. Game-changer.",
    },
    metrics: [
      { value: "2h", label: "pitchbook" },
      { value: "48h", label: "NDA signés" },
      { value: "−2 sem.", label: "closing" },
      { value: "×3", label: "mandats gérables" },
    ],
    image: "/images/ui/network_opt.png",
  },
  {
    slug: "ma-advisors",
    emoji: "🤝",
    name: "M&A Advisors",
    shortName: "M&A Advisors",
    hero: {
      headline: "Scalez votre practice M&A\nsans scaler vos équipes.",
      sub: "Gérez plus de mandats avec les mêmes ressources. Marges préservées.",
    },
    painPoints: [
      "Revue DD externalisée = marges érodées",
      "Coordination multi-parties impossible à tracer",
      "Livrables manuels = bottleneck sur chaque deal",
      "Facturation au temps = pas de scalabilité",
      "Dépendance aux outils généralistes",
    ],
    solution: [
      {
        title: "DD Internalisée",
        items: [
          "DD complète sans cabinet externe",
          "Rapport client généré automatiquement",
          "Red flags juridiques et financiers",
          "Qualité institutionnelle garantie",
        ],
      },
      {
        title: "Coordination",
        items: [
          "Tracking multi-parties centralisé",
          "Workflow vendeur/acheteur/conseil",
          "Historique complet auditable",
          "Alertes automatiques",
        ],
      },
      {
        title: "Livrables",
        items: [
          "IC memo one-click",
          "Teaser automatique",
          "IM généré depuis les données",
          "Rapport DD brandé client",
        ],
      },
    ],
    workflow: [
      "Origination",
      "Teaser & IM",
      "Process acheteurs",
      "DD",
      "LOI",
      "SPA & Closing",
    ],
    useCase: {
      title: "Boutique M&A — 3× plus de mandats, même équipe",
      context:
        "Cabinet boutique, 4 banquiers M&A, Paris. Spécialisé deals 10–50M€ dans le secteur tech & services.",
      results: [
        "3× mandats gérés simultanément",
        "DD internalisée : +40% de marges",
        "Temps livraison réduit de 60%",
        "Zéro recrutement supplémentaire",
      ],
      quote:
        "On a triplé notre volume de mandats sans embaucher. DEALYSE a changé notre modèle.",
    },
    metrics: [
      { value: "×3", label: "mandats" },
      { value: "+40%", label: "marges" },
      { value: "−60%", label: "délais" },
      { value: "0", label: "recrutement" },
    ],
    image: "/images/ui/motherbrain.png",
  },
  {
    slug: "legal",
    emoji: "⚖️",
    name: "Cabinets d'Avocats",
    shortName: "Legal",
    hero: {
      headline: "Zéro clause manquée.\nJamais.",
      sub: "Revue contractuelle automatisée pour les équipes M&A legal.",
    },
    painPoints: [
      "340 contrats à réviser en 5 jours — impossible manuellement",
      "Clauses non-standard manquées sous pression",
      "Versioning SPA ingérable de v1 à v47",
      "Facturation au temps = pas de scalabilité",
      "Coordination avec les autres conseils chaotique",
    ],
    solution: [
      {
        title: "Revue Contractuelle",
        items: [
          "Analyse automatique de tous les contrats",
          "Détection clauses non-standard",
          "Comparaison vs templates de référence",
          "Red flags juridiques priorisés",
        ],
      },
      {
        title: "SPA Management",
        items: [
          "Comparaison automatique des versions",
          "Points ouverts trackés avec responsable",
          "Résumé v1→vN en 30 secondes",
          "Alerte clauses à risque",
        ],
      },
      {
        title: "DD Juridique",
        items: [
          "Revue automatisée data room juridique",
          "Extraction garanties et représentations",
          "Mapping engagements hors bilan",
          "Rapport DD juridique complet",
        ],
      },
    ],
    workflow: [
      "Upload data room",
      "Analyse contrats",
      "Red flags",
      "SPA tracking",
      "Closing checklist",
      "Archive",
    ],
    useCase: {
      title: "340 contrats analysés en 6 heures — acquisition retail",
      context:
        "Cabinet d'avocats d'affaires, Paris. Due diligence juridique pour l'acquisition d'un réseau de distribution, 340 contrats en 3 langues.",
      results: [
        "340 contrats analysés en 6 heures",
        "8 clauses critiques détectées",
        "3 semaines de travail économisées",
        "Zéro clause non-standard manquée",
      ],
      quote:
        "8 clauses critiques détectées que nous aurions probablement manquées sous la pression du timing.",
    },
    metrics: [
      { value: "6h", label: "340 contrats" },
      { value: "8", label: "clauses critiques" },
      { value: "−3 sem.", label: "économisées" },
      { value: "0", label: "manqué" },
    ],
    image: "/images/ui/afc_alerting.png",
  },
  {
    slug: "corporate",
    emoji: "🏢",
    name: "Corporate & Family Office",
    shortName: "Corporate",
    hero: {
      headline: "La DD institutionnelle.\nSans l'équipe institutionnelle.",
      sub: "Pour les directions M&A corporate et family offices avec peu de ressources internes.",
    },
    painPoints: [
      "Peu de ressources DD internes dédiées",
      "Dépendance totale aux conseils externes",
      "Coûts DD disproportionnés sur les petits deals",
      "Manque de visibilité sur le pipeline acquisitions",
      "Reporting aux principals chronophage",
    ],
    solution: [
      {
        title: "DD Autonome",
        items: [
          "DD complète sans cabinet externe",
          "Qualité institutionnelle garantie",
          "Rapport IC professionnel en 30 minutes",
          "Réduction 80% des coûts",
        ],
      },
      {
        title: "Pipeline",
        items: [
          "Pipeline acquisitions centralisé",
          "Scoring cibles automatique",
          "Alertes nouvelles opportunités",
          "Historique deals complet",
        ],
      },
      {
        title: "Reporting",
        items: [
          "Reporting principals automatisé",
          "Dashboard acquisitions temps réel",
          "KPIs post-closing suivis",
          "Synthèse exécutive one-click",
        ],
      },
    ],
    workflow: [
      "Origination",
      "Scoring",
      "Due Diligence",
      "IC",
      "Négociation",
      "Intégration",
    ],
    useCase: {
      title: "8 acquisitions bolt-on en 1 an — direction M&A industrielle",
      context:
        "Direction M&A d'un groupe industriel français, 2 personnes dédiées. Stratégie bolt-on active sur 3 secteurs.",
      results: [
        "8 acquisitions finalisées en 12 mois",
        "Zéro cabinet DD externe sollicité",
        "−80% coûts de conseil DD",
        "Délai IC réduit de 3 jours à 30 minutes",
      ],
      quote:
        "On a multiplié notre capacité d'exécution par 4 sans augmenter l'équipe.",
    },
    metrics: [
      { value: "×4", label: "capacité" },
      { value: "−80%", label: "coûts DD" },
      { value: "30min", label: "IC memo" },
      { value: "0", label: "cabinet externe" },
    ],
    image: "/images/ui/single_client_view.png",
  },
];
