import AnimatedLogo from "@/components/AnimatedLogo"
import ThemePage from "@/components/ThemePage"

const pages = [
  {
    index: "01",
    title: 'L\'ère du phishing "invisible" : quand l\'IA efface les signaux d\'alerte',
    subtitle: "L'IA a supprimé tous les indices classiques de détection. Le phishing est désormais parfait, personnalisé, multicanal.",
    accent: "#7774FF",
    background: "#151515",
    illustrationSide: "right" as const,
  },
  {
    index: "02",
    title: "De la conformité à la culture cyber : vers une sensibilisation qui change vraiment les comportements",
    subtitle: "Passer de la case à cocher à une culture durable, avec des réflexes ancrés et une meilleure adoption collective.",
    accent: "#DDB7F0",
    background: "#2B2B2B",
    illustrationSide: "left" as const,
  },
  {
    index: "03",
    title: "AI for Cyber, Cyber for AI : l'IA, menace et accélérateur pour toutes les équipes cyber",
    subtitle: "Une même technologie qui renforce la défense et augmente la puissance des attaques.",
    accent: "#E2F163",
    background: "#151515",
    illustrationSide: "right" as const,
  },
  {
    index: "04",
    title: "La réglementation: le moteur de transformation des programmes",
    subtitle: "Quand NIS2, AI Act et CRA deviennent des leviers de changement et structurent les pratiques.",
    accent: "#7774FF",
    background: "#2B2B2B",
    illustrationSide: "left" as const,
  },
  {
    index: "05",
    title: "La cyber sort de l'entreprise : l'individu comme nouvelle surface d'attaque",
    subtitle: "La cybersécurité dépasse le cadre de l'entreprise et devient une compétence du quotidien.",
    accent: "#DDB7F0",
    background: "#151515",
    illustrationSide: "right" as const,
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

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center gap-10 px-6 py-20 md:px-12 lg:px-20">
          <div className="flex items-start gap-8 max-w-3xl">
            <AnimatedLogo />
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-white/45">Cahier de tendances</p>
              <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
                Une page par thématique
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65 md:text-2xl">
                Chaque section reprend un thème, un grand titre, un sous-titre plus petit, une couleur dédiée et un espace réservé pour l'illustration.
              </p>
            </div>
          </div>

          <div className="grid gap-4 text-sm text-white/45 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 px-4 py-3">Section 1 · Phishing invisible</div>
            <div className="rounded-2xl border border-white/10 px-4 py-3">Section 2 · Culture cyber</div>
            <div className="rounded-2xl border border-white/10 px-4 py-3">Section 3-5 · IA, réglementation, surface d'attaque</div>
          </div>
        </div>
      </section>

      {pages.map((page) => (
        <ThemePage key={page.index} {...page} />
      ))}
    </main>
  )
}
