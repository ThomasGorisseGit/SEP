import { useState } from "react"
import type { FourPlusTwoLayout as FourPlusTwoLayoutType, FourPlusTwoCard, CardContent } from "@/types"

type Props = {
  layout: FourPlusTwoLayoutType
  accent: string
}

function GlassCardContent({ content, accent }: { content: CardContent; accent: string }) {
  if (content.type === "stat") {
    return (
      <div className="flex flex-row items-center justify-center gap-4">
        <span className="text-center text-5xl font-black leading-none" style={{ color: accent }}>
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
      <blockquote className="flex  justify-center flex-col gap-3">
        <p className="text-sm leading-6 italic font-semibold text-white/85">
          "{content.text}"
        </p>
        <cite className="text-xs not-italic uppercase tracking-widest text-white/35">
          — {content.source}
        </cite>
      </blockquote>
    )
  }

  if (content.type === "bullets") {
    return (
      <ul className="flex justify-center flex-col gap-3">
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
      <div className="flex flex-row items-center gap-4">
        <span className="text-7xl font-black leading-none" >
          {content.value}
        </span>
        <div className="flex flex-col gap-2">
          <p className="text-base leading-6">{content.label}</p>
          {content.source && (
            <p className="text-xs uppercase tracking-widest" >{content.source}</p>
          )}
        </div>
      </div>
    )
  }

  if (content.type === "quote") {
    return (
      <blockquote className="flex flex-col gap-3">
        <p className="text-xl leading-8 italic font-semibold" >
          "{content.text}"
        </p>
        <cite className="text-xs not-italic uppercase tracking-widest" >
          — {content.source}
        </cite>
      </blockquote>
    )
  }

  if (content.type === "bullets") {
    return (
      <ul className="flex flex-col gap-3 text-graphite">
        {content.items.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" />
            <p className="text-sm leading-6" >{b.text}</p>
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
      className="rounded-2xl p-8 shadow-2xl cursor-pointer flex items-center"
      style={{
        background: hovered ? "#E2F16322" : "#E2F16311",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.09)"}`,
        backdropFilter: "blur(14px)",
        transition: "background-color 0.35s ease, border-color 0.35s ease",
        marginBottom: index % 2 == 0 ? "2rem" : " ",
        marginTop: index % 2 == 1 ? "2rem" : " "
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {
        card.label && (
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/30">
            {card.label}
          </p>
        )
      }
      < GlassCardContent content={card.content} accent={accent} />
    </div >
  )
}

function BigCard({ card }: { card: FourPlusTwoCard }) {

  return (
    <div className="bg-linear-to-l from-lemon to-white relative flex flex-col gap-16 overflow-hidden rounded-3xl p-10">

      <div className=" text-white flex flex-col overflow-hidden rounded-2xl" >
        {card.label && (
          <div className="px-8 flex py-5" style={{ borderBottom: "1px solid rgba(21,21,21,1)" }}>
            <p className=" text-3xl big-text text-graphite leading-none tracking-tight uppercase " >
              {card.label}
            </p>
          </div>
        )}
        <div className="relative flex flex-1 flex-col justify-center p-8">
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
    <div className="relative mx-auto max-w-[88%] flex flex-col gap-5 min-h-screen items-center justify-center">
      <div className="pointer-events-none absolute inset-0 rounded-3xl" />
      <div className="grid grid-cols-4 gap-5 w-full">
        {layout.topCards.map((card, i) => (
          <SmallCard key={i} card={card} accent={accent} index={i} />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-5 w-full">
        {layout.bottomCards.map((card, i) => (
          <BigCard key={i} card={card} />
        ))}
      </div>
    </div >
  )
}
