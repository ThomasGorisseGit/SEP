import type { VerticalBandsInvertedLayout as VerticalBandsInvertedLayoutType, CardContent } from "@/types"

function isLight(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 > 160
}

function BandContent({ content, dark }: { content: CardContent; dark?: boolean }) {
  const primary = dark ? "rgba(21,21,21,0.85)" : "#ffffff"
  const secondary = dark ? "rgba(21,21,21,0.6)" : "rgba(255,255,255,0.7)"
  const tertiary = dark ? "rgba(21,21,21,0.4)" : "rgba(255,255,255,0.4)"

  if (content.type === "stat") {
    return (
      <div className="flex flex-col items-center text-center gap-3">
        <span className="big-text text-7xl leading-none" style={{ color: primary }}>{content.value}</span>
        <p className="text-sm leading-5" style={{ color: secondary }}>{content.label}</p>
        {content.source && (
          <p className="text-xs uppercase tracking-widest" style={{ color: tertiary }}>{content.source}</p>
        )}
      </div>
    )
  }
  if (content.type !== "quote") return null
  return (
    <blockquote className="text-base leading-7 italic font-bold text-center px-2" style={{ color: primary }}>
      "{content.text}"
      <p className="mt-4 text-xs not-italic font-semibold uppercase tracking-widest" style={{ color: secondary }}>
        {content.source}
      </p>
    </blockquote>
  )
}

type Props = {
  index: string
  layout: VerticalBandsInvertedLayoutType
  accent: string
  title: string
  description: string
}

export default function VerticalBandsInvertedLayout({ index, layout, accent, title, description }: Props) {
  return (
    <div className="grid min-h-screen grid-cols-[1fr_1fr]">

      {/* Partie gauche — titre + bullets */}
      <div className="flex flex-col justify-center gap-10 px-16 py-16">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: accent }}>
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
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: accent }} />
              <p className="text-base leading-7 text-white/70">
                {b.text}{" "}
                <span className="text-xs uppercase tracking-widest text-white/30">({b.source})</span>
              </p>
            </li>
          ))}
        </ul>

        <div className="h-px w-20 opacity-40" style={{ backgroundColor: accent }} />
      </div>

      {/* Bandes verticales à droite */}
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
              <span
                className="text-xs font-semibold uppercase tracking-[0.3em]"
                style={{ color: isLight(band.color) ? "rgba(21,21,21,0.5)" : "rgba(255,255,255,0.5)" }}
              >
                Chiffre clé
              </span>
            )}
            <BandContent content={band.content} dark={isLight(band.color)} />
          </div>
        ))}
      </div>

    </div>
  )
}
