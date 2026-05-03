import { useState } from "react"
import {
  Clock, CalendarDays, BookOpen, AlertTriangle, TrendingDown,
  GraduationCap, ShieldCheck, Zap, Brain, Users, Target, Lock,
  type LucideProps,
} from "lucide-react"
import type { TiltedCardsLayout as TiltedCardsLayoutType } from "@/types"

type IconComponent = React.ComponentType<LucideProps>

const ICON_MAP: Record<string, IconComponent> = {
  timer: Clock,
  calendar: CalendarDays,
  book: BookOpen,
  warning: AlertTriangle,
  chart: TrendingDown,
  graduation: GraduationCap,
  shield: ShieldCheck,
  zap: Zap,
  brain: Brain,
  users: Users,
  target: Target,
  lock: Lock,
}

const ROTATIONS = [-7, 4, -5, 6, -3, 5]

type Props = {
  layout: TiltedCardsLayoutType
  accent: string
}

export default function TiltedCardsLayout({ layout, accent }: Props) {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <>

      <div className="min-h-screen ">

        <div className=" py-20">
          <div className="mx-auto items-center text-center">

            <p
              className="text-xs font-semibold uppercase tracking-[0.5em]"
              style={{ color: accent }}
            >
              {layout.kicker}
            </p>

            <h2 className="big-text mt-4 text-4xl leading-[1.05] text-white md:text-5xl">
              {layout.headline}
            </h2>
          </div>
        </div>

        <div className="flex items-center justify-center py-14">

          <div className="flex items-center" style={{ paddingLeft: "4vw", paddingRight: "4vw" }}>
            {layout.cards.map((card, i) => {
              const rotation = ROTATIONS[i % ROTATIONS.length]
              const isHovered = hovered === i
              const Icon = card.icon ? ICON_MAP[card.icon] : null
              return (
                <div
                  key={i}
                  className="relative cursor-pointer "
                  style={{
                    width: "clamp(220px, 18vw, 310px)",
                    flexShrink: 0,
                    marginLeft: i === 0 ? 0 : "clamp(-90px, -7vw, -60px)",
                    zIndex: isHovered ? 50 : i + 1,
                    transform: isHovered
                      ? "rotate(0deg) scale(1.12) translateY(-24px)"
                      : `rotate(${rotation}deg)`,
                    transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
                    backgroundColor: "rgba(59, 130, 246, 0.1)",
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Icon centré en haut */}
                  <div
                    className="absolute -top-6 left-1/2 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full shadow-lg"
                    style={{
                      backgroundColor: isHovered ? accent : "rgba(255,255,255,0.1)",
                      border: `1.5px solid ${isHovered ? accent : "rgba(255,255,255,0.2)"}`,
                      transition: "background-color 0.3s ease, border-color 0.3s ease",
                    }}
                  >
                    {Icon
                      ? <Icon size={20} strokeWidth={1.8} color={isHovered ? "#151515" : "rgba(255,255,255,0.8)"} />
                      : <span className="text-base">✦</span>
                    }
                  </div>

                  {/* Corps de la carte */}
                  <div
                    className="rounded-2xl px-8 pb-7 pt-12 shadow-2xl"
                    style={{
                      backgroundColor: isHovered ? "rgba(255,255,255,0.11)" : "rgba(255,255,255,0.05)",
                      border: `1px solid ${isHovered ? "rgba(255,255,255,0.22)" : "rgba(255,255,255,0.09)"}`,
                      backdropFilter: "blur(14px)",
                      transition: "background-color 0.35s ease, border-color 0.35s ease",
                    }}
                  >
                    <h3 className="big-text text-4xl leading-snug text-white">
                      {card.title}
                    </h3>

                    <div
                      className="my-4 h-px w-full transition-colors duration-300"
                      style={{ backgroundColor: isHovered ? accent : "rgba(255,255,255,0.12)" }}
                    />

                    <p className="text-lg leading-6 text-white/65 mb-10">
                      {card.content}
                    </p>

                    {card.source && (
                      <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-white/30">
                        {card.source}
                      </p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div >
      </div>
    </>
  )
}
