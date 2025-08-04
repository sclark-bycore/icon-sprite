import { BookX as DevIcon, type LucideProps } from "lucide-react"
export const BookX: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#book-x`} />
    </svg>
  )
