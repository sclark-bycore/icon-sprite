import { SquareArrowDown as DevIcon, type LucideProps } from "lucide-react"
export const SquareArrowDown: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#square-arrow-down`} />
    </svg>
  )
