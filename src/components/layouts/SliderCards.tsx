import { useRef } from "react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import type { ThreeCardsLayout as ThreeCardsLayoutType, CardContent } from "@/types"

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number }>; label?: string }) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-xl px-4 py-3 shadow-xl" style={{ backgroundColor: "#151515", border: "1px solid rgba(255,255,255,0.1)" }}>
      <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.5)" }}>{label}</p>
      <p className="big-text text-2xl leading-none text-white mt-1">{payload[0].value.toLocaleString("fr-FR")}</p>
      <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>programmes</p>
    </div>
  )
}

function MaturityBarChart({ title, data }: { title: string; data: Array<{ label: string; value: number }> }) {
  const chartData = data.map((d) => ({ label: d.label, value: d.value }))
  const config = { value: { label: "Programmes" } }
  return (
    <div className="flex w-full flex-col gap-4">
      <p className="text-center text-sm font-semibold uppercase tracking-widest" style={{ color: "rgba(21,21,21,0.55)" }}>
        {title}
      </p>
      <ChartContainer config={config} className="h-52 w-full">
        <BarChart data={chartData} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
          <XAxis dataKey="label" tick={{ fontSize: 10, fill: "rgba(21,21,21,0.6)", fontWeight: 500 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 10, fill: "rgba(21,21,21,0.4)" }} axisLine={false} tickLine={false} />
          <ChartTooltip content={<CustomTooltip />} cursor={{ fill: "rgba(21,21,21,0.08)" }} />
          <Bar dataKey="value" fill="rgba(21,21,21,0.72)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}

function MainContent({ content, accent }: { content: CardContent; accent: string }) {
  if (content.type === "bar-chart") {
    return <MaturityBarChart title={content.title} data={content.data} />
  }
  if (content.type === "bullets") {
    return (
      <ul className="flex w-full flex-col gap-5">
        {content.items.map((b, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: accent }} />
            <p className="text-sm leading-6" style={{ color: "rgba(21,21,21,0.8)" }}>
              {b.text}{" "}
              <span className="text-xs uppercase tracking-widest" style={{ color: "rgba(21,21,21,0.4)" }}>({b.source})</span>
            </p>
          </li>
        ))}
      </ul>
    )
  }
  if (content.type === "stat") {
    return (
      <div className="flex flex-col items-center text-center gap-4">
        <span className="big-text text-8xl leading-none" style={{ color: "rgba(21,21,21,0.85)" }}>{content.value}</span>
        <p className="text-base leading-6" style={{ color: "rgba(21,21,21,0.6)" }}>{content.label}</p>
        {content.source && (
          <p className="text-xs uppercase tracking-widest" style={{ color: "rgba(21,21,21,0.4)" }}>{content.source}</p>
        )}
      </div>
    )
  }
  if (content.type === "quote") {
    return (
      <blockquote className="text-xl leading-8 italic font-bold text-center px-4" style={{ color: "rgba(21,21,21,0.85)" }}>
        {content.text}
        <p className="mt-4 text-xs not-italic font-semibold uppercase tracking-widest" style={{ color: "rgba(21,21,21,0.45)" }}>
          {content.source}
        </p>
      </blockquote>
    )
  }
  if (content.type === "percentage-chart") {
    return (
      <div className="flex flex-col items-center text-center gap-4">
        <span className="big-text text-8xl leading-none" style={{ color: "rgba(21,21,21,0.85)" }}>{content.value}%</span>
        <p className="text-base leading-6" style={{ color: "rgba(21,21,21,0.6)" }}>{content.label}</p>
      </div>
    )
  }
  return null
}

type Props = {
  layout: ThreeCardsLayoutType
  accent: string
}

export default function SliderCards({ layout, accent }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return
    const cardW = scrollRef.current.scrollWidth / layout.cards.length
    scrollRef.current.scrollBy({ left: dir === "left" ? -cardW : cardW, behavior: "smooth" })
  }

  return (
    <div className="mx-auto flex max-w-[90%] flex-col gap-8 py-14">
      <div className="relative">
        {/* Flèche gauche */}
        <button
          onClick={() => scroll("left")}
          className="absolute -left-20 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full transition-opacity hover:opacity-80"
          style={{ backgroundColor: accent }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(21,21,21,0.85)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Cartes scrollables */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
        >
          {layout.cards.map((card, i) => (
            <div
              key={i}
              className="flex shrink-0 flex-col overflow-hidden rounded-3xl"
              style={{ width: "29%", scrollSnapAlign: "start", minHeight: "60vh" }}
            >
              <div
                className="px-8 py-6"
                style={{ backgroundColor: card.color, borderBottom: "1px solid rgba(21,21,21,0.12)" }}
              >
                <p className="big-text text-lg leading-snug" style={{ color: "rgba(21,21,21,0.82)" }}>
                  {card.summary}
                </p>
              </div>
              <div
                className="relative flex flex-1 flex-col items-center justify-center p-8"
                style={{ backgroundColor: card.color }}
              >
                <div className="pointer-events-none absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.1)" }} />
                <div className="relative w-full">
                  <MainContent content={card.content} accent={accent} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Flèche droite */}
        <button
          onClick={() => scroll("right")}
          className="absolute -right-20 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full transition-opacity hover:opacity-80"
          style={{ backgroundColor: accent }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(21,21,21,0.85)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  )
}
