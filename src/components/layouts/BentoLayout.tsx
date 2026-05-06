import type { BentoLayout as BentoLayoutType, BentoCard, CardContent } from "@/types"

// Grille 3×3 : [2×2][1×1] / [_][1×1] / [2×1][1×1]
// Sur mobile, toutes les cartes sont en 1 colonne (pas de span)
const CARD_SPANS = [
  { col: 2, row: 2 },
  { col: 1, row: 1 },
  { col: 1, row: 1 },
  { col: 2, row: 1 },
  { col: 1, row: 1 },
]

function Decor({ wide }: { wide?: boolean }) {
  return (
    <>
      <div className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(ellipse at 75% 20%, rgba(21,21,21,0.07) 0%, transparent 55%)" }} />
      <div className="pointer-events-none absolute rounded-full"
        style={{ width: wide ? "50%" : "80%", aspectRatio: "1", top: "-25%", right: "-22%", border: "1px solid rgba(21,21,21,0.1)" }} />
      <div className="pointer-events-none absolute rounded-full"
        style={{ width: wide ? "30%" : "50%", aspectRatio: "1", top: "-10%", right: "-8%", border: "1px solid rgba(21,21,21,0.07)" }} />
      <div className="pointer-events-none absolute"
        style={{
          bottom: 0, left: 0, width: "38%", height: "38%", opacity: 0.07,
          backgroundImage: "radial-gradient(circle, rgba(21,21,21,0.9) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }} />
    </>
  )
}

function StatCard({ content, wide }: { content: Extract<CardContent, { type: "stat" }>; wide?: boolean }) {
  return (
    <>
      <div className="pointer-events-none absolute font-black leading-none select-none"
        style={{
          fontSize: wide ? "clamp(5rem, 15vw, 12rem)" : "clamp(4rem, 12vw, 10rem)",
          color: "rgba(21,21,21,0.04)",
          top: "50%", left: wide ? "auto" : "50%",
          right: wide ? "-2%" : "auto",
          transform: wide ? "translateY(-50%)" : "translate(-46%, -50%)",
          whiteSpace: "nowrap",
        }}>
        {content.value}
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-7">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: "rgba(21,21,21,0.35)" }}>Chiffre clé</p>
        <span className="font-black leading-none"
          style={{
            fontSize: wide ? "clamp(2rem, 6vw, 5rem)" : "clamp(1.75rem, 5vw, 4rem)",
            background: "linear-gradient(140deg, rgba(21,21,21,0.92) 0%, rgba(21,21,21,0.45) 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
          }}>
          {content.value}
        </span>
        <p className="mt-3 text-sm leading-5 md:text-base md:leading-5" style={{ color: "rgba(21,21,21,0.8)", maxWidth: wide ? "55%" : "90%" }}>
          {content.label}
        </p>
        {content.source && (
          <p className="mt-2 text-xs uppercase tracking-widest" style={{ color: "rgba(21,21,21,0.32)" }}>{content.source}</p>
        )}
      </div>
    </>
  )
}

function QuoteCard({ content }: { content: Extract<CardContent, { type: "quote" }> }) {
  return (
    <>
      <div className="pointer-events-none absolute font-black select-none"
        style={{ fontSize: "clamp(7rem, 20vw, 16rem)", color: "rgba(21,21,21,0.05)", top: "-8%", left: "-2%", lineHeight: 1 }}>
        "
      </div>
      <div className="absolute inset-0 flex flex-col justify-center p-5 md:p-7">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: "rgba(21,21,21,0.35)" }}>Citation</p>
        <blockquote className="flex flex-col gap-2 md:gap-3">
          <p className="text-xs italic font-semibold leading-5 md:text-sm md:leading-6" style={{ color: "rgba(21,21,21,0.85)" }}>
            "{content.text}"
          </p>
          <cite className="text-xs not-italic uppercase tracking-widest" style={{ color: "rgba(21,21,21,0.38)" }}>
            — {content.source}
          </cite>
        </blockquote>
      </div>
    </>
  )
}

function BulletsCard({ content }: { content: Extract<CardContent, { type: "bullets" }> }) {
  return (
    <div className="absolute inset-0 flex flex-col justify-center p-5 md:p-7">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: "rgba(21,21,21,0.35)" }}>Points clés</p>
      <ul className="flex flex-col gap-3 md:gap-4">
        {content.items.map((b, i) => (
          <li key={i} className="flex items-start gap-2 md:gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: "rgba(21,21,21,0.45)" }} />
            <p className="text-xs leading-5 md:text-base md:leading-5" style={{ color: "rgba(21,21,21,0.7)" }}>
              {b.text}
              {b.source && <span className="ml-1 text-xs uppercase tracking-widest" style={{ color: "rgba(21,21,21,0.35)" }}>({b.source})</span>}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Card({ card, index }: { card: BentoCard; index: number }) {
  const span = CARD_SPANS[index] ?? { col: 1, row: 1 }
  const isWide = span.col === 2 && span.row === 1
  const content = card.content
  const colSpanClass = span.col === 2 ? "md:col-span-2" : ""
  const rowSpanClass = span.row === 2 ? "md:row-span-2" : ""

  return (
    <div
      className={`relative overflow-hidden rounded-2xl md:rounded-3xl ${colSpanClass} ${rowSpanClass}`}
      style={{ backgroundColor: card.color, minHeight: "160px" }}
    >
      <Decor wide={isWide} />
      {content.type === "stat" && <StatCard content={content} wide={isWide} />}
      {content.type === "quote" && <QuoteCard content={content} />}
      {content.type === "bullets" && <BulletsCard content={content} />}
    </div>
  )
}

function LargeCard({ card, accent }: { card: BentoCard; accent: string }) {
  const content = card.content
  const isStat = content.type === "stat"

  return (
    <div
      className="relative overflow-hidden rounded-2xl md:rounded-3xl md:col-span-2 md:row-span-2"
      style={{ backgroundColor: "#151515", minHeight: "220px" }}
    >
      <div className="pointer-events-none absolute inset-0"
        style={{ background: `radial-gradient(ellipse at 35% 55%, ${accent}22 0%, transparent 60%)` }} />
      <div className="pointer-events-none absolute rounded-full"
        style={{ width: "75%", aspectRatio: "1", top: "5%", right: "-22%", border: `1px solid ${accent}18` }} />
      <div className="pointer-events-none absolute rounded-full"
        style={{ width: "48%", aspectRatio: "1", top: "18%", right: "-10%", border: `1px solid ${accent}12` }} />
      <div className="pointer-events-none absolute"
        style={{ top: 0, right: 0, width: "45%", height: "45%", opacity: 0.06, backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "18px 18px" }} />
      {isStat && (
        <div className="pointer-events-none absolute font-black leading-none select-none"
          style={{
            fontSize: "clamp(7rem, 24vw, 20rem)", color: accent, opacity: 0.07,
            top: "50%", left: "50%", transform: "translate(-48%, -48%)", whiteSpace: "nowrap",
          }}>
          {content.value}
        </div>
      )}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: `${accent}99` }}>Chiffre clé</p>
        {isStat && (
          <>
            <span className="font-black leading-none"
              style={{
                fontSize: "clamp(3rem, 10vw, 8rem)",
                background: `linear-gradient(140deg, ${accent} 30%, #ffffff 100%)`,
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>
              {content.value}
            </span>
            <div className="my-4 h-px w-10 md:my-6 md:w-12" style={{ backgroundColor: accent, opacity: 0.35 }} />
            <p className="max-w-xs text-sm leading-6 text-white/65 md:text-base md:leading-7">{content.label}</p>
            {content.source && (
              <p className="mt-2 text-xs uppercase tracking-widest text-white/30">{content.source}</p>
            )}
          </>
        )}
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
    <div className="mx-auto w-full px-4 py-8 sm:max-w-[88%] md:py-14">
      <h2 className="big-text mb-6 text-2xl leading-tight text-white md:text-4xl" style={{ maxWidth: "66%" }}>
        Ce que l'on observe
      </h2>
      <div
        className="grid grid-cols-1 gap-4 md:grid-cols-3 md:min-h-[78vh]"
        style={{ gridAutoRows: "minmax(160px, auto)" }}
      >
        {layout.cards.slice(0, 5).map((card, i) =>
          i === 0
            ? <LargeCard key={i} card={card} accent={accent} />
            : <Card key={i} card={card} index={i} />
        )}
      </div>
    </div>
  )
}
