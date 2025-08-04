import { PillBottle as DevIcon, type LucideProps } from "lucide-react"
export const PillBottle: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#pill-bottle`} />
    </svg>
  )
