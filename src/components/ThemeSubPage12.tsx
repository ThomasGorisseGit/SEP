type ThemeSubPage12Props = {
  accent: string
  background: string
}

const bands = [
  {
    bg: "#7774FF",
    label: "Chiffre clé",
    position: "top" as const,
    content: (
      <div className="flex flex-col items-center text-center gap-3">
        <span className="big-text text-7xl leading-none text-white">25M$</span>
        <p className="text-sm leading-5 text-white/70">transfert frauduleux via deepfake vocal d'un dirigeant</p>
        <p className="text-xs uppercase tracking-widest text-white/40 mt-1">WEF</p>
      </div>
    ),
  },
  {
    bg: "#AA96F8",
    label: "Chiffre clé",
    position: "bottom" as const,
    content: (
      <div className="flex flex-col items-center text-center gap-3">
        <span className="big-text text-7xl leading-none text-white">42,4%</span>
        <p className="text-sm leading-5 text-white/70">des menaces suivies ciblent le mobile</p>
        <p className="text-xs uppercase tracking-widest text-white/40 mt-1">ENISA</p>
      </div>
    ),
  },
  {
    bg: "#E2F163",
    label: "",
    position: "center" as const,
    content: (
      <blockquote className="text-base leading-7 italic font-bold text-center px-2" style={{ color: "#151515" }}>
        "Traditional red flags are disappearing in an era of pixel-perfect deception."
        <p className="mt-4 text-xs not-italic font-semibold uppercase tracking-widest" style={{ color: "rgba(21,21,21,0.45)" }}>
          Technology.org, mars 2026
        </p>
      </blockquote>
    ),
  },
]

const bullets = [
  { text: "Cas Retool : SMS + deepfake vocal combinés pour contourner la MFA", source: "SoSafe" },
  { text: "Quishing : QR codes malveillants dans des PDF contournent les filtres classiques", source: "ESET" },
  { text: "Volume d'attaques email de masse en baisse, mais SMS et vishing en forte progression", source: "SoSafe" },
]

export default function ThemeSubPage12({ accent, background }: ThemeSubPage12Props) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: background, minHeight: "100vh" }}
    >
      <div className="grid h-screen grid-cols-[1fr_1fr] min-h-screen">
        {/* Bandes verticales gauche */}
        <div className="flex flex-row h-full">
          {bands.map((band, i) => (
            <div
              key={i}
              className="flex flex-1 flex-col items-center px-5"
              style={{
                backgroundColor: band.bg,
                justifyContent:
                  band.position === "top" ? "flex-start"
                  : band.position === "bottom" ? "flex-end"
                  : "center",
              paddingTop: band.position === "top" ? "6rem" : band.position === "bottom" ? "3.5rem" : "3.5rem",
              paddingBottom: band.position === "bottom" ? "6rem" : band.position === "top" ? "3.5rem" : "3.5rem",
                gap: "1.25rem",
              }}
            >
              {band.label && (
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/50">
                  {band.label}
                </span>
              )}
              {band.content}
            </div>
          ))}
        </div>

        {/* Partie droite */}
        <div className="flex flex-col justify-center gap-10 px-16 py-16">
          <div>
            <span
              className="text-xs font-semibold uppercase tracking-[0.3em]"
              style={{ color: accent }}
            >
              Sous-tendance 1.2
            </span>
            <h2 className="big-text mt-4 text-4xl leading-tight text-white md:text-5xl">
              La diversification des canaux : email, SMS, voix, image
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/60">
              Le phishing ne passe plus uniquement par l'email. Smishing, vishing, quishing (QR codes), injections de calendrier, deepfakes audio/vidéo : chaque canal devient un vecteur potentiel, y compris ceux où les collaborateurs sont le moins vigilants.
            </p>
          </div>

          <ul className="flex flex-col gap-5">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-start gap-4">
                <span
                  className="mt-2 h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: accent }}
                />
                <p className="text-base leading-7 text-white/70">
                  {b.text}{" "}
                  <span className="text-xs uppercase tracking-widest text-white/30">({b.source})</span>
                </p>
              </li>
            ))}
          </ul>

          <div className="h-px w-20 opacity-40" style={{ backgroundColor: accent }} />
        </div>
      </div>
    </section>
  )
}
