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
      <div className="flex flex-col items-center justify-center text-center gap-2 py-6">
        <span className="big-text text-3xl leading-none md:text-5xl xl:text-4xl 2xl:text-6xl" style={{ color: valueColor }}>
          {content.value}
        </span>
        <p className="text-xs leading-5 text-red-500 md:text-sm" style={{ color: labelColor ?? "red" }}>
          {content.label}
        </p>
        {content.source && (
          <p className="text-xs uppercase tracking-widest" style={{ color: textColor ? "rgba(43,43,43,0.52)" : dark ? "rgba(21,21,21,0.4)" : "rgba(255,255,255,0.4)" }}>
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
      <div className="flex flex-col items-center justify-center text-center gap-3">
        <svg width="100" height="100" className="md:w-30 md:h-30" style={{ transform: "rotate(-90deg)" }}>
          <circle cx="50" cy="50" r={radius * (100 / 120)} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
          <circle cx="50" cy="50" r={radius * (100 / 120)} fill="none" stroke={valueColor} strokeWidth="6"
            strokeDasharray={circumference * (100 / 120) / circumference * circumference}
            strokeDashoffset={strokeDashoffset * (100 / 120)}
            strokeLinecap="round" style={{ transition: "stroke-dashoffset 0.5s ease" }} />
        </svg>
        <div>
          <p className="big-text text-3xl leading-none md:text-4xl xl:text-3xl 2xl:text-5xl" style={{ color: valueColor }}>
            {content.value}%
          </p>
          <p className="mt-2 text-xs leading-5 md:text-sm" style={{ color: labelColor ?? "rgba(255,255,255,0.7)" }}>
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
      <ul className="flex flex-col gap-3">
        {content.items.map((bullet, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full" />
            <p className="text-xs leading-5 md:text-sm md:leading-6" style={{ color: bulletTextColor }}>
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
    <blockquote className="text-sm leading-6 italic font-bold text-center px-2 text-white md:text-base md:leading-7" style={{ color }}>
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
    <div className="flex min-h-screen items-center justify-center px-4 py-8 md:py-14">
      <div className="mx-auto grid w-full grid-cols-1 gap-5 sm:max-w-[90%] md:grid-cols-3 md:max-w-[85%] h-[80vh]">
        {/* Colonne gauche */}
        <div className="flex flex-col gap-5">
          <div className="flex flex-col justify-center px-2 py-4 md:flex-1">
            {index && title && (
              <>
                <span className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: accent }}>
                  Sous-tendance {index}
                </span>
                <h3 className="big-text mt-3 text-2xl leading-tight text-white md:text-3xl xl:text-2xl 2xl:text-3xl">
                  {title}
                </h3>
              </>
            )}
          </div>
          <div
            className="flex flex-col items-center justify-center rounded-2xl p-6 md:rounded-3xl md:p-8"
            style={{ backgroundColor: layout.leftCard.color, minHeight: "160px" }}
          >
            <CardView content={layout.leftCard.content} accent={accent} dark textColor={layout.leftCard.textColor} />
          </div>
        </div>

        {/* Colonne milieu */}
        <div className="flex flex-col gap-5">
          {layout.middleBullets ? (
            <div className="flex flex-1 flex-col justify-center gap-5 rounded-2xl px-6 py-8 md:rounded-3xl md:px-8 md:py-10" style={{ backgroundColor: "rgba(255,255,255,0.04)" }}>
              <ul className="flex flex-col gap-5">
                {layout.middleBullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-3 md:gap-4">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: accent }} />
                    <p className="text-sm leading-6 text-white/80 md:text-sm xl:text-xs 2xl:text-base md:leading-7">
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
                className="flex flex-1 flex-col items-center justify-center rounded-2xl p-5 md:rounded-3xl md:p-6"
                style={{ backgroundColor: card.color, minHeight: "120px" }}
              >
                <CardView content={card.content} accent={accent} textColor={card.textColor} dark={isDarkHexColor(card.color)} />
              </div>
            ))
          )}
        </div>

        {/* Colonne droite */}
        <div className="flex flex-col gap-5">
          {layout.rightCards.map((card, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center rounded-2xl p-5 md:rounded-3xl md:p-7"
              style={{ backgroundColor: card.color, flex: card.grow ?? 1, minHeight: "120px" }}
            >
              <CardView content={card.content} accent={accent} dark={isDarkHexColor(card.color)} textColor={card.textColor} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
