import { CharCoffee, CharIdle, CharLaptop, CharPhone, CharStop, CharSunglasses } from "@/components/Characters"

interface TrendSectionProps {
  title: string
  subtitle: string
  bg?: string
  imageSrc?: string
}

export default function TrendSection({ title, subtitle, bg = "bg-blue", imageSrc }: TrendSectionProps) {
  return (
    <section className={`relative h-screen ${bg} overflow-hidden`}>
      <div className="h-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-12 md:px-20">

        {/* Colonne gauche : texte */}
        <div className="flex flex-col gap-6">
          <h2 className="text-white text-5xl md:text-7xl font-extrabold leading-tight">
            {title}
          </h2>
          <p className="text-white/60 text-lg md:text-2xl italic">
            {subtitle}
          </p>
        </div>

        {/* Colonne droite : image ou personnage */}
        <div className="flex items-center justify-center h-full">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={title}
              className="w-full max-h-[70vh] object-contain rounded-2xl"
            />
          ) : (
            <><CharIdle size={320} />
            <CharLaptop size={320} />
            <CharCoffee size={320} />
            <CharPhone size={320} />
            <CharStop size={320} />
            <CharSunglasses size={320} /></>
          )}
        </div>

      </div>
    </section>
  )
}
