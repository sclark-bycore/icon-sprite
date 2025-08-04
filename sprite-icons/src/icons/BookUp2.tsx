import { BookUp2 as DevIcon, type LucideProps } from "lucide-react"
export const BookUp2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#book-up-2`} />
    </svg>
  )
