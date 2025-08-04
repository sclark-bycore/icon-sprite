import { SquareAsterisk as DevIcon, type LucideProps } from "lucide-react"
export const SquareAsterisk: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#square-asterisk`} />
    </svg>
  )
