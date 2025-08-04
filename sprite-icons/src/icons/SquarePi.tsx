import { SquarePi as DevIcon, type LucideProps } from "lucide-react"
export const SquarePi: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#square-pi`} />
    </svg>
  )
