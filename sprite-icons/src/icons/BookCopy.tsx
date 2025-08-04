import { BookCopy as DevIcon, type LucideProps } from "lucide-react"
export const BookCopy: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#book-copy`} />
    </svg>
  )
