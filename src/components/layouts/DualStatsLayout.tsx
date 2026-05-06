import type { DualStatsLayout } from "@/types"

type Props = {
    layout: DualStatsLayout
    accent: string
}

export default function DualStatsLayoutComponent({ layout, accent }: Props) {
    const [stat1, stat2] = layout.stats
    const stat1TextColor = stat1.textColor ?? "rgba(255,255,255,0.7)"
    const stat1SourceColor = stat1.textColor ?? "rgba(255,255,255,0.4)"
    const stat2TextColor = stat2.textColor ?? "rgba(255,255,255,0.7)"
    const stat2SourceColor = stat2.textColor ?? "rgba(255,255,255,0.4)"
    const quoteTextColor = layout.quote.textColor ?? "rgba(21,21,21,0.95)"
    const quoteSourceColor = layout.quote.textColor ?? "rgba(21,21,21,0.65)"
    const bulletTextColor = layout.bullets.textColor ?? "rgba(255,255,255,0.8)"
    const bulletSourceColor = layout.bullets.textColor ?? "rgba(255,255,255,0.4)"

    return (
        <div className="mx-auto w-full px-4 py-10 sm:max-w-[88%] md:py-14">
            {/* Dual Stats */}
            <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mb-12 md:gap-8">
                <div
                    className="relative overflow-hidden rounded-2xl p-6 flex flex-col justify-center md:rounded-3xl md:p-8"
                    style={{ backgroundColor: "#2B2B2B" }}
                >
                    <div className="pointer-events-none absolute font-black leading-none select-none"
                        style={{
                            fontSize: "clamp(5rem, 18vw, 12rem)",
                            color: accent, opacity: 0.08,
                            top: "50%", left: "50%",
                            transform: "translate(-50%, -50%)",
                            whiteSpace: "nowrap",
                        }}>
                        {stat1.value}
                    </div>
                    <div className="relative z-10">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: `${accent}99` }}>Stat clé</p>
                        <p className="text-3xl font-black leading-tight md:text-5xl" style={{ color: accent }}>{stat1.value}</p>
                        <p className="mt-3 text-sm leading-6 md:mt-4 md:text-base" style={{ color: stat1TextColor }}>{stat1.label}</p>
                        {stat1.source && (
                            <p className="mt-2 text-xs uppercase tracking-widest" style={{ color: stat1SourceColor }}>{stat1.source}</p>
                        )}
                    </div>
                </div>

                <div
                    className="relative overflow-hidden rounded-2xl p-6 flex flex-col justify-center md:rounded-3xl md:p-8"
                    style={{ backgroundColor: "#2B2B2B" }}
                >
                    <div className="pointer-events-none absolute font-black leading-none select-none"
                        style={{
                            fontSize: "clamp(5rem, 18vw, 12rem)",
                            color: accent, opacity: 0.08,
                            top: "50%", left: "50%",
                            transform: "translate(-50%, -50%)",
                            whiteSpace: "nowrap",
                        }}>
                        {stat2.value}
                    </div>
                    <div className="relative z-10">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: `${accent}99` }}>Stat clé</p>
                        <p className="text-3xl font-black leading-tight md:text-5xl" style={{ color: accent }}>{stat2.value}</p>
                        <p className="mt-3 text-sm leading-6 md:mt-4 md:text-base" style={{ color: stat2TextColor }}>{stat2.label}</p>
                        {stat2.source && (
                            <p className="mt-2 text-xs uppercase tracking-widest" style={{ color: stat2SourceColor }}>{stat2.source}</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Citation */}
            <div className="mb-8 relative overflow-hidden rounded-2xl p-6 md:mb-12 md:rounded-3xl md:p-10" style={{ backgroundColor: accent }}>
                <div className="pointer-events-none absolute font-black select-none"
                    style={{ fontSize: "clamp(8rem, 25vw, 20rem)", color: "rgba(21,21,21,0.2)", top: "-10%", left: "85%", lineHeight: 1 }}>
                    "
                </div>
                <blockquote className="relative z-10 flex flex-col gap-3 md:gap-4 max-w-3xl">
                    <p className="text-base italic font-semibold leading-7 md:text-lg md:leading-8" style={{ color: quoteTextColor }}>
                        "{layout.quote.text}"
                    </p>
                    <cite className="text-xs not-italic uppercase tracking-widest md:text-sm" style={{ color: quoteSourceColor }}>
                        — {layout.quote.source}
                    </cite>
                </blockquote>
            </div>

            {/* Bullets */}
            <div className="relative overflow-hidden rounded-2xl p-6 md:rounded-3xl md:p-10" style={{ backgroundColor: "#2B2B2B" }}>
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.4em] md:mb-6" style={{ color: `${accent}99` }}>Points clés</p>
                <ul className="flex flex-col gap-4 md:gap-5">
                    {layout.bullets.items.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-3 md:gap-4">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: accent }} />
                            <div>
                                <p className="text-sm leading-6 md:text-base" style={{ color: bulletTextColor }}>{bullet.text}</p>
                                {bullet.source && (
                                    <p className="mt-1 text-xs uppercase tracking-widest" style={{ color: bulletSourceColor }}>{bullet.source}</p>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
