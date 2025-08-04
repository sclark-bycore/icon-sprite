import { SquareArrowOutUpLeft as DevIcon, type LucideProps } from "lucide-react"
export const SquareArrowOutUpLeft: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#square-arrow-out-up-left`} />
    </svg>
  )
