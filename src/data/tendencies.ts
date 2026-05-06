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
            textColor:"#151515",
            content: { type: "stat", value: "20%", label: "des emails malveillants passent les filtres techniques" },
          },
          middleCards: [
            {
              color: "#7774FF",
              textColor:"white",
              content: { type: "quote", text: "Le signal d'alerte n'est plus la faute de syntaxe : c'est l'anomalie contextuelle", source: "SoSafe" },
            },
            {
              color: "#232323",
              textColor:"white",
              content: { type: "quote", text: "Les simulations classiques ne préparent plus aux attaques ultra-personnalisées sur canaux privés", source: "Technadu" },
            },
            {
              color: "#AA96F8",
              content: { type: "quote", text: "Former à la \"pause cognitive\" avant toute action sensible devient la priorité pédagogique", source: "Technadu, SANS" },
            },
          ],
          rightCards: [
            {
              textColor:"white",
              color: "#AA96F8",
              content: { type: "stat", value: "4,6h", label: "temps médian pour cliquer sur un phishing après réception" },
            },
            {
              color: "#7774FF",              
              textColor:"white",
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
    accent: "#FFA7DC",
    background: "#2B2B2B",
    illustrationSide: "left",
    subTendancies: [
      {
        index: "4.1",
        title: "NIS2 : l'obligation légale de sensibiliser",
        description: "Pour la première fois, la sensibilisation n'est plus facultative. NIS2 en fait une obligation légale avec responsabilité personnelle des dirigeants.",
        layout: {
          type: "dual-stats",
          stats: [
            { type: "stat", value: "100%", label: "des organisations de 250+ salariés concernées par NIS2", source: "ENISA" },
            { type: "stat", value: "2024", label: "année d'entrée en vigueur de NIS2", source: "UE" },
          ],
          quote: {
            type: "quote",
            text: "NIS2 transforms security awareness from a compliance checkbox into a legal mandate with executive accountability. It's the beginning of the end for theater.",
            source: "Cybersecurity & Infrastructure Security Agency, 2025",
          },
          bullets: {
            type: "bullets",
            items: [
              { text: "Responsabilité personnelle des COMEX : une première en réglementation cyber", source: "NIS2 Directive" },
              { text: "Sensibilisation doit être documentée, mesurée et adaptée aux rôles", source: "ANSSI" },
              { text: "Audits réguliers et preuves de conformité : plus de 'déclaratif'", source: "Deloitte" },
            ],
          },
        },
      },
      {
        index: "4.2",
        title: "AI Act : cadre de conformité pour les systèmes IA en cybersécurité",
        description: "L'AI Act crée un cadre pour les systèmes IA utilisés en défense comme en attaque. La sensibilisation doit intégrer la culture du risque IA.",
        layout: {
          type: "three-column",
          leftCard: {
            color: "#E2F163",
            textColor:"#151515",
            content: { type: "quote", text: "Agentic AI represents a shift from models that suggest to models that act — organizations must define the legal agency of these systems before full-scale deployment.", source: "Reuters, avril 2026" },
          },
          middleCards: [
            {
              color: "#FFA7DC",
              textColor: "#FFFFFF",
              content: { type: "percentage-chart", value: 96, label: "des orgs préparent des politiques d'usage IA" },
            },
            {
              color: "#AA96F8",
              textColor:"#FFFFFF",
              content: { type: "percentage-chart", value: 53, label: "forment déjà sur l'usage sécurisé des outils GenAI" },
            },
          ],
          rightCards: [
            {
              color: "#DDB7F0",
              textColor:"#FFFFFF",
              content: { type: "bullets", items: [
                { text: "Risque de \"hallucination d'action\" : un agent IA exécute des commandes incorrectes de manière irréversible", source: "Reuters" },
              ]},
            },
            {
              color: "#151515",
              textColor:"#FFFFFF",
              content: { type: "bullets", items: [
                { text: "Shadow AI : le plus grand risque vient des employés utilisant des outils GenAI non approuvés avec des données sensibles", source: "HBR" },
              ]},
            },
            {
              color: "#7774FF",
              textColor:"#FFFFFF",
              content: { type: "bullets", items: [
                { text: "L'AI Act impose transparence et formation pour les systèmes IA à haut risque (recrutement, surveillance, décision)", source: "AI Act" },
              ]},
            },
          ],
        },
      },
      {
        index: "4.3",
        title: "Souveraineté numérique et conflits législatifs : les angles morts de NIS2",
        description: "Entre l'Art.16bis qui bloque la transposition NIS2 en France et le Cloud Act américain, les équipes cyber naviguent dans un flou législatif que l'ANSSI tente de cartographier avec ses outils opérationnels.",
        layout: {
          type: "vertical-bands",
          bands: [
            {
              color: "#FFA7DC",
              position: "top",
              content: {
                type: "stat",
                value: "Art.16bis",
                label: "bloque la transposition NIS2 en France : chiffrement vs accès étatique",
              },
            },
            {
              color: "#E2F163",
              position: "bottom",
              content: {
                type: "stat",
                value: "EUCS",
                label: "Relance du label High+ pour protéger des lois extraterritoriales",
              },
            },
            {
              color: "#DDB7F0",
              position: "center",
              content: {
                type: "quote",
                text: "Cette inertie affaiblit la position de la France au moment même où se redessine l'architecture européenne de la cybersécurité.",
                source: "Next.ink, mars 2026",
              },
            },
          ],
          bullets: [
            {
              text: "ANSSI : distinction claire risques techniques (CSA2) vs risques de souveraineté (ICT Supply Chain Toolbox)",
              source: "ANSSI",
            },
            {
              text: "Cloud Act américain : les données hébergées chez des fournisseurs US peuvent être accessibles aux autorités américaines",
              source: "Cloud Act 2018",
            },
            {
              text: "ReCyF : guide opérationnel d'anticipation de l'ANSSI en attendant la stabilisation législative",
              source: "ANSSI",
            },
          ],
        },
      },
      {
        index: "4.4",
        title: "L'effet cascadant : la réglementation transforme la sensibilisation",
        description: "NIS2, AI Act et CRA ne sont que le début. Ensemble, ils restructurent les budgets, les rôles et les mesures de succès de la sensibilisation.",
        layout: {
          type: "gradient-flow",
          kicker: "Sous-tendance 4.4",
          headline: "Réglementation : la transformation en cascade",
          stat1: { type: "stat", value: "+60%", label: "d'augmentation budgétaire moyenne en sensibilisation depuis l'annonce de NIS2", source: "Forrester" },
          stat2: { type: "stat", value: "3,2M€", label: "coût moyen d'une amende NIS2 pour une PME de 250 salariés", source: "ANSSI" },
          quote: {
            type: "quote",
            text: "Regulation is the only thing that moves markets. We're entering the era where compliance driving transformation, not resisting it.",
            source: "Gartner Security Summit, 2025",
          },
          bullets: {
            type: "bullets",
            items: [
              { text: "Budget de sensibilisation : nouveau poste critique au bilan des risques", source: "Fortinet Risk Report" },
              { text: "Mesure de ROI obligatoire : réduction d'incidents, taux de signalement, taux de clic", source: "NIS2 Compliance Framework" },
              { text: "Gouvernance nouvelle : sensibilisation relève du CISO et du COMEX, pas du RH", source: "Security Culture Report 2025" },
            ],
          },
        },
      },
    ],
  },
  {
    index: "05",
    title: "La cyber sort de l'entreprise : l'individu comme nouvelle surface d'attaque",
    subtitle: "La cybersécurité dépasse le cadre de l'entreprise et devient une compétence du quotidien.",
    accent: "#DDB7F0",
    background: "#151515",
    illustrationSide: "right",
    subTendancies: [
      {
        index: "5.1",
        title: "La sphère privée comme nouvelle surface d'attaque",
        description: "Les cybercriminels ont quitté le périmètre de l'entreprise. Numéros personnels, réseaux sociaux privés, appareils hybrides : les attaques se déplacent là où les protections corporate n'existent plus.",
        layout: {
          type: "cards-flow",
          kicker: "Sous-tendance 5.1",
          headline: "Quand l'attaque déborde dans la vie privée",
          cards: [
            {
              color: "#7774FF",
              content: {
                type: "stat",
                value: "73%",
                label: "des citoyens wallons préoccupés par leur sécurité en ligne",
                source: "Proximus",
              },
            },
            {
              color: "#2C1F4A",
              content: {
                type: "stat",
                value: "BYOD",
                label: "les appareils hybrides travail/perso multiplient les vecteurs d'entrée",
              },
            },
            {
              color: "#1F1826",
              content: {
                type: "quote",
                text: "Simulation ends where real-world emotional pressure begins.",
                source: "Technadu, avril 2026",
              },
            },
            {
              color: "#3D2B6B",
              content: {
                type: "bullets",
                items: [
                  {
                    text: "Des groupes ransomware exploitent les numéros personnels des enfants de dirigeants pour exercer une pression",
                    source: "SoSafe",
                  },
                  {
                    text: "Les attaques se déplacent vers WhatsApp, LinkedIn, SMS : là où les protections entreprise ne s'appliquent pas",
                    source: "SoSafe",
                  },
                  {
                    text: "CNIL Réseau Fantôme : fingerprinting, CNAME cloaking, pixels invisibles IA ciblent les données personnelles",
                    source: "CNIL",
                  },
                ],
              },
            },
          ],
        },
      },
      {
        index: "5.2",
        title: "Désinformation et manipulation algorithmique : une menace systémique",
        description: "La désinformation n'est plus un phénomène marginal — elle est industrialisée, packagée et vendue. L'IA la rend indétectable à l'œil nu et capable d'affecter des marchés financiers en quelques minutes.",
        layout: {
          type: "four-plus-two",
          topCards: [
            {
              color: "#DDB7F0",
              content: {
                type: "stat",
                value: "63%",
                label: "des jeunes Européens voient régulièrement de fausses informations en ligne",
                source: "SoSafe",
              },
            },
            {
              color: "#DDB7F0",
              content: {
                type: "stat",
                value: "DaaS",
                label: "Disinformation-as-a-Service : campagnes packagées vendues sur le dark web",
                source: "SoSafe",
              },
            },
            {
              color: "#DDB7F0",
              content: {
                type: "quote",
                text: "The line between observing society and engineering it may be thinner than anyone imagined.",
                source: "National Law Review, mars 2026",
              },
            },
            {
              label: "WEF 2024",
              color: "#DDB7F0",
              content: {
                type: "bullets",
                items: [
                  {
                    text: "L'IA générant désinformation et cyberattaques figure parmi les principaux risques globaux",
                    source: "WEF",
                  },
                ],
              },
            },
          ],
          bottomCards: [
            {
              label: "Élections slovaques",
              color: "#DDB7F0",
              content: {
                type: "bullets",
                items: [
                  {
                    text: "Deepfakes lors d'élections slovaques : manipulation de l'opinion publique documentée",
                    source: "SoSafe",
                  },
                ],
              },
            },
            {
              label: "Marché US",
              color: "#DDB7F0",
              content: {
                type: "bullets",
                items: [
                  {
                    text: "Fausse image d'explosion au Pentagone ayant brièvement affecté les marchés US",
                    source: "SoSafe",
                  },
                ],
              },
            },
          ],
        },
      },
      {
        index: "5.3",
        title: "La cyber grand public : former les citoyens, pas seulement les employés",
        description: "L'Opération Cactus et les campagnes comme #CyberEnClair montrent que la sensibilisation doit désormais toucher les citoyens, les lycéens, les parents — là où ils sont, avec les codes qui leur parlent.",
        layout: {
          type: "bento",
          cards: [
            {
              color: "#151515",
              content: {
                type: "stat",
                value: "10M",
                label: "personnes touchées par l'Opération Cactus 2026 — 1 Français sur 6",
                source: "CNIL",
              },
            },
            {
              color: "#E2F163",
              content: {
                type: "stat",
                value: "+2700%",
                label: "d'infractions aux ENT entre 2017 et 2025",
                source: "Opération Cactus",
              },
            },
            {
              color: "#DDB7F0",
              content: {
                type: "quote",
                text: "Être né avec un smartphone dans la main ne protège pas des cyberattaques.",
                source: "Campagne #CyberEnClair, Cybermalveillance, mars 2026",
              },
            },
            {
              color: "#F0E6FF",
              content: {
                type: "bullets",
                items: [
                  {
                    text: "Opération Cactus : leurres personnalisés par public — faux matériel sport pour les parents, plateformes d'orientation pour lycéens",
                    source: "CNIL",
                  },
                  {
                    text: "#CyberEnClair : TikTok + Instagram, ton non moralisateur, ambassadeurs communautaires",
                    source: "Cybermalveillance",
                  },
                  {
                    text: "Wallonie & Proximus : modèle en cascade — former les formateurs, puis les citoyens",
                    source: "Proximus",
                  },
                ],
              },
            },
            {
              color: "#AA96F8",
              content: {
                type: "stat",
                value: "211",
                label: "Espaces Publics Numériques mobilisés en Wallonie pour former les citoyens en cascade",
                source: "Proximus",
              },
            },
          ],
        },
      },
    ],
  },
]
