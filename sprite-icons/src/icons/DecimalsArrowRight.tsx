import { DecimalsArrowRight as DevIcon, type LucideProps } from "lucide-react"
export const DecimalsArrowRight: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#decimals-arrow-right`} />
    </svg>
  )
