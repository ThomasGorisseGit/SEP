import { useEffect, useRef, useState } from "react"
import { Bar, BarChart, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import type { ThreeCardsLayout as ThreeCardsLayoutType, CardContent } from "@/types"

function CustomTooltip({ active, payload, label }: { active?: boolean; payload?: Array<{ value: number }>; label?: string }) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-xl px-4 py-3 shadow-xl" style={{ backgroundColor: "#151515", border: "1px solid rgba(255,255,255,0.1)" }}>
      <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.5)" }}>{label}</p>
      <p className="big-text text-2xl leading-none text-white mt-1">{payload[0].value.toLocaleString("fr-FR")}</p>
      <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)" }}>programmes</p>
    </div>
  )
}

function MaturityBarChart({ title, data }: { title: string; data: Array<{ label: string; value: number }> }) {
  const chartData = data.map((d) => ({ label: d.label, value: d.value }))
  const config = { value: { label: "Programmes" } }
  return (
    <div className="flex w-full flex-col gap-4">
      <p className="text-center text-sm font-semibold uppercase tracking-widest" style={{ color: "rgba(21,21,21,0.55)" }}>
        {title}
      </p>
      <ChartContainer config={config} className="h-52 w-full">
        <BarChart data={chartData} margin={{ top: 4, right: 8, left: -16, bottom: 0 }}>
          <XAxis dataKey="label" tick={{ fontSize: 10, fill: "rgba(21,21,21,0.6)", fontWeight: 500 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 10, fill: "rgba(21,21,21,0.4)" }} axisLine={false} tickLine={false} />
          <ChartTooltip content={<CustomTooltip />} cursor={{ fill: "rgba(21,21,21,0.08)" }} />
          <Bar dataKey="value" fill="rgba(21,21,21,0.72)" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}

function MainContent({ content, accent }: { content: CardContent; accent: string }) {
  if (content.type === "bar-chart") {
    return <MaturityBarChart title={content.title} data={content.data} />
  }
  if (content.type === "bullets") {
    return (
      <ul className="flex w-full flex-col gap-5">
        {content.items.map((b, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: accent }} />
            <p className="text-sm leading-6" style={{ color: "rgba(21,21,21,0.8)" }}>
              {b.text}{" "}
              <span className="text-xs uppercase tracking-widest" style={{ color: "rgba(21,21,21,0.4)" }}>({b.source})</span>
            </p>
          </li>
        ))}
      </ul>
    )
  }
  if (content.type === "stat") {
    return (
      <div className="flex flex-col items-center text-center gap-4">
        <span className="big-text text-6xl leading-none xl:text-5xl 2xl:text-8xl" style={{ color: "rgba(21,21,21,0.85)" }}>{content.value}</span>
        <p className="text-sm leading-6 py-4 xl:text-xs 2xl:text-base" style={{ color: "rgba(21,21,21,0.6)" }}>{content.label}</p>
        {content.source && (
          <p className="text-xs uppercase tracking-widest" style={{ color: "rgba(21,21,21,0.4)" }}>{content.source}</p>
        )}
      </div>
    )
  }
  if (content.type === "quote") {
    return (
      <blockquote className="text-base leading-7 italic font-bold text-center px-4 xl:text-sm 2xl:text-xl xl:leading-6 2xl:leading-8" style={{ color: "rgba(21,21,21,0.85)" }}>
        {content.text}
        <p className="mt-4 text-xs not-italic font-semibold uppercase tracking-widest" style={{ color: "rgba(21,21,21,0.45)" }}>
          {content.source}
        </p>
      </blockquote>
    )
  }
  if (content.type === "percentage-chart") {
    return (
      <div className="flex flex-col items-center text-center gap-4">
        <span className="big-text text-6xl leading-none xl:text-5xl 2xl:text-8xl" style={{ color: "rgba(21,21,21,0.85)" }}>{content.value}%</span>
        <p className="text-sm leading-6 xl:text-xs 2xl:text-base" style={{ color: "rgba(21,21,21,0.6)" }}>{content.label}</p>
      </div>
    )
  }
  return null
}

type Props = {
  layout: ThreeCardsLayoutType
  accent: string
}

export default function SliderCards({ layout, accent }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isJumping = useRef(false)

  const cards = layout.cards
  const N = cards.length
  // Triple the cards: [copy1, copy2, copy3] — start in copy2 (index N)
  // Teleport silently when entering copy1 or copy3 back to the equivalent position in copy2
  const extended = [...cards, ...cards, ...cards]

  const getStep = () => {
    if (!scrollRef.current || scrollRef.current.children.length < 2) return 0
    const c0 = scrollRef.current.children[0] as HTMLElement
    const c1 = scrollRef.current.children[1] as HTMLElement
    return c1.offsetLeft - c0.offsetLeft
  }

  const getExtIndex = () => {
    if (!scrollRef.current) return N
    const step = getStep()
    if (step === 0) return N
    return Math.round(scrollRef.current.scrollLeft / step)
  }

  const scrollToExt = (extIdx: number, smooth: boolean) => {
    if (!scrollRef.current) return
    const child = scrollRef.current.children[extIdx] as HTMLElement
    if (!child) return
    scrollRef.current.scrollTo({ left: child.offsetLeft, behavior: smooth ? "smooth" : "instant" })
  }

  // Start at first card of copy2 (extIndex N)
  useEffect(() => {
    if (!scrollRef.current) return
    const child = scrollRef.current.children[N] as HTMLElement
    if (child) scrollRef.current.scrollLeft = child.offsetLeft
  }, [N])

  const handleScroll = () => {
    if (!scrollRef.current || isJumping.current) return
    const extIdx = getExtIndex()
    setCurrentIndex(extIdx % N)

    if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
    scrollTimeout.current = setTimeout(() => {
      if (!scrollRef.current) return
      const idx = getExtIndex()
      // If in copy1 (idx < N), teleport to same card in copy2
      // If in copy3 (idx >= 2N), teleport to same card in copy2
      if (idx < N) {
        isJumping.current = true
        scrollToExt(idx + N, false)
        setTimeout(() => { isJumping.current = false }, 50)
      } else if (idx >= 2 * N) {
        isJumping.current = true
        scrollToExt(idx - N, false)
        setTimeout(() => { isJumping.current = false }, 50)
      }
    }, 100)
  }

  const scroll = (dir: "left" | "right") => {
    scrollToExt(getExtIndex() + (dir === "right" ? 1 : -1), true)
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-[90%] flex-col justify-center gap-6 py-14">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-scroll [&::-webkit-scrollbar]:hidden"
        style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
      >
        {extended.map((card, i) => (
          <div
            key={i}
            className="flex shrink-0 flex-col overflow-hidden rounded-2xl 2xl:rounded-3xl min-h-[62vh] 2xl:min-h-[72vh]"
            style={{ width: "32%", scrollSnapAlign: "start" }}
          >
            <div
              className="px-5 py-4 2xl:px-8 2xl:py-6"
              style={{ backgroundColor: card.color, borderBottom: "1px solid rgba(21,21,21,0.12)" }}
            >
              <p className="big-text text-base leading-snug xl:text-sm 2xl:text-lg" style={{ color: "rgba(21,21,21,0.82)" }}>
                {card.summary}
              </p>
            </div>
            <div
              className="relative flex flex-1 flex-col items-center justify-center p-5 2xl:p-8"
              style={{ backgroundColor: card.color }}
            >
              <div className="pointer-events-none absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.1)" }} />
              <div className="relative w-full">
                <MainContent content={card.content} accent={accent} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => scroll("left")}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-opacity hover:opacity-70"
          style={{ backgroundColor: accent }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(21,21,21,0.85)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <div className="flex flex-1 items-center gap-2">
          {cards.map((_, i) => (
            <div
              key={i}
              className="h-0.75 flex-1 rounded-full transition-all duration-300"
              style={{ backgroundColor: i === currentIndex ? accent : `${accent}35` }}
            />
          ))}
        </div>
        <button
          onClick={() => scroll("right")}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-opacity hover:opacity-70"
          style={{ backgroundColor: accent }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(21,21,21,0.85)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  )
}
