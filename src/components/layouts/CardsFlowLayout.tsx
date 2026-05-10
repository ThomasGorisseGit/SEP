import type { CardsFlowLayout } from "@/types"

type Props = {
    layout: CardsFlowLayout
    accent: string
}

export default function CardsFlowLayoutComponent({ layout, accent }: Props) {
    return (
        <div className="mx-auto max-w-[88%] py-14">
            <div className="mb-12">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: `${accent}99` }}>
                    {layout.kicker}
                </p>
                <h2 className="big-text text-4xl leading-tight text-white" style={{ maxWidth: "70%" }}>
                    {layout.headline}
                </h2>
            </div>

            {/* Cards Flow */}
            <div className="space-y-6">
                {layout.cards.map((card, i) => {
                    const isStat = card.content.type === "stat"
                    const isQuote = card.content.type === "quote"
                    const isBullets = card.content.type === "bullets"

                    return (
                        <div
                            key={i}
                            className="relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:shadow-lg"
                            style={{
                                backgroundColor: card.color,
                                transform: `translateX(${i % 2 === 0 ? 0 : 20}px)`,
                                marginLeft: i % 2 === 0 ? 0 : 40,
                            }}
                        >
                            {/* Background blur elements */}
                            <div className="pointer-events-none absolute inset-0 opacity-10"
                                style={{
                                    background: `radial-gradient(ellipse at ${50 + i * 10}% 50%, ${accent} 0%, transparent 70%)`,
                                }} />

                            {isStat && (
                                <div className="relative z-10">
                                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.4em]" style={{ color: `${accent}88` }}>
                                        Chiffre clé
                                    </p>
                                    <p className="text-5xl font-black leading-tight text-white mb-2">
                                        {(card.content as any).value}
                                    </p>
                                    <p className="text-base leading-6 text-white/80">
                                        {(card.content as any).label}
                                    </p>
                                    {(card.content as any).source && (
                                        <p className="mt-2 text-xs uppercase tracking-widest text-white/50">
                                            {(card.content as any).source}
                                        </p>
                                    )}
                                </div>
                            )}

                            {isQuote && (
                                <div className="relative z-10">
                                    <div className="pointer-events-none font-black select-none mb-3"
                                        style={{
                                            fontSize: "3rem",
                                            color: accent,
                                            opacity: 0.2,
                                            lineHeight: 1,
                                        }}>
                                        "
                                    </div>
                                    <blockquote className="flex flex-col gap-3">
                                        <p className="text-lg italic font-semibold leading-7 text-white">
                                            {(card.content as any).text}
                                        </p>
                                        <cite className="text-xs not-italic uppercase tracking-widest text-white/60">
                                            — {(card.content as any).source}
                                        </cite>
                                    </blockquote>
                                </div>
                            )}

                            {isBullets && (
                                <div className="relative z-10">
                                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
                                        Points clés
                                    </p>
                                    <ul className="flex flex-col gap-4">
                                        {(card.content as any).items.map((bullet: any, idx: number) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: accent }} />
                                                <p className="text-base leading-5 text-white/85">
                                                    {bullet.text}
                                                    {bullet.source && <span className="ml-1 text-xs uppercase tracking-widest text-white/50">({bullet.source})</span>}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
