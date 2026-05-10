import type { StatsGridLayout as StatsGridLayoutType, CardContent } from "@/types"

const whiteCard = { background: "#ffffff", borderColor: "#ffffff" }
const purpleCard = { background: "#AA96F8", borderColor: "#AA96F8" }
const darkText = "rgba(21,21,21,0.55)"
const darkTextStrong = "#151515"

function CardContentView({ content }: { content: CardContent }) {
  if (content.type === "stat") {
    return (
      <div className="flex flex-col items-center text-center">
        <span className="big-text text-4xl leading-none p-2 md:text-7xl md:p-4" style={{ color: darkTextStrong }}>
          {content.value}
        </span>
        <p className="mt-2 text-sm leading-5 md:text-base md:leading-6" style={{ color: darkText }}>
          {content.label}
        </p>
        {content.source && (
          <p className="mt-2 text-xs font-semibold uppercase tracking-widest" style={{ color: darkText }}>
            {content.source}
          </p>
        )}
      </div>
    )
  }
  if (content.type !== "quote") return null
  return (
    <blockquote className="text-sm leading-6 italic font-bold text-center md:text-xl md:leading-8" style={{ color: darkTextStrong }}>
      {content.text}
      <p className="mt-3 text-xs not-italic" style={{ color: darkText }}>
        {content.source}
      </p>
    </blockquote>
  )
}

type Props = {
  layout: StatsGridLayoutType
  accent: string
}

export default function StatsGridLayout({ layout }: Props) {
  const topRow = layout.cards.slice(0, 2)
  const bottomRow = layout.cards.slice(2, 4)

  return (
    <div className="relative mx-auto grid w-full items-stretch gap-5 px-4 py-8 sm:max-w-[90%] sm:px-6 md:grid-cols-[5fr_4fr] md:px-12 md:py-12 lg:px-20">
      {/* Colonne gauche : 2×2 cartes */}
      <div className="flex flex-col gap-5">
        {[topRow, bottomRow].map((row, rowIdx) => (
          <div key={rowIdx} className="grid grid-cols-2 gap-4 md:gap-6">
            {row.map((card, i) => (
              <div
                key={i}
                className="flex flex-col justify-between rounded-2xl border p-4 min-h-35 md:rounded-3xl md:p-7 md:aspect-square"
                style={card.color === "white" ? whiteCard : purpleCard}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: darkText }}>
                  {card.content.type === "stat" ? "Chiffre clé" : ""}
                </span>
                <CardContentView content={card.content} />
                <div />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Carte droite */}
      <div className="relative flex flex-col justify-center gap-8 overflow-hidden rounded-2xl p-6 md:gap-16 md:rounded-3xl md:p-10">
        <div
          className="pointer-events-none absolute -bottom-16 -right-16 h-80 w-80 rounded-full blur-[100px]"
          style={{ backgroundColor: "#AA96F8" }}
        />
        <div
          className="pointer-events-none absolute -top-40 -left-20 h-80 w-80 rounded-full blur-[100px]"
          style={{ backgroundColor: "#AA96F8" }}
        />
        <h2 className="big-text relative z-10 text-2xl leading-tight text-white sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl">
          {layout.rightCard.title}
        </h2>
        <div className="relative z-10 flex flex-col gap-4">
          {layout.rightCard.paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-7 text-white md:text-xl md:leading-9">
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
