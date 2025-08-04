import { BetweenVerticalStart as DevIcon, type LucideProps } from "lucide-react"
export const BetweenVerticalStart: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#between-vertical-start`} />
    </svg>
  )
