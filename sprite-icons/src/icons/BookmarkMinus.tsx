import { BookmarkMinus as DevIcon, type LucideProps } from "lucide-react"
export const BookmarkMinus: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#bookmark-minus`} />
    </svg>
  )
