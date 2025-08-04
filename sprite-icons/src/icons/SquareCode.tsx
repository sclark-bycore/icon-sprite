import { SquareCode as DevIcon, type LucideProps } from "lucide-react"
export const SquareCode: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#square-code`} />
    </svg>
  )
