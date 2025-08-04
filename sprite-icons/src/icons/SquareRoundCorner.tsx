import { SquareRoundCorner as DevIcon, type LucideProps } from "lucide-react"
export const SquareRoundCorner: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#square-round-corner`} />
    </svg>
  )
