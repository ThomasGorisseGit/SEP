import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { tendencies } from "@/data/tendencies"

type Sub = { label: string; id: string; title: string; accent: string }
type TendencyNav = {
    index: number
    label: string
    id: string
    title: string
    accent: string
    subs: Sub[]
}

const nav: TendencyNav[] = tendencies.map((t, i) => ({
    index: i,
    label: parseInt(t.index).toString(),
    id: `tendency-${t.index}`,
    title: t.title,
    accent: t.accent,
    subs: t.subTendancies.map((sub) => ({
        label: sub.index,
        id: `sub-tendancy-${sub.index}`,
        title: sub.title,
        accent: t.accent,
    })),
}))

const flat = nav.flatMap((t) => [{ id: t.id }, ...t.subs.map((s) => ({ id: s.id }))])

export default function ScrollNav() {
    const [visible, setVisible] = useState(false)
    const [activeId, setActiveId] = useState(flat[0].id)
    const [hoveredId, setHoveredId] = useState<string | null>(null)

    useEffect(() => {
        function onScroll() {
            const hero = document.getElementById("hero-section")
            if (!hero) return
            setVisible(hero.getBoundingClientRect().bottom < 0)

            const offsets = flat.map(({ id }) => {
                const el = document.getElementById(id)
                return el ? el.getBoundingClientRect().top + window.scrollY : 0
            })

            const y = window.scrollY + window.innerHeight * 0.4
            let cur = flat[0].id
            for (let i = 0; i < offsets.length; i++) {
                if (y >= offsets[i]) cur = flat[i].id
            }
            setActiveId(cur)
        }

        window.addEventListener("scroll", onScroll, { passive: true })
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const activeTendIdx = nav.findIndex(
        (t) => t.id === activeId || t.subs.some((s) => s.id === activeId),
    )

    const goto = (id: string) => {
        const el = document.getElementById(id)
        if (!el) return
        window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: "smooth" })
    }

    return (
        <div style={{ position: "fixed", right: 0, top: "50%", transform: "translateY(-50%)", zIndex: 50, width: 44 }}>
        <AnimatePresence>
            {visible && (
                <motion.nav
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 12 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    style={{
                        width: 44,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        padding: "10px 0",
                    }}
                >
                    {nav.map((t, i) => {
                        const tendActive = activeTendIdx === i
                        const expanded = activeTendIdx === i

                        return (
                            <div key={t.id} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                                {/* ── Tendency dot: inner fill + outer ring ── */}
                                <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <button
                                        onClick={() => goto(t.id)}
                                        onMouseEnter={() => setHoveredId(t.id)}
                                        onMouseLeave={() => setHoveredId(null)}
                                        style={{
                                            width: 30,
                                            height: 30,
                                            background: "transparent",
                                            border: "none",
                                            cursor: "pointer",
                                            padding: 0,
                                            margin: "3px 0",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            position: "relative",
                                        }}
                                    >
                                        {/* outer ring */}
                                        <motion.span
                                            animate={{
                                                opacity: tendActive ? 0.65 : 0.18,
                                                scale: tendActive ? 1 : 0.8,
                                            }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            style={{
                                                position: "absolute",
                                                width: 18,
                                                height: 18,
                                                borderRadius: "50%",
                                                border: `1.5px solid ${t.accent}`,
                                                pointerEvents: "none",
                                            }}
                                        />
                                        {/* inner dot */}
                                        <motion.span
                                            animate={{
                                                opacity: tendActive ? 1 : 0.22,
                                                scale: tendActive ? 1 : 0.65,
                                            }}
                                            transition={{ duration: 0.3, ease: "easeOut" }}
                                            style={{
                                                width: 7,
                                                height: 7,
                                                borderRadius: "50%",
                                                backgroundColor: t.accent,
                                                pointerEvents: "none",
                                            }}
                                        />
                                    </button>

                                    {/* Tooltip */}
                                    <AnimatePresence>
                                        {hoveredId === t.id && (
                                            <Tooltip label={t.label} title={t.title} accent={t.accent} />
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* ── Sub-tendency dots (expand under active chapter) ── */}
                                <AnimatePresence initial={false}>
                                    {expanded &&
                                        t.subs.map((sub) => {
                                            const subActive = activeId === sub.id
                                            return (
                                                <motion.div
                                                    key={sub.id}
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 22 }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.22, ease: "easeOut" }}
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        position: "relative",
                                                        overflow: "hidden",
                                                    }}
                                                >
                                                    <button
                                                        onClick={() => goto(sub.id)}
                                                        onMouseEnter={() => setHoveredId(sub.id)}
                                                        onMouseLeave={() => setHoveredId(null)}
                                                        style={{
                                                            width: 22,
                                                            height: 22,
                                                            background: "transparent",
                                                            border: "none",
                                                            cursor: "pointer",
                                                            padding: 0,
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                        }}
                                                    >
                                                        <motion.span
                                                            animate={{
                                                                opacity: subActive ? 1 : 0.28,
                                                                scale: subActive ? 1 : 0.7,
                                                            }}
                                                            transition={{ duration: 0.25, ease: "easeOut" }}
                                                            style={{
                                                                width: 5,
                                                                height: 5,
                                                                borderRadius: "50%",
                                                                backgroundColor: sub.accent,
                                                                pointerEvents: "none",
                                                            }}
                                                        />
                                                    </button>

                                                    <AnimatePresence>
                                                        {hoveredId === sub.id && (
                                                            <Tooltip label={sub.label} title={sub.title} accent={sub.accent} small />
                                                        )}
                                                    </AnimatePresence>
                                                </motion.div>
                                            )
                                        })}
                                </AnimatePresence>
                            </div>
                        )
                    })}
                </motion.nav>
            )}
        </AnimatePresence>
        </div>
    )
}

function Tooltip({
    label,
    title,
    accent,
    small,
}: {
    label: string
    title: string
    accent: string
    small?: boolean
}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 6 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 6 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            style={{
                position: "absolute",
                right: "calc(100% + 8px)",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(15,15,15,0.92)",
                border: `1px solid ${accent}25`,
                borderRadius: 6,
                padding: small ? "3px 8px" : "4px 10px",
                pointerEvents: "none",
                whiteSpace: "nowrap",
                maxWidth: 220,
                overflow: "hidden",
                textOverflow: "ellipsis",
                zIndex: 60,
            }}
        >
            <span
                style={{
                    color: accent,
                    fontSize: small ? 9 : 10,
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    marginRight: 6,
                }}
            >
                {label}
            </span>
            <span
                style={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: small ? 9 : 10,
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 400,
                    letterSpacing: "0.02em",
                }}
            >
                {title.length > 40 ? title.slice(0, 40) + "…" : title}
            </span>
        </motion.div>
    )
}
