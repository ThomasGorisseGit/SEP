import type { Tendency } from "@/types"

export const overviewCards = [
  {
    index: "01",
    title: 'L\'ère du phishing "invisible" ',
    subtitle: "Quand l'IA efface les signaux d'alerte",
    desc: "L'IA a supprimé tous les indices classiques de détection. Le phishing est désormais parfait, personnalisé, multicanal. On ne forme plus à repérer — on forme à douter.",
    count: "3 sous-tendances",
    accent: "#7774FF",
  },
  {
    index: "02",
    title: "De la conformité à la culture cyber",
    subtitle: "Vers une sensibilisation qui change vraiment les comportements",
    desc: "La case à cocher est morte. L'enjeu n'est plus de former pour être conforme — c'est de construire une culture qui ancre des réflexes durables, par la psychologie positive, la gamification et le micro-learning.",
    count: "4 sous-tendances",
    accent: "#aa96f8",
  },
  {
    index: "03",
    title: "AI for Cyber, Cyber for AI",
    subtitle: "L'IA, menace et accélérateur pour toutes les équipes cyber",
    desc: "L'IA est à la fois l'arme la plus puissante des attaquants et le multiplicateur de force le plus décisif pour les défenseurs. Les deux faces sont indissociables — Mythos en est l'illustration la plus récente et la plus saisissante.",
    count: "3 sous-tendances",
    accent: "#ddb7f0",
  },
  {
    index: "04",
    title: "Quand la réglementation",
    subtitle: "Devient le moteur de transformation des programmes",
    desc: "NIS2, AI Act, CRA : pour la première fois, la sensibilisation est une obligation légale avec responsabilité personnelle des dirigeants. Un levier d'émancipation inédit.",
    count: "4 sous-tendances",
    accent: "#ffa7dc",
  },
  {
    index: "05",
    title: "La cyber sort de l'entreprise",
    subtitle: "L'individu comme nouvelle surface d'attaque",
    desc: "Les frontières pro/perso ont disparu. Désinformation, manipulation algorithmique, canaux privés : la cyber devient une compétence de vie, pas seulement professionnelle.",
    count: "3 sous-tendances",
    accent: "#e2f163",
  },
]

export const tendencies: Tendency[] = [
  {
    index: "01",
    title: 'L\'ère du phishing "invisible" : quand l\'IA efface les signaux d\'alerte',
    subtitle: "L'IA a supprimé tous les indices classiques de détection. Le phishing est désormais parfait, personnalisé, multicanal.",
    accent: "#7774FF",
    background: "#151515",
    illustrationSide: "right",
    subTendancies: [
      {
        index: "1.1",
        title: "La personnalisation de masse comme nouvelle arme",
        description: "L'IA permet de générer des milliers de messages uniques, parfaitement rédigés, adaptés au destinataire, à son contexte et à son canal. Le spearphishing, autrefois réservé aux cibles à haute valeur, est désormais accessible à tous les attaquants.",
        layout: {
          type: "stats-grid",
          cards: [
            {
              color: "white",
              content: { type: "stat", value: "54 %", label: "taux de clic avec du phishing IA", source: "versus 12% sans IA" },
            },
            {
              color: "purple",
              content: { type: "stat", value: "× 4.5", label: "la multiplication de l'efficacité des phishing grâce à l'IA" },
            },
            {
              color: "purple",
              content: { type: "stat", value: "80 %", label: "des campagnes de phishing utilisent déjà l'IA", source: "ENISA, 2025" },
            },
            {
              color: "white",
              content: { type: "quote", text: "AI is not just accelerating cyberattacks, it's upgrading them", source: "Microsoft Security Blog, avril 2026" },
            },
          ],
          rightCard: {
            title: "Ce que l'on comprend",
            paragraphs: [
              "L'IA réduit la préparation d'une attaque de plusieurs jours à quelques minutes (ESET).",
              "Les modèles LLM commerciaux et des modèles détournés (WormGPT, FraudGPT) automatisent l'ingénierie sociale (ENISA).",
            ],
          },
        },
      },
      {
        index: "1.2",
        title: "La diversification des canaux email, SMS, voix, image",
        description: "Le phishing ne passe plus uniquement par l'email. Smishing, vishing, quishing (QR codes), injections de calendrier, deepfakes audio/vidéo : chaque canal devient un vecteur potentiel, y compris ceux où les collaborateurs sont le moins vigilants.",
        layout: {
          type: "vertical-bands",
          bands: [
            {
              color: "#7774FF",
              position: "top",
              content: { type: "stat", value: "25M$", label: "transfert frauduleux via deepfake vocal d'un dirigeant", source: "WEF" },
            },
            {
              color: "#AA96F8",
              position: "bottom",
              content: { type: "stat", value: "42,4%", label: "des menaces suivies ciblent le mobile", source: "ENISA" },
            },
            {
              color: "#E2F163",
              position: "top",
              content: { type: "quote", text: "Traditional red flags are disappearing in an era of pixel-perfect deception.", source: "Technology.org, mars 2026" },
            },
          ],
          bullets: [
            { text: "Cas Retool : SMS + deepfake vocal combinés pour contourner la MFA", source: "SoSafe" },
            { text: "Quishing : QR codes malveillants dans des PDF contournent les filtres classiques", source: "ESET" },
            { text: "Volume d'attaques email de masse en baisse, mais SMS et vishing en forte progression", source: "SoSafe" },
          ],
        },
      },
       {
        index: "1.2",
        title: "La diversification des canaux email, SMS, voix, image",
        description: "Le phishing ne passe plus uniquement par l'email. Smishing, vishing, quishing (QR codes), injections de calendrier, deepfakes audio/vidéo : chaque canal devient un vecteur potentiel, y compris ceux où les collaborateurs sont le moins vigilants.",
        layout: {
          type: "three-column",
          leftCard: {
            color: "#7774FF",
            content: {
              type: "stat",
              value: "",
              label: "",
              source: undefined
            }
          },
              
            middleCards: [],
            rightCards: [],
        },
      },
    ],
  },
  {
    index: "02",
    title: "De la conformité à la culture cyber : vers une sensibilisation qui change vraiment les comportements",
    subtitle: "Passer de la case à cocher à une culture durable, avec des réflexes ancrés et une meilleure adoption collective.",
    accent: "#DDB7F0",
    background: "#2B2B2B",
    illustrationSide: "left",
    subTendancies: [],
  },
  {
    index: "03",
    title: "AI for Cyber, Cyber for AI : l'IA, menace et accélérateur pour toutes les équipes cyber",
    subtitle: "Une même technologie qui renforce la défense et augmente la puissance des attaques.",
    accent: "#E2F163",
    background: "#151515",
    illustrationSide: "right",
    subTendancies: [],
  },
  {
    index: "04",
    title: "La réglementation: le moteur de transformation des programmes",
    subtitle: "Quand NIS2, AI Act et CRA deviennent des leviers de changement et structurent les pratiques.",
    accent: "#7774FF",
    background: "#2B2B2B",
    illustrationSide: "left",
    subTendancies: [],
  },
  {
    index: "05",
    title: "La cyber sort de l'entreprise : l'individu comme nouvelle surface d'attaque",
    subtitle: "La cybersécurité dépasse le cadre de l'entreprise et devient une compétence du quotidien.",
    accent: "#DDB7F0",
    background: "#151515",
    illustrationSide: "right",
    subTendancies: [],
  },
]
