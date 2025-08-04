import { SquareDivide as DevIcon, type LucideProps } from "lucide-react"
export const SquareDivide: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#square-divide`} />
    </svg>
  )
