import { SquaresSubtract as DevIcon, type LucideProps } from "lucide-react"
export const SquaresSubtract: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#squares-subtract`} />
    </svg>
  )
