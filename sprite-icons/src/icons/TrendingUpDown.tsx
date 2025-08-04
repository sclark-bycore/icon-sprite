import { TrendingUpDown as DevIcon, type LucideProps } from "lucide-react"
export const TrendingUpDown: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#trending-up-down`} />
    </svg>
  )
