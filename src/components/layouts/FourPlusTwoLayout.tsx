import { useState } from "react"
import type { FourPlusTwoLayout as FourPlusTwoLayoutType, FourPlusTwoCard, CardContent } from "@/types"

type Props = {
  layout: FourPlusTwoLayoutType
  accent: string
}

function GlassCardContent({ content, accent }: { content: CardContent; accent: string }) {
  if (content.type === "stat") {
    return (
      <div className="flex flex-row items-center justify-center gap-3 md:gap-4">
        <span className="text-center text-3xl font-black leading-none sm:text-4xl md:text-4xl xl:text-3xl 2xl:text-5xl" style={{ color: accent }}>
          {content.value}
        </span>
        <div className="flex flex-col gap-1">
          <p className="text-xs leading-5 text-white/65">{content.label}</p>
          {content.source && (
            <p className="text-xs uppercase tracking-widest text-white/30">{content.source}</p>
          )}
        </div>
      </div>
    )
  }

  if (content.type === "quote") {
    return (
      <blockquote className="flex justify-center flex-col gap-2 md:gap-3">
        <p className="text-xs leading-5 italic font-semibold text-white/85 md:text-sm md:leading-6">
          {content.text}
        </p>
        <cite className="text-xs not-italic uppercase tracking-widest text-white/35">
          — {content.source}
        </cite>
      </blockquote>
    )
  }

  if (content.type === "bullets") {
    return (
      <ul className="flex justify-center flex-col gap-2 md:gap-3">
        {content.items.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: accent }} />
            <p className="text-xs leading-5 text-white/65">{b.text}</p>
          </li>
        ))}
      </ul>
    )
  }

  return null
}

function SolidCardContent({ content }: { content: CardContent }) {
  if (content.type === "stat") {
    return (
      <div className="flex flex-row items-center gap-3 md:gap-4">
        <span className="text-4xl font-black leading-none md:text-5xl xl:text-4xl 2xl:text-7xl">{content.value}</span>
        <div className="flex flex-col gap-1 md:gap-2">
          <p className="text-sm leading-5 md:text-sm xl:text-xs 2xl:text-base md:leading-6">{content.label}</p>
          {content.source && (
            <p className="text-xs uppercase tracking-widest">{content.source}</p>
          )}
        </div>
      </div>
    )
  }

  if (content.type === "quote") {
    return (
      <blockquote className="flex flex-col gap-2 md:gap-3">
        <p className="text-base leading-7 italic font-semibold md:text-base xl:text-sm 2xl:text-xl 2xl:leading-8">
          "{content.text}"
        </p>
        <cite className="text-xs not-italic uppercase tracking-widest">— {content.source}</cite>
      </blockquote>
    )
  }

  if (content.type === "bullets") {
    return (
      <ul className="flex flex-col gap-2 md:gap-3 text-graphite">
        {content.items.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
            <p className="text-sm leading-5 md:text-base md:leading-6">{b.text}</p>
          </li>
        ))}
      </ul>
    )
  }

  return null
}

function SmallCard({ card, accent, index }: { card: FourPlusTwoCard; accent: string; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="rounded-2xl p-4 shadow-2xl cursor-pointer flex items-center sm:p-6 md:p-8"
      style={{
        background: hovered ? "#E2F16322" : "#E2F16311",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.09)"}`,
        backdropFilter: "blur(14px)",
        transition: "background-color 0.35s ease, border-color 0.35s ease",
        marginBottom: index % 2 === 0 ? "1rem" : undefined,
        marginTop: index % 2 === 1 ? "1rem" : undefined,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {card.label && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/30">{card.label}</p>
      )}
      <GlassCardContent content={card.content} accent={accent} />
    </div>
  )
}

function BigCard({ card }: { card: FourPlusTwoCard }) {
  return (
    <div className="bg-linear-to-l from-lemon to-white relative flex flex-col gap-8 overflow-hidden rounded-2xl p-6 md:gap-16 md:rounded-3xl md:p-10">
      <div className="text-white flex flex-col overflow-hidden rounded-xl md:rounded-2xl">
        {card.label && (
          <div className="px-4 py-3 flex md:px-8 md:py-5" style={{ borderBottom: "1px solid rgba(21,21,21,1)" }}>
            <p className="text-xl big-text text-graphite leading-none tracking-tight uppercase md:text-2xl xl:text-xl 2xl:text-3xl">
              {card.label}
            </p>
          </div>
        )}
        <div className="relative flex flex-1 flex-col justify-center p-4 md:p-8">
          <div className="pointer-events-none absolute inset-0" />
          <div className="relative">
            <SolidCardContent content={card.content} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FourPlusTwoLayout({ layout, accent }: Props) {
  return (
    <div className="relative mx-auto w-full flex flex-col gap-5 px-4 py-10 sm:max-w-[88%] md:py-0 md:min-h-screen md:items-center md:justify-center">
      <div className="pointer-events-none absolute inset-0 rounded-3xl" />
      <div className="grid grid-cols-2 gap-3 w-full sm:gap-5 md:grid-cols-4">
        {layout.topCards.map((card, i) => (
          <SmallCard key={i} card={card} accent={accent} index={i} />
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 w-full sm:grid-cols-2 sm:gap-5">
        {layout.bottomCards.map((card, i) => (
          <BigCard key={i} card={card} />
        ))}
      </div>
    </div>
  )
}
