import { SquareScissors as DevIcon, type LucideProps } from "lucide-react"
export const SquareScissors: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#square-scissors`} />
    </svg>
  )
