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
        index: "1.3",
        title: "Quand les filtres échouent : l'anomalie contextuelle comme nouveau signal",
        description: "20 % des emails malveillants franchissent les filtres techniques. Le signal d'alerte n'est plus la faute de syntaxe — c'est l'anomalie contextuelle. Les équipes doivent apprendre à détecter l'incohérence, pas l'imperfection.",
        layout: {
          type: "three-column",
          leftCard: {
            color: "#E2F163",
            content: { type: "stat", value: "20%", label: "des emails malveillants passent les filtres techniques" },
          },
          middleCards: [
            {
              color: "#7774FF",
              content: { type: "quote", text: "Le signal d'alerte n'est plus la faute de syntaxe : c'est l'anomalie contextuelle", source: "SoSafe" },
            },
            {
              color: "#232323",
              content: { type: "quote", text: "Les simulations classiques ne préparent plus aux attaques ultra-personnalisées sur canaux privés", source: "Technadu" },
            },
            {
              color: "#AA96F8",
              content: { type: "quote", text: "Former à la \"pause cognitive\" avant toute action sensible devient la priorité pédagogique", source: "Technadu, SANS" },
            },
          ],
          rightCards: [
            {
              color: "#AA96F8",
              content: { type: "stat", value: "4,6h", label: "temps médian pour cliquer sur un phishing après réception" },
            },
            {
              color: "#7774FF",
              content: { type: "quote", text: "Attackers are no longer testing if employees can spot a fake email; they are testing if they can manipulate how they think.", source: "Technadu, avril 2026" },
            },
          ],
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
    subTendancies: [
      {
        index: "2.1",
        title: "Des programmes encore peu matures, mais un impact prouvé",
        description: "La majorité des programmes de sensibilisation restent au stade basique. Pourtant, ceux qui atteignent l'optimisation produisent des résultats mesurables — réduction d'incidents, changement de comportement réel.",
        layout: {
          type: "three-cards",
          cards: [
            {
              color: "#7774FF",
              content: { type: "stat", value: "325", label: "programmes sur 2 700 au stade \"optimisation\"", source: "SANS" },
              summary: "Des programmes d'excellence encore rares",
            },
            {
              color: "#FFA7DC",
              content: {
                type: "bar-chart",
                title: "Average Program Maturity Levels",
                data: [
                  { label: "Non-existant", value: 95 },
                  { label: "Compliance", value: 602 },
                  { label: "Behavior", value: 1075 },
                  { label: "Culture", value: 666 },
                  { label: "Optimization", value: 325 },
                ],
              },
              summary: "Niveau de maturité des programmes",
            },
            {
              color: "#E2F163",
              content: { type: "stat", value: "67%", label: "des organisations voient une réduction d'incidents après formation", source: "Fortinet" },
              summary: "La formation réduit les incidents mesurés",
            },
            {
              color: "#AA96F8",
              content: { type: "quote", text: "Completion is not an outcome; changed behaviour is.", source: "CyberDexterity / itweb, avril 2026" },
              summary: "L'enjeu est le comportement, pas la complétion",
            },
            {
              color: "#DDB7F0",
              content: {
                type: "bullets",
                items: [
                  { text: "Le SBCP (Security Behavior & Culture Program) remplace le SAT : motivation avant information", source: "Beauceron" },
                  { text: "Modèle B.J. Fogg : Motivation + Capacité + Déclencheur = comportement réel", source: "Beauceron" },
                  { text: "70% des leaders : la cyber est une responsabilité partagée, mais 26% n'agissent pas en conséquence", source: "Fortinet" },
                ],
              },
              summary: "Ce que ça change en pratique",
            },
          ],
        },
      },
      {
        index: "2.2",
        title: "La mesure comportementale comme moteur d'amélioration continue",
        description: "Les nudges en temps réel et le phishing adaptatif transforment la sensibilisation. La donnée comportementale pilote les contenus et révèle l'état réel de la culture — le taux de signalement en est le baromètre.",
        layout: {
          type: "stats-grid-inverted",
          leftCard: {
            title: "Ce que la donnée comportementale révèle",
            paragraphs: [
              "La donnée comportementale pilote l'amélioration des contenus et la cadence — pas la surveillance individuelle.",
              "Cycle continu : Identifier les lacunes → Adapter les contenus → Mesurer les comportements → Améliorer (GovInsider)",
            ],
          },
          cards: [
            {
              color: "white",
              content: { type: "stat", value: "−38%", label: "de taux de clic grâce aux nudges en temps réel", source: "Beauceron" },
            },
            {
              color: "blue",
              content: { type: "stat", value: "+30%", label: "de taux de signalement avec le phishing adaptatif", source: "Beauceron" },
            },
            {
              color: "blue",
              content: { type: "quote", text: "La culture de sécurité se mesure à ce que les gens font quand personne ne regarde — pas à ce qu'ils ont coché dans un LMS.", source: "SANS Security Awareness Report 2025" },
            },
            {
              color: "white",
              content: { type: "quote", text: "Taux de signalement = baromètre de la confiance : plus les collaborateurs signalent, plus la culture est ancrée.", source: "SANS" },
            },
          ],
        },
      },
      {
        index: "2.3",
        title: "Le micro-learning et la fréquence comme leviers d'ancrage",
        description: "La durée et la cadence des formations comptent autant que le contenu. Au-delà de 60 min/an, l'engagement chute. Le micro-learning espacé de 90 jours ancre durablement les comportements.",
        layout: {
          type: "tilted-cards",
          kicker:"Sous-tendance 2.3",
          headline:"La donnée comportementale",    
          cards: [
            {
              title: "3,5 min",
              content: "Durée idéale par module, espacé de 90 jours",
              source: "Beauceron",
              icon: "timer",
            },
            {
              title: "46%",
              content: "Des organisations forment désormais trimestriellement",
              source: "Fortinet",
              icon: "calendar",
            },
            {
              title: "Durée optimale",
              content: "People who took more than 1 hour of training in a given year saw weaker results than people whose training time fell between 30–35 minutes.",
              source: "Beauceron Security Report 2025",
              icon: "book",
            },
            {
              title: "Seuil de saturation",
              content: "Au-delà de 60 min/an, l'engagement chute et le risque augmente",
              source: "Beauceron",
              icon: "warning",
            },
            {
              title: "93%",
              content: "Des employés ne terminent pas l'intégralité de leur parcours de formation",
              source: "Fortinet",
              icon: "chart",
            },
            {
              title: "Formats efficaces",
              content: "Présentiel (53%), e-learning (52%), phishing simulé (45%)",
              source: "Fortinet",
              icon: "graduation",
            },
          ],
        },
      },
      {
        index: "2.4",
        title: "La bonne fréquence et les bons formats changent tout",
        description: "Le micro-learning espacé, la durée courte et les formats hybrides maximisent l'engagement et limitent la saturation.",
        layout: {
          type: "newspaper",
          kicker: "Sous-tendance 2.4",
          headline: "Fréquence, durée et formats :",
          subheadline: " les vrais leviers de la sensibilisation",
          columns: [
            {
              stat: "3,5 min",
              content: "Par module, espacés de 90 jours : la durée idéale pour ancrer les réflexes et maintenir l'attention. 46% des organisations forment leurs équipes de manière trimestrielle.",
              source: "Beauceron / Fortinet",
            },
            {
              stat: "93%",
              content: "Des employés ne terminent pas l'intégralité de leur parcours de formation. Au-delà de 60 min par an, l'engagement chute et le risque augmente.",
              source: "Beauceron / Fortinet",
            },
            {
              content: "Formats de sensibilisation les plus efficaces",
              source: "Fortinet",
              items: [
                { label: "53%", text: "Session en présentiel" },
                { label: "52%", text: "E-learning" },
                { label: "45%", text: "Phishing simulé" },
              ],
            },
          ],
          pullQuote: {
            text: "People who took more than 1 hour of training in a given year saw weaker results than people whose training time fell between 30-35 minutes.",
            source: "Beauceron Security Report 2025",
          },
        },
      },
    ],
  },
  {
    index: "03",
    title: "AI for Cyber, Cyber for AI : l'IA, menace et accélérateur pour toutes les équipes cyber",
    subtitle: "Une même technologie qui renforce la défense et augmente la puissance des attaques.",
    accent: "#E2F163",
    background: "#151515",
    illustrationSide: "right",
    subTendancies: [
      {
        index: "3.1",
        title: "L'IA transforme les attaquants en machines autonomes",
        description: "Les agents IA prennent désormais des décisions tactiques sans supervision humaine, accélérant la vitesse et la furtivité des intrusions.",
        layout: {
          type: "four-plus-two",
          topCards: [
            {
              color: "#E2F163",
              content: {
                type: "stat",
                value: "29 min",
                label: "Temps de breakout moyen — record absolu à 27 secondes",
                source: "CrowdStrike",
              },
            },
            {
              color: "#7774FF",
              content: {
                type: "stat",
                value: "82%",
                label: "Des détections sont désormais sans malware",
                source: "CrowdStrike",
              },
            },
            {
              color: "#E2F163",
              content: {
                type: "quote",
                text: "The lead hacker is no longer a person in a hoodie; it's a script that thinks.",
                source: "Smart Brief, avril 2026",
              },
            },
            {
              color: "#7774FF",
              content: {
                type: "bullets",
                items: [
                  {
                    text: "Passage du « Cyborg Hacking » à l'« Autonomous Hacking » : l'agent IA prend les décisions tactiques sans supervision humaine",
                    source: "Smart Brief",
                  },
                ],
              },
            },
          ],
          bottomCards: [
            {
              label: "Technique émergente",
              color: "#EFEFEF",
              content: {
                type: "bullets",
                items: [
                  {
                    text: "Technique « misoperation » : manipulation des logiques industrielles sans déployer de fichier malveillant — attribution quasi impossible",
                    source: "RSAC 2026",
                  },
                ],
              },
            },
            {
              label: "Chiffres 2025",
              color: "#E8ECDF",
              content: {
                type: "bullets",
                items: [
                  { text: "+89% d'attaques utilisant l'IA", source: "CrowdStrike" },
                  { text: "+38% d'intrusions Chine-nexus", source: "CrowdStrike" },
                  { text: "+130% d'attaques Corée du Nord", source: "CrowdStrike" },
                ],
              },
            },
          ],
        },
      },
      {
        index: "3.2",
        title: "Mythos et la découverte autonome de vulnérabilités : l'IA dépasse les meilleurs experts",
        description: "Les modèles IA franchissent le seuil critique : ils trouvent et exploitent des zero-days de manière autonome, surpassant les ingénieurs les plus qualifiés.",
        layout: {
          type: "vertical-bands-inverted",
          bands: [
            {
              color: "#E2F163",
              position: "top",
              content: {
                type: "stat",
                value: "181",
                label: "Exploits fonctionnels produits là où le modèle précédent en produisait quasi zéro",
                source: "Anthropic",
              },
            },
            {
              color: "#AA96F8",
              position: "bottom",
              content: {
                type: "stat",
                value: "83%",
                label: "Des vulnérabilités exploitées avec succès dès le premier essai",
                source: "ArmorCode",
              },
            },
            {
              color: "#7774FF",
              position: "center",
              content: {
                type: "quote",
                text: "AI models have reached a level where they can surpass all but the most skilled humans at finding and exploiting software vulnerabilities.",
                source: "Anthropic / ArmorCode, avril 2026",
              },
            },
          ],
          bullets: [
            {
              text: "Mythos a trouvé des zero-days dans tous les OS et navigateurs majeurs, dont un bug vieux de 27 ans dans OpenBSD — de manière totalement autonome, sur simple prompt",
              source: "red.anthropic.com",
            },
            {
              text: "99%+ des vulnérabilités découvertes non encore patchées au moment de la découverte — des ingénieurs sans formation sécurité ont pu générer des exploits fonctionnels",
              source: "CETaS / Turing",
            },
            {
              text: "Project Glasswing : AWS, Apple, Google, Microsoft, NVIDIA utilisent Mythos pour sécuriser leurs logiciels — mais le même outil serait une arme redoutable en mains malveillantes",
              source: "The Hacker News",
            },
          ],
        },
      },
      {
        index: "3.3",
        title: "L'IA au service de la défense : accélérateur humain, pas remplaçant",
        description: "L'IA redéfinit les métiers cyber en augmentant les capacités défensives — détection, triage, CTI, sensibilisation — tout en révélant de nouveaux risques internes.",
        layout: {
          type: "bento",
          cards: [
            {
              color: "#151515",
              content: {
                type: "stat",
                value: "−40%",
                label: "De taux de clic avec analyse automatisée et feedback comportemental en temps réel",
                source: "Beauceron",
              },
            },
            {
              color: "#FFA7DC",
              content: {
                type: "stat",
                value: "946",
                label: "Praticiens citent le manque de personnel comme frein n°1",
                source: "SANS 2025",
              },
            },
            {
              color: "#AA96F8",
              content: {
                type: "stat",
                value: "88%",
                label: "Des organisations : l'usage de l'IA par les attaquants a aidé les employés à mieux comprendre l'importance de la sensibilisation",
                source: "Fortinet",
              },
            },
            {
              color: "#E2F163",
              content: {
                type: "bullets",
                items: [
                  {
                    text: "L'IA accélère la détection, le triage des alertes, l'analyse CTI, la réponse à incident et la génération de contenus de sensibilisation",
                    source: "SANS, Beauceron",
                  },
                  {
                    text: "Shadow AI : des collaborateurs utilisent des outils GenAI non approuvés avec des données sensibles — un risque interne que l'IA peut aussi aider à détecter",
                    source: "HBR",
                  },
                ],
              },
            },
            {
              color: "#DDB7F0",
              content: {
                type: "quote",
                text: "AI-powered vulnerability discovery at this scale makes the operational discipline of prioritizing, triaging, and remediating vulnerabilities more important than ever before. Not less.",
                source: "ArmorCode, avril 2026",
              },
            },
          ],
        },
      },
    ],
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
