(() => {
  const externalLink = (href, label) => ({ href, label });

  // Keep translations as trusted local content only. Rich text entries are rendered as DOM nodes.
  globalThis.siteTranslations = {
    en: {
      documentLanguage: 'en-CA',
      pageTitle: 'Evan Suau | Software Developer in Montreal',
      metaDescription:
        'Evan Suau is a software developer in Montreal focused on back-end systems, cloud platforms, and reliable delivery practices.',
      metaKeywords: 'evan suau, software developer, backend developer, cloud computing, devops, montreal, canada',
      portraitAlt: 'Portrait of Evan Suau',
      portraitTitle: 'Photo by Julian Haber',
      locationLabel: 'Montreal, Quebec, Canada',
      subtitle: 'Software Developer @ Intact Lab',
      languageSwitcherLabel: 'Language selector',
      switchToEnglish: 'Switch to English',
      switchToFrench: 'Switch to French',
      aboutTitle: 'About',
      aboutBody1: [
        "I'm a software developer at ",
        externalLink('https://en.wikipedia.org/wiki/Intact_Financial', 'Intact Financial Corporation'),
        ' in Montreal, QC, Canada. As part of ',
        externalLink('https://www.intactfc.com/about-us/intact-lab', 'Intact Lab'),
        ", I help build the back-end systems behind the company's mobile apps.",
      ],
      aboutBody2: [
        'Before that, I was a full-stack developer in the Corporate and Investment Banking division of ',
        externalLink('https://en.wikipedia.org/wiki/Soci%C3%A9t%C3%A9_G%C3%A9n%C3%A9rale', 'Société Générale'),
        ", where I worked on trading systems supporting the firm's capital markets activities in the Americas. I moved to Canada in 2019 after completing my studies and my apprenticeship as a software developer at ",
        externalLink('https://en.wikipedia.org/wiki/BRED_Banque_populaire', 'BRED Banque Populaire'),
        ' in Paris, France.',
      ],
      aboutBody3: [
        'I hold a ',
        externalLink("https://en.wikipedia.org/wiki/Dipl%C3%B4me_d%27Ing%C3%A9nieur", "French engineer's degree"),
        ' (M.Sc.Eng.) in Information Systems from ',
        externalLink('https://episen.u-pec.fr/', "École Supérieure d'Ingénieurs de Paris-Est Créteil"),
        ' with a major in cloud computing.',
      ],
      focusTitle: 'Focus areas',
      badgeSoftware: 'Software engineering',
      badgeDdd: 'Domain-driven design',
      badgeApis: 'APIs & microservices',
      badgeDelivery: 'Continuous delivery',
      badgeCloud: 'Cloud platforms',
      badgeObservability: 'Observability',
      connectTitle: 'Connect',
      contactCopy:
        'The easiest way to reach me is through the profiles below. My PGP public key is also available for encrypted communication.',
      downloadPgp: 'Download PGP public key',
    },
    fr: {
      documentLanguage: 'fr-CA',
      pageTitle: 'Evan Suau | Développeur logiciel à Montréal',
      metaDescription:
        'Evan Suau est un développeur logiciel à Montréal spécialisé en systèmes back-end, plateformes cloud et pratiques de livraison fiables.',
      metaKeywords:
        'evan suau, développeur logiciel, développeur back-end, cloud computing, devops, montréal, montreal, canada',
      portraitAlt: "Portrait d'Evan Suau",
      portraitTitle: 'Photo par Julian Haber',
      locationLabel: 'Montréal, Québec, Canada',
      subtitle: 'Développeur logiciel @ Intact Lab',
      languageSwitcherLabel: 'Sélecteur de langue',
      switchToEnglish: "Passer à l'anglais",
      switchToFrench: 'Passer au français',
      aboutTitle: 'À propos',
      aboutBody1: [
        'Je suis développeur logiciel chez ',
        externalLink('https://fr.wikipedia.org/wiki/Intact_(entreprise)', 'Intact Corporation Financière'),
        " à Montréal au Canada. Au sein d'",
        externalLink('https://www.intactfc.com/fr/a-propos-de-nous/intact-lab', 'Intact Lab'),
        ", je contribue à la création des systèmes back-end derrière les applications mobiles de l'entreprise.",
      ],
      aboutBody2: [
        "Auparavant, j'étais développeur full-stack chez ",
        externalLink('https://fr.wikipedia.org/wiki/Soci%C3%A9t%C3%A9_g%C3%A9n%C3%A9rale', 'Société Générale Corporate & Investment Banking'),
        ', où je travaillais sur des systèmes de trading soutenant les activités de marchés financiers du groupe en Amérique du Nord. Je me suis installé au Canada en 2019 après avoir terminé mes études ainsi que mon apprentissage en développement logiciel chez ',
        externalLink('https://fr.wikipedia.org/wiki/BRED_Banque_populaire', 'BRED Banque Populaire'),
        ' à Paris, en France.',
      ],
      aboutBody3: [
        "Je suis titulaire d'un ",
        externalLink("https://fr.wikipedia.org/wiki/Dipl%C3%B4me_d%27ing%C3%A9nieur_en_France", "diplôme d'ingénieur"),
        " en systèmes d'information de l'",
        externalLink('https://episen.u-pec.fr/', "École Supérieure d'Ingénieurs de Paris-Est Créteil"),
        ', avec une spécialisation en infonuagique.',
      ],
      focusTitle: "Domaines d'expertise",
      badgeSoftware: 'Génie logiciel',
      badgeDdd: 'Conception orientée domaine',
      badgeApis: 'APIs et microservices',
      badgeDelivery: 'Livraison continue',
      badgeCloud: 'Plateformes infonuagiques',
      badgeObservability: 'Observabilité',
      connectTitle: 'Contact',
      contactCopy:
        'Le plus simple pour me joindre est de passer par les profils ci-dessous. Ma clé publique PGP est également disponible pour les communications chiffrées.',
      downloadPgp: 'Télécharger la clé publique PGP',
    },
  };
})();
