import { UtensilsCrossed as DevIcon, type LucideProps } from "lucide-react"
export const UtensilsCrossed: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#utensils-crossed`} />
    </svg>
  )
