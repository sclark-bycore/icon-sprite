import { SquareArrowOutUpRight as DevIcon, type LucideProps } from "lucide-react"
export const SquareArrowOutUpRight: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#square-arrow-out-up-right`} />
    </svg>
  )
