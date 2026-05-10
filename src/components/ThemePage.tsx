import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import image from '../assets/characters/1.svg'

type ThemePageProps = {
  id?: string
  index: string
  title: string
  subtitle: string
  accent: string
  background: string
  illustrationSide?: "left" | "right"
}

const ease = [0.22, 1, 0.36, 1] as const

export default function ThemePage({
  id,
  index,
  title,
  subtitle,
  accent,
  background,
  illustrationSide = "right",
}: ThemePageProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { amount: 0.3, once: false })

  const illustration = (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.85, ease, delay: 0.2 }}
    >
      <img
        src={image}
        alt=""
        className="hidden w-full max-w-[18rem] sm:max-w-sm lg:max-w-lg lg:block float-img"
      />
    </motion.div>
  )

  const content = (
    <div className="flex flex-col gap-6 md:max-w-2xl">
      <motion.div
        className="text-xs font-semibold uppercase tracking-[0.35em]"
        style={{ color: accent }}
        initial={{ opacity: 0, x: -16 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
        transition={{ duration: 0.5, ease }}
      >
        {index}
      </motion.div>

      <motion.h2
        className="text-4xl big-text leading-tight text-white md:text-5xl"
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.6, ease, delay: 0.1 }}
      >
        {title}
      </motion.h2>

      <motion.p
        className="text-lg leading-8 text-white/70 md:text-2xl"
        initial={{ opacity: 0, y: 18 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
        transition={{ duration: 0.6, ease, delay: 0.2 }}
      >
        {subtitle}
      </motion.p>

      <motion.div
        className="h-px w-24"
        style={{
          backgroundColor: accent,
          transformOrigin: 'left center',
          boxShadow: `0 0 8px ${accent}80`,
        }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 0.7 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.65, ease, delay: 0.35 }}
      />
    </div>
  )

  return (
    <section
      ref={sectionRef}
      id={id}
      data-snap
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: background }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div
          className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-[110px] float-a"
          style={{ backgroundColor: accent, opacity: 0.16 }}
        />
        <div
          className="absolute bottom-0 right-0 h-80 w-80 rounded-full blur-[120px] float-b"
          style={{ backgroundColor: "#ffffff", opacity: 0.04, animationDelay: '4s' }}
        />
        <div
          className="absolute top-1/2 right-1/4 h-48 w-48 rounded-full blur-[90px] float-c"
          style={{ backgroundColor: accent, opacity: 0.08, animationDelay: '8s' }}
        />
      </div>

      <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-12 lg:px-20">
        {illustrationSide === "left" ? (
          <>
            <div>{illustration}</div>
            {content}
          </>
        ) : (
          <>
            {content}
            <div>{illustration}</div>
          </>
        )}
      </div>
    </section>
  )
}
