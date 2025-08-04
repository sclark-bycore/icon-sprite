import { SquareSquare as DevIcon, type LucideProps } from "lucide-react"
export const SquareSquare: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#square-square`} />
    </svg>
  )
