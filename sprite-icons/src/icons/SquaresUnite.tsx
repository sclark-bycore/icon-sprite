import { SquaresUnite as DevIcon, type LucideProps } from "lucide-react"
export const SquaresUnite: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#squares-unite`} />
    </svg>
  )
