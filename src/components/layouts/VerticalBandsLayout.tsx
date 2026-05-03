import type { VerticalBandsLayout as VerticalBandsLayoutType, CardContent } from "@/types"

function BandContent({ content }: { content: CardContent }) {
  if (content.type === "stat") {
    return (
      <div className="flex flex-col items-center text-center gap-3">
        <span className="big-text text-7xl leading-none text-white">{content.value}</span>
        <p className="text-sm leading-5 text-white/70">{content.label}</p>
        {content.source && (
          <p className="text-xs uppercase tracking-widest text-white/40">{content.source}</p>
        )}
      </div>
    )
  }
  if (content.type !== "quote") return null
  return (
    <blockquote className="text-base leading-7 italic font-bold text-center px-2" style={{ color: "#151515" }}>
      "{content.text}"
      <p className="mt-4 text-xs not-italic font-semibold uppercase tracking-widest" style={{ color: "rgba(21,21,21,0.45)" }}>
        {content.source}
      </p>
    </blockquote>
  )
}

type Props = {
  index: string
  layout: VerticalBandsLayoutType
  accent: string
  title: string
  description: string
}

export default function VerticalBandsLayout({ index, layout, accent, title, description }: Props) {
  return (
    <div className="grid min-h-screen grid-cols-[1fr_1fr]">
      {/* Bandes verticales */}
      <div className="flex flex-row h-full">
        {layout.bands.map((band, i) => (
          <div
            key={i}
            className="flex flex-1 flex-col items-center px-5"
            style={{
              backgroundColor: band.color,
              justifyContent:
                band.position === "top" ? "flex-start"
                  : band.position === "bottom" ? "flex-end"
                    : "center",
              paddingTop: band.position === "top" ? "6rem" : "3.5rem",
              paddingBottom: band.position === "bottom" ? "6rem" : "3.5rem",
              gap: "1.25rem",
            }}
          >
            {band.content.type === "stat" && (
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                Chiffre clé
              </span>
            )}
            <BandContent content={band.content} />
          </div>
        ))}
      </div>

      {/* Partie droite */}
      <div className="flex flex-col justify-center gap-10 px-16 py-16">
        <div>
          <span
            className="text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: accent }}
          >
            Sous-tendance {index}
          </span>
          <h2 className="big-text mt-4 text-4xl leading-tight text-white md:text-5xl">
            {title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-white/60">
            {description}
          </p>
        </div>

        <ul className="flex flex-col gap-5">
          {layout.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-4">
              <span
                className="mt-2 h-2 w-2 shrink-0 rounded-full"
                style={{ backgroundColor: accent }}
              />
              <p className="text-base leading-7 text-white/70">
                {b.text}{" "}
                <span className="text-xs uppercase tracking-widest text-white/30">({b.source})</span>
              </p>
            </li>
          ))}
        </ul>

        <div className="h-px w-20 opacity-40" style={{ backgroundColor: accent }} />
      </div>
    </div>
  )
}
