import { BookDashed as DevIcon, type LucideProps } from "lucide-react"
export const BookDashed: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#book-dashed`} />
    </svg>
  )
