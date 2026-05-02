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

const glassCard = {
  background: "rgba(255,255,255,0.05)",
  borderColor: "rgba(255,255,255,0.10)",
  backdropFilter: "blur(12px)",
}

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

      <div className="relative mx-auto grid min-h-screen max-w-[90%] items-stretch gap-5 px-6 py-12 md:grid-cols-[5fr_7fr] md:px-12 lg:px-20">
        {/* Colonne gauche : 2 petits + 1 moyen */}
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-5">
            {/* Petit bloc 1 */}
            <div
              className="flex flex-col justify-between rounded-3xl border p-6"
              style={glassCard}
            >
              <span
                className="text-xs font-semibold uppercase tracking-[0.3em]"
                style={{ color: accent }}
              >
                Sous-tendance 01
              </span>
              <div>
                <h3 className="big-text mt-4 text-xl leading-snug text-white">
                  Phishing sans faute
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  L'IA rédige mieux qu'un humain&nbsp;: orthographe parfaite, ton calibré, contexte personnel intégré.
                </p>
              </div>
            </div>

            {/* Petit bloc 2 */}
            <div
              className="flex flex-col justify-between rounded-3xl border p-6"
              style={glassCard}
            >
              <span
                className="text-xs font-semibold uppercase tracking-[0.3em]"
                style={{ color: accent }}
              >
                Sous-tendance 02
              </span>
              <div>
                <h3 className="big-text mt-4 text-xl leading-snug text-white">
                  Clone vocal & deepfake
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  Imiter la voix d'un DG en 30 secondes. Le vishing entre dans une nouvelle ère.
                </p>
              </div>
            </div>
          </div>

          {/* Bloc moyen */}
          <div
            className="flex flex-1 flex-col justify-between rounded-3xl border p-8"
            style={glassCard}
          >
            <span
              className="text-xs font-semibold uppercase tracking-[0.3em]"
              style={{ color: accent }}
            >
              Sous-tendance 03
            </span>
            <div className="flex flex-col gap-4">
              <h3 className="big-text text-2xl leading-snug text-white">
                Attaques multi-canal
              </h3>
              <p className="text-base leading-7 text-white/60">
                Email, SMS, WhatsApp, appel vocal — coordonnés en quelques minutes par des agents IA. L'attaque arrive de partout à la fois, saturant la vigilance de la cible avant qu'elle puisse réagir.
              </p>
              <div className="h-px w-16" style={{ backgroundColor: accent, opacity: 0.6 }} />
            </div>
            <p className="text-xs font-medium uppercase tracking-widest text-white/30">
              Convergence des vecteurs d'attaque
            </p>
          </div>
        </div>

        {/* Gros bloc droite */}
        <div
          className="flex flex-col justify-between rounded-3xl border p-10"
          style={{
            background: `linear-gradient(145deg, ${accent}18 0%, rgba(255,255,255,0.03) 60%)`,
            borderColor: `${accent}44`,
            backdropFilter: "blur(16px)",
          }}
        >
          <div>
            <span
              className="text-xs font-semibold uppercase tracking-[0.3em]"
              style={{ color: accent }}
            >
              Tendance 01 — Signal fort
            </span>
            <h2 className="big-text mt-6 text-4xl leading-tight text-white md:text-5xl">
              Ce que ça change vraiment
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-xl leading-9 text-white/70">
              Les signaux d'alerte classiques — fautes d'orthographe, formulations étranges, adresses suspectes — ont disparu. Le phishing d'aujourd'hui est irréprochable. On ne peut plus former les collaborateurs à <em>repérer</em>, on doit les former à <em>douter</em>.
            </p>

            <div
              className="rounded-2xl border p-6"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: `${accent}30`,
              }}
            >
              <p className="text-sm font-semibold uppercase tracking-widest text-white/35">
                Implication clé
              </p>
              <p className="mt-3 text-lg leading-8 text-white/80">
                La formation ne peut plus reposer sur la reconnaissance de patterns visuels. Elle doit ancrer une posture réflexive : vérifier avant d'agir, quel que soit le niveau de confiance apparent.
              </p>
            </div>
          </div>

          <div className="flex items-end justify-between">
            <div className="h-px flex-1 opacity-20" style={{ backgroundColor: accent }} />
            <span className="ml-6 text-xs font-semibold uppercase tracking-[0.3em] text-white/30">
              L'ère du phishing invisible
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
