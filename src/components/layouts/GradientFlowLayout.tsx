import type { GradientFlowLayout } from "@/types"

type Props = {
    layout: GradientFlowLayout
    accent: string
}

export default function GradientFlowLayoutComponent({ layout, accent }: Props) {
    return (
        <div className="mx-auto w-full px-4 py-10 sm:max-w-[88%] md:py-14">
            <div className="mb-8 md:mb-12">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: `${accent}99` }}>
                    {layout.kicker}
                </p>
                <h2 className="big-text text-2xl leading-tight text-white sm:text-3xl md:text-4xl">
                    {layout.headline}
                </h2>
            </div>

            {/* Grid asymétrique — empile sur mobile */}
            <div className="mb-8 grid grid-cols-1 gap-6 md:mb-12 md:grid-cols-3 md:gap-8">
                {/* Stat 1 — colonne gauche haute sur md */}
                <div
                    className="relative overflow-hidden rounded-2xl p-6 flex flex-col justify-end md:rounded-3xl md:p-10 md:row-span-2"
                    style={{
                        backgroundColor: "#2B2B2B",
                        backgroundImage: `linear-gradient(180deg, ${accent}20 0%, ${accent}05 100%)`,
                        minHeight: "220px",
                    }}
                >
                    <div className="pointer-events-none absolute inset-0"
                        style={{ background: `radial-gradient(circle at 100% 0%, ${accent}30 0%, transparent 60%)` }} />
                    <div className="relative z-10">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: `${accent}99` }}>Stat 1</p>
                        <p className="text-4xl font-black leading-none md:text-7xl" style={{ color: accent, marginBottom: 8 }}>
                            {layout.stat1.value}
                        </p>
                        <div className="mb-4 h-1 w-10 md:mb-6 md:w-12" style={{ backgroundColor: accent, opacity: 0.5 }} />
                        <p className="text-sm leading-6 text-white/85 md:text-base">{layout.stat1.label}</p>
                        {layout.stat1.source && (
                            <p className="mt-2 text-xs uppercase tracking-widest text-white/40">{layout.stat1.source}</p>
                        )}
                    </div>
                </div>

                {/* Stat 2 — top right sur md */}
                <div
                    className="relative overflow-hidden rounded-2xl p-6 flex flex-col justify-center md:rounded-3xl md:p-8 md:col-span-2"
                    style={{ backgroundColor: accent, backgroundImage: `linear-gradient(135deg, ${accent} 0%, ${accent}dd 100%)`, minHeight: "160px" }}
                >
                    <div className="relative z-10">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: "rgba(21,21,21,0.6)" }}>Stat 2</p>
                        <p className="text-3xl font-black leading-none text-white mb-3 md:text-6xl md:mb-4">{layout.stat2.value}</p>
                        <p className="text-sm leading-6 md:text-base" style={{ color: "rgba(21,21,21,0.9)" }}>{layout.stat2.label}</p>
                    </div>
                </div>

                {/* Citation — bottom right sur md */}
                <div
                    className="relative overflow-hidden rounded-2xl p-6 flex flex-col justify-center md:rounded-3xl md:p-10 md:col-span-2"
                    style={{ backgroundColor: "#2B2B2B", borderLeft: `4px solid ${accent}` }}
                >
                    <div className="pointer-events-none absolute font-black select-none"
                        style={{ fontSize: "clamp(5rem, 15vw, 10rem)", color: accent, opacity: 0.08, top: "-20%", right: "-10%", lineHeight: 1 }}>
                        "
                    </div>
                    <blockquote className="relative z-10 flex flex-col gap-3 md:gap-4">
                        <p className="text-base italic font-semibold leading-7 text-white md:text-lg">{`${layout.quote.text}`}</p>
                        <cite className="text-xs not-italic uppercase tracking-widest" style={{ color: `${accent}88` }}>
                            — {layout.quote.source}
                        </cite>
                    </blockquote>
                </div>
            </div>

            {/* Bullets */}
            <div className="relative overflow-hidden rounded-2xl p-6 md:rounded-3xl md:p-10" style={{ backgroundColor: "#2B2B2B" }}>
                <div className="flex items-center gap-3 mb-6 md:mb-8">
                    <div className="h-6 w-1 md:h-8" style={{ backgroundColor: accent }} />
                    <p className="text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: `${accent}99` }}>Points clés</p>
                </div>
                <div className="grid grid-cols-1 gap-5 md:gap-6">
                    {layout.bullets.items.map((bullet, i) => (
                        <div key={i} className="flex gap-3 md:gap-4 group">
                            <div className="flex items-start gap-3 md:gap-4 flex-1">
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full transition-transform duration-300 group-hover:scale-150" style={{ backgroundColor: accent }} />
                                <div>
                                    <p className="text-sm leading-6 text-white/85 md:text-base">{bullet.text}</p>
                                    {bullet.source && (
                                        <p className="mt-1 text-xs uppercase tracking-widest text-white/35">{bullet.source}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
