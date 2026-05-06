import AnimatedLogo from "@/components/AnimatedLogo"
import ThemePage from "@/components/ThemePage"
import SubTendancyPage from "@/components/SubTendancyPage"
import ScrollNav from "@/components/ScrollNav"
import { tendencies, overviewCards } from "@/data/tendencies"
import image from '../assets/characters/2.svg'
export default function Landing() {
    return (
        <main>
            <ScrollNav />
            {/* Hero */}
            <section id="hero-section" className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "#151515" }}>
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue opacity-20 blur-[120px]" />
                    <div className="absolute top-1/3 -right-28 h-80 w-80 rounded-full bg-mauve opacity-20 blur-[140px]" />
                    <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-lemon opacity-10 blur-[110px]" />
                </div>

                <div className="relative mx-auto flex min-h-screen w-full flex-col justify-center gap-10 px-4 py-16 sm:max-w-[90%] sm:px-6 md:gap-24 md:px-12 lg:px-20">
                    <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-16">
                        <div className="flex items-start gap-6 flex-1">
                            <AnimatedLogo />
                            <div>
                                <p className="w-full mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-white/45">Léa jiner</p>
                                <h1 className="text-4xl leading-tight text-white sm:text-5xl md:text-7xl big-text">
                                    Cahier de tendances
                                </h1>
                                <p className="mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg md:text-2xl md:leading-8">
                                    Ce cahier tire des tendances d'une synthèse de veille comprenant environ 70 articles/site web et 5 rapports sectoriels
                                </p>
                            </div>
                        </div>
                        <div className="hidden shrink-0 xl:block">
                            <img src={image} className="relative mx-auto max-w-sm lg:max-w-lg" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 text-sm text-white/45 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                        {overviewCards.map((card) => (
                            <div
                                key={card.index}
                                className="flex min-h-50 flex-col justify-between rounded-2xl border px-4 py-4 shadow-2xl backdrop-blur-sm transition-transform hover:-translate-y-0.5 lg:min-h-60"
                                style={{ backgroundColor: card.accent, borderColor: card.accent, color: "#151515" }}
                            >
                                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.28em]" style={{ color: "rgba(21,21,21,0.7)" }}>
                                    {card.index}
                                </div>
                                <div className="flex flex-col gap-6 md:gap-10 flex-1">
                                    <div className="text-xl font-light leading-snug big-text md:text-2xl">{card.title}</div>
                                    <div className="text-sm leading-snug md:text-base">{card.subtitle}</div>
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
                        id={`tendency-${tendency.index}`}
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
                            id={`sub-tendancy-${sub.index}`}
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
