export type StatContent = {
  type: "stat"
  value: string
  label: string
  source?: string
  textColor?: string
}

export type QuoteContent = {
  type: "quote"
  text: string
  source: string
  textColor?: string
}

export type BarChartContent = {
  type: "bar-chart"
  title: string
  data: Array<{ label: string; value: number }>
}

export type PercentageChartContent = {
  type: "percentage-chart"
  value: number
  label: string
  textColor?: string
}

export type BulletsContent = {
  type: "bullets"
  items: Array<{ text: string; source: string }>
  textColor?: string
}

export type CardContent = StatContent | QuoteContent | BarChartContent | PercentageChartContent | BulletsContent

// Layout: grille de 4 cartes + carte droite
export type StatsGridCard = {
  color: "white" | "purple" | "blue"
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

// Layout: 3 colonnes — grande carte gauche, 3 petites milieu, 2 moyennes droite
export type ThreeColumnCard = {
  color: string
  content: CardContent
  grow?: number
  textColor?: string
}

export type ThreeColumnLayout = {
  type: "three-column"
  leftCard: ThreeColumnCard
  middleCards?: ThreeColumnCard[]
  middleBullets?: Array<{ text: string; source: string }>
  rightCards: ThreeColumnCard[]
}


// Layout: 3 grandes cartes bipartites (haut coloré + bas résumé)
export type ThreeCardsCard = {
  color: string
  content: CardContent
  summary: string
}

export type ThreeCardsLayout = {
  type: "three-cards"
  cards: ThreeCardsCard[]
  bullets?: Array<{ text: string; source: string }>
}

// Layout: grande carte gauche + grille 2×2 droite (miroir de stats-grid)
export type StatsGridInvertedLayout = {
  type: "stats-grid-inverted"
  cards: StatsGridCard[]
  leftCard: {
    title: string
    paragraphs: string[]
  }
}

// Layout : petites cartes inclinées qui se chevauchent
export type TiltedCard = {
  title: string
  content: string
  source?: string
  icon?: string
}

export type TiltedCardsLayout = {
  type: "tilted-cards"
  kicker: string
  headline: string
  cards: TiltedCard[]
}

// Layout : editorial — headline XXL + colonnes de texte + pull quote
export type NewspaperColumnItem = {
  text: string
  label?: string
}

export type NewspaperColumn = {
  content: string
  source?: string
  stat?: string
  items?: NewspaperColumnItem[]
}

export type NewspaperLayout = {
  type: "newspaper"
  kicker: string
  headline: string
  subheadline?:string
  columns: NewspaperColumn[]
  pullQuote?: {
    text: string
    source: string
  }
}

// Layout : 4 petites cartes en haut + 2 grandes en bas
export type FourPlusTwoCard = {
  color: string
  label?: string
  content: CardContent
}

export type FourPlusTwoLayout = {
  type: "four-plus-two"
  topCards: FourPlusTwoCard[]
  bottomCards: FourPlusTwoCard[]
}

export type VerticalBandsInvertedLayout = {
  type: "vertical-bands-inverted"
  bands: Band[]
  bullets: Array<{ text: string; source: string }>
}

// Layout : grille bento asymétrique — 1 grande + 2 petites + 1 wide + 1 petite
export type BentoCard = {
  color: string
  content: CardContent
}

export type BentoLayout = {
  type: "bento"
  cards: BentoCard[]
}

// Layout: 2 stats centrées + citation overlay + bullets
export type DualStatsLayout = {
  type: "dual-stats"
  stats: StatContent[]
  quote: QuoteContent
  bullets: BulletsContent
}

// Layout: Flow vertical moderne avec cartes empilées
export type CardsFlowCard = {
  color: string
  content: CardContent
}

export type CardsFlowLayout = {
  type: "cards-flow"
  kicker: string
  headline: string
  cards: CardsFlowCard[]
}

// Layout: Stats XXL + Citation dégradée + Bullets modernes
export type ModernStatsLayout = {
  type: "modern-stats"
  kicker: string
  headline: string
  stat1: StatContent
  stat2: StatContent
  quote: QuoteContent
  bullets: BulletsContent
}

// Layout: Colonnes asymétriques avec gradient flow
export type GradientFlowLayout = {
  type: "gradient-flow"
  kicker: string
  headline: string
  stat1: StatContent
  stat2: StatContent
  quote: QuoteContent
  bullets: BulletsContent
}

export type SubTendancyLayout = StatsGridLayout | StatsGridInvertedLayout | VerticalBandsLayout | VerticalBandsInvertedLayout | ThreeColumnLayout | ThreeCardsLayout | TiltedCardsLayout | NewspaperLayout | FourPlusTwoLayout | BentoLayout | DualStatsLayout | CardsFlowLayout | ModernStatsLayout | GradientFlowLayout

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
