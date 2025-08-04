import { SquareSplitVertical as DevIcon, type LucideProps } from "lucide-react"
export const SquareSplitVertical: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#square-split-vertical`} />
    </svg>
  )
