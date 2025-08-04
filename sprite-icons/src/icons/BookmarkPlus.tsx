import { BookmarkPlus as DevIcon, type LucideProps } from "lucide-react"
export const BookmarkPlus: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#bookmark-plus`} />
    </svg>
  )
