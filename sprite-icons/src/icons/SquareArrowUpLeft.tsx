import { SquareArrowUpLeft as DevIcon, type LucideProps } from "lucide-react"
export const SquareArrowUpLeft: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#square-arrow-up-left`} />
    </svg>
  )
