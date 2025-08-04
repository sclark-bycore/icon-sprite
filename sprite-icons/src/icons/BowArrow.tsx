import { BowArrow as DevIcon, type LucideProps } from "lucide-react"
export const BowArrow: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#bow-arrow`} />
    </svg>
  )
