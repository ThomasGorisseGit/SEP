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
      <div className="w-full px-4 py-6 text-white sm:px-8 md:px-16 md:py-10" style={{ backgroundColor: bandeauBg }}>
        <div className="flex flex-col gap-4 max-w-6xl mx-auto sm:flex-row sm:items-center sm:gap-6 md:gap-8">
          <span className="text-3xl big-text leading-none shrink-0 sm:text-4xl md:text-6xl" style={{ color: accent }}>
            {index}
          </span>
          <span className="hidden sm:block w-px h-12 bg-white opacity-20 shrink-0" />
          <div className="flex flex-col gap-1">
            <span className="uppercase tracking-widest text-xs font-bold opacity-90 sm:text-sm">
              Sous-tendance
            </span>
            <h2 className="text-xl big-text sm:text-2xl md:text-3xl" style={{ color: accent }}>
              {title}
            </h2>
          </div>
          <span className="hidden md:block w-px h-12 bg-white opacity-20 shrink-0" />
          <p className="hidden md:block text-sm leading-relaxed opacity-70 max-w-xl">
            {description}
          </p>
        </div>
      </div>

    </div>
  )
}
