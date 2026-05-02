// Reusable pink-triangle characters in various poses.
// Usage: <CharPhone size={100} /> or import Characters and use Characters.Phone etc.

const P = "#FFA7DC"   // pink body
const Y = "#FFBB00"   // yellow props
const K = "#111"      // ink
const SW = 2.5        // default stroke width

export interface CharProps {
  size?: number
  className?: string
}

// ── Shared sub-shapes (called as functions, not JSX components) ───────────────

function bow() {
  return (
    <>
      <path d="M60,16 C54,6 44,8 46,14 C48,20 59,17 60,16 Z"
        fill={P} stroke={K} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M60,16 C66,6 76,8 74,14 C72,20 61,17 60,16 Z"
        fill={P} stroke={K} strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="60" cy="15" r="3" fill={K} />
    </>
  )
}

function body() {
  return (
    <polygon points="60,16 8,136 112,136"
      fill={P} stroke={K} strokeWidth={SW} strokeLinejoin="round" />
  )
}

function eyes() {
  return (
    <>
      <circle cx="46" cy="78" r="3.5" fill={K} />
      <circle cx="74" cy="78" r="3.5" fill={K} />
    </>
  )
}

function smile() {
  return (
    <path d="M43,92 Q60,104 77,92"
      stroke={K} strokeWidth="2" fill="none" strokeLinecap="round" />
  )
}

function legs() {
  return (
    <>
      <path d="M36,136 C32,144 28,152 24,157"
        stroke={K} strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M84,136 C88,144 92,152 96,157"
        stroke={K} strokeWidth="3" fill="none" strokeLinecap="round" />
    </>
  )
}

// ── Characters ────────────────────────────────────────────────────────────────

/** Debout, bras légèrement écartés */
export function CharIdle({ size = 80, className }: CharProps) {
  return (
    <svg viewBox="0 0 120 165" width={size} height={(size * 165) / 120} className={className}>
      {legs()}
      {body()}
      {bow()}
      {eyes()}
      {smile()}
      <path d="M26,97 C14,91 8,81 12,71"
        stroke={K} strokeWidth={SW} fill="none" strokeLinecap="round" />
      <path d="M94,97 C106,91 112,81 108,71"
        stroke={K} strokeWidth={SW} fill="none" strokeLinecap="round" />
    </svg>
  )
}

/** Regarde son téléphone */
export function CharPhone({ size = 80, className }: CharProps) {
  return (
    <svg viewBox="0 0 130 165" width={size} height={(size * 165) / 130} className={className}>
      {legs()}
      {body()}
      {bow()}
      {eyes()}
      {/* Bouche concentrée */}
      <path d="M46,93 Q60,99 74,93"
        stroke={K} strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Bras gauche tient le téléphone */}
      <path d="M26,97 C18,100 14,108 16,116"
        stroke={K} strokeWidth={SW} fill="none" strokeLinecap="round" />
      {/* Téléphone jaune */}
      <rect x="6" y="112" width="18" height="30" rx="3"
        fill={Y} stroke={K} strokeWidth="1.5" />
      <line x1="10" y1="117" x2="20" y2="117" stroke={K} strokeWidth="1" />
      <circle cx="15" cy="135" r="2" stroke={K} strokeWidth="1" fill="none" />
      {/* Bras droit détendu */}
      <path d="M94,97 C104,100 108,108 106,114"
        stroke={K} strokeWidth={SW} fill="none" strokeLinecap="round" />
    </svg>
  )
}

/** Pouce levé */
export function CharThumbsUp({ size = 80, className }: CharProps) {
  return (
    <svg viewBox="0 0 130 165" width={size} height={(size * 165) / 130} className={className}>
      {legs()}
      {body()}
      {bow()}
      {eyes()}
      {smile()}
      {/* Bras gauche naturel */}
      <path d="M26,97 C18,104 16,112 20,118"
        stroke={K} strokeWidth={SW} fill="none" strokeLinecap="round" />
      {/* Bras droit levé */}
      <path d="M94,94 C106,84 114,72 110,62"
        stroke={K} strokeWidth={SW} fill="none" strokeLinecap="round" />
      {/* Pouce */}
      <path d="M110,62 C112,55 118,54 120,58 C122,63 116,67 110,62"
        fill={P} stroke={K} strokeWidth="1.5" />
    </svg>
  )
}

/** Lunettes de soleil + pouce levé */
export function CharSunglasses({ size = 80, className }: CharProps) {
  return (
    <svg viewBox="0 0 130 165" width={size} height={(size * 165) / 130} className={className}>
      {legs()}
      {body()}
      {bow()}
      {/* Lunettes */}
      <rect x="33" y="72" width="21" height="13" rx="4" fill={K} />
      <rect x="61" y="72" width="21" height="13" rx="4" fill={K} />
      <line x1="54" y1="78" x2="61" y2="78" stroke={K} strokeWidth="2" />
      {smile()}
      <path d="M26,97 C18,104 16,112 20,118"
        stroke={K} strokeWidth={SW} fill="none" strokeLinecap="round" />
      <path d="M94,94 C106,84 114,72 110,62"
        stroke={K} strokeWidth={SW} fill="none" strokeLinecap="round" />
      <path d="M110,62 C112,55 118,54 120,58 C122,63 116,67 110,62"
        fill={P} stroke={K} strokeWidth="1.5" />
    </svg>
  )
}

/** Tient un panneau STOP */
export function CharStop({ size = 80, className }: CharProps) {
  return (
    <svg viewBox="0 0 140 165" width={size} height={(size * 165) / 140} className={className}>
      {legs()}
      {body()}
      {bow()}
      {eyes()}
      {smile()}
      <path d="M26,97 C18,104 16,112 20,118"
        stroke={K} strokeWidth={SW} fill="none" strokeLinecap="round" />
      {/* Bras droit tient panneau */}
      <path d="M94,94 C104,84 108,70 104,58"
        stroke={K} strokeWidth={SW} fill="none" strokeLinecap="round" />
      {/* Panneau STOP */}
      <circle cx="116" cy="44" r="18" fill={Y} stroke={K} strokeWidth="2" />
      <text x="116" y="49" textAnchor="middle" fontSize="9"
        fontWeight="bold" fill={K} fontFamily="monospace">STOP</text>
    </svg>
  )
}

/** Bras posés sur un laptop */
export function CharLaptop({ size = 80, className }: CharProps) {
  return (
    <svg viewBox="0 0 120 168" width={size} height={(size * 168) / 120} className={className}>
      {legs()}
      {body()}
      {bow()}
      {eyes()}
      {/* Bouche détendue */}
      <path d="M46,93 Q60,99 74,93"
        stroke={K} strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Bras reposant sur le laptop */}
      <path d="M26,97 C18,106 12,116 8,122"
        stroke={K} strokeWidth={SW} fill="none" strokeLinecap="round" />
      <path d="M94,97 C102,106 108,116 112,122"
        stroke={K} strokeWidth={SW} fill="none" strokeLinecap="round" />
      {/* Laptop jaune */}
      <rect x="2" y="120" width="116" height="20" rx="4"
        fill={Y} stroke={K} strokeWidth="1.5" />
      <line x1="14" y1="127" x2="106" y2="127"
        stroke={K} strokeWidth="1" strokeDasharray="4 3" />
      <line x1="14" y1="133" x2="106" y2="133"
        stroke={K} strokeWidth="1" strokeDasharray="4 3" />
    </svg>
  )
}

/** Tient un café */
export function CharCoffee({ size = 80, className }: CharProps) {
  return (
    <svg viewBox="0 0 135 165" width={size} height={(size * 165) / 135} className={className}>
      {legs()}
      {body()}
      {bow()}
      {eyes()}
      {smile()}
      {/* Bras droit avec café */}
      <path d="M94,97 C104,96 110,102 110,110"
        stroke={K} strokeWidth={SW} fill="none" strokeLinecap="round" />
      {/* Tasse jaune */}
      <path d="M102,108 L102,126 Q102,130 106,130 L122,130 Q126,130 126,126 L126,108 Z"
        fill={Y} stroke={K} strokeWidth="1.5" />
      {/* Anse */}
      <path d="M126,112 C132,112 132,124 126,124"
        stroke={K} strokeWidth="1.5" fill="none" />
      {/* Vapeur */}
      <path d="M109,106 C109,100 111,97 110,94"
        stroke={K} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M116,105 C116,99 118,96 117,93"
        stroke={K} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Bras gauche */}
      <path d="M26,97 C18,104 16,112 20,118"
        stroke={K} strokeWidth={SW} fill="none" strokeLinecap="round" />
    </svg>
  )
}

/** Fait coucou */
export function CharWave({ size = 80, className }: CharProps) {
  return (
    <svg viewBox="0 0 130 165" width={size} height={(size * 165) / 130} className={className}>
      {legs()}
      {body()}
      {bow()}
      {eyes()}
      {smile()}
      {/* Bras gauche détendu */}
      <path d="M26,97 C18,104 16,112 20,118"
        stroke={K} strokeWidth={SW} fill="none" strokeLinecap="round" />
      {/* Bras droit qui salue haut */}
      <path d="M94,92 C108,78 118,62 116,52"
        stroke={K} strokeWidth={SW} fill="none" strokeLinecap="round" />
      {/* Petits doigts */}
      <path d="M116,52 C114,46 118,42 121,46"
        stroke={K} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M116,52 C118,44 124,43 124,48"
        stroke={K} strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </svg>
  )
}

// ── Map de tous les personnages ───────────────────────────────────────────────

export const Characters = {
  Idle: CharIdle,
  Phone: CharPhone,
  ThumbsUp: CharThumbsUp,
  Sunglasses: CharSunglasses,
  Stop: CharStop,
  Laptop: CharLaptop,
  Coffee: CharCoffee,
  Wave: CharWave,
}

export default Characters
