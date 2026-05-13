import { motion } from 'motion/react'
import AnimatedLogo from "@/components/AnimatedLogo"
import ThemePage from "@/components/ThemePage"
import SubTendancyPage from "@/components/SubTendancyPage"
import ScrollNav from "@/components/ScrollNav"
import { tendencies, overviewCards } from "@/data/tendencies"
import { usePageScroll } from "@/hooks/usePageScroll"
import image from '../assets/characters/2.svg'

const ease = [0.22, 1, 0.36, 1] as const

export default function Landing() {
    usePageScroll()
    return (
        <main>
            <ScrollNav />
            {/* Hero */}
            <section id="hero-section" data-snap className="relative min-h-screen overflow-hidden" style={{ backgroundColor: "#151515" }}>
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue opacity-20 blur-[120px] float-a" />
                    <div className="absolute top-1/3 -right-28 h-80 w-80 rounded-full bg-mauve opacity-20 blur-[140px] float-b" style={{ animationDelay: '3s' }} />
                    <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-lemon opacity-10 blur-[110px] float-c" style={{ animationDelay: '6s' }} />
                </div>

                <div className="relative mx-auto flex min-h-screen w-full flex-col justify-center gap-10 px-4 py-16 sm:max-w-[90%] sm:px-6 md:gap-24 md:px-12 lg:px-20">
                    <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-16">
                        <motion.div
                            className="flex items-start gap-6 flex-1"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease }}
                        >
                            <AnimatedLogo />
                            <div>
                                <motion.p
                                    className="w-full mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-white/45"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                >
                                    Léa jiner
                                </motion.p>
                                <motion.h1
                                    className="text-4xl leading-tight text-white sm:text-5xl md:text-6xl xl:text-5xl 2xl:text-7xl big-text"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.15, duration: 0.7, ease }}
                                >
                                    Cahier de tendances
                                </motion.h1>
                                <motion.p
                                    className="mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg md:text-xl xl:text-lg 2xl:text-2xl md:leading-8"
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.6, ease }}
                                >
                                    Mon cahier de tendances se présente sous la forme d'un site web destiné à extraire des tendances d'une synthèse de veille intégrant 65 articles, pages internet, ouvrages, ainsi que 5 rapports sectoriels actuels.
                                </motion.p>
                            </div>
                        </motion.div>
                        <motion.div
                            className="hidden shrink-0 xl:block"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.9, ease }}
                        >
                            <img src={image} className="relative mx-auto xl:max-w-xs 2xl:max-w-lg float-img" />
                        </motion.div>
                    </div>

                    <motion.div
                        className="grid grid-cols-1 gap-4 text-sm text-white/45 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
                        initial="hidden"
                        animate="visible"
                        variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } } }}
                    >
                        {overviewCards.map((card) => (
                            <motion.div
                                key={card.index}
                                variants={{
                                    hidden: { opacity: 0, y: 24 },
                                    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } }
                                }}
                                className="flex min-h-50 flex-col justify-between rounded-2xl border px-4 py-4 shadow-2xl backdrop-blur-sm transition-transform hover:-translate-y-0.5 lg:min-h-60 2xl:min-h-75"
                                style={{ backgroundColor: card.accent, borderColor: card.accent, color: "#151515" }}
                            >
                                <div className="mb-2 text-xs font-semibold uppercase tracking-[0.28em]" style={{ color: "rgba(21,21,21,0.7)" }}>
                                    {card.index}
                                </div>
                                <div className="flex flex-col gap-4 md:gap-6 2xl:gap-10 flex-1">
                                    <div className="text-base font-light leading-snug big-text md:text-lg xl:text-base 2xl:text-2xl">{card.title}</div>
                                    <div className="text-xs leading-snug md:text-sm xl:text-xs 2xl:text-base">{card.subtitle}</div>
                                </div>
                                <div className="mt-3 flex items-center w-full justify-center text-sm font-semibold uppercase tracking-normal" style={{ color: "rgba(21,21,21,0.78)" }}>
                                    Découvrir {card.count}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
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
                            tendencyTitle={tendency.title}
                            tendencyIndex={tendency.index}
                        />
                    ))}
                </div>
            ))}
        </main>
    )
}
