type SousTendance = {
  index: string
  title: string
  description: string
  accent: string
  background: string
}

const GRAPHITE = "#2B2B2B"
const PRIMARY = "#151515"

export default function Tendancy({
  index,
  title,
  description,
  accent,
  background,
}: SousTendance) {
  const bandeauBg = background.toUpperCase() === GRAPHITE.toUpperCase() ? PRIMARY : GRAPHITE

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="w-full px-16 py-10 text-white" style={{ backgroundColor: bandeauBg }}>
        <div className="flex items-center gap-8 max-w-6xl mx-auto">
          <span className="text-6xl big-text leading-none shrink-0" style={{ color: accent }}>
            {index}
          </span>
          <span className="w-px h-12 bg-white opacity-20 shrink-0" />
          <div className="flex flex-col gap-2">
            <span className="uppercase tracking-widest text-sm font-bold opacity-90">
              Sous-tendance
            </span>
            <h2 className="text-3xl big-text" style={{ color: accent }}>
              {title}
            </h2>
          </div>
          <span className="w-px h-12 bg-white opacity-20 shrink-0" />
          <p className="text-sm leading-relaxed opacity-70 max-w-xl">
            {description}
          </p>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke={accent}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-bounce opacity-50"
        style={{ filter: `drop-shadow(0 0 6px ${accent})` }}
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </div>
  )
}
