import { BetweenVerticalEnd as DevIcon, type LucideProps } from "lucide-react"
export const BetweenVerticalEnd: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#between-vertical-end`} />
    </svg>
  )
