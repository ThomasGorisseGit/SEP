import type { SubTendancy } from "@/types"
import Tendancy from "./Tendancy"
import StatsGridLayout from "./layouts/StatsGridLayout"
import StatsGridInvertedLayout from "./layouts/StatsGridInvertedLayout"
import VerticalBandsLayout from "./layouts/VerticalBandsLayout"
import ThreeColumnLayout from "./layouts/ThreeColumnLayout"
import SliderCards from "./layouts/SliderCards"
import TiltedCardsLayout from "./layouts/TiltedCardsLayout"
import NewspaperLayout from "./layouts/NewspaperLayout"

type Props = {
  subTendancy: SubTendancy
  accent: string
  background: string
}

export default function SubTendancyPage({ subTendancy, accent, background }: Props) {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: background }}>
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

      <Tendancy
        index={subTendancy.index}
        title={subTendancy.title}
        description={subTendancy.description}
        accent={accent}
      />

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
    </section>
  )
}
