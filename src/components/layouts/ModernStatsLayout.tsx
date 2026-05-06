import type { ModernStatsLayout } from "@/types"

type Props = {
    layout: ModernStatsLayout
    accent: string
}

export default function ModernStatsLayoutComponent({ layout, accent }: Props) {
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

            <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mb-12 md:gap-8">
                <div
                    className="relative overflow-hidden rounded-2xl p-6 flex flex-col justify-center md:rounded-3xl md:p-10"
                    style={{ backgroundColor: "#2B2B2B", backgroundImage: `linear-gradient(135deg, ${accent}15 0%, ${accent}05 100%)`, minHeight: "200px" }}
                >
                    <div className="pointer-events-none absolute font-black select-none"
                        style={{
                            fontSize: "clamp(6rem, 22vw, 14rem)",
                            background: `linear-gradient(135deg, ${accent} 0%, ${accent}44 100%)`,
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                            opacity: 0.15, top: "50%", left: "50%", transform: "translate(-50%, -50%)", whiteSpace: "nowrap",
                        }}>
                        {layout.stat1.value}
                    </div>
                    <div className="relative z-10">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: `${accent}aa` }}>Chiffre clé</p>
                        <p className="text-3xl font-black leading-tight md:text-6xl" style={{ color: accent }}>{layout.stat1.value}</p>
                        <div className="my-4 h-1 w-12 md:my-6 md:w-16" style={{ backgroundColor: accent, opacity: 0.4 }} />
                        <p className="text-base leading-6 text-white/80 md:text-lg md:leading-7">{layout.stat1.label}</p>
                        {layout.stat1.source && (
                            <p className="mt-2 text-xs uppercase tracking-widest text-white/40">{layout.stat1.source}</p>
                        )}
                    </div>
                </div>

                <div
                    className="relative overflow-hidden rounded-2xl p-6 flex flex-col justify-center md:rounded-3xl md:p-10"
                    style={{ backgroundColor: "#2B2B2B", backgroundImage: `linear-gradient(135deg, ${accent}15 0%, ${accent}05 100%)`, minHeight: "200px" }}
                >
                    <div className="pointer-events-none absolute font-black select-none"
                        style={{
                            fontSize: "clamp(6rem, 22vw, 14rem)",
                            background: `linear-gradient(135deg, ${accent} 0%, ${accent}44 100%)`,
                            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                            opacity: 0.15, top: "50%", left: "50%", transform: "translate(-50%, -50%)", whiteSpace: "nowrap",
                        }}>
                        {layout.stat2.value}
                    </div>
                    <div className="relative z-10">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: `${accent}aa` }}>Chiffre clé</p>
                        <p className="text-3xl font-black leading-tight md:text-6xl" style={{ color: accent }}>{layout.stat2.value}</p>
                        <div className="my-4 h-1 w-12 md:my-6 md:w-16" style={{ backgroundColor: accent, opacity: 0.4 }} />
                        <p className="text-base leading-6 text-white/80 md:text-lg md:leading-7">{layout.stat2.label}</p>
                        {layout.stat2.source && (
                            <p className="mt-2 text-xs uppercase tracking-widest text-white/40">{layout.stat2.source}</p>
                        )}
                    </div>
                </div>
            </div>

            <div
                className="relative overflow-hidden rounded-2xl p-6 mb-8 md:rounded-3xl md:p-12 md:mb-12"
                style={{ backgroundColor: accent, backgroundImage: `linear-gradient(135deg, ${accent} 0%, ${accent}dd 100%)` }}
            >
                <div className="pointer-events-none absolute font-black select-none"
                    style={{ fontSize: "clamp(8rem, 25vw, 18rem)", color: "rgba(21,21,21,0.15)", top: "-10%", left: "-5%", lineHeight: 1 }}>
                    "
                </div>
                <blockquote className="relative z-10 flex flex-col gap-4 md:gap-6 max-w-3xl">
                    <p className="text-lg font-semibold leading-8 md:text-2xl md:leading-9" style={{ color: "rgba(21,21,21,0.95)" }}>
                        "{layout.quote.text}"
                    </p>
                    <cite className="text-xs not-italic font-semibold uppercase tracking-widest md:text-sm" style={{ color: "rgba(21,21,21,0.65)" }}>
                        — {layout.quote.source}
                    </cite>
                </blockquote>
            </div>

            <div className="relative overflow-hidden rounded-2xl p-6 md:rounded-3xl md:p-12" style={{ backgroundColor: "#2B2B2B" }}>
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.4em] md:mb-8" style={{ color: `${accent}99` }}>Points clés</p>
                <ul className="grid grid-cols-1 gap-5 md:gap-6">
                    {layout.bullets.items.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3 md:gap-4">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: accent }} />
                            <div className="flex-1">
                                <p className="text-sm leading-6 text-white/85 md:text-base">{bullet.text}</p>
                                {bullet.source && (
                                    <p className="mt-1 text-xs uppercase tracking-widest text-white/40">{bullet.source}</p>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
