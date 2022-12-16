export interface PlaylistProps {
  coverArt: string
  title: string
  description: string
  accent: AccentProps
}

export type AccentProps = "gold" | "blue" | "red"
