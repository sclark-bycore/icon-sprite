import { BookHeadphones as DevIcon, type LucideProps } from "lucide-react"
export const BookHeadphones: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#book-headphones`} />
    </svg>
  )
