import { SquareArrowOutDownRight as DevIcon, type LucideProps } from "lucide-react"
export const SquareArrowOutDownRight: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#square-arrow-out-down-right`} />
    </svg>
  )
