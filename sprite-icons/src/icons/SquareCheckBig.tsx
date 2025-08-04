import { SquareCheckBig as DevIcon, type LucideProps } from "lucide-react"
export const SquareCheckBig: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#square-check-big`} />
    </svg>
  )
