import { useState } from "react"
import type { TiltedCardsLayout as TiltedCardsLayoutType } from "@/types"

const ROTATIONS = [-7, 4, -5, 6, -3, 5, -4]

type Props = {
  layout: TiltedCardsLayoutType
  accent: string
}

export default function TiltedCardsLayout({ layout, accent }: Props) {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div className="flex min-h-screen items-center justify-center py-14">
      <div className="relative flex items-center justify-center">
        {layout.cards.map((card, i) => {
          const rotation = ROTATIONS[i % ROTATIONS.length]
          const isHovered = hovered === i

          return (
            <div
              key={i}
              className="relative cursor-pointer"
              style={{
                width: "220px",
                marginLeft: i === 0 ? 0 : "-52px",
                zIndex: isHovered ? 50 : i + 1,
                transform: isHovered
                  ? "rotate(0deg) scale(1.1) translateY(-20px)"
                  : `rotate(${rotation}deg)`,
                transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), z-index 0s",
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Icon centré en haut */}
              <div
                className="absolute -top-5 left-1/2 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full text-lg shadow-lg"
                style={{ backgroundColor: accent }}
              >
                {card.icon ?? "✦"}
              </div>

              {/* Corps de la carte */}
              <div
                className="rounded-2xl px-5 pb-6 pt-10 shadow-2xl"
                style={{
                  backgroundColor: isHovered ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.06)",
                  border: `1px solid ${isHovered ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.1)"}`,
                  backdropFilter: "blur(12px)",
                  transition: "background-color 0.35s ease, border-color 0.35s ease",
                }}
              >
                <h3 className="big-text text-base leading-snug text-white">
                  {card.title}
                </h3>

                <div
                  className="my-3 h-px w-full"
                  style={{ backgroundColor: isHovered ? accent : "rgba(255,255,255,0.15)" }}
                />

                <p className="text-sm leading-6 text-white/70">
                  {card.content}
                </p>

                {card.source && (
                  <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-white/30">
                    {card.source}
                  </p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
