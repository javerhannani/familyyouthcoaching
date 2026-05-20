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
  email: "info@familyyouthcoaching.nl",
  year: 2026,

  seo: {
    title: "Family & Youth Coaching — Fatima Elouahmani",
    description:
      "Praktische coaching voor jongeren van 12 t/m 27 jaar en hun gezinnen. Persoonlijke begeleiding op locatie of online in Nederland.",
    siteUrl: "https://familyyouthcoaching.nl",
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
    eyebrow: "Family & Youth Coaching · Sinds 2019",
    headlineLine1: "Family",
    headlineLine2Prefix: "& Youth ",
    headlineAccent: "Coaching",
    ledeHtml:
      "Praktische coaching voor jongeren van <b>12 t/m 27 jaar</b> en hun gezinnen — om zelf de regie te nemen over hun leven, hun kracht te ontdekken en hun unieke pad te bewandelen.",
    meta: [
      { label: "Locatie", value: "Praktijk & online · Nederland" },
      { label: "Talen", value: "Nederlands · Engels" },
      { label: "Voor", value: "Jongeren · Ouders · Gezinnen" },
    ],
    primaryCta: { href: "#contact", label: "Plan een kennismaking" },
    ghostCta: { href: "#diensten", label: "Bekijk diensten" },
    keywords: [
      "Zelfvertrouwen",
      "Verbinding",
      "Regie",
      "Persoonlijke groei",
      "Communicatie",
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
      "Ik ben Fatima Elouahmani — coach voor jongeren en gezinnen die op zoek zijn naar richting, rust en verbinding.",
    paragraphs: [
      "Als coach begeleid ik jongeren (12 t/m 27 jaar) en gezinnen om zelf de regie te nemen over hun leven. Samen werken we aan persoonlijke groei, zelfvertrouwen en het versterken van onderlinge relaties.",
      "Ik help jongeren hun kracht te ontdekken en hun unieke pad te bewandelen — op een manier die bij hén past. Geen standaard methodes, wel echte gesprekken, praktische oefeningen en ruimte voor wat er écht speelt.",
    ],
    signature: "Fatima Elouahmani",
    credentials: [
      { label: "Specialisatie", value: "Jongeren & Gezin" },
      { label: "Aanpak", value: "Persoonlijk · Praktisch" },
      { label: "Talen", value: "Nederlands · Engels" },
      { label: "Sinds", value: "2019" },
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
        body: "Voor jongeren van <b>12 t/m 27 jaar</b> die vastlopen, twijfelen of meer uit zichzelf willen halen. We werken aan zelfvertrouwen, identiteit, school of werk, en het maken van keuzes die echt bij jou passen.",
        tag: "12 — 27 jaar",
        meta: "1-op-1 · Praktijk of online",
      },
      {
        number: "002",
        title: "Gezinscoaching",
        body: "Voor gezinnen die de onderlinge <b>verbinding willen versterken</b>. Samen kijken we naar communicatiepatronen, rollen en behoeftes — zodat iedereen zich weer gezien en gehoord voelt.",
        tag: "Hele gezin",
        meta: "Op locatie of bij u thuis",
      },
      {
        number: "003",
        title: "Oudergesprekken",
        body: "Voor ouders die zoeken naar handvatten in de opvoeding van een puber of jongvolwassene. Een veilige plek voor reflectie, advies en concrete <b>stappen die werken</b> in jouw situatie.",
        tag: "Individueel of duo",
        meta: "Op afspraak",
      },
    ] as Service[],
    approach: {
      quoteHtml:
        "“Geen standaard methodes, wel <em>echte gesprekken</em> en praktische stappen die bij jou passen.”",
      pillars: [
        { label: "Persoonlijk", description: "Geen template — jouw verhaal staat centraal." },
        { label: "Praktisch", description: "Werkbare oefeningen, direct toepasbaar." },
        { label: "Verbindend", description: "Sterker als individu én als gezin." },
      ] as Pillar[],
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
  },
} as const;
