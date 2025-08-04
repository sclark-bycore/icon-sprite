import { BookOpen as DevIcon, type LucideProps } from "lucide-react"
export const BookOpen: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#book-open`} />
    </svg>
  )
