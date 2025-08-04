import { BetweenHorizontalStart as DevIcon, type LucideProps } from "lucide-react"
export const BetweenHorizontalStart: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#between-horizontal-start`} />
    </svg>
  )
