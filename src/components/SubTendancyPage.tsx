import type { SubTendancy } from "@/types"
import StatsGridLayout from "./layouts/StatsGridLayout"
import StatsGridInvertedLayout from "./layouts/StatsGridInvertedLayout"
import VerticalBandsLayout from "./layouts/VerticalBandsLayout"
import ThreeColumnLayout from "./layouts/ThreeColumnLayout"
import VerticalBandsInvertedLayout from "./layouts/VerticalBandsInvertedLayout"
import SliderCards from "./layouts/SliderCards"
import TiltedCardsLayout from "./layouts/TiltedCardsLayout"
import NewspaperLayout from "./layouts/NewspaperLayout"
import FourPlusTwoLayout from "./layouts/FourPlusTwoLayout"
import BentoLayout from "./layouts/BentoLayout"
import DualStatsLayout from "./layouts/DualStatsLayout"
import CardsFlowLayout from "./layouts/CardsFlowLayout"
import ModernStatsLayout from "./layouts/ModernStatsLayout"
import GradientFlowLayout from "./layouts/GradientFlowLayout"

type Props = {
  id?: string
  subTendancy: SubTendancy
  accent: string
  background: string
  tendencyTitle: string
  tendencyIndex: string
}

export default function SubTendancyPage({ id, subTendancy, accent, background, tendencyTitle, tendencyIndex }: Props) {
  return (
    <>
      {/* Slide intro — split layout */}
      <section id={id} data-snap className="min-h-screen relative overflow-hidden flex" style={{ backgroundColor: background }}>
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute top-1/2 right-1/3 -translate-y-1/2 h-96 w-96 rounded-full blur-[140px]"
            style={{ backgroundColor: accent, opacity: 0.07 }}
          />
        </div>

        {/* Gauche — tendance parente en filigrane */}
        <div
          className="hidden lg:flex w-2/5 flex-col justify-center px-12 xl:px-20 py-16 relative overflow-hidden border-r"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <span
            className="text-xs font-semibold uppercase tracking-[0.35em] mb-6"
            style={{ color: accent, opacity: 0.45 }}
          >
            Tendance {tendencyIndex}
          </span>
          <h2
            className="text-3xl xl:text-4xl big-text leading-tight"
            style={{ color: "rgba(255,255,255,0.11)" }}
          >
            {tendencyTitle}
          </h2>
        </div>

        {/* Droite — sous-tendance en pleine lumière */}
        <div className="flex flex-1 flex-col justify-center px-8 py-16 lg:px-14 xl:px-20">
          <span
            className="text-xs font-semibold uppercase tracking-[0.35em] mb-2 lg:hidden"
            style={{ color: accent, opacity: 0.5 }}
          >
            Tendance {tendencyIndex}
          </span>
          <span
            className="text-xs font-semibold uppercase tracking-[0.35em] mb-5"
            style={{ color: accent }}
          >
            Sous-tendance {subTendancy.index}
          </span>
          <h3 className="text-4xl md:text-5xl xl:text-6xl big-text leading-tight text-white mb-5">
            {subTendancy.title}
          </h3>
          <div className="h-px w-14 mb-6" style={{ backgroundColor: accent, opacity: 0.55 }} />
          <p className="text-base md:text-lg leading-8 text-white/55 max-w-xl">
            {subTendancy.description}
          </p>
        </div>
      </section>

      {/* Slide contenu — layout complet */}
      <section id={`${id}-content`} data-snap className="min-h-screen relative overflow-hidden" style={{ backgroundColor: background }}>
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute -top-16 right-0 h-50 w-50 rounded-full blur-[140px]"
            style={{ backgroundColor: accent, opacity: 0.09 }}
          />
          <div
            className="absolute bottom-0 left-1/4 h-64 w-64 rounded-full blur-[110px]"
            style={{ backgroundColor: accent, opacity: 0.06 }}
          />
        </div>

        {subTendancy.layout.type === "stats-grid" && (
          <StatsGridLayout layout={subTendancy.layout} accent={accent} />
        )}
        {subTendancy.layout.type === "vertical-bands" && (
          <VerticalBandsLayout
            index={subTendancy.index}
            layout={subTendancy.layout}
            accent={accent}
            title={subTendancy.title}
            description={subTendancy.description}
          />
        )}
        {subTendancy.layout.type === "three-column" && (
          <ThreeColumnLayout
            layout={subTendancy.layout}
            accent={accent}
            index={subTendancy.index}
            title={subTendancy.title}
          />
        )}
        {subTendancy.layout.type === "vertical-bands-inverted" && (
          <VerticalBandsInvertedLayout
            layout={subTendancy.layout}
            accent={accent}
            index={subTendancy.index}
            title={subTendancy.title}
            description={subTendancy.description}
          />
        )}
        {subTendancy.layout.type === "stats-grid-inverted" && (
          <StatsGridInvertedLayout layout={subTendancy.layout} accent={accent} />
        )}
        {subTendancy.layout.type === "three-cards" && (
          <SliderCards layout={subTendancy.layout} accent={accent} />
        )}
        {subTendancy.layout.type === "tilted-cards" && (
          <TiltedCardsLayout layout={subTendancy.layout} accent={accent} />
        )}
        {subTendancy.layout.type === "newspaper" && (
          <NewspaperLayout layout={subTendancy.layout} accent={accent} />
        )}
        {subTendancy.layout.type === "four-plus-two" && (
          <FourPlusTwoLayout layout={subTendancy.layout} accent={accent} />
        )}
        {subTendancy.layout.type === "bento" && (
          <BentoLayout layout={subTendancy.layout} accent={accent} />
        )}
        {subTendancy.layout.type === "dual-stats" && (
          <DualStatsLayout layout={subTendancy.layout} accent={accent} />
        )}
        {subTendancy.layout.type === "cards-flow" && (
          <CardsFlowLayout layout={subTendancy.layout} accent={accent} />
        )}
        {subTendancy.layout.type === "modern-stats" && (
          <ModernStatsLayout layout={subTendancy.layout} accent={accent} />
        )}
        {subTendancy.layout.type === "gradient-flow" && (
          <GradientFlowLayout layout={subTendancy.layout} accent={accent} />
        )}
      </section>
    </>
  )
}
