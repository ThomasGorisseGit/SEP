import type { ModernStatsLayout } from "@/types"

type Props = {
  layout: ModernStatsLayout
  accent: string
}

export default function ModernStatsLayoutComponent({ layout, accent }: Props) {
  return (
    <div className="mx-auto max-w-[88%] py-14">
      {/* Header */}
      <div className="mb-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: `${accent}99` }}>
          {layout.kicker}
        </p>
        <h2 className="big-text text-4xl leading-tight text-white" style={{ maxWidth: "70%" }}>
          {layout.headline}
        </h2>
      </div>

      {/* Main Grid */}
      <div className="mb-12 grid grid-cols-2 gap-8">
        {/* Stat 1 - Large */}
        <div
          className="relative overflow-hidden rounded-3xl p-10 flex flex-col justify-center min-h-[400px] col-span-1"
          style={{
            backgroundColor: "#2B2B2B",
            backgroundImage: `linear-gradient(135deg, ${accent}15 0%, ${accent}05 100%)`,
          }}
        >
          <div className="pointer-events-none absolute font-black select-none"
            style={{
              fontSize: "clamp(10rem, 22vw, 14rem)",
              background: `linear-gradient(135deg, ${accent} 0%, ${accent}44 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              opacity: 0.15,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              whiteSpace: "nowrap",
            }}>
            {layout.stat1.value}
          </div>
          <div className="relative z-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: `${accent}aa` }}>
              Chiffre clé
            </p>
            <p className="text-6xl font-black leading-tight" style={{ color: accent }}>
              {layout.stat1.value}
            </p>
            <div className="my-6 h-1 w-16" style={{ backgroundColor: accent, opacity: 0.4 }} />
            <p className="text-lg leading-7 text-white/80 max-w-sm">
              {layout.stat1.label}
            </p>
            {layout.stat1.source && (
              <p className="mt-3 text-xs uppercase tracking-widest text-white/40">
                {layout.stat1.source}
              </p>
            )}
          </div>
        </div>

        {/* Stat 2 - Large */}
        <div
          className="relative overflow-hidden rounded-3xl p-10 flex flex-col justify-center min-h-[400px] col-span-1"
          style={{
            backgroundColor: "#2B2B2B",
            backgroundImage: `linear-gradient(135deg, ${accent}15 0%, ${accent}05 100%)`,
          }}
        >
          <div className="pointer-events-none absolute font-black select-none"
            style={{
              fontSize: "clamp(10rem, 22vw, 14rem)",
              background: `linear-gradient(135deg, ${accent} 0%, ${accent}44 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              opacity: 0.15,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              whiteSpace: "nowrap",
            }}>
            {layout.stat2.value}
          </div>
          <div className="relative z-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: `${accent}aa` }}>
              Chiffre clé
            </p>
            <p className="text-6xl font-black leading-tight" style={{ color: accent }}>
              {layout.stat2.value}
            </p>
            <div className="my-6 h-1 w-16" style={{ backgroundColor: accent, opacity: 0.4 }} />
            <p className="text-lg leading-7 text-white/80 max-w-sm">
              {layout.stat2.label}
            </p>
            {layout.stat2.source && (
              <p className="mt-3 text-xs uppercase tracking-widest text-white/40">
                {layout.stat2.source}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Citation - Full Width */}
      <div
        className="relative overflow-hidden rounded-3xl p-12 mb-12"
        style={{
          backgroundColor: accent,
          backgroundImage: `linear-gradient(135deg, ${accent} 0%, ${accent}dd 100%)`,
        }}
      >
        <div className="pointer-events-none absolute font-black select-none"
          style={{
            fontSize: "clamp(12rem, 25vw, 18rem)",
            color: "rgba(21,21,21,0.15)",
            top: "-10%",
            left: "-5%",
            lineHeight: 1,
          }}>
          "
        </div>
        <blockquote className="relative z-10 flex flex-col gap-6 max-w-3xl">
          <p className="text-2xl font-semibold leading-9" style={{ color: "rgba(21,21,21,0.95)" }}>
            "{layout.quote.text}"
          </p>
          <cite className="text-sm not-italic font-semibold uppercase tracking-widest" style={{ color: "rgba(21,21,21,0.65)" }}>
            — {layout.quote.source}
          </cite>
        </blockquote>
      </div>

      {/* Bullets - Full Width */}
      <div className="relative overflow-hidden rounded-3xl p-12" style={{ backgroundColor: "#2B2B2B" }}>
        <p className="mb-8 text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: `${accent}99` }}>
          Points clés
        </p>
        <ul className="grid grid-cols-1 gap-6">
          {layout.bullets.items.map((bullet, i) => (
            <li key={i} className="flex items-start gap-4 group">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full transition-all duration-300" style={{ backgroundColor: accent }} />
              <div className="flex-1">
                <p className="text-base leading-6 text-white/85">
                  {bullet.text}
                </p>
                {bullet.source && (
                  <p className="mt-2 text-xs uppercase tracking-widest text-white/40">
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
