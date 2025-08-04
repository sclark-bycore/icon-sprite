import { SquareChevronLeft as DevIcon, type LucideProps } from "lucide-react"
export const SquareChevronLeft: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#square-chevron-left`} />
    </svg>
  )
