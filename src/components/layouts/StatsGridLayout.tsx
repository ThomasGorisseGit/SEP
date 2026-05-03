import type { StatsGridLayout as StatsGridLayoutType, CardContent } from "@/types"

const whiteCard = { background: "#ffffff", borderColor: "#ffffff" }
const purpleCard = { background: "#AA96F8", borderColor: "#AA96F8" }
const darkText = "rgba(21,21,21,0.55)"
const darkTextStrong = "#151515"

function CardContentView({ content }: { content: CardContent }) {
  if (content.type === "stat") {
    return (
      <div className="flex flex-col items-center text-center">
        <span className="big-text text-7xl leading-none p-4" style={{ color: darkTextStrong }}>
          {content.value}
        </span>
        <p className="mt-2 text-base leading-6" style={{ color: darkText }}>
          {content.label}
        </p>
        {content.source && (
          <p className="mt-3 text-sm font-semibold uppercase tracking-widest" style={{ color: darkText }}>
            {content.source}
          </p>
        )}
      </div>
    )
  }
  return (
    <blockquote className="text-xl leading-8 italic font-bold text-center" style={{ color: darkTextStrong }}>
      "{content.text}"
      <p className="mt-3 text-sm not-italic" style={{ color: darkText }}>
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
    <div className="relative mx-auto grid min-h-screen max-w-[90%] items-stretch gap-5 px-6 py-12 md:grid-cols-[5fr_4fr] md:px-12 lg:px-20">
      {/* Colonne gauche : 2×2 cartes carrées */}
      <div className="flex flex-col gap-5">
        {[topRow, bottomRow].map((row, rowIdx) => (
          <div key={rowIdx} className="grid grid-cols-2 gap-6">
            {row.map((card, i) => (
              <div
                key={i}
                className="aspect-square flex flex-col justify-between rounded-3xl border p-7"
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
      <div className="relative flex flex-col justify-start gap-16 overflow-hidden rounded-3xl p-10">
        <div
          className="pointer-events-none absolute -bottom-16 -right-16 h-80 w-80 rounded-full blur-[100px]"
          style={{ backgroundColor: "#AA96F8" }}
        />
        <div
          className="pointer-events-none absolute -top-40 -left-20 h-80 w-80 rounded-full blur-[100px]"
          style={{ backgroundColor: "#AA96F8" }}
        />
        <h2 className="big-text relative z-10 text-4xl leading-tight text-white md:text-5xl">
          {layout.rightCard.title}
        </h2>
        <div className="relative z-10 flex flex-col gap-4">
          {layout.rightCard.paragraphs.map((p, i) => (
            <p key={i} className="text-xl leading-9 text-white">
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
