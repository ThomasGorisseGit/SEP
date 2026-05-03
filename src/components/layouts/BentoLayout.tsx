import type { BentoLayout as BentoLayoutType, BentoCard, CardContent } from "@/types"

// Grille 3×3 : [2×2][1×1] / [_][1×1] / [2×1][1×1]
const CARD_SPANS = [
  { col: 2, row: 2 },
  { col: 1, row: 1 },
  { col: 1, row: 1 },
  { col: 2, row: 1 },
  { col: 1, row: 1 },
]

type CardProps = { content: CardContent; accent: string; large?: boolean; wide?: boolean }

function BentoContent({ content, accent, large, wide }: CardProps) {
  if (content.type === "stat") {
    return (
      <div className={`flex ${wide ? "flex-row items-end gap-6" : "flex-col gap-3"}`}>
        <span
          className="font-black leading-none"
          style={{
            fontSize: large ? "clamp(5rem, 9vw, 8rem)" : "clamp(2.5rem, 4vw, 3.5rem)",
            color: "rgba(21,21,21,0.88)",
          }}
        >
          {content.value}
        </span>
        <div className="flex flex-col gap-1 pb-1">
          <p
            className={large ? "text-base leading-6" : "text-xs leading-5"}
            style={{ color: "rgba(21,21,21,0.6)" }}
          >
            {content.label}
          </p>
          {content.source && (
            <p className="text-xs uppercase tracking-widest" style={{ color: "rgba(21,21,21,0.35)" }}>
              {content.source}
            </p>
          )}
        </div>
      </div>
    )
  }

  if (content.type === "quote") {
    return (
      <blockquote className="flex flex-col gap-4">
        <span
          className="font-black leading-none select-none"
          style={{ fontSize: "4rem", color: accent, opacity: 0.5, lineHeight: 1 }}
        >
          "
        </span>
        <p
          className={`italic font-semibold leading-7 -mt-6 ${large ? "text-xl" : "text-sm"}`}
          style={{ color: "rgba(21,21,21,0.85)" }}
        >
          {content.text}
        </p>
        <cite className="text-xs not-italic font-semibold uppercase tracking-widest" style={{ color: "rgba(21,21,21,0.4)" }}>
          — {content.source}
        </cite>
      </blockquote>
    )
  }

  if (content.type === "bullets") {
    return (
      <ul className="flex flex-col gap-3">
        {content.items.map((b, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: accent }} />
            <p className="text-sm leading-5" style={{ color: "rgba(21,21,21,0.75)" }}>{b.text}</p>
          </li>
        ))}
      </ul>
    )
  }

  return null
}

function LargeCard({ card, accent }: { card: BentoCard; accent: string }) {
  const content = card.content
  const isStat = content.type === "stat"

  return (
    <div
      className="relative overflow-hidden rounded-3xl"
      style={{ backgroundColor: "#151515", gridColumn: "span 2", gridRow: "span 2" }}
    >
      {/* Halo lumineux central */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(ellipse at 35% 55%, ${accent}22 0%, transparent 60%)` }}
      />

      {/* Anneaux architecturaux */}
      <div className="pointer-events-none absolute rounded-full" style={{ width: "75%", aspectRatio: "1", top: "5%", right: "-22%", border: `1px solid ${accent}18` }} />
      <div className="pointer-events-none absolute rounded-full" style={{ width: "48%", aspectRatio: "1", top: "18%", right: "-10%", border: `1px solid ${accent}12` }} />

      {/* Grille de points top-right */}
      <div
        className="pointer-events-none absolute"
        style={{
          top: 0, right: 0, width: "45%", height: "45%", opacity: 0.06,
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      {/* Chiffre fantôme en arrière-plan */}
      {isStat && (
        <div
          className="pointer-events-none absolute font-black leading-none select-none"
          style={{
            fontSize: "clamp(11rem, 24vw, 20rem)",
            color: accent,
            opacity: 0.07,
            top: "50%", left: "50%",
            transform: "translate(-48%, -48%)",
            whiteSpace: "nowrap",
          }}
        >
          {content.value}
        </div>
      )}

      {/* Contenu */}
      <div className="absolute inset-0 flex flex-col justify-end p-10">
        {/* Tag */}
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: `${accent}99` }}>
          Chiffre clé
        </p>

        {isStat && (
          <>
            <span
              className="font-black leading-none"
              style={{
                fontSize: "clamp(4.5rem, 10vw, 8rem)",
                background: `linear-gradient(140deg, ${accent} 30%, #ffffff 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {content.value}
            </span>

            <div className="my-6 h-px w-12" style={{ backgroundColor: accent, opacity: 0.35 }} />

            <p className="max-w-xs text-base leading-7 text-white/65">{content.label}</p>
            {content.source && (
              <p className="mt-3 text-xs uppercase tracking-widest text-white/30">{content.source}</p>
            )}
          </>
        )}

        {!isStat && (
          <BentoContent content={content} accent={accent} large />
        )}
      </div>
    </div>
  )
}

function Card({ card, index, accent }: { card: BentoCard; index: number; accent: string }) {
  const span = CARD_SPANS[index] ?? { col: 1, row: 1 }
  const isWide = span.col === 2 && span.row === 1

  return (
    <div
      className="relative overflow-hidden rounded-3xl flex flex-col justify-end p-8"
      style={{
        backgroundColor: card.color,
        gridColumn: `span ${span.col}`,
        gridRow: `span ${span.row}`,
      }}
    >
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: "70%", aspectRatio: "1", top: "-30%", right: "-25%",
          background: `radial-gradient(circle, ${accent}28 0%, transparent 70%)`,
        }}
      />
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: "50%", aspectRatio: "1", bottom: "-25%", left: "-20%",
          background: "radial-gradient(circle, rgba(0,0,0,0.1) 0%, transparent 70%)",
        }}
      />
      <div className="relative">
        <BentoContent content={card.content} accent={accent} wide={isWide} />
      </div>
    </div>
  )
}

type Props = {
  layout: BentoLayoutType
  accent: string
}

export default function BentoLayout({ layout, accent }: Props) {
  return (
    <div className="mx-auto max-w-[88%] py-14">
      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          minHeight: "78vh",
        }}
      >
        {layout.cards.slice(0, 5).map((card, i) =>
          i === 0
            ? <LargeCard key={i} card={card} accent={accent} />
            : <Card key={i} card={card} index={i} accent={accent} />
        )}
      </div>
    </div>
  )
}
