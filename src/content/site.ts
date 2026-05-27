/**
 * All editable copy lives here. Fatima updates this single file to change
 * the site's text. Types keep structure consistent across components.
 */

export type Service = {
  number: string;
  title: string;
  body: string;
  tag: string;
  meta: string;
};

export type Pillar = {
  label: string;
  description: string;
};

export type Credential = {
  label: string;
  value: string;
};

export const site = {
  brand: "Fatima Elouahmani",
  tagline: "Family & Youth Coaching",
  email: "info@familyyouthcoaching.com",
  year: 2026,

  seo: {
    title: "Family & Youth Coaching — Fatima Elouahmani",
    description:
      "Coaching voor jongeren (12-27 jaar) en gezinnen. Oplossingsgericht, holistisch, systeemgericht en eclectisch — online en op locatie in Nederland.",
    siteUrl: "https://familyyouthcoaching.com",
    ogImage: "/og-image.png",
  },

  nav: {
    links: [
      { href: "#about", label: "Over mij" },
      { href: "#diensten", label: "Diensten" },
      { href: "#contact", label: "Contact" },
    ],
    cta: { href: "#contact", label: "Plan kennismaking" },
  },

  hero: {
    eyebrow: "Jouw pad · Jouw tempo · Jouw toekomst",
    headlineLine1: "Family",
    headlineLine2Prefix: "& Youth ",
    headlineAccent: "Coaching",
    ledeHtml:
      "Praktische coaching voor jongeren van <b>12 t/m 27 jaar</b> en hun gezinnen — om zelf het heft in eigen handen te nemen, hun kracht te ontdekken en hun unieke pad te bewandelen.",
    meta: [
      { label: "Locatie", value: "Online & op locatie · Nederland" },
      { label: "Talen", value: "Nederlands · Engels" },
      { label: "Voor", value: "Jongeren · Ouders · Gezinnen" },
    ],
    primaryCta: { href: "#contact", label: "Plan een kennismaking" },
    ghostCta: { href: "#diensten", label: "Bekijk diensten" },
    keywords: [
      "Zelfvertrouwen",
      "Verbinding",
      "Eigen regie",
      "Persoonlijke groei",
      "Autonomie",
      "Identiteit",
      "Eigen pad",
      "Veilige ruimte",
    ],
  },

  about: {
    sectionNumber: "01 — Over mij",
    titlePrefix: "Even",
    titleSuffix: " kennismaken.",
    lead:
      "Mijn naam is Fatima Elouahmani — coach voor jongeren en gezinnen die op zoek zijn naar richting, rust en verbinding.",
    paragraphs: [
      "Positief, energiek en gedreven: voor mij is niets onmogelijk als het gaat om het ondersteunen van jongeren en gezinnen. Met meer dan tien jaar ervaring binnen de gesloten jeugdzorgplus zet ik mij dagelijks met passie in om jongeren te begeleiden en te coachen. Tegenwoordig doe ik dit voornamelijk één-op-één, waarbij luisteren, vertrouwen en het serieus nemen van de autonomie en identiteit van de jongere centraal staan.",
      "Samen kijken we naar de doelen die een jongere wil bereiken en welke stappen nodig zijn om daar te komen. Ik geloof in maatwerk, samenwerking en het versterken van eigen kracht. Naast mijn ervaring binnen de jeugdzorgplus heb ik als IAG'er gezinnen begeleid en ondersteund bij het behalen van hun doelen.",
      "In mijn vrije tijd houd ik van voetbal, mountainbiken en reizen. Uitdagingen ga ik niet uit de weg — juist daarin zie ik kansen om te groeien en anderen verder te helpen.",
    ],
    signature: "Fatima Elouahmani",
    portrait: {
      src: "/img/fatima-portrait-960.jpg",
      srcSmall: "/img/fatima-portrait-480.jpg",
      alt: "Portret van Fatima Elouahmani",
    },
    credentials: [
      { label: "Specialisatie", value: "Jongeren & Gezin" },
      { label: "Ervaring", value: "10+ jaar jeugdzorg" },
      { label: "Aanpak", value: "Eclectisch · maatwerk" },
      { label: "Talen", value: "Nederlands · Engels" },
    ] as Credential[],
  },

  services: {
    sectionNumber: "02 — Diensten",
    titlePrefix: "Wat ik ",
    titleAccent: "aanbied",
    titleSuffix: ".",
    items: [
      {
        number: "001",
        title: "Jongerencoaching",
        body: "Voor jongeren van <b>12 t/m 27 jaar</b> die vastlopen, twijfelen of meer uit zichzelf willen halen. Samen werken we aan zelfbewustzijn, identiteit en eigen regie — vanuit hun waarden, wensen en kracht. Geen standaard traject: mijn coaching sluit aan bij jou.",
        tag: "12 — 27 jaar",
        meta: "1-op-1 · Online of op locatie",
      },
      {
        number: "002",
        title: "Gezinscoaching",
        body: "Voor gezinnen die de onderlinge <b>verbinding willen versterken</b>. Samen kijken we naar communicatiepatronen, rollen en behoeftes, doorbreken we vastzittende patronen en bouwen we aan een gezonde basis — zodat iedereen zich weer gezien en gehoord voelt.",
        tag: "Hele gezin",
        meta: "Op locatie of bij u thuis",
      },
      {
        number: "003",
        title: "Oudergesprekken",
        body: "Voor ouders die zoeken naar handvatten in de opvoeding van een puber of jongvolwassene. Praktische tools en inzichten om je kind op een positieve manier te begeleiden — en zo het <b>vertrouwen in het ouderschap</b> én de band met je kind te versterken.",
        tag: "Individueel of duo",
        meta: "Op afspraak",
      },
    ] as Service[],
    approach: {
      quoteHtml:
        "“Geen standaard methodes, wel <em>echte gesprekken</em> en praktische stappen die bij jou passen.”",
      pillars: [
        {
          label: "Oplossingsgericht",
          description: "We focussen op wat wél werkt en zetten uitdagingen om in kansen.",
        },
        {
          label: "Holistisch",
          description: "Fysiek, emotioneel, mentaal én sociaal — alles weegt mee.",
        },
        {
          label: "Systeemgericht",
          description: "Gezin, school en omgeving horen erbij — voor duurzame verandering.",
        },
        {
          label: "Eclectisch",
          description: "Geen vaste methode — ik combineer bewust wat bij jou past.",
        },
      ] as Pillar[],
      usps: [
        "Oplossingsgericht, holistisch, systeemgericht & eclectisch",
        "Methode-overstijgend, op maat",
        "Focus op eigen kracht & autonomie",
        "Voor jongere én gezin",
      ],
    },
  },

  contact: {
    sectionNumber: "03 — Contact",
    titlePrefix: "Laten we ",
    titleAccent: "praten",
    titleSuffix: ".",
    leadHtml:
      "Wil je weten of coaching <em>iets voor jou of je gezin is?</em> Stuur een mailtje voor een vrijblijvende kennismaking — we kijken samen wat past.",
    mailLabel: "Stuur een bericht",
    mailSubject: "Kennismakingsgesprek aanvragen",
    mailBody:
      "Hoi Fatima,\n\nIk zou graag een vrijblijvend kennismakingsgesprek inplannen.\n\nKorte introductie:\n— Voor wie: \n— Wat speelt er: \n\nMet vriendelijke groet,\n",
  },
} as const;
