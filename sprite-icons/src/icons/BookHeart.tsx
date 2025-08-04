import { BookHeart as DevIcon, type LucideProps } from "lucide-react"
export const BookHeart: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#book-heart`} />
    </svg>
  )
