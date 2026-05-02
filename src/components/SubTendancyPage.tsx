import type { SubTendancy } from "@/types"
import Tendancy from "./Tendancy"
import StatsGridLayout from "./layouts/StatsGridLayout"
import VerticalBandsLayout from "./layouts/VerticalBandsLayout"
import ThreeColumnLayout from "./layouts/ThreeColumnLayout"

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
          className="absolute -top-16 right-0 h-[200px] w-[200px] rounded-full blur-[140px]"
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
        <ThreeColumnLayout layout={subTendancy.layout} accent={accent} />
      )}
    </section>
  )
}
