import { SquareSlash as DevIcon, type LucideProps } from "lucide-react"
export const SquareSlash: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#square-slash`} />
    </svg>
  )
