
import image from '../assets/characters/1.svg'
type ThemePageProps = {
  id?: string
  index: string
  title: string
  subtitle: string
  accent: string
  background: string
  illustrationSide?: "left" | "right"
}
export default function ThemePage({
  id,
  index,
  title,
  subtitle,
  accent,
  background,
  illustrationSide = "right",
}: ThemePageProps) {
  const illustration = (
    <img src={image} alt="" className="hidden w-full max-w-[18rem] sm:max-w-sm lg:max-w-lg lg:block" />
  )

  const content = (
    <div className="flex flex-col gap-6 md:max-w-2xl">
      <div className="text-xs font-semibold uppercase tracking-[0.35em]" style={{ color: accent }}>
        {index}
      </div>
      <h2 className="text-4xl big-text leading-tight text-white md:text-5xl">
        {title}
      </h2>
      <p className="text-lg leading-8 text-white/70 md:text-2xl">
        {subtitle}
      </p>
      <div className="h-px w-24" style={{ backgroundColor: accent, opacity: 0.7 }} />
    </div>
  )

  return (
    <section id={id} className="relative min-h-screen overflow-hidden" style={{ backgroundColor: background }}>
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-[110px]" style={{ backgroundColor: accent, opacity: 0.16 }} />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full blur-[120px]" style={{ backgroundColor: "#ffffff", opacity: 0.04 }} />
      </div>

      <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-12 lg:px-20">
        {illustrationSide === "left" ? (
          <>
            <div>{illustration}</div>
            {content}
          </>
        ) : (
          <>
            {content}
            <div>{illustration}</div>
          </>
        )}
      </div>
    </section>
  )
}
