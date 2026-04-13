"use client";

import React, { createContext, useContext, useState } from "react";

export type Lang = "fr" | "en";

const translations = {
  fr: {
    nav: {
      product: "Produit",
      useCases: "Use Cases",
      pricing: "Tarifs",
      about: "À propos",
      cta: "Demander une démo",
    },
    hero: {
      badge: "Propulsé par AIP — Palantir Foundry",
      h1a: "Analysez une data room",
      h1b: "complète en 4 heures.",
      sub: "Due diligence financière, juridique et opérationnelle entièrement automatisée. Zéro Excel. Zéro délai.",
      ctaPrimary: "Voir la démo interactive",
      ctaSecondary: "Demander un accès",
      stat1: "847",
      stat1label: "documents analysés",
      stat2: "4h",
      stat2label: "par deal en moyenne",
      stat3: "91%",
      stat3label: "précision détection",
    },
    problem: {
      label: "Avant DEALYSE",
      title: "La due diligence traditionnelle",
      subtitle: "Un processus manuel, lent et coûteux — inchangé depuis 20 ans.",
      items: [
        "3 à 6 semaines de travail",
        "4 cabinets coordonnés",
        "150 000€ en honoraires",
        "Données dispersées dans Excel",
        "Red flags manqués faute de temps",
      ],
      solutionLabel: "Avec DEALYSE",
      solutionTitle: "La due diligence augmentée",
      solutionSubtitle: "Un agent IA déployé sur Palantir Foundry, opérationnel en heures.",
      solutionItems: [
        "4 heures d'analyse complète",
        "Un seul outil unifié",
        "Fraction du coût traditionnel",
        "Ontologie structurée et auditable",
        "Zéro red flag manqué",
      ],
    },
    how: {
      title: "Trois étapes.",
      titleAccent: "Un résultat.",
      steps: [
        {
          num: "01",
          title: "Déposez votre data room",
          desc: "ZIP, dossier structuré ou connexion VDR directe. Tous formats acceptés — PDF, Excel, Word, PowerPoint.",
        },
        {
          num: "02",
          title: "L'agent analyse tout",
          desc: "Financier, juridique, opérationnel — simultanément. 4 agents spécialisés en parallèle, en temps réel.",
        },
        {
          num: "03",
          title: "Rapport prêt en 4 heures",
          desc: "PDF exportable, scoring détaillé, red flags priorisés, chat contextuel avec chaque document.",
        },
      ],
    },
    features: {
      title: "Tout ce dont vous avez besoin.",
      subtitle: "Une plateforme complète, construite pour les équipes M&A mid-market.",
      items: [
        {
          title: "Scoring 0–100 par dimension",
          desc: "Financier, juridique, opérationnel, RH, IT. Chaque score justifié et auditable.",
        },
        {
          title: "Détection automatique des risques",
          desc: "Clauses ambiguës, concentration client, dette hors bilan, incohérences cross-documents.",
        },
        {
          title: "Benchmarks sectoriels intégrés",
          desc: "Comparez instantanément la cible aux standards de son industrie.",
        },
        {
          title: "Chat contextuel",
          desc: "\"Explique-moi cette clause\" — interrogez vos documents en langage naturel.",
        },
        {
          title: "Rapport prêt pour vos LPs",
          desc: "Export one-click. Format professionnel. Prêt à présenter en comité d'investissement.",
        },
        {
          title: "Données souveraines",
          desc: "Hébergé sur Palantir Foundry. Audit trail natif. Vos données ne quittent jamais l'environnement sécurisé.",
        },
      ],
    },
    social: {
      title: "Utilisé par des équipes M&A mid-market",
      subtitle: "Des fonds qui ont transformé leur processus de due diligence.",
      quotes: [
        {
          text: "Ce qui nous prenait 3 semaines avec 2 analystes est maintenant fait en une journée. Les red flags sont détectés avec une précision remarquable.",
          author: "Directeur Investissements",
          fund: "Fonds mid-market, €800M AUM",
        },
        {
          text: "La qualité des rapports est directement présentable en comité. C'est un game-changer pour notre vitesse d'exécution.",
          author: "Partner, M&A",
          fund: "Corporate Strategy, €2Md+ AUM",
        },
      ],
    },
    pricing: {
      title: "Tarification transparente.",
      subtitle: "Commencez avec un POC gratuit sur votre prochain deal.",
      plans: [
        {
          badge: "Pour commencer",
          name: "POC Gratuit",
          price: "Gratuit",
          priceSub: "Sur votre premier deal",
          features: ["1 data room complète", "Rapport PDF inclus", "Jusqu'à 500 documents", "Support dédié"],
          cta: "Démarrer maintenant",
          highlight: false,
        },
        {
          badge: "Le plus populaire",
          name: "Par Transaction",
          price: "8 000€",
          priceSub: "par transaction",
          features: ["Data room illimitée", "4 agents d'analyse", "Benchmarks sectoriels", "Chat contextuel", "Rapport PDF exportable", "Support prioritaire"],
          cta: "Demander une démo",
          highlight: true,
        },
        {
          badge: "Pour fonds actifs",
          name: "Retainer",
          price: "Sur devis",
          priceSub: "2–5 deals / mois",
          features: ["Deals illimités", "Onboarding dédié", "Intégration VDR", "API access", "Account manager", "SLA garanti"],
          cta: "Nous contacter",
          highlight: false,
        },
      ],
    },
    cta: {
      title: "Votre prochain deal mérite mieux qu'Excel.",
      subtitle: "Démarrez avec un POC gratuit — résultats en 4 heures.",
      form: {
        name: "Prénom Nom",
        email: "Email professionnel",
        fund: "Nom du fonds",
        volume: "Volume de deals / an",
        volumeOptions: ["1–5 deals / an", "5–10 deals / an", "10+ deals / an"],
        submit: "Démarrer mon POC gratuit",
        disclaimer: "Vos données restent confidentielles. Aucun engagement. Résultats garantis.",
      },
    },
    footer: {
      tagline: "Due diligence augmentée par l'IA",
      product: "Produit",
      productLinks: ["Fonctionnalités", "Démo interactive", "Tarifs", "Roadmap"],
      resources: "Ressources",
      resourceLinks: ["Use cases", "Documentation", "Blog (à venir)"],
      contact: "Contact",
      copyright: "© 2026 DEALYSE. Propulsé par Palantir Foundry.",
    },
  },
  en: {
    nav: {
      product: "Product",
      useCases: "Use Cases",
      pricing: "Pricing",
      about: "About",
      cta: "Request a demo",
    },
    hero: {
      badge: "Powered by AIP — Palantir Foundry",
      h1a: "Analyze a full data room",
      h1b: "in 4 hours.",
      sub: "Financial, legal and operational due diligence — fully automated. Zero Excel. Zero delay.",
      ctaPrimary: "See the interactive demo",
      ctaSecondary: "Request access",
      stat1: "847",
      stat1label: "documents analyzed",
      stat2: "4h",
      stat2label: "per deal on average",
      stat3: "91%",
      stat3label: "detection accuracy",
    },
    problem: {
      label: "Before DEALYSE",
      title: "Traditional due diligence",
      subtitle: "A manual, slow, and costly process — unchanged for 20 years.",
      items: [
        "3 to 6 weeks of work",
        "4 coordinated advisory firms",
        "€150,000 in fees",
        "Data scattered in Excel",
        "Red flags missed for lack of time",
      ],
      solutionLabel: "With DEALYSE",
      solutionTitle: "Augmented due diligence",
      solutionSubtitle: "An AI agent deployed on Palantir Foundry, operational in hours.",
      solutionItems: [
        "4 hours of complete analysis",
        "A single unified tool",
        "Fraction of the traditional cost",
        "Structured and auditable ontology",
        "Zero missed red flags",
      ],
    },
    how: {
      title: "Three steps.",
      titleAccent: "One outcome.",
      steps: [
        {
          num: "01",
          title: "Upload your data room",
          desc: "ZIP, structured folder or direct VDR connection. All formats accepted — PDF, Excel, Word, PowerPoint.",
        },
        {
          num: "02",
          title: "The agent analyzes everything",
          desc: "Financial, legal, operational — simultaneously. 4 specialized agents in parallel, in real time.",
        },
        {
          num: "03",
          title: "Report ready in 4 hours",
          desc: "Exportable PDF, detailed scoring, prioritized red flags, contextual chat with every document.",
        },
      ],
    },
    features: {
      title: "Everything you need.",
      subtitle: "A complete platform built for mid-market M&A teams.",
      items: [
        {
          title: "0–100 scoring per dimension",
          desc: "Financial, legal, operational, HR, IT. Every score justified and auditable.",
        },
        {
          title: "Automatic risk detection",
          desc: "Ambiguous clauses, customer concentration, off-balance-sheet debt, cross-document inconsistencies.",
        },
        {
          title: "Integrated sector benchmarks",
          desc: "Instantly compare the target against industry standards.",
        },
        {
          title: "Contextual chat",
          desc: "\"Explain this clause\" — query your documents in plain language.",
        },
        {
          title: "LP-ready report",
          desc: "One-click export. Professional format. Ready to present in investment committee.",
        },
        {
          title: "Sovereign data",
          desc: "Hosted on Palantir Foundry. Native audit trail. Your data never leaves the secure environment.",
        },
      ],
    },
    social: {
      title: "Used by mid-market M&A teams",
      subtitle: "Funds that have transformed their due diligence process.",
      quotes: [
        {
          text: "What used to take 3 weeks with 2 analysts is now done in a day. Red flags are detected with remarkable precision.",
          author: "Head of Investments",
          fund: "Mid-market fund, €800M AUM",
        },
        {
          text: "The quality of the reports is directly presentable to the committee. It's a game-changer for our execution speed.",
          author: "Partner, M&A",
          fund: "Corporate Strategy, €2Bn+ AUM",
        },
      ],
    },
    pricing: {
      title: "Transparent pricing.",
      subtitle: "Start with a free POC on your next deal.",
      plans: [
        {
          badge: "To get started",
          name: "Free POC",
          price: "Free",
          priceSub: "On your first deal",
          features: ["1 complete data room", "PDF report included", "Up to 500 documents", "Dedicated support"],
          cta: "Start now",
          highlight: false,
        },
        {
          badge: "Most popular",
          name: "Per Transaction",
          price: "€8,000",
          priceSub: "per transaction",
          features: ["Unlimited data room", "4 analysis agents", "Sector benchmarks", "Contextual chat", "Exportable PDF report", "Priority support"],
          cta: "Request a demo",
          highlight: true,
        },
        {
          badge: "For active funds",
          name: "Retainer",
          price: "Custom",
          priceSub: "2–5 deals / month",
          features: ["Unlimited deals", "Dedicated onboarding", "VDR integration", "API access", "Account manager", "Guaranteed SLA"],
          cta: "Contact us",
          highlight: false,
        },
      ],
    },
    cta: {
      title: "Your next deal deserves better than Excel.",
      subtitle: "Start with a free POC — results in 4 hours.",
      form: {
        name: "Full name",
        email: "Professional email",
        fund: "Fund name",
        volume: "Deals per year",
        volumeOptions: ["1–5 deals / year", "5–10 deals / year", "10+ deals / year"],
        submit: "Start my free POC",
        disclaimer: "Your data remains confidential. No commitment. Results guaranteed.",
      },
    },
    footer: {
      tagline: "AI-powered due diligence, done in hours",
      product: "Product",
      productLinks: ["Features", "Interactive demo", "Pricing", "Roadmap"],
      resources: "Resources",
      resourceLinks: ["Use cases", "Documentation", "Blog (coming soon)"],
      contact: "Contact",
      copyright: "© 2026 DEALYSE. Powered by Palantir Foundry.",
    },
  },
};

type Translations = typeof translations.fr;

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LangContext = createContext<LangContextType>({
  lang: "fr",
  setLang: () => {},
  t: translations.fr,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
