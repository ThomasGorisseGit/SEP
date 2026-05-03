import type { DualStatsLayout } from "@/types"

type Props = {
  layout: DualStatsLayout
  accent: string
}

export default function DualStatsLayoutComponent({ layout, accent }: Props) {
  const [stat1, stat2] = layout.stats

  return (
    <div className="mx-auto max-w-[88%] py-14">
      <h2 className="big-text mb-10 text-4xl leading-tight text-white" style={{ maxWidth: "70%" }}>
        Ce que l'on observe
      </h2>

      {/* Dual Stats Section */}
      <div className="mb-12 grid grid-cols-2 gap-8">
        {/* Stat 1 */}
        <div
          className="relative overflow-hidden rounded-3xl p-8 flex flex-col justify-center min-h-[320px]"
          style={{ backgroundColor: "#2B2B2B" }}
        >
          <div className="pointer-events-none absolute font-black leading-none select-none"
            style={{
              fontSize: "clamp(8rem, 18vw, 12rem)",
              color: accent,
              opacity: 0.08,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              whiteSpace: "nowrap",
            }}>
            {stat1.value}
          </div>
          <div className="relative z-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: `${accent}99` }}>
              Stat clé
            </p>
            <p className="text-5xl font-black leading-tight" style={{ color: accent }}>
              {stat1.value}
            </p>
            <p className="mt-4 text-base leading-6" style={{ color: "rgba(255,255,255,0.7)" }}>
              {stat1.label}
            </p>
            {stat1.source && (
              <p className="mt-2 text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>
                {stat1.source}
              </p>
            )}
          </div>
        </div>

        {/* Stat 2 */}
        <div
          className="relative overflow-hidden rounded-3xl p-8 flex flex-col justify-center min-h-[320px]"
          style={{ backgroundColor: "#2B2B2B" }}
        >
          <div className="pointer-events-none absolute font-black leading-none select-none"
            style={{
              fontSize: "clamp(8rem, 18vw, 12rem)",
              color: accent,
              opacity: 0.08,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              whiteSpace: "nowrap",
            }}>
            {stat2.value}
          </div>
          <div className="relative z-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: `${accent}99` }}>
              Stat clé
            </p>
            <p className="text-5xl font-black leading-tight" style={{ color: accent }}>
              {stat2.value}
            </p>
            <p className="mt-4 text-base leading-6" style={{ color: "rgba(255,255,255,0.7)" }}>
              {stat2.label}
            </p>
            {stat2.source && (
              <p className="mt-2 text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>
                {stat2.source}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Citation Section */}
      <div className="mb-12 relative overflow-hidden rounded-3xl p-10" style={{ backgroundColor: accent, backgroundImage: `linear-gradient(135deg, ${accent} 0%, ${accent}dd 100%)` }}>
        <div className="pointer-events-none absolute font-black select-none"
          style={{
            fontSize: "clamp(10rem, 20vw, 16rem)",
            color: "rgba(21,21,21,0.1)",
            top: "-5%",
            left: "-2%",
            lineHeight: 1,
          }}>
          "
        </div>
        <blockquote className="relative z-10 flex flex-col gap-4">
          <p className="text-lg italic font-semibold leading-8" style={{ color: "rgba(21,21,21,0.95)" }}>
            "{layout.quote.text}"
          </p>
          <cite className="text-sm not-italic uppercase tracking-widest" style={{ color: "rgba(21,21,21,0.65)" }}>
            — {layout.quote.source}
          </cite>
        </blockquote>
      </div>

      {/* Bullets Section */}
      <div className="relative overflow-hidden rounded-3xl p-10" style={{ backgroundColor: "#2B2B2B" }}>
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: `${accent}99` }}>
          Points clés
        </p>
        <ul className="flex flex-col gap-5">
          {layout.bullets.items.map((bullet, i) => (
            <li key={i} className="flex items-start gap-4">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: accent }} />
              <div>
                <p className="text-base leading-6" style={{ color: "rgba(255,255,255,0.8)" }}>
                  {bullet.text}
                </p>
                {bullet.source && (
                  <p className="mt-1 text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {bullet.source}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
