import { SquareMinus as DevIcon, type LucideProps } from "lucide-react"
export const SquareMinus: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#square-minus`} />
    </svg>
  )
