import { SquareM as DevIcon, type LucideProps } from "lucide-react"
export const SquareM: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#square-m`} />
    </svg>
  )
