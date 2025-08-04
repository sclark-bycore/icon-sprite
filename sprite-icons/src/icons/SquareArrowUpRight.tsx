import { SquareArrowUpRight as DevIcon, type LucideProps } from "lucide-react"
export const SquareArrowUpRight: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#square-arrow-up-right`} />
    </svg>
  )
