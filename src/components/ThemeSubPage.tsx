import type { SubTendancy } from "@/types/SubTendancy"
import Tendancy from "./Tendancy"

type ThemeSubPageProps = {
  index: string
  title: string
  subtitle: string
  accent: string
  background: string
  subTendancy: SubTendancy[]
}

const whiteCard = {
  background: "#ffffff",
  borderColor: "#ffffff",
}

const purpleCard = {
  background: "#AA96F8",
  borderColor: "#AA96F8",
}

const darkText = "rgba(21,21,21,0.55)"
const darkTextStrong = "#151515"

export default function ThemeSubPage({ accent, background, subTendancy }: ThemeSubPageProps) {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: background }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -top-16 right-0 h-[200px] w-[200px] rounded-full blur-[140px]"
          style={{ backgroundColor: accent, opacity: 0.09 }}
        />
        <div
          className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full blur-[110px]"
          style={{ backgroundColor: accent, opacity: 0.06 }}
        />
      </div>
      <Tendancy index={subTendancy[0].index} title={subTendancy[0].title} description={subTendancy[0].description} accent={accent} />


      <div className="relative mx-auto grid min-h-screen max-w-[90%] items-stretch gap-5 px-6 py-12 md:grid-cols-[5fr_4fr] md:px-12 lg:px-20">
        {/* Colonne gauche : 2 petits + 1 moyen */}
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-6">
            {/* Petit bloc 1 — blanc */}
            <div
              className="aspect-square flex flex-col justify-between rounded-3xl border p-7"
              style={whiteCard}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: darkText }}>
                Chiffre clé
              </span>
              <div className="flex flex-col items-center text-center">
                <span className="big-text text-7xl leading-none p-4" style={{ color: darkTextStrong }}>
                  54 %
                </span>
                <p className="mt-4 text-base leading-6" style={{ color: darkText }}>
                  taux de clic avec du phishing IA
                </p>
                <p className="mt-3 text-sm font-semibold uppercase tracking-widest" style={{ color: darkText }}>
                  versus 12% sans IA
                </p>
              </div>
              <div />
            </div>

            {/* Petit bloc 2 — violet */}
            <div
              className="aspect-square flex flex-col justify-between rounded-3xl border p-7"
              style={purpleCard}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: darkText }}>
                Chiffre clé
              </span>
              <div className="flex flex-col items-center text-center">
                <span className="big-text text-7xl leading-none p-4" style={{ color: darkTextStrong }}>
                  × 4.5
                </span>
                <p className="mt-4 text-base leading-6" style={{ color: darkText }}>
                  la multiplication de l'efficacité des phishing grâce à l'IA
                </p>
              </div>
              <div />
            </div>
          </div>

          {/* 2 petits blocs supplémentaires */}
          <div className="grid grid-cols-2 gap-6">
            {/* Petit bloc 3 — violet */}
            <div
              className="aspect-square flex flex-col justify-between rounded-3xl border p-7"
              style={purpleCard}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: darkText }}>
                Chiffre clé
              </span>
              <div className="flex flex-col items-center text-center">
                <span className="big-text text-7xl leading-none p-4" style={{ color: darkTextStrong }}>
                  80 %
                </span>
                <p className="mt-4 text-base leading-6" style={{ color: darkText }}>
                  des campagnes de phishing utilisent déjà l'IA
                </p>
              </div>
              <p className="text-sm uppercase tracking-widest text-center" style={{ color: darkText }}>
                ENISA, 2025
              </p>
            </div>

            {/* Petit bloc 4 — blanc */}
            <div
              className="aspect-square flex flex-col justify-between rounded-3xl border p-7"
              style={whiteCard}
            >
              <div />
              <blockquote className="text-xl leading-8 italic font-bold text-center" style={{ color: darkTextStrong }}>
                "AI is not just accelerating cyberattacks, it's upgrading them"
              </blockquote>
              <p className="text-sm text-center" style={{ color: darkText }}>
                Microsoft Security Blog, avril 2026
              </p>
            </div>
          </div>

        </div>

        <div
          className="relative flex flex-col justify-center gap-16 overflow-hidden rounded-3xl  p-10 "
        >
          <div
            className="pointer-events-none absolute -bottom-16 -right-16 h-80 w-80 z-0 rounded-full blur-[100px]"
            style={{ backgroundColor: "#AA96F8", opacity: 1 }}
          />
          <div
            className="pointer-events-none absolute -top-40 -left-20 h-80 w-80 rounded-full blur-[100px]"
            style={{ backgroundColor: "#AA96F8", opacity: 1 }}
          />
          <h2 className="big-text text-4xl leading-tight md:text-5xl " style={{ color: 'white' }}>
            Ce que l'on comprend
          </h2>
          <div className="flex flex-col gap-4">
            <p className="text-xl leading-9" style={{ color: 'white' }}>
              L'IA réduit la préparation d'une attaque de plusieurs jours à quelques minutes (ESET).
            </p>
            <p className="text-xl leading-9" style={{ color: 'white' }}>
              Les modèles LLM commerciaux et des modèles détournés (WormGPT, FraudGPT) automatisent l'ingénierie sociale (ENISA).
            </p>
          </div>
        </div>
      </div>
      <Tendancy index={subTendancy[1].index} title={subTendancy[1].title} description={subTendancy[1].description} accent={accent} />
    </section>

  )
}
