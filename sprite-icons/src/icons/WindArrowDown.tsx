import { WindArrowDown as DevIcon, type LucideProps } from "lucide-react"
export const WindArrowDown: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#wind-arrow-down`} />
    </svg>
  )
