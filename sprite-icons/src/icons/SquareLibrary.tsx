import { SquareLibrary as DevIcon, type LucideProps } from "lucide-react"
export const SquareLibrary: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#square-library`} />
    </svg>
  )
