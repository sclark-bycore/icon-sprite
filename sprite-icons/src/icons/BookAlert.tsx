import { BookAlert as DevIcon, type LucideProps } from "lucide-react"
export const BookAlert: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#book-alert`} />
    </svg>
  )
