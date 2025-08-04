import { VectorSquare as DevIcon, type LucideProps } from "lucide-react"
export const VectorSquare: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#vector-square`} />
    </svg>
  )
