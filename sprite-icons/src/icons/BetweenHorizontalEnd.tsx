import { BetweenHorizontalEnd as DevIcon, type LucideProps } from "lucide-react"
export const BetweenHorizontalEnd: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#between-horizontal-end`} />
    </svg>
  )
