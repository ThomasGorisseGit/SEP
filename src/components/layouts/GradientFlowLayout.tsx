import type { GradientFlowLayout } from "@/types"

type Props = {
    layout: GradientFlowLayout
    accent: string
}

export default function GradientFlowLayoutComponent({ layout, accent }: Props) {
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

            {/* Asymmetric Grid */}
            <div className="mb-12 grid grid-cols-3 gap-8">
                {/* Stat 1 - Tall Left */}
                <div
                    className="relative overflow-hidden rounded-3xl p-10 flex flex-col justify-end min-h-[480px] row-span-2"
                    style={{
                        backgroundColor: "#2B2B2B",
                        backgroundImage: `linear-gradient(180deg, ${accent}20 0%, ${accent}05 100%)`,
                    }}
                >
                    <div className="pointer-events-none absolute inset-0"
                        style={{
                            background: `radial-gradient(circle at 100% 0%, ${accent}30 0%, transparent 60%)`,
                        }} />
                    <div className="relative z-10">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: `${accent}99` }}>
                            Stat 1
                        </p>
                        <p className="text-7xl font-black leading-none" style={{ color: accent, marginBottom: 8 }}>
                            {layout.stat1.value}
                        </p>
                        <div className="mb-6 h-1 w-12" style={{ backgroundColor: accent, opacity: 0.5 }} />
                        <p className="text-base leading-6 text-white/85">
                            {layout.stat1.label}
                        </p>
                        {layout.stat1.source && (
                            <p className="mt-3 text-xs uppercase tracking-widest text-white/40">
                                {layout.stat1.source}
                            </p>
                        )}
                    </div>
                </div>

                {/* Stat 2 - Top Right */}
                <div
                    className="relative overflow-hidden rounded-3xl p-8 flex flex-col justify-center col-span-2 min-h-[220px]"
                    style={{
                        backgroundColor: accent,
                        backgroundImage: `linear-gradient(135deg, ${accent} 0%, ${accent}dd 100%)`,
                    }}
                >
                    <div className="relative z-10">
                        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: "rgba(21,21,21,0.6)" }}>
                            Stat 2
                        </p>
                        <p className="text-6xl font-black leading-none text-white mb-4">
                            {layout.stat2.value}
                        </p>
                        <p className="text-base leading-6" style={{ color: "rgba(21,21,21,0.9)" }}>
                            {layout.stat2.label}
                        </p>
                    </div>
                </div>

                {/* Citation - Bottom Right 2/3 */}
                <div
                    className="relative overflow-hidden rounded-3xl p-10 flex flex-col justify-center col-span-2 min-h-[240px]"
                    style={{
                        backgroundColor: "#2B2B2B",
                        borderLeft: `4px solid ${accent}`,
                    }}
                >
                    <div className="pointer-events-none absolute font-black select-none"
                        style={{
                            fontSize: "clamp(6rem, 15vw, 10rem)",
                            color: accent,
                            opacity: 0.08,
                            top: "-20%",
                            right: "-10%",
                            lineHeight: 1,
                        }}>
                        "
                    </div>
                    <blockquote className="relative z-10 flex flex-col gap-4">
                        <p className="text-lg italic font-semibold leading-7 text-white">
                            "{layout.quote.text}"
                        </p>
                        <cite className="text-xs not-italic uppercase tracking-widest" style={{ color: `${accent}88` }}>
                            — {layout.quote.source}
                        </cite>
                    </blockquote>
                </div>
            </div>

            {/* Bullets - Full Width */}
            <div className="relative overflow-hidden rounded-3xl p-10" style={{ backgroundColor: "#2B2B2B" }}>
                <div className="flex items-center gap-3 mb-8">
                    <div className="h-8 w-1" style={{ backgroundColor: accent }} />
                    <p className="text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: `${accent}99` }}>
                        Points clés
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    {layout.bullets.items.map((bullet, i) => (
                        <div key={i} className="flex gap-4 group">
                            <div className="flex items-start gap-4 flex-1">
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full transition-transform duration-300 group-hover:scale-150" style={{ backgroundColor: accent }} />
                                <div>
                                    <p className="text-base leading-6 text-white/85">
                                        {bullet.text}
                                    </p>
                                    {bullet.source && (
                                        <p className="mt-2 text-xs uppercase tracking-widest text-white/35">
                                            {bullet.source}
                                        </p>
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
