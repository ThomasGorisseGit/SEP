import { PolarAngleAxis, RadialBar, RadialBarChart } from "recharts"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import type { NewspaperLayout as NewspaperLayoutType, NewspaperColumnItem } from "@/types"

const COLUMN_LABELS = ["01", "02", "03"]
const BLUE = "#7774FF"

function lerpHex(from: string, to: string, t: number): string {
  const p = (h: string, o: number) => parseInt(h.slice(o, o + 2), 16)
  const r = Math.round(p(from, 1) + (p(to, 1) - p(from, 1)) * t)
  const g = Math.round(p(from, 3) + (p(to, 3) - p(from, 3)) * t)
  const b = Math.round(p(from, 5) + (p(to, 5) - p(from, 5)) * t)
  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`
}

function ringColors(accent: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => lerpHex(accent, BLUE, i / (count - 1)))
}

type Props = {
  layout: NewspaperLayoutType
  accent: string
}

function RadialTooltip({ active, payload }: { active?: boolean; payload?: Array<{ value: number; payload: { name: string } }> }) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-xl px-4 py-3 shadow-xl" style={{ backgroundColor: "#151515", border: "1px solid rgba(255,255,255,0.1)" }}>
      <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.5)" }}>
        {payload[0].payload.name}
      </p>
      <p className="big-text text-2xl leading-none text-white mt-1">{payload[0].value}%</p>
      <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>des organisations</p>
    </div>
  )
}

function RadialFormatsChart({ items, accent, title }: { items: NewspaperColumnItem[]; accent: string; title: string }) {
  const colors = ringColors(accent, items.length)
  const chartData = items.map((item, i) => ({
    name: item.text,
    value: parseFloat(item.label?.replace("%", "") ?? "0"),
    fill: colors[i],
  }))

  return (
    <div className="flex flex-col gap-4">
      <p
        className="text-base font-black leading-none tracking-tight md:text-lg xl:text-base 2xl:text-xl"
        style={{
          background: `linear-gradient(to right, ${accent}, #7774FF)`,
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent",
        }}
      >
        {title}
      </p>
      <ChartContainer config={{ value: { label: "Taux" } }} className="h-40 w-full md:h-32">
        <RadialBarChart data={chartData} innerRadius="30%" outerRadius="100%" startAngle={90} endAngle={-270}>
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar dataKey="value" background={{ fill: "rgba(255,255,255,0.06)" }} cornerRadius={4} />
          <ChartTooltip content={<RadialTooltip />} />
        </RadialBarChart>
      </ChartContainer>
      <div className="flex flex-col gap-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: colors[i] }} />
            <span className="text-sm text-white/50 flex-1 md:text-sm xl:text-xs 2xl:text-base">{item.text}</span>
            <span className="text-sm font-bold md:text-sm xl:text-xs 2xl:text-base" style={{ color: colors[i] }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function NewspaperLayout({ layout, accent }: Props) {
  return (
    <div className="py-12 md:py-20 xl:py-14 2xl:py-20">
      <div className="mx-auto w-full px-4 sm:max-w-[90%] md:max-w-[82%]">

        <p className="text-xs font-semibold uppercase tracking-[0.5em]" style={{ color: accent }}>
          {layout.kicker}
        </p>

        <h2 className="big-text mt-4 text-2xl leading-tight text-white sm:text-3xl md:mt-5 md:text-4xl xl:text-3xl 2xl:text-5xl">
          {layout.headline}
        </h2>
        <h2 className="big-text mt-2 text-2xl leading-tight text-white sm:text-3xl md:mt-5 md:text-4xl xl:text-3xl 2xl:text-5xl">
          {layout.subheadline}
        </h2>

        {layout.pullQuote && (
          <div className="relative my-8 overflow-hidden rounded-2xl px-6 py-6 w-full md:my-12 md:px-10 md:py-8 md:w-4/5">
            <div className="pointer-events-none absolute inset-0" style={{ backgroundColor: accent, opacity: 0.13 }} />
            <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-1 rounded-full" style={{ backgroundColor: accent }} />
            <blockquote className="relative">
              <p className="text-base leading-snug text-white italic md:text-lg xl:text-base 2xl:text-xl">
                {layout.pullQuote.text}
              </p>
              <cite className="mt-3 block text-xs not-italic font-semibold uppercase tracking-[0.4em] md:mt-4" style={{ color: accent }}>
                — {layout.pullQuote.source}
              </cite>
            </blockquote>
          </div>
        )}

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          {layout.columns.map((col, i) => (
            <div key={i} className="flex flex-col gap-4 md:gap-5">
              <div className="flex items-center gap-3">
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold"
                  style={{ backgroundColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.5)" }}
                >
                  {COLUMN_LABELS[i]}
                </span>
                <div className="h-px flex-1" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
              </div>

              {col.stat && (
                <p
                  className="text-5xl font-black leading-none tracking-tight md:text-5xl xl:text-4xl 2xl:text-7xl"
                  style={{
                    background: `linear-gradient(to bottom, ${accent}, #7774FF)`,
                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", color: "transparent",
                  }}
                >
                  {col.stat}
                </p>
              )}

              {col.items ? (
                <RadialFormatsChart items={col.items} accent={accent} title={col.content} />
              ) : (
                <p className="text-sm leading-7 text-white/65 md:text-sm xl:text-xs 2xl:text-base md:leading-8">{col.content}</p>
              )}

              {col.source && (
                <p className="text-xs font-semibold uppercase tracking-widest text-white/25">{col.source}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
