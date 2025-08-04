import { BookA as DevIcon, type LucideProps } from "lucide-react"
export const BookA: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#book-a`} />
    </svg>
  )
