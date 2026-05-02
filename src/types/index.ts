export type StatContent = {
  type: "stat"
  value: string
  label: string
  source?: string
}

export type QuoteContent = {
  type: "quote"
  text: string
  source: string
}

export type CardContent = StatContent | QuoteContent

// Layout: grille de 4 cartes + carte droite
export type StatsGridCard = {
  color: "white" | "purple"
  content: CardContent
}

export type StatsGridLayout = {
  type: "stats-grid"
  cards: StatsGridCard[]
  rightCard: {
    title: string
    paragraphs: string[]
  }
}

// Layout: bandes verticales colorées + bullet points
export type Band = {
  color: string
  position: "top" | "center" | "bottom"
  content: CardContent
}

export type VerticalBandsLayout = {
  type: "vertical-bands"
  bands: Band[]
  bullets: Array<{ text: string; source: string }>
}

export type SubTendancyLayout = StatsGridLayout | VerticalBandsLayout

export type SubTendancy = {
  index: string
  title: string
  description: string
  layout: SubTendancyLayout
}

export type Tendency = {
  index: string
  title: string
  subtitle: string
  accent: string
  background: string
  illustrationSide: "left" | "right"
  subTendancies: SubTendancy[]
}
