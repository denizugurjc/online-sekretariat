export const navLinks = [
  {
    href: "/",
    name: "STARTSEITE",
  },
  {
    href: "/wer-wir-sind",
    name: "WER WIR SIND",
    subRoute: [
      { href: "/wer-wir-sind/team", name: "TEAM" },
      { href: "/wer-wir-sind/erfolge", name: "ERFOLGE" },
    ],
  },
  {
    href: "/was-wir-leisten",
    name: "WAS WIR LEISTEN",
    subRoute: [
      {
        href: "/was-wir-leisten/allgemeine-briefe",
        name: "ALLGEMEINE BRIEFE",
      },
      {
        href: "/was-wir-leisten/personliche-anliegen",
        name: "PERSÖNLICHE ANLIEGEN",
      },
      {
        href: "/was-wir-leisten/amtliche-korrespond",
        name: "AMTLICHE KORRESPOND.",
      },
    ],
  },
  { href: "/preise", name: "PREISE" },
  {
    href: "/so-einfach-gehts",
    name: "SO EINFACH GEHT'S",
    subRoute: [
      {
        href: "/so-einfach-gehts/ihre-privatsphare",
        name: "IHRE PRIVATSPHÄRE",
      },
    ],
  },
  {
    href: "/anfrage",
    name: "ANFRAGE",
    subRoute: [
      {
        href: "/anfrage/kontakt",
        name: "KONTAKT",
      },
    ],
  },
  {
    href: "/agb",
    name: "AGB",
    subRoute: [{ href: "/agb/impressum", name: "IMPRESSUM" }],
  },
];
