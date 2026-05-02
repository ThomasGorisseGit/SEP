import AnimatedLogo from "@/components/AnimatedLogo"
import ThemePage from "@/components/ThemePage"

type PageItem = {
  index: string
  title: string
  subtitle: string
  accent: string
  background: string
  illustrationSide: "left" | "right"
}

const overviewCards = [
  {
    index: "01",
    title: 'L\'ère du phishing "invisible" ',
    subtitle:"Quand l'IA efface les signaux d'alerte",
    desc: "L'IA a supprimé tous les indices classiques de détection. Le phishing est désormais parfait, personnalisé, multicanal. On ne forme plus à repérer — on forme à douter.",
    count: "3 sous-tendances",
    accent: "#7774FF",
  },
  {
    index: "02",
    title: "De la conformité à la culture cyber",
    subtitle:"Vers une sensibilisation qui change vraiment les comportements",
    desc: "La case à cocher est morte. L'enjeu n'est plus de former pour être conforme — c'est de construire une culture qui ancre des réflexes durables, par la psychologie positive, la gamification et le micro-learning.",
    count: "4 sous-tendances",
    accent: "#aa96f8ff",
  },
  {
    index: "03",
    title: "AI for Cyber, Cyber for AI ",
    subtitle:"L'IA, menace et accélérateur pour toutes les équipes cyber",
    desc: "L'IA est à la fois l'arme la plus puissante des attaquants et le multiplicateur de force le plus décisif pour les défenseurs. Les deux faces sont indissociables — Mythos en est l'illustration la plus récente et la plus saisissante.",
    count: "3 sous-tendances",
    accent: "#ddb7f0ff",
  },
  {
    index: "04",
    title: "La réglementation",
    subtitle:"Le moteur de transformation des programmes",
    desc: "NIS2, AI Act, CRA : pour la première fois, la sensibilisation est une obligation légale avec responsabilité personnelle des dirigeants. Un levier d'émancipation inédit.",
    count: "4 sous-tendances",
    accent: "#ffa7dcff",
  },
  {
    index: "05",
    title: "La cyber sort de l'entreprise",
    subtitle:"L'individu comme nouvelle surface d'attaque",
    desc: "Les frontières pro/perso ont disparu. Désinformation, manipulation algorithmique, canaux privés : la cyber devient une compétence de vie, pas seulement professionnelle.",
    count: "3 sous-tendances",
    accent: "#e2f163ff",
  },
]

const pages: PageItem[] = [
  {
    index: "01",
    title: 'L\'ère du phishing "invisible" : quand l\'IA efface les signaux d\'alerte',
    subtitle: "L'IA a supprimé tous les indices classiques de détection. Le phishing est désormais parfait, personnalisé, multicanal.",
    accent: "#7774FF",
    background: "#151515",
    illustrationSide: "right",
  },
  {
    index: "02",
    title: "De la conformité à la culture cyber : vers une sensibilisation qui change vraiment les comportements",
    subtitle: "Passer de la case à cocher à une culture durable, avec des réflexes ancrés et une meilleure adoption collective.",
    accent: "#DDB7F0",
    background: "#2B2B2B",
    illustrationSide: "left",
  },
  {
    index: "03",
    title: "AI for Cyber, Cyber for AI : l'IA, menace et accélérateur pour toutes les équipes cyber",
    subtitle: "Une même technologie qui renforce la défense et augmente la puissance des attaques.",
    accent: "#E2F163",
    background: "#151515",
    illustrationSide: "right",
  },
  {
    index: "04",
    title: "La réglementation: le moteur de transformation des programmes",
    subtitle: "Quand NIS2, AI Act et CRA deviennent des leviers de changement et structurent les pratiques.",
    accent: "#7774FF",
    background: "#2B2B2B",
    illustrationSide: "left",
  },
  {
    index: "05",
    title: "La cyber sort de l'entreprise : l'individu comme nouvelle surface d'attaque",
    subtitle: "La cybersécurité dépasse le cadre de l'entreprise et devient une compétence du quotidien.",
    accent: "#DDB7F0",
    background: "#151515",
    illustrationSide: "right",
  },
]

export default function Landing() {
  return (
    <main>
      <section className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "#151515" }}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#7774FF] opacity-20 blur-[120px]" />
          <div className="absolute top-1/3 -right-28 h-80 w-80 rounded-full bg-[#DDB7F0] opacity-20 blur-[140px]" />
          <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-[#E2F163] opacity-10 blur-[110px]" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-[90%] flex-col justify-center gap-24 px-6 py-20 md:px-12 lg:px-20">
          <div className="flex items-start gap-8 max-w-3xl">
            <AnimatedLogo />
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-white/45">Léa jiner</p>
              <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
                Cahier de tendances
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65 md:text-2xl">
              Ce cahier tire des tendances d'une synthèse de veille comprenant environ 70 articles/site web et 5 rapports sectoriels
              </p>
            </div>
          </div>

          <div className="grid gap-4 text-sm text-white/45 md:grid-cols-5 ">
            {overviewCards.map((card) => (
              <div
                key={card.index}
                className="rounded-2xl h-96 border px-4 py-4 shadow-2xl backdrop-blur-sm transition-transform hover:-translate-y-0.5 flex flex-col justify-between "
                style={{
                  backgroundColor: card.accent,
                  borderColor: card.accent,
                  color: "#151515",
                }}
              >
                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.28em]" style={{ color: "rgba(21,21,21,0.7)" }}>
                {card.index}
                </div>
                <div className="flex flex-col gap-10 h-[80%]">

                <div className="text-3xl font-bold leading-snug">
                {card.title}
                </div>
                <div className="text-xl  font leading-snug">
                  {card.subtitle}
                </div>
                <div className="mt-3 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "rgba(21,21,21,0.78)" }}>
                  <span>Découvrir les {card.count}</span>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {pages.map((page) => (
        <ThemePage key={page.index} {...page} />
      ))}
    </main>
  )
}
