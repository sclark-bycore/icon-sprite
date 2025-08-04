import { SquaresIntersect as DevIcon, type LucideProps } from "lucide-react"
export const SquaresIntersect: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#squares-intersect`} />
    </svg>
  )
