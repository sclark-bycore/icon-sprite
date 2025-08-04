import { SquareArrowDownLeft as DevIcon, type LucideProps } from "lucide-react"
export const SquareArrowDownLeft: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#square-arrow-down-left`} />
    </svg>
  )
