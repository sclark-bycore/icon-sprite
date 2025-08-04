import { BadgeDollarSign as DevIcon, type LucideProps } from "lucide-react"
export const BadgeDollarSign: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#badge-dollar-sign`} />
    </svg>
  )
