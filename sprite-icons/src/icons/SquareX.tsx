import { SquareX as DevIcon, type LucideProps } from "lucide-react"
export const SquareX: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#square-x`} />
    </svg>
  )
