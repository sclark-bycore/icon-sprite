import { MoveDiagonal2 as DevIcon, type LucideProps } from "lucide-react"
export const MoveDiagonal2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#move-diagonal-2`} />
    </svg>
  )
