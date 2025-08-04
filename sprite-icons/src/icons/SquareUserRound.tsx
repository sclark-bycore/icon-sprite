import { SquareUserRound as DevIcon, type LucideProps } from "lucide-react"
export const SquareUserRound: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#square-user-round`} />
    </svg>
  )
