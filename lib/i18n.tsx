"use client";

import React, { createContext, useContext, useState } from "react";

export type Lang = "fr" | "en";

const translations = {
  fr: {
    nav: {
      solutions: "Solutions",
      product: "Produit",
      useCases: "Use Cases",
      pricing: "Tarifs",
      about: "À propos",
      blog: "Blog",
      cta: "Demander une démo",
    },
    page: {
      hero: {
        badge1: "Propulsé par Palantir Foundry",
        badge2: "AIP Logic",
        h1a: "Des semaines de travail.",
        h1b: "En quelques minutes.",
        sub: "Le premier Deal OS propulsé par Palantir Foundry — de l'origination au closing, entièrement automatisé.",
        ctaPrimary: "Voir la démo →",
        ctaSecondary: "Découvrir le produit",
        badges: ["Données souveraines", "4h DD complète", "Palantir Foundry", "Hébergé EU"],
        metrics: [
          { value: "4h", label: "Due Diligence complète" },
          { value: "91%", label: "Précision détection" },
          { value: "−80%", label: "Coût conseil DD" },
          { value: "×5", label: "Vitesse d'exécution" },
        ],
      },
      proof: {
        label: "Utilisé par des équipes M&A en Europe",
        items: ["Fonds PE · €800M AUM", "Boutique M&A · Paris", "Cabinet d'avocats · 4 associés", "Direction M&A · Groupe CAC40", "IB · mid-market"],
      },
      problem: {
        label: "Le problème",
        h2: "Le M&A mid-market tourne encore sous Excel.",
        sub: "Le processus n'a pas changé depuis 20 ans. Les LLMs et Palantir AIP, oui.",
        beforeHeader: "Sans DEALYSE — aujourd'hui",
        afterHeader: "Avec DEALYSE",
        rows: [
          { before: "6 semaines de due diligence", after: "4 heures" },
          { before: "80 000 – 200 000€ en frais de conseil", after: "499€ / mois" },
          { before: "5 analystes mobilisés par deal", after: "1 analyste pilote le process" },
          { before: "3 jours pour rédiger un IC memo", after: "30 minutes, généré automatiquement" },
          { before: "Données chez 4+ prestataires externes", after: "100% souverain — Palantir Foundry" },
          { before: "Excel, Word, email, VDR — 5 outils", after: "Un seul OS de A à Z" },
        ],
      },
      tabs: {
        label: "La solution",
        h2: "Un seul OS pour tout votre deal.",
        cta: "Voir la démo →",
        viewDetail: "Voir",
        viewDetailSuffix: "en détail →",
        tabLabels: ["Due Diligence IA", "Deal Management", "Modélisation", "Reporting", "Sécurité"],
        items: [
          {
            scenario: "Il est 9h du matin. Une data room de 800 documents vient d'être partagée. Sans DEALYSE : quatre cabinets mobilisés, six semaines de travail, 150 000€ de frais. Avec DEALYSE : quatre agents IA analysent en parallèle. À 13h, votre rapport est prêt.",
            bullets: [
              "Upload drag & drop — tous formats (PDF, Excel, Word, ZIP)",
              "4 agents spécialisés en parallèle — Financier, Juridique, Opérationnel, Synthèse",
              "Red flags cross-documents détectés automatiquement",
              "Benchmarks sectoriels intégrés — comparaison automatique",
              "Chat contextuel par document",
              "Rapport PDF professionnel en 1 clic",
            ],
          },
          {
            scenario: "Vous gérez huit mandats simultanément. Chaque deal a ses deadlines, ses NDAs, ses acheteurs. Un email manqué peut coûter un deal. DEALYSE centralise tout : plus de surprise, plus d'oubli, zéro opportunité manquée.",
            bullets: [
              "Pipeline Kanban visuel — Origination → LOI → DD → IC → Closing",
              "NDA tracking + signature électronique intégrée",
              "Alertes automatiques sur chaque deadline critique",
              "Historique complet auditable — chaque action tracée",
              "Collaboration équipe temps réel avec attribution de tâches",
              "Vue unifiée de tous vos deals sur un seul écran",
            ],
          },
          {
            scenario: "La DD est terminée. Autrefois, votre analyste passait deux jours à retranscrire les chiffres dans Excel. Maintenant, le LBO model est prêt en 10 minutes — pré-rempli depuis votre data room.",
            bullets: [
              "LBO model pré-rempli automatiquement depuis les métriques DD",
              "3 scenarios (bull / base / bear) générés en 1 clic",
              "Tables de sensibilité sur les variables clés",
              "DCF intégré avec WACC et croissance terminale",
              "Export Excel propre, versionné, formaté comité",
              "Historique de toutes les versions du modèle",
            ],
          },
          {
            scenario: "Le comité est dans deux heures. Votre analyste rédige encore le memo. Avec DEALYSE, l'IC memo était prêt 30 minutes après la fin de la DD — structuré, argumenté, prêt à présenter.",
            bullets: [
              "IC memo généré automatiquement depuis la DD et le modèle",
              "Slides IC en PowerPoint — brandées, prêtes à présenter",
              "Dashboard portfolio temps réel — KPIs toutes participations",
              "Reporting LP automatisé — format standard, export en 1 clic",
              "Export PDF / PowerPoint / Word selon les préférences du comité",
              "Mise à jour automatique lors de nouvelles données",
            ],
          },
          {
            scenario: "Un LP vous demande où sont hébergées ses données. Vous répondez : dans un tenant Palantir Foundry dédié, en Europe, chiffré AES-256, avec audit trail complet. La conversation s'arrête là.",
            bullets: [
              "Données hébergées exclusivement en Union Européenne",
              "Chiffrement AES-256 — au repos et en transit",
              "Audit trail complet exportable — chaque action tracée",
              "Zéro rétention post-deal — suppression sur demande",
              "Déployable dans votre tenant Foundry existant",
              "Conforme RGPD & AI Act — natif",
            ],
          },
        ],
      },
      foundry: {
        label: "Infrastructure",
        h2: "Pourquoi Palantir Foundry — l'argument clé",
        sub: "La plupart des outils IA pour la finance sont des chatbots habillés. DEALYSE repose sur Palantir Foundry — utilisé par la CIA, le NHS britannique et les plus grandes entreprises mondiales pour gérer leurs données les plus critiques.",
        cards: [
          { title: "Souveraineté totale", desc: "Vos données ne quittent jamais votre environnement sécurisé. Zéro exfiltration vers des API tierces." },
          { title: "Intelligence cumulative", desc: "Chaque deal enrichit l'ontologie. Votre connaissance s'accumule — contrairement aux chatbots qui oublient tout." },
          { title: "Agents orchestrés AIP", desc: "Orchestration enterprise-grade de 4 agents spécialisés en parallèle. Pas un wrapper sur GPT-4." },
        ],
        link: "Architecture complète →",
      },
      segments: {
        label: "Solutions",
        h2: "Adapté à votre métier.",
        cta: "Voir la solution →",
      },
      useCases: {
        label: "Use Cases",
        h2: "Résultats réels. Chiffrés.",
        link: "Tous les use cases →",
        cardCta: "Voir le détail →",
      },
      pricing: {
        label: "Tarification",
        h2: "Simple. Transparent.",
        link: "Détails complets →",
        plans: [
          {
            badge: "Pour commencer",
            name: "Free",
            price: "Gratuit",
            sub: "1 deal · 50 documents",
            features: ["1 data room", "Rapport basique", "7 jours chat"],
            cta: "Démarrer",
          },
          {
            badge: "Le plus populaire",
            name: "Pro",
            price: "499€",
            sub: "/mois",
            features: ["Deals illimités", "4 agents IA", "LBO + IC memo", "Support prioritaire"],
            cta: "Essai 14 jours",
          },
          {
            badge: "Grands fonds",
            name: "Enterprise",
            price: "Sur devis",
            sub: "Tenant Foundry dédié",
            features: ["Tenant privé", "SSO / SAML", "SLA 99.9%", "Account manager"],
            cta: "Nous contacter",
          },
        ],
      },
      integrations: {
        label: "Intégrations",
        h2: "Connecté à votre stack.",
      },
      ctaFinal: {
        h2a: "Votre prochain deal.",
        h2b: "En quelques minutes.",
        sub: "Démarrez avec un POC gratuit sur votre prochain deal. Résultats garantis en 4 heures.",
        ctaPrimary: "Démarrer mon POC →",
        ctaSecondary: "Voir les use cases",
        stats: [
          { value: "Gratuit", label: "Sur votre premier deal" },
          { value: "4 heures", label: "Résultats garantis" },
          { value: "24h", label: "Temps de réponse" },
        ],
      },
    },
    // Legacy keys — kept for compatibility with unused components
    hero: {
      badge: "Propulsé par AIP — Palantir Foundry",
      h1a: "Analysez une data room",
      h1b: "complète en 4 heures.",
      sub: "Due diligence financière, juridique et opérationnelle entièrement automatisée. Zéro Excel. Zéro délai.",
      ctaPrimary: "Voir la démo interactive",
      ctaSecondary: "Demander un accès",
      stat1: "847", stat1label: "documents analysés",
      stat2: "4h", stat2label: "par deal en moyenne",
      stat3: "91%", stat3label: "précision détection",
    },
    problem: {
      label: "Avant DEALYSE", title: "La due diligence traditionnelle",
      subtitle: "Un processus manuel, lent et coûteux — inchangé depuis 20 ans.",
      items: ["3 à 6 semaines de travail", "4 cabinets coordonnés", "150 000€ en honoraires", "Données dispersées dans Excel", "Red flags manqués faute de temps"],
      solutionLabel: "Avec DEALYSE", solutionTitle: "La due diligence augmentée",
      solutionSubtitle: "Un agent IA déployé sur Palantir Foundry, opérationnel en heures.",
      solutionItems: ["4 heures d'analyse complète", "Un seul outil unifié", "Fraction du coût traditionnel", "Ontologie structurée et auditable", "Zéro red flag manqué"],
    },
    how: {
      title: "Trois étapes.", titleAccent: "Un résultat.",
      steps: [
        { num: "01", title: "Déposez votre data room", desc: "ZIP, dossier structuré ou connexion VDR directe. Tous formats acceptés — PDF, Excel, Word, PowerPoint." },
        { num: "02", title: "L'agent analyse tout", desc: "Financier, juridique, opérationnel — simultanément. 4 agents spécialisés en parallèle, en temps réel." },
        { num: "03", title: "Rapport prêt en 4 heures", desc: "PDF exportable, scoring détaillé, red flags priorisés, chat contextuel avec chaque document." },
      ],
    },
    features: {
      title: "Tout ce dont vous avez besoin.",
      subtitle: "Une plateforme complète, construite pour les équipes M&A mid-market.",
      items: [
        { title: "Scoring 0–100 par dimension", desc: "Financier, juridique, opérationnel, RH, IT. Chaque score justifié et auditable." },
        { title: "Détection automatique des risques", desc: "Clauses ambiguës, concentration client, dette hors bilan, incohérences cross-documents." },
        { title: "Benchmarks sectoriels intégrés", desc: "Comparez instantanément la cible aux standards de son industrie." },
        { title: "Chat contextuel", desc: "Interrogez vos documents en langage naturel." },
        { title: "Rapport prêt pour vos LPs", desc: "Export one-click. Format professionnel. Prêt à présenter en comité d'investissement." },
        { title: "Données souveraines", desc: "Hébergé sur Palantir Foundry. Audit trail natif." },
      ],
    },
    social: {
      title: "Utilisé par des équipes M&A mid-market",
      subtitle: "Des fonds qui ont transformé leur processus de due diligence.",
      quotes: [
        { text: "Ce qui nous prenait 3 semaines avec 2 analystes est maintenant fait en une journée.", author: "Directeur Investissements", fund: "Fonds mid-market, €800M AUM" },
        { text: "La qualité des rapports est directement présentable en comité.", author: "Partner, M&A", fund: "Corporate Strategy, €2Md+ AUM" },
      ],
    },
    pricing: {
      title: "Tarification transparente.",
      subtitle: "Commencez avec un POC gratuit sur votre prochain deal.",
      plans: [
        { badge: "Pour commencer", name: "POC Gratuit", price: "Gratuit", priceSub: "Sur votre premier deal", features: ["1 data room complète", "Rapport PDF inclus", "Jusqu'à 500 documents", "Support dédié"], cta: "Démarrer maintenant", highlight: false },
        { badge: "Le plus populaire", name: "Par Transaction", price: "8 000€", priceSub: "par transaction", features: ["Data room illimitée", "4 agents d'analyse", "Benchmarks sectoriels", "Chat contextuel", "Rapport PDF exportable", "Support prioritaire"], cta: "Demander une démo", highlight: true },
        { badge: "Pour fonds actifs", name: "Retainer", price: "Sur devis", priceSub: "2–5 deals / mois", features: ["Deals illimités", "Onboarding dédié", "Intégration VDR", "API access", "Account manager", "SLA garanti"], cta: "Nous contacter", highlight: false },
      ],
    },
    cta: {
      title: "Votre prochain deal mérite mieux qu'Excel.",
      subtitle: "Démarrez avec un POC gratuit sur votre prochain deal. Résultats garantis en 4 heures.",
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
      tagline: "Le premier Deal OS propulsé par Palantir Foundry.",
      solutions: "Solutions",
      product: "Produit",
      resources: "Ressources",
      legal: "Légal",
      resourceLinks: [
        { label: "Use cases", href: "/use-cases" },
        { label: "Blog", href: "/blog" },
        { label: "Palantir Foundry", href: "/foundry" },
        { label: "À propos", href: "/about" },
      ],
      legalLinks: [
        { label: "Mentions légales", href: "/mentions-legales" },
        { label: "Confidentialité", href: "/confidentialite" },
      ],
      copyright: "© 2026 DEALYSE. Propulsé par Palantir Foundry.",
    },
  },

  en: {
    nav: {
      solutions: "Solutions",
      product: "Product",
      useCases: "Use Cases",
      pricing: "Pricing",
      about: "About",
      blog: "Blog",
      cta: "Request a demo",
    },
    page: {
      hero: {
        badge1: "Powered by Palantir Foundry",
        badge2: "AIP Logic",
        h1a: "Weeks of work.",
        h1b: "In minutes.",
        sub: "The first Deal OS powered by Palantir Foundry — from origination to closing, fully automated.",
        ctaPrimary: "See the demo →",
        ctaSecondary: "Explore the product",
        badges: ["Sovereign data", "4h full DD", "Palantir Foundry", "EU hosted"],
        metrics: [
          { value: "4h", label: "Complete Due Diligence" },
          { value: "91%", label: "Detection accuracy" },
          { value: "−80%", label: "DD advisory cost" },
          { value: "×5", label: "Execution speed" },
        ],
      },
      proof: {
        label: "Used by M&A teams across Europe",
        items: ["PE Fund · €800M AUM", "M&A Boutique · Paris", "Law Firm · 4 partners", "M&A Division · CAC40 Group", "IB · mid-market"],
      },
      problem: {
        label: "The problem",
        h2: "Mid-market M&A still runs on Excel.",
        sub: "The process hasn't changed in 20 years. LLMs and Palantir AIP have.",
        beforeHeader: "Without DEALYSE — today",
        afterHeader: "With DEALYSE",
        rows: [
          { before: "6 weeks of due diligence", after: "4 hours" },
          { before: "€80,000 – €200,000 in advisory fees", after: "€499 / month" },
          { before: "5 analysts mobilized per deal", after: "1 analyst runs the process" },
          { before: "3 days to write an IC memo", after: "30 minutes, generated automatically" },
          { before: "Data at 4+ external providers", after: "100% sovereign — Palantir Foundry" },
          { before: "Excel, Word, email, VDR — 5 tools", after: "One OS end to end" },
        ],
      },
      tabs: {
        label: "The solution",
        h2: "One OS for your entire deal.",
        cta: "See the demo →",
        viewDetail: "Explore",
        viewDetailSuffix: "in depth →",
        tabLabels: ["AI Due Diligence", "Deal Management", "Modelling", "Reporting", "Security"],
        items: [
          {
            scenario: "It's 9am. An 800-document data room just landed in your inbox. Without DEALYSE: four advisory firms, six weeks, €150,000. With DEALYSE: four AI agents run in parallel. By 1pm, your report is ready.",
            bullets: [
              "Drag & drop upload — all formats (PDF, Excel, Word, ZIP)",
              "4 specialized agents in parallel — Financial, Legal, Operational, Synthesis",
              "Cross-document red flags detected automatically",
              "Sector benchmarks integrated — automatic comparison",
              "Contextual chat per document",
              "Professional PDF report in 1 click",
            ],
          },
          {
            scenario: "You're managing eight mandates simultaneously. Each deal has its own deadlines, NDAs, and buyers. One missed email can cost a deal. DEALYSE centralizes everything: no more surprises, no more oversights, zero missed opportunity.",
            bullets: [
              "Visual Kanban pipeline — Origination → LOI → DD → IC → Closing",
              "NDA tracking + integrated e-signature",
              "Automatic alerts on every critical deadline",
              "Full auditable history — every action traced",
              "Real-time team collaboration with task assignment",
              "Unified view of all your deals on one screen",
            ],
          },
          {
            scenario: "The DD is done. Before, your analyst spent two days re-entering numbers into Excel. Now, the LBO model is ready in 10 minutes — pre-filled from your data room.",
            bullets: [
              "LBO model auto-populated from DD metrics",
              "3 scenarios (bull / base / bear) generated in 1 click",
              "Sensitivity tables on key variables",
              "Integrated DCF with WACC and terminal growth",
              "Clean Excel export, versioned, committee-ready",
              "Full version history of every model iteration",
            ],
          },
          {
            scenario: "The committee meets in two hours. Your analyst is still drafting the memo. With DEALYSE, the IC memo was ready 30 minutes after the DD — structured, argued, ready to present.",
            bullets: [
              "IC memo generated automatically from DD and model",
              "IC slides in PowerPoint — branded, presentation-ready",
              "Real-time portfolio dashboard — KPIs across all holdings",
              "Automated LP reporting — standard format, 1-click export",
              "PDF / PowerPoint / Word export to match committee preferences",
              "Auto-updated when new data arrives",
            ],
          },
          {
            scenario: "An LP asks where their data is hosted. You answer: in a dedicated Palantir Foundry tenant, in Europe, AES-256 encrypted, with a full audit trail. The conversation ends there.",
            bullets: [
              "Data hosted exclusively within the European Union",
              "AES-256 encryption — at rest and in transit",
              "Full exportable audit trail — every action traced",
              "Zero post-deal retention — deletion on demand",
              "Deployable in your existing Foundry tenant",
              "GDPR & AI Act compliant — natively",
            ],
          },
        ],
      },
      foundry: {
        label: "Infrastructure",
        h2: "Why Palantir Foundry — the core argument",
        sub: "Most AI tools for finance are dressed-up chatbots. DEALYSE runs on Palantir Foundry — used by the CIA, the NHS, and the world's largest enterprises to manage their most critical data.",
        cards: [
          { title: "Total sovereignty", desc: "Your data never leaves your secure environment. Zero exfiltration to third-party APIs." },
          { title: "Cumulative intelligence", desc: "Each deal enriches the ontology. Your knowledge accumulates — unlike chatbots that forget everything." },
          { title: "AIP orchestrated agents", desc: "Enterprise-grade orchestration of 4 specialized agents in parallel. Not a GPT-4 wrapper." },
        ],
        link: "Full architecture →",
      },
      segments: {
        label: "Solutions",
        h2: "Built for your business.",
        cta: "See the solution →",
      },
      useCases: {
        label: "Use Cases",
        h2: "Real results. Measured.",
        link: "All use cases →",
        cardCta: "See details →",
      },
      pricing: {
        label: "Pricing",
        h2: "Simple. Transparent.",
        link: "Full details →",
        plans: [
          {
            badge: "To get started",
            name: "Free",
            price: "Free",
            sub: "1 deal · 50 documents",
            features: ["1 data room", "Basic report", "7-day chat"],
            cta: "Start now",
          },
          {
            badge: "Most popular",
            name: "Pro",
            price: "€499",
            sub: "/month",
            features: ["Unlimited deals", "4 AI agents", "LBO + IC memo", "Priority support"],
            cta: "14-day trial",
          },
          {
            badge: "Large funds",
            name: "Enterprise",
            price: "Custom",
            sub: "Dedicated Foundry tenant",
            features: ["Private tenant", "SSO / SAML", "99.9% SLA", "Account manager"],
            cta: "Contact us",
          },
        ],
      },
      integrations: {
        label: "Integrations",
        h2: "Connected to your stack.",
      },
      ctaFinal: {
        h2a: "Your next deal.",
        h2b: "In minutes.",
        sub: "Start with a free POC on your next deal. Results guaranteed in 4 hours.",
        ctaPrimary: "Start my free POC →",
        ctaSecondary: "View use cases",
        stats: [
          { value: "Free", label: "On your first deal" },
          { value: "4 hours", label: "Guaranteed results" },
          { value: "24h", label: "Response time" },
        ],
      },
    },
    // Legacy keys — kept for compatibility
    hero: {
      badge: "Powered by AIP — Palantir Foundry",
      h1a: "Analyze a full data room",
      h1b: "in 4 hours.",
      sub: "Financial, legal and operational due diligence — fully automated. Zero Excel. Zero delay.",
      ctaPrimary: "See the interactive demo",
      ctaSecondary: "Request access",
      stat1: "847", stat1label: "documents analyzed",
      stat2: "4h", stat2label: "per deal on average",
      stat3: "91%", stat3label: "detection accuracy",
    },
    problem: {
      label: "Before DEALYSE", title: "Traditional due diligence",
      subtitle: "A manual, slow, and costly process — unchanged for 20 years.",
      items: ["3 to 6 weeks of work", "4 coordinated advisory firms", "€150,000 in fees", "Data scattered in Excel", "Red flags missed for lack of time"],
      solutionLabel: "With DEALYSE", solutionTitle: "Augmented due diligence",
      solutionSubtitle: "An AI agent deployed on Palantir Foundry, operational in hours.",
      solutionItems: ["4 hours of complete analysis", "A single unified tool", "Fraction of the traditional cost", "Structured and auditable ontology", "Zero missed red flags"],
    },
    how: {
      title: "Three steps.", titleAccent: "One outcome.",
      steps: [
        { num: "01", title: "Upload your data room", desc: "ZIP, structured folder or direct VDR connection. All formats accepted — PDF, Excel, Word, PowerPoint." },
        { num: "02", title: "The agent analyzes everything", desc: "Financial, legal, operational — simultaneously. 4 specialized agents in parallel, in real time." },
        { num: "03", title: "Report ready in 4 hours", desc: "Exportable PDF, detailed scoring, prioritized red flags, contextual chat with every document." },
      ],
    },
    features: {
      title: "Everything you need.",
      subtitle: "A complete platform built for mid-market M&A teams.",
      items: [
        { title: "0–100 scoring per dimension", desc: "Financial, legal, operational, HR, IT. Every score justified and auditable." },
        { title: "Automatic risk detection", desc: "Ambiguous clauses, customer concentration, off-balance-sheet debt, cross-document inconsistencies." },
        { title: "Integrated sector benchmarks", desc: "Instantly compare the target against industry standards." },
        { title: "Contextual chat", desc: "Query your documents in plain language." },
        { title: "LP-ready report", desc: "One-click export. Professional format. Ready to present in investment committee." },
        { title: "Sovereign data", desc: "Hosted on Palantir Foundry. Native audit trail." },
      ],
    },
    social: {
      title: "Used by mid-market M&A teams",
      subtitle: "Funds that have transformed their due diligence process.",
      quotes: [
        { text: "What used to take 3 weeks with 2 analysts is now done in a day.", author: "Head of Investments", fund: "Mid-market fund, €800M AUM" },
        { text: "The quality of the reports is directly presentable to the committee.", author: "Partner, M&A", fund: "Corporate Strategy, €2Bn+ AUM" },
      ],
    },
    pricing: {
      title: "Transparent pricing.",
      subtitle: "Start with a free POC on your next deal.",
      plans: [
        { badge: "To get started", name: "Free POC", price: "Free", priceSub: "On your first deal", features: ["1 complete data room", "PDF report included", "Up to 500 documents", "Dedicated support"], cta: "Start now", highlight: false },
        { badge: "Most popular", name: "Per Transaction", price: "€8,000", priceSub: "per transaction", features: ["Unlimited data room", "4 analysis agents", "Sector benchmarks", "Contextual chat", "Exportable PDF report", "Priority support"], cta: "Request a demo", highlight: true },
        { badge: "For active funds", name: "Retainer", price: "Custom", priceSub: "2–5 deals / month", features: ["Unlimited deals", "Dedicated onboarding", "VDR integration", "API access", "Account manager", "Guaranteed SLA"], cta: "Contact us", highlight: false },
      ],
    },
    cta: {
      title: "Your next deal deserves better than Excel.",
      subtitle: "Start with a free POC on your next deal. Results guaranteed in 4 hours.",
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
      tagline: "The first Deal OS powered by Palantir Foundry.",
      solutions: "Solutions",
      product: "Product",
      resources: "Resources",
      legal: "Legal",
      resourceLinks: [
        { label: "Use cases", href: "/use-cases" },
        { label: "Blog", href: "/blog" },
        { label: "Palantir Foundry", href: "/foundry" },
        { label: "About", href: "/about" },
      ],
      legalLinks: [
        { label: "Legal notice", href: "/mentions-legales" },
        { label: "Privacy policy", href: "/confidentialite" },
      ],
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
