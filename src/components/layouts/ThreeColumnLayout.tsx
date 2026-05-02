import type { ThreeColumnLayout as ThreeColumnLayoutType, CardContent } from "@/types"

function CardView({ content, style }: { content: CardContent; style?: React.CSSProperties }) {
  if (content.type === "stat") {
    return (
      <div className="flex flex-col items-center justify-center text-center gap-3" style={style}>
        <span className="big-text text-6xl leading-none text-white">{content.value}</span>
        <p className="text-sm leading-5 text-white/70">{content.label}</p>
        {content.source && (
          <p className="text-xs uppercase tracking-widest text-white/40">{content.source}</p>
        )}
      </div>
    )
  }
  return (
    <blockquote className="text-base leading-7 italic font-bold text-center px-2 text-white" style={style}>
      "{content.text}"
      <p className="mt-3 text-xs not-italic font-semibold uppercase tracking-widest text-white/40">
        {content.source}
      </p>
    </blockquote>
  )
}

type Props = {
  layout: ThreeColumnLayoutType
  accent: string
}

export default function ThreeColumnLayout({ layout, accent }: Props) {
  return (
    <div className="grid min-h-screen grid-cols-3 gap-5 px-8 py-10" style={{ alignItems: "stretch" }}>
      {/* Colonne gauche — grande carte pleine hauteur */}
      <div
        className="flex flex-col items-center justify-center rounded-3xl p-8"
        style={{ backgroundColor: layout.leftCard.color }}
      >
        <CardView content={layout.leftCard.content} />
      </div>

      {/* Colonne milieu — 3 petites cartes */}
      <div className="flex flex-col gap-5">
        {layout.middleCards.map((card, i) => (
          <div
            key={i}
            className="flex flex-1 flex-col items-center justify-center rounded-3xl p-6"
            style={{ backgroundColor: card.color }}
          >
            <CardView content={card.content} />
          </div>
        ))}
      </div>

      {/* Colonne droite — 2 cartes moyennes */}
      <div className="flex flex-col gap-5">
        {layout.rightCards.map((card, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center rounded-3xl p-7"
            style={{
              backgroundColor: card.color,
              flex: card.grow ?? 1,
            }}
          >
            <CardView content={card.content} />
          </div>
        ))}
      </div>
    </div>
  )
}
