import type { NewspaperLayout as NewspaperLayoutType } from "@/types"

const COLUMN_LABELS = ["01", "02", "03"]

type Props = {
  layout: NewspaperLayoutType
  accent: string
}

export default function NewspaperLayout({ layout, accent }: Props) {
  return (
    <div className="min-h-screen py-20">
      <div className="mx-auto max-w-[82%]">

        {/* Kicker */}
        <p className="text-xs font-semibold uppercase tracking-[0.5em]" style={{ color: accent }}>
          {layout.kicker}
        </p>

        {/* Headline */}
        <h2 className="big-text mt-5  leading-[1.05] text-white md:text-5xl">
          {layout.headline}
        </h2>

        {/* Pull quote — bande pleine largeur colorée */}
        {layout.pullQuote && (
          <div className="relative my-12 overflow-hidden rounded-2xl px-10 py-8  w-4/5">
            <div className="pointer-events-none absolute inset-0" style={{ backgroundColor: accent, opacity: 0.13 }} />
            <div
              className="pointer-events-none absolute bottom-0 left-0 top-0 w-1 rounded-full"
              style={{ backgroundColor: accent }}
            />
            <blockquote className="relative">
              <p className=" text-2xl leading-snug text-white md:text-xl italic">
                "{layout.pullQuote.text}"
              </p>
              <cite className="mt-4 block text-xs not-italic font-semibold uppercase tracking-[0.4em]" style={{ color: accent }}>
                — {layout.pullQuote.source}
              </cite>
            </blockquote>
          </div>
        )}

        {/* Colonnes */}
        <div className="grid grid-cols-3 gap-10">
          {layout.columns.map((col, i) => (
            <div key={i} className="flex flex-col gap-5">
              {/* Indicateur coloré */}
              <div className="flex items-center gap-3">
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold"
                  style={{
                    backgroundColor: i === 0 ? accent : "rgba(255,255,255,0.07)",
                    color: i === 0 ? "#151515" : "rgba(255,255,255,0.5)",
                  }}
                >
                  {COLUMN_LABELS[i]}
                </span>
                <div className="h-px flex-1" style={{ backgroundColor: i === 0 ? accent : "rgba(255,255,255,0.08)" }} />
              </div>

              {/* Grand chiffre mis en avant */}
              {col.stat && (
                <p className="text-7xl font-black leading-none tracking-tight text-white">
                  {col.stat}
                </p>
              )}

              {/* 3 petits blocs (colonne droite) */}
              {col.items ? (
                <div className="flex flex-col gap-3">
                  {col.items.map((item, j) => (
                    <div
                      key={j}
                      className="flex items-center gap-4 rounded-xl px-4 py-3"
                      style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                    >
                      <span className="text-2xl font-black leading-none" style={{ color: accent }}>
                        {item.label}
                      </span>
                      <span className="text-sm text-white/65">{item.text}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-base leading-8 text-white/65">
                  {col.content}
                </p>
              )}

              {col.source && (
                <p className="text-xs font-semibold uppercase tracking-widest text-white/25">
                  {col.source}
                </p>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
