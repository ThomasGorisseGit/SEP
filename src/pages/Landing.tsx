import AnimatedLogo from "@/components/AnimatedLogo"
import ThemePage from "@/components/ThemePage"
import SubTendancyPage from "@/components/SubTendancyPage"
import { tendencies, overviewCards } from "@/data/tendencies"
import image from '../assets/characters/2.svg'
export default function Landing() {
    return (
        <main>
            {/* Hero */}
            <section className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "#151515" }}>
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue opacity-20 blur-[120px]" />
                    <div className="absolute top-1/3 -right-28 h-80 w-80 rounded-full bg-mauve opacity-20 blur-[140px]" />
                    <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-lemon opacity-10 blur-[110px]" />
                </div>

                <div className="relative mx-auto flex min-h-screen max-w-[90%] flex-col justify-center gap-24 px-6 py-20 md:px-12 lg:px-20">
                    <div className="flex items-start gap-35 w-full">
                        <div className="flex items-start gap-8 w-full">
                            <AnimatedLogo />
                            <div>
                                <p className="w-full mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-white/45">Léa jiner</p>
                                <h1 className="text-5xl leading-tight text-white md:text-7xl big-text">
                                    Cahier de tendances
                                </h1>
                                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65 md:text-2xl">
                                    Ce cahier tire des tendances d'une synthèse de veille comprenant environ 70 articles/site web et 5 rapports sectoriels
                                </p>
                            </div>
                        </div>
                        <div>
                            <img src={image} className="relative mx-auto grid max-w-lg" />
                        </div>
                    </div>

                    <div className="grid gap-4 text-sm text-white/45 md:grid-cols-5">
                        {overviewCards.map((card) => (
                            <div
                                key={card.index}
                                className="rounded-2xl h-82 border px-4 py-4 shadow-2xl backdrop-blur-sm transition-transform hover:-translate-y-0.5 flex flex-col justify-between"
                                style={{ backgroundColor: card.accent, borderColor: card.accent, color: "#151515" }}
                            >
                                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.28em]" style={{ color: "rgba(21,21,21,0.7)" }}>
                                    {card.index}
                                </div>
                                <div className="flex flex-col gap-10 h-[80%]">
                                    <div className="text-2xl font-light leading-snug big-text">{card.title}</div>
                                    <div className="text-base leading-snug">{card.subtitle}</div>
                                </div>
                                <div className="mt-3 flex items-center w-full justify-center text-sm font-semibold uppercase tracking-normal" style={{ color: "rgba(21,21,21,0.78)" }}>
                                    Découvrir {card.count}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tendances */}
            {tendencies.map((tendency) => (
                <div key={tendency.index}>
                    <ThemePage
                        index={tendency.index}
                        title={tendency.title}
                        subtitle={tendency.subtitle}
                        accent={tendency.accent}
                        background={tendency.background}
                        illustrationSide={tendency.illustrationSide}
                    />
                    {tendency.subTendancies.map((sub) => (
                        <SubTendancyPage
                            key={sub.index}
                            subTendancy={sub}
                            accent={tendency.accent}
                            background={tendency.background}
                        />
                    ))}
                </div>
            ))}
        </main>
    )
}
