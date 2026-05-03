import type { ThreeColumnLayout as ThreeColumnLayoutType, CardContent } from "@/types"

function isDarkHexColor(hex: string): boolean {
  const normalized = hex.replace("#", "")
  if (normalized.length !== 6) return false

  const red = Number.parseInt(normalized.slice(0, 2), 16)
  const green = Number.parseInt(normalized.slice(2, 4), 16)
  const blue = Number.parseInt(normalized.slice(4, 6), 16)

  const luminance = (red * 299 + green * 587 + blue * 114) / 1000
  return luminance < 140
}

function CardView({ content, accent, dark, textColor }: { content: CardContent; accent?: string; dark?: boolean; textColor?: string }) {
  const valueColor = textColor ?? (dark ? "#151515" : (accent ?? "#ffffff"))
  const labelColor = textColor ?? (dark ? 'white' : '#151515')

  if (content.type === "stat") {
    return (
      <div className="flex flex-col items-center justify-center text-center gap-3">
        <span className="big-text text-6xl leading-none" style={{ color: valueColor }}>
          {content.value}
        </span>
        <p className="text-sm leading-5 text-red-500" style={{ color: labelColor ?? "red" }}>
          {content.label}
        </p>
        {content.source && (
          <p className="text-xs uppercase tracking-widest " style={{ color: textColor ? "rgba(43,43,43,0.52)" : dark ? "rgba(21,21,21,0.4)" : "rgba(255,255,255,0.4)" }}>
            {content.source}
          </p>
        )}
      </div>
    )
  }

  if (content.type === "percentage-chart") {
    const radius = 45
    const circumference = 2 * Math.PI * radius
    const strokeDashoffset = circumference - (content.value / 100) * circumference

    return (
      <div className="flex flex-col items-center justify-center text-center gap-4">
        <svg width="120" height="120" style={{ transform: "rotate(-90deg)" }}>
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="6"
          />
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke={valueColor}
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 0.5s ease" }}
          />
        </svg>
        <div>
          <p className="big-text text-5xl leading-none" style={{ color: valueColor }}>
            {content.value}%
          </p>
          <p className="mt-3 text-sm leading-5" style={{ color: labelColor ?? "rgba(255,255,255,0.7)" }}>
            {content.label}
          </p>
        </div>
      </div>
    )
  }

  if (content.type === "bullets") {
    const bulletTextColor = textColor ?? (dark ? "rgba(21,21,21,0.88)" : "rgba(255,255,255,0.82)")
    const sourceColor = dark ? "white" : "#151515"

    return (
      <ul className="flex flex-col gap-4">
        {content.items.map((bullet, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full" />
            <p className="text-sm leading-6" style={{ color: bulletTextColor }}>
              {bullet.text}
              <span className="ml-2 text-xs uppercase tracking-widest" style={{ color: sourceColor }}>
                ({bullet.source})
              </span>
            </p>
          </li>
        ))}
      </ul>
    )
  }

  if (content.type !== "quote") return null
  const color = textColor ?? (dark ? "rgba(21,21,21,0.88)" : "rgba(255,255,255,0.82)")
  const sourceColor = textColor ?? (dark ? "white" : "#151515")

  return (
    <blockquote className="text-base leading-7 italic font-bold text-center px-2 text-white " style={{ color: color }}>
      {content.text}
      <p className="mt-3 text-xs not-italic font-semibold uppercase tracking-widest text-white/40" style={{ color: sourceColor }}>
        {content.source}
      </p>
    </blockquote>
  )
}

type Props = {
  layout: ThreeColumnLayoutType
  accent: string
  index?: string
  title?: string
}

export default function ThreeColumnLayout({ layout, accent, index, title }: Props) {
  return (
    <div className="mx-auto grid min-h-screen max-w-[75%] grid-cols-3 gap-5 py-14" style={{ alignItems: "stretch" }}>
      {/* Colonne gauche — 2 blocs empilés */}
      <div className="flex flex-col gap-5">
        {/* Bloc 1 : label + titre, sans fond */}
        <div className="flex flex-1 flex-col justify-center px-2">
          {index && title && (
            <>
              <span className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: accent }}>
                Sous-tendance {index}
              </span>
              <h3 className="big-text mt-3 text-3xl leading-tight text-white">
                {title}
              </h3>
            </>
          )}
        </div>
        {/* Bloc 2 : stat avec fond coloré, en bas */}
        <div
          className="flex flex-col items-center justify-center rounded-3xl p-8"
          style={{ backgroundColor: layout.leftCard.color, minHeight: "40%" }}
        >
          <CardView content={layout.leftCard.content} accent={accent} dark textColor={layout.leftCard.textColor} />
        </div>
      </div>

      {/* Colonne milieu — 3 cartes ou bullets */}
      <div className="flex flex-col gap-5">
        {layout.middleBullets ? (
          <div className="flex flex-1 flex-col justify-center gap-6 rounded-3xl px-8 py-10" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
            <ul className="flex flex-col gap-6">
              {layout.middleBullets.map((b, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: accent }} />
                  <p className="text-base leading-7 text-white/80">
                    {b.text}{" "}
                    <span className="text-xs uppercase tracking-widest text-white/35">({b.source})</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          layout.middleCards?.map((card, i) => (
            <div
              key={i}
              className="flex flex-1 flex-col items-center justify-center rounded-3xl p-6"
              style={{ backgroundColor: card.color }}
            >
              <CardView content={card.content} accent={accent} textColor={card.textColor} dark={isDarkHexColor(card.color)} />
            </div>
          ))
        )}
      </div>

      {/* Colonne droite — 2 cartes moyennes */}
      <div className="flex flex-col gap-5">
        {layout.rightCards.map((card, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center rounded-3xl p-7"
            style={{ backgroundColor: card.color, flex: card.grow ?? 1 }}
          >
            <CardView content={card.content} accent={accent} dark={isDarkHexColor(card.color)} textColor={card.textColor} />
          </div>
        ))}
      </div>
    </div>
  )
}
