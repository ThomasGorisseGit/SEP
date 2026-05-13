import type { Tendency } from "@/types"

export const overviewCards = [
  {
    index: "01",
    title: 'L\'ère du phishing "invisible"',
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
    title: "L'IA est à double tranchant",
    subtitle: "Une arme offensive et un bouclier défensif",
    desc: "L'IA est à la fois l'arme la plus puissante des attaquants et le multiplicateur de force le plus décisif pour les défenseurs. Les deux faces sont indissociables — Mythos en est l'illustration la plus récente et la plus saisissante.",
    count: "3 sous-tendances",
    accent: "#ddb7f0",
  },
  {
    index: "04",
    title: "Quand la réglementation",
    subtitle: "Devient le moteur de transformation des programmes de sensibilisation",
    desc: "NIS2, AI Act, CRA : pour la première fois, la sensibilisation est une obligation légale avec responsabilité personnelle des dirigeants. Un levier d'émancipation inédit.",
    count: "4 sous-tendances",
    accent: "#ffa7dc",
  },
  {
    index: "05",
    title: "La cyber sort de l'entreprise",
    subtitle: "La vie personnelle d'un individu devient une nouvelle surface d'attaque",
    desc: "Les frontières pro/perso ont disparu. Désinformation, manipulation algorithmique, canaux privés : la cyber devient une compétence de vie, pas seulement professionnelle.",
    count: "3 sous-tendances",
    accent: "#e2f163",
  },
]

export const tendencies: Tendency[] = [
  {
    index: "01",
    title: 'L\'ère du phishing "invisible" : quand l\'IA efface les signaux d\'alerte',
    subtitle: "L'IA générative a supprimé tous les indices visuels et linguistiques que les formations traditionnelles apprenaient à repérer. Le phishing n'est plus une suite de fautes d'orthographes dans un email, c'est désormais un message parfait, personnalisé pour la cible et qui arrive via n'importe quel canal de communication. Le point de rupture est que l'on ne forme plus à la détection du phishing, on forme à prendre une pause à la réception d'un message trop parfait et au doute systématique.",
    accent: "#7774FF",
    background: "#151515",
    illustrationSide: "right",
    subTendancies: [
      {
        index: "1.1",
        title: "La personnalisation de masse comme nouvelle arme",
        description: "On observe que l'IA permet de générer des milliers de messages uniques, parfaitement rédigés, adaptés au destinataire, à son contexte et à son canal. Le spearphishing (attaque qui cible un individu en particulier en utilisant des messages ultra-personnalisés), autrefois réservé aux cibles à haute valeur comme les PDG d'entreprise, est désormais accessible à tous les attaquants.",
        layout: {
          type: "stats-grid",
          cards: [
            {
              color: "white",
              content: { type: "stat", value: "54 %", label: "taux de clic d'un individu sur un email de phishing boosté avec l'IA", source: "contre 12% sans IA" },
            },
            {
              color: "purple",
              content: { type: "stat", value: "× 4.5", label: "multiplication de l'efficacité des messages grâce à l'IA" },
            },
            {
              color: "purple",
              content: { type: "stat", value: "80 %", label: "des campagnes de phishing utilisent déjà l'IA", source: "ENISA, 2025" },
            },
            {
              color: "white",
              content: { type: "quote", text: "« AI is not just accelerating cyberattacks, it's upgrading them »", source: "Microsoft Security Blog, avril 2026" },
            },
          ],
          rightCard: {
            title: "Le saviez-vous ?",
            paragraphs: [
              "L'IA réduit la préparation d'une cyberattaque de plusieurs jours à quelques minutes (ESET).",
              "Les modèles LLM commerciaux et des modèles détournés comme WormGPT ou FraudGPT automatisent l'ingénierie sociale (ENISA).",
            ],
          },
        },
      },
      {
        index: "1.2",
        title: "La diversification des canaux email, SMS, voix, image",
        description: "Le phishing ne passe plus uniquement par l'email. On parle désormais de smishing (hameçonnage par SMS), vishing (hameçonnage vocal), quishing (hameçonnage via les QR codes), injections dans les calendriers, deepfakes audio ou vidéo. Chaque canal devient un vecteur potentiel, y compris ceux où les collaborateurs sont le moins vigilants.",
        layout: {
          type: "vertical-bands",
          bands: [
            {
              color: "#7774FF",
              position: "top",
              content: { type: "stat", value: "25M", label: "de dollars transférés frauduleusement à cause d'un deepfake vocal de la part d'un dirigeant d'entreprise", source: "WEF" },
            },
            {
              color: "#AA96F8",
              position: "bottom",
              content: { type: "stat", value: "42,4%", label: "des cybermenaces suivies par l'ENISA ciblent le téléphone mobile", source: "ENISA" },
            },
            {
              color: "#E2F163",
              position: "top",
              content: { type: "quote", text: "« Traditional red flags are disappearing in an era of pixel-perfect deception. »", source: "Technology.org, mars 2026" },
            },
          ],
          bullets: [
            { text: "Cas Retool : des SMS et un deepfake vocal ont été combinés pour contourner le MFA (Multi-Factor Authentication)", source: "SoSafe" },
            { text: "Quishing : des QR codes malveillants ont été découvert dans des PDF et contournaient les filtres classiques", source: "ESET" },
            { text: "Le volume d'attaques utilisant des emails de masse est en baisse, mais le smishing et vishing sont en forte progression", source: "SoSafe" },
          ],
        },
      },
      {
        index: "1.3",
        title: "La mort des indices classiques de détection du phishing",
        description: "Les fautes d'orthographe, les expéditeurs inconnus et les liens suspects ont disparu. Les sessions de sensibilisation doivent opérer un virage complet pour former les collaborateurs. Il n'est plus nécessaire d'apprendre à repérer une anomalie technique, mais bien de développer un réflexe de pause et de vérification systématique face à toute sollicitation urgente.",
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
              content: { type: "quote", text: "« Le signal d'alerte n'est plus la faute de syntaxe : c'est l'anomalie contextuelle »", source: "SoSafe" },
            },
            {
              color: "#232323",
              textColor:"white",
              content: { type: "quote", text: "« Les simulations classiques ne préparent plus aux attaques ultra-personnalisées sur des canaux privés comme LinkedIn ou WhatsApp »", source: "Technadu" },
            },
            {
              color: "#AA96F8",
              content: { type: "quote", text: "« Former à la « pause cognitive » avant toute action sensible devient la priorité »", source: "Technadu, SANS" },
            },
          ],
          rightCards: [
            {
              textColor:"white",
              color: "#AA96F8",
              content: { type: "stat", value: "4,6h", label: "le temps médian pour cliquer sur un phishing après sa réception par email" },
            },
            {
              color: "#7774FF",              
              textColor:"white",
              content: { type: "quote", text: "« Attackers are no longer testing if employees can spot a fake email; they are testing if they can manipulate how they think. »", source: "Technadu, avril 2026" },
            },
          ],
        },
      },
    ],
  },
  {
    index: "02",
    title: "De la conformité à la culture cyber : vers une sensibilisation qui change vraiment les comportements",
    subtitle: "La sensibilisation à la cybersécurité a longtemps été pilotée par la conformité. Résultat : des taux de complétion à 100 % et des comportements inchangés. La culture cyber, c'est autre chose. On parle ici de réflexes ancrés, de comportements positifs valorisés et d'une prise de conscience collective. Là où les équipes d'audit identifient les risques humains, les équipes de sensibilisation construisent la réponse culturelle par la psychologie positive, la gamification, le micro-learning et la donnée comportementale.",
    accent: "#DDB7F0",
    background: "#2B2B2B",
    illustrationSide: "left",
    subTendancies: [
      {
        index: "2.1",
        title: "De la conformité à la culture : un changement de paradigme complet",
        description: "Pendant des années, la sensibilisation à la cybersécurité a été pilotée par un impératif de conformité : former pour cocher une case, démontrer aux auditeurs que le sujet est adressé et produire des taux de complétion présentables au management. La transition qui est à opérer n'est pas un changement de format mais un changement de logique. On passe de la conformité règlementaire à la culture du collaborateur, de la descente d'information à la motivation, et de la campagne de sensibilisation ponctuelle à la sensibilisation en continue.",
        layout: {
          type: "three-cards",
          cards: [
            {
              color: "#7774FF",
              content: { type: "stat", value: "325", label: "programmes de sensibilisation sur 2 700 sont au stade de l'« optimisation ». C'est-à-dire qu'ils ont atteint le stade de la véritable culture cyber", source: "SANS" },
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
              color: "#AA96F8",
              content: { type: "stat", value: "67%", label: "des organisations voient une réduction d'incidents après la formation des collaborateurs", source: "Fortinet" },
              summary: "La formation réduit les incidents mesurés",
            },
            {
              color: "#E2F163",
              content: { type: "quote", text: "« Completion is not an outcome; changed behaviour is. »", source: "CyberDexterity / itweb, avril 2026" },
              summary: "L'enjeu est le comportement, pas la complétion",
            },
            {
              color: "#DDB7F0",
              content: {
                type: "bullets",
                items: [
                  { text: "Le Security Behavior & Culture Program (SBCP) marque une rupture avec le Security Awareness Training (SAT) classique. Là où le SAT transmet une information (« voilà le risque, voilà ce qu'il faut faire »), le SBCP reconnaît que la connaissance ne suffit pas à déclencher l'action. L'enjeu n'est plus d'informer, mais de motiver pour rendre la sécurité désirable et naturelle dans le quotidien des collaborateurs.", source: "Beauceron" },
                ],
              },
              summary: "Ce que ça change en pratique",
            },{
              color: "#AA96F8",
              content: {
                type: "bullets",
                items: [
                  { text: "Selon le psychologue B.J. Fogg, un comportement ne se produit que lorsque trois conditions sont réunies : la motivation d'agir, la capacité de le faire, et un déclencheur au bon moment. Si l'un manque, le comportement n'a pas lieu.", source: "Beauceron" },
                  { text: "70 % des leaders pensent que la cyber est une responsabilité partagée, mais seuls 26 % admettent que ça ne se traduit pas en action. Ce chiffre illustre le fossé persistant entre l'intention et le comportement. La prise de conscience est là, mais elle ne change pas les réflexes.", source: "Fortinet 2025" },
                ],
              },
              summary: "Ce que ça change en pratique",
            },
          ],
        },
      },
      {
        index: "2.2",
        title: "La donnée comportementale au service de la culture, pas du scoring individuel",
        description: "Le taux de complétion cède la place aux indicateurs culturels réels comme la fréquence des signalements, l'adoption des outils ou l'évolution des réflexes dans le temps. Ces données pilotent l'amélioration continue des programmes mais ne devraient pas servir à surveiller ou donner un score aux individus.",
        layout: {
          type: "tilted-cards",
          kicker:"Sous-tendance 2.2",
          headline:"La donnée comportementale",    
          cards: [
            {
              title: "−38%",
              content: "de taux de clic grâce aux nudges en temps réel",
              source: "Beauceron",
              icon: "timer",
            },

            {
              title: "Citation",
              content: "« La culture de sécurité se mesure à ce que les gens font quand personne ne regarde — pas à ce qu'ils ont coché dans un LMS. »",
              source: "SANS Security Awareness Report 2025",
              icon: "book",
            },
            {
              title: "Cycle continu",
              content: "Identifier les lacunes, adapter les contenus, mesurer les comportements et améliorer : ce processus distingue les programmes qui changent une culture de ceux qui remplissent une obligation",
              source: "GovInsider",
              icon: "chart",
            },
            {
              title: "Taux de signalement",
              content: "Il pourrait correspondre au baromètre de la confiance : plus les collaborateurs signalent, plus la culture est ancrée",
              source: "SANS",
              icon: "warning",
            },
                        {
              title: "+30%",
              content: "de taux de signalement avec le phishing adaptatif",
              source: "Beauceron",
              icon: "calendar",
            },
          ],
        },
      },
      {
        index: "2.3",
        title: "Le micro-learning et la fréquence comme facteurs clés d'ancrage",
        description: "Moins, mais plus souvent. C'est le principe contre-intuitif que documente Beauceron 2025 : un module de 3,5 minutes espacé de 90 jours est plus efficace qu'une session annuelle. Au-delà d'un certain seuil, la formation sature et produit l'effet inverse. La fréquence devient alors aussi importante que le contenu.",
        layout: {
          type: "newspaper",
          kicker: "Sous-tendance 2.3",
          headline: "Fréquence, durée et formats :",
          subheadline: " les vrais leviers de la sensibilisation",
          columns: [
            {
              stat: "3,5 min",
              content: "Par module, espacés de 90 jours : la durée idéale pour ancrer les réflexes et maintenir l'attention. 46% des organisations forment désormais de façon trimestrielle",
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
            text: "« People who took more than 1 hour of training in a given year saw weaker results than people whose training time fell between 30-35 minutes. »",
            source: "Beauceron Security Report 2025",
          },
        },
      },
    ],
  },
  {
    index: "03",
    title: "L'IA est à double tranchant : arme offensive et bouclier défensif",
    subtitle: "L'IA ne se contente plus d'accélérer les attaques, elle innove en créant de nouvelles catégories d'attaque. Agents autonomes, détection de vulnérabilités à grande échelle, exploitation sans intervention humaine : les capacités offensives de l'IA dépassent désormais celles des experts humains. Mais à l'inverse, l'IA devient le multiplicateur de force pour toutes les équipes cyber.",
    accent: "#E2F163",
    background: "#151515",
    illustrationSide: "right",
    subTendancies: [
      {
        index: "3.1",
        title: "Les agents IA autonomes comme nouvelle catégorie de menace",
        description: "Les agents IA peuvent désormais prendre des décisions tactiques de manière autonome telles qu'identifier des vulnérabilités, adapter des attaques en temps réel, ou encore naviguer dans les réseaux sans intervention humaine. Il devient donc de plus en plus difficile pour les défenseurs de réagir aussi rapidement que les attaques.",
        layout: {
          type: "four-plus-two",
          topCards: [
            {
              color: "#E2F163",
              content: {
                type: "stat",
                value: "29 min",
                label: "temps moyen dont dispose les équipes cyber pour détecter et contenir une intrusion avant qu'elle ne se propage, avec un record documenté à 27 secondes",
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
                text: "« The lead hacker is no longer a person in a hoodie; it's a script that thinks. »",
                source: "Smart Brief, avril 2026",
              },
            },
            {
              color: "#7774FF",
              content: {
                type: "bullets",
                items: [
                  {
                    text: "Le « Cyborg Hacking » (un humain assisté par l'IA) a déjà cédé la place à l'« Autonomous Hacking » où l'agent IA identifie les cibles, adapte ses exploits et se propage seul, sans supervision humaine",
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
                    text: "La technique « misoperation » pousse cette logique à l'extrême. Elle manipule des systèmes industriels sans déployer le moindre fichier et sans laisser de trace attribuable",
                    source: "RSAC 2026",
                  },
                ],
              },
            },
            {
              label: "Résultat",
              color: "#E8ECDF",
              content: {
                type: "bullets",
                items: [
                  { text: "+89% d'attaques IA", source: "CrowdStrike" },
                  { text: "+38% Chine-nexus", source: "CrowdStrike" },
                  { text: "+130% Corée du Nord en un an", source: "CrowdStrike" },
                ],
              },
            },
          ],
        },
      },
      {
        index: "3.2",
        title: "Mythos : quand l'outil IA a le potentiel de devenir une arme offensive de grande ampleur",
        description: "Claude Mythos Preview d'Anthropic illustre de façon saisissante le dilemme central de l'IA en cybersécurité. C'est un modèle de LLM conçu pour détecter des vulnérabilités mais il peut devenir l'outil d'exploitation le plus puissant jamais créé, s'il est entre de mauvaises mains. L'IA est désormais à la fois la meilleure défense et la pire des menaces.",
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
                label: "Des vulnérabilités exploitées avec succès dès le premier essai (des performances opérationnelles accessibles sur simple prompt)",
                source: "ArmorCode",
              },
            },
            {
              color: "#7774FF",
              position: "center",
              content: {
                type: "quote",
                text: "« AI models have reached a level where they can surpass all but the most skilled humans at finding and exploiting software vulnerabilities. »",
                source: "Anthropic / ArmorCode, avril 2026",
              },
            },
          ],
          bullets: [
            {
              text: "Mythos a trouvé des zero-days dans tous les OS et navigateurs majeurs, dont un bug vieux de 27 ans dans OpenBSD, de manière totalement autonome, sur simple prompt",
              source: "red.anthropic.com",
            },
            {
              text: "+99% des vulnérabilités découvertes non encore patchées au moment de la découverte, des ingénieurs sans formation sécurité ont pu générer des exploits fonctionnels",
              source: "CETaS / Turing",
            },
            {
              text: "Projet Glasswing : AWS, Apple, Google, Microsoft, NVIDIA utilisent Mythos pour sécuriser leurs logiciels, mais le même outil serait une arme redoutable en mains malveillantes",
              source: "The Hacker News",
            },
          ],
        },
      },
      {
        index: "3.3",
        title: "L'IA comme multiplicateur de force pour toutes les équipes cyber",
        description: "Face à la pénurie de talents et à la vitesse d'évolution des menaces, l'IA générative devient le multiplicateur de force indispensable pour l'ensemble des équipes en cybersécurité.",
        layout: {
          type: "bento",
          cards: [
            {
              color: "#151515",
              content: {
                type: "stat",
                value: "−40%",
                label: "de taux de clic sur les simulations de phishing dans les entreprises qui s'appuient sur l'analyse automatisée des comportements et le feedback en temps réel. Moins de formation, plus d'intelligence et des résultats mesurables",
                source: "Beauceron",
              },
            },
            {
              color: "#FFA7DC",
              content: {
                type: "stat",
                value: "946",
                label: "professionnels de la cybersécurité citent le manque de personnel comme frein n°1",
                source: "SANS 2025",
              },
            },
            {
              color: "#AA96F8",
              content: {
                type: "stat",
                value: "88%",
                label: " des organisations constatent que l'usage de l'IA par les attaquants a eu un effet inattendu : il a rendu les collaborateurs plus réceptifs à la sensibilisation. La menace, rendue visible et concrète, devient le meilleur argument pédagogique",
                source: "Fortinet",
              },
            },
            {
              color: "#E2F163",
              content: {
                type: "bullets",
                items: [
                  {
                    text: "L'IA accélère la détection, le triage des alertes, l'analyse CTI, la réponse à incident et la génération de contenus de sensibilisation. Toutes les équipes sont concernées",
                    source: "SANS, Beauceron",
                  },
                  {
                    text: "Shadow AI : des collaborateurs utilisent des outils GenAI non approuvés avec des données sensibles comportent un risque interne que l'IA peut aussi aider à détecter",
                    source: "HBR",
                  },
                ],
              },
            },
            {
              color: "#DDB7F0",
              content: {
                type: "quote",
                text: "« AI-powered vulnerability discovery at this scale makes the operational discipline of prioritizing, triaging, and remediating vulnerabilities more important than ever before. Not less. »",
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
    title: "La réglementation devient le moteur de transformation des programmes de sensibilisation",
    subtitle: "NIS2 transforme la sensibilisation d'une bonne pratique optionnelle en obligation légale avec la responsabilité personnelle des dirigeants. Pour la première fois, les équipes de sensibilisation ont un levier réglementaire pour obtenir des ressources, structurer leurs programmes et les ancrer dans la stratégie globale.",
    accent: "#FFA7DC",
    background: "#2B2B2B",
    illustrationSide: "left",
    subTendancies: [
      {
        index: "4.1",
        title: "NIS2 : de l'obligation à la responsabilité personnelle",
        description: "NIS2 impose une formation continue en tenant responsable les dirigeants. Des milliers de PME/ETI entrent dans son périmètre et la réglementation devient paradoxalement un moyen d'émanciper les petites équipes, déjà en manque de ressources.",
        layout: {
          type: "dual-stats",
          stats: [
            { type: "stat", value: "600", label: "types d'entités françaises concernées par NIS2 se trouvent encore en zone grise juridique", source: "" },
            { type: "stat", value: "170 pages", label: "C'est la taille du guide technique publié par l'ENISA sur l'Article 21 de NIS2", source: "" },
          ],
          quote: {
            type: "quote",
            text: "« Avec NIS2, la cybersécurité monte au conseil d'administration : ce n'est plus un sujet IT, c'est un sujet de gouvernance. »",
            source: "SoSafe, avril 2026",
          },
          bullets: {
            type: "bullets",
            items: [
              { text: "NIS2 valorise la culture du signalement des incidents comme élément central de la cybersécurité", source: "" },
              { text: "Mapping ECSF : chaque tâche NIS2 est liée à un profil de compétence précis, avec un délais de notification entre 24h et 72h", source: "ENISA" },
            ],
          },
        },
      },
      {
        index: "4.2",
        title: "L'AI Act et le CRA imposent de nouveaux sujets de sensibilisation",
        description: "L'AI Act impose des obligations de transparence et de formation pour les systèmes IA à haut risque. Le CRA impose la sécurité by design pour les produits connectés. Ces textes créent des sujets de formation obligatoires tels que l'usage responsable des outils IA, la gestion des agents autonomes, ou encore les droits et responsabilités.",
        layout: {
          type: "three-column",
          leftCard: {
            color: "#E2F163",
            textColor:"#151515",
            content: { type: "quote", text: "« Agentic AI represents a shift from models that suggest to models that act — organizations must define the legal agency of these systems before full-scale deployment. »", source: "Reuters, avril 2026" },
          },
          middleCards: [
            {
              color: "#FFA7DC",
              textColor: "#FFFFFF",
              content: { type: "percentage-chart", value: 96, label: "des organisations préparent des politiques d'usage IA" },
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
                { text: "Risque d'« hallucination d'action » : un agent IA exécute des commandes incorrectes de manière irréversible", source: "Reuters" },
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
        title: "La souveraineté numérique comme enjeu de gouvernance",
        description: "Le débat NIS2 en France, le Cloud Act, l'initiative SecNumCloud européen portée par l'ANSSI : la souveraineté s'impose comme dimension incontournable de la gouvernance cyber. Pour les groupes internationaux, des questions concrètes émergent sur les outils utilisés et les juridictions concernées.",
        layout: {
          type: "vertical-bands",
          bands: [
            {
              color: "#FFA7DC",
              position: "top",
              content: {
                type: "stat",
                value: "Art.16bis",
                source:"Next.ink",
                label: "bloque la transposition de NIS2 en France : faut-il autoriser l'État à accéder aux données chiffrées au nom de la sécurité nationale ?",
              },
            },
            {
              color: "#E2F163",
              position: "bottom",
              content: {
                type: "stat",
                value: "EUCS High+",
                label: "un label européen pour certifier les services cloud qui résistent aux lois étrangères comme le Cloud Act américain",
              },
            },
            {
              color: "#DDB7F0",
              position: "center",
              content: {
                type: "quote",
                text: "« Cette inertie affaiblit la position de la France au moment même où se redessine l'architecture européenne de la cybersécurité. »",
                source: "Next.ink, mars 2026",
              },
            },
          ],
          bullets: [
            {
              text: "ANSSI : distinction claire risques techniques vs risques de souveraineté",
              source: "ANSSI",
            },
            {
              text: "Cloud Act américain : les données hébergées chez des fournisseurs US peuvent être accessibles aux autorités américaines",
              source: "Cloud Act 2018",
            },
          ],
        },
      },
      {
        index: "4.4",
        title: "La preuve d'un changement de comportement comme nouvelle exigence réglementaire",
        description: "Avec NIS2, les organisations ne peuvent plus se contenter de cocher la case \"sensibilisation effectuée\". Elles doivent prouver que leurs programmes ont un effet réel sur les comportements. Concrètement, cela signifie mesurer : est-ce que les collaborateurs signalent davantage d'incidents ? Est-ce qu'ils adoptent les bons outils ? Ces indicateurs remplacent progressivement les taux de complétion dans les reportings adressés à la direction.",
        layout: {
          type: "gradient-flow",
          kicker: "Sous-tendance 4.4",
          headline: "",
          stat1: { type: "stat", value: "99.62%", label: "des environnements certifiés HITRUST n'ont eu aucune violation en 2025", source: "HITRUST" },
          stat2: { type: "stat", value: "53%", label: "mesurent l'efficacité par la réduction du nombre d'incidents", source: "Fortinet" },
          quote: {
            type: "quote",
            text: "« Le COMEX ne veut pas savoir combien de personnes ont été formées, il veut savoir si l'entreprise est mieux protégée. »",
            source: "SANS Security Awareness Report 2025",
          },
          bullets: {
            type: "bullets",
            items: [
              { text: "Les questionnaires d'auto-évaluation de la maturité cyber ne garantissent pas la sécurité réelle des prestataires", source: "HITRUST" },
              { text: "32% adoptent la formation additionnelle comme première mesure préventive après un incident", source: "UK Gov" },
            ],
          },
        },
      },
    ],
  },
  {
    index: "05",
    title: "La cyber sort de l'entreprise : la vie personnelle d'un individu devient une nouvelle surface d'attaque",
    subtitle: "Les frontières entre vie personnelle et professionnelle ont disparu du point de vue des attaquants. Désinformation, manipulation algorithmique et canaux privés ciblés : la cyber devient une compétence de vie (life skill).",
    accent: "#DDB7F0",
    background: "#151515",
    illustrationSide: "right",
    subTendancies: [
      {
        index: "5.1",
        title: "Quand la vie privée devient un vecteur d'attaque professionnel",
        description: "Les attaquants ciblent les canaux personnels comme WhatsApp, LinkedIn, ou les SMS et ciblent aussi les proches des collaborateurs pour atteindre les systèmes d'information de l'entreprise. La frontière entre surface d'attaque personnelle et professionnelle a disparu.",
        layout: {
          type: "cards-flow",
          kicker: "Sous-tendance 5.1",
          headline: "",
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
                label: "un collaborateur qui consulte ses emails pro sur son téléphone personnel, c'est du « Bring Your Own Device ». Ces appareils échappent au contrôle de l'entreprise (pas de mises à jour forcées, pas de segmentation réseau, etc).",
              },
            },
            {
              color: "#1F1826",
              content: {
                type: "quote",
                text: "« Simulation ends where real-world emotional pressure begins. »",
                source: "Technadu, avril 2026",
              },
            },
            {
              color: "#3D2B6B",
              content: {
                type: "bullets",
                items: [
                  {
                    text: "Des groupes de ransomware exploitent les numéros personnels des enfants de dirigeants pour exercer une pression sur eux",
                    source: "SoSafe",
                  },
                  {
                    text: "Les attaques se déplacent vers WhatsApp, LinkedIn, SMS : là où les protections entreprise ne s'appliquent pas",
                    source: "SoSafe",
                  },
                ],
              },
            },
          ],
        },
      },
      {
        index: "5.2",
        title: "La désinformation comme nouvelle dimension du risque humain",
        description: "La manipulation des comportements sociaux à grande échelle via l'IA comme le tribalisme algorithmique, les deepfakes politiques, la « Disinformation-as-a-Service », élargit le champ de la résilience cognitive.",
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
                label: "Disinformation-as-a-Service : des campagnes de désinformation sont vendues sous forme de « pack » sur le dark web",
                source: "SoSafe",
              },
            },
            {
              color: "#DDB7F0",
              content: {
                type: "quote",
                text: "« The line between observing society and engineering it may be thinner than anyone imagined. »",
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
                    text: "l'IA générant de la désinformation et des cyberattaques figure parmi les principaux risques globaux",
                    source: "WEF (SoSafe)",
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
        title: "La cyber comme compétence de vie des citoyens français",
        description: "Les campagnes publiques montrent que la sensibilisation à grande échelle est possible hors de l'entreprise, avec des formats accessibles et non techniques. La cyber devient une « life skill » au même titre que la sécurité routière.",
        layout: {
          type: "bento",
          cards: [
            {
              color: "#151515",
              content: {
                type: "stat",
                value: "10M",
                label: "personnes touchées par l'Opération Cactus 2026 (1 Français sur 6)",
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
                text: "« Être né avec un smartphone dans la main ne protège pas des cyberattaques.  »",
                source: "Campagne #CyberEnClair, Cybermalveillance, mars 2026",
              },
            },
            {
              color: "#F0E6FF",
              content: {
                type: "bullets",
                items: [
                  {
                    text: "#CyberEnClair : campagne de sensibilisation sur TikTok et Instagram avec un ton non moralisateur et des ambassadeurs communautaires",
                    source: "Cybermalveillance",
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
