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

type TooltipState = { label: string; title: string; accent: string; y: number } | null

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
    const [tooltip, setTooltip] = useState<TooltipState>(null)

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

    const showTooltip = (e: React.MouseEvent, label: string, title: string, accent: string) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
        setTooltip({ label, title, accent, y: rect.top + rect.height / 2 })
    }

    return (
        <>
            {/* Tooltip — position:fixed isolé, hors de tout overflow:hidden */}
            <AnimatePresence>
                {tooltip && (
                    <div
                        style={{
                            position: "fixed",
                            right: 68,
                            top: tooltip.y,
                            transform: "translateY(-50%)",
                            pointerEvents: "none",
                            zIndex: 60,
                        }}
                    >
                        <motion.div
                            key={tooltip.label}
                            initial={{ opacity: 0, x: 6 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 6 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            style={{
                                background: "rgba(12,12,12,0.95)",
                                border: `1px solid ${tooltip.accent}30`,
                                borderRadius: 7,
                                padding: "5px 11px",
                                whiteSpace: "nowrap",
                                display: "flex",
                                alignItems: "center",
                                gap: 8,
                            }}
                        >
                            <span style={{
                                color: tooltip.accent,
                                fontSize: 14,
                                fontFamily: "Montserrat, sans-serif",
                                fontWeight: 700,
                                letterSpacing: "0.08em",
                            }}>
                                {tooltip.label}
                            </span>
                            <span style={{
                                color: "rgba(255,255,255,0.65)",
                                fontSize: 13,
                                fontFamily: "Montserrat, sans-serif",
                                fontWeight: 400,
                                letterSpacing: "0.02em",
                            }}>
                                {tooltip.title.length > 42 ? tooltip.title.slice(0, 42) + "…" : tooltip.title}
                            </span>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Rail */}
            <div style={{ position: "fixed", right: 20, top: "50%", transform: "translateY(-50%)", zIndex: 50, width: 44 }}>
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
                                padding: "12px 0",
                                borderRadius: 22,
                                background: "rgba(255,255,255,0.07)",
                                backdropFilter: "blur(10px)",
                            }}
                        >
                            {nav.map((t, i) => {
                                const tendActive = activeTendIdx === i
                                const expanded = activeTendIdx === i

                                return (
                                    <div key={t.id} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                                        {/* Tendency dot: inner fill + outer ring */}
                                        <button
                                            onClick={() => goto(t.id)}
                                            onMouseEnter={(e) => showTooltip(e, t.label, t.title, t.accent)}
                                            onMouseLeave={() => setTooltip(null)}
                                            style={{
                                                width: 34,
                                                height: 34,
                                                background: "transparent",
                                                border: "none",
                                                cursor: "pointer",
                                                padding: 0,
                                                margin: "2px 0",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                position: "relative",
                                            }}
                                        >
                                            <motion.span
                                                animate={{
                                                    opacity: tendActive ? 0.75 : 0.32,
                                                    scale: tendActive ? 1 : 0.82,
                                                }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                                style={{
                                                    position: "absolute",
                                                    width: 22,
                                                    height: 22,
                                                    borderRadius: "50%",
                                                    border: `1.5px solid ${t.accent}`,
                                                    pointerEvents: "none",
                                                }}
                                            />
                                            <motion.span
                                                animate={{
                                                    opacity: tendActive ? 1 : 0.38,
                                                    scale: tendActive ? 1 : 0.65,
                                                }}
                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                                style={{
                                                    width: 9,
                                                    height: 9,
                                                    borderRadius: "50%",
                                                    backgroundColor: t.accent,
                                                    pointerEvents: "none",
                                                }}
                                            />
                                        </button>

                                        {/* Sub-tendency dots */}
                                        <AnimatePresence initial={false}>
                                            {expanded && t.subs.map((sub) => {
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
                                                            overflow: "hidden",
                                                        }}
                                                    >
                                                        <button
                                                            onClick={() => goto(sub.id)}
                                                            onMouseEnter={(e) => showTooltip(e, sub.label, sub.title, sub.accent)}
                                                            onMouseLeave={() => setTooltip(null)}
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
                                                                    opacity: subActive ? 1 : 0.38,
                                                                    scale: subActive ? 1 : 0.7,
                                                                }}
                                                                transition={{ duration: 0.25, ease: "easeOut" }}
                                                                style={{
                                                                    width: 6,
                                                                    height: 6,
                                                                    borderRadius: "50%",
                                                                    backgroundColor: sub.accent,
                                                                    pointerEvents: "none",
                                                                }}
                                                            />
                                                        </button>
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
        </>
    )
}
