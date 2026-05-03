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
        className="text-xl font-black leading-none tracking-tight"
        style={{
          background: `linear-gradient(to right, ${accent}, #7774FF)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        {title}
      </p>
      <ChartContainer config={{ value: { label: "Taux" } }} className="h-44 w-full">
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
            <span className="text-base text-white/50 flex-1">{item.text}</span>
            <span className="text-base font-bold" style={{ color: colors[i] }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function NewspaperLayout({ layout, accent }: Props) {
  return (
    <div className="min-h-screen py-20">
      <div className="mx-auto max-w-[82%]">

        {/* Kicker */}
        <p className="text-xs font-semibold uppercase tracking-[0.5em]" style={{ color: accent }}>
          {layout.kicker}
        </p>

        {/* Headline */}
        <h2 className="big-text mt-5  leading-[1.05] text-white md:text-5xl">
          {layout.headline}
        </h2>
        <h2 className="big-text mt-5  leading-[1.05] text-white md:text-5xl">
          {layout.subheadline}
        </h2>

        {/* Pull quote — bande pleine largeur colorée */}
        {layout.pullQuote && (
          <div className="relative my-12 overflow-hidden rounded-2xl px-10 py-8  w-4/5">
            <div className="pointer-events-none absolute inset-0" style={{ backgroundColor: accent, opacity: 0.13 }} />
            <div
              className="pointer-events-none absolute bottom-0 left-0 top-0 w-1 rounded-full"
              style={{ backgroundColor: accent }}
            />
            <blockquote className="relative">
              <p className=" text-2xl leading-snug text-white md:text-xl italic">
                "{layout.pullQuote.text}"
              </p>
              <cite className="mt-4 block text-xs not-italic font-semibold uppercase tracking-[0.4em]" style={{ color: accent }}>
                — {layout.pullQuote.source}
              </cite>
            </blockquote>
          </div>
        )}

        {/* Colonnes */}
        <div className="grid grid-cols-3 gap-10">
          {layout.columns.map((col, i) => (
            <div key={i} className="flex flex-col gap-5">
              {/* Indicateur coloré */}
              <div className="flex items-center gap-3">
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.07)",
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  {COLUMN_LABELS[i]}
                </span>
                <div className="h-px flex-1" style={{ backgroundColor: "rgba(255,255,255,0.08)" }} />
              </div>

              {/* Grand chiffre mis en avant */}
              {col.stat && (
                <p
                  className="text-7xl font-black leading-none tracking-tight"
                  style={{
                    background: `linear-gradient(to bottom, ${accent}, #7774FF)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  {col.stat}
                </p>
              )}

              {/* Diagramme radial ou texte */}
              {col.items ? (
                <RadialFormatsChart items={col.items} accent={accent} title={col.content} />
              ) : (
                <p className="text-base leading-8 text-white/65">
                  {col.content}
                </p>
              )}

              {col.source && (
                <p className="text-xs font-semibold uppercase tracking-widest text-white/25">
                  {col.source}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
