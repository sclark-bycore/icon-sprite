import { SquareChevronUp as DevIcon, type LucideProps } from "lucide-react"
export const SquareChevronUp: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#square-chevron-up`} />
    </svg>
  )
