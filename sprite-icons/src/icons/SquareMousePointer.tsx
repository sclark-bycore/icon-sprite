import { SquareMousePointer as DevIcon, type LucideProps } from "lucide-react"
export const SquareMousePointer: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#square-mouse-pointer`} />
    </svg>
  )
