import { BookOpenText as DevIcon, type LucideProps } from "lucide-react"
export const BookOpenText: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#book-open-text`} />
    </svg>
  )
