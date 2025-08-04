import { SquareChevronRight as DevIcon, type LucideProps } from "lucide-react"
export const SquareChevronRight: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#square-chevron-right`} />
    </svg>
  )
