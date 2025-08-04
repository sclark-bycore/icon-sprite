import { BookImage as DevIcon, type LucideProps } from "lucide-react"
export const BookImage: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#book-image`} />
    </svg>
  )
