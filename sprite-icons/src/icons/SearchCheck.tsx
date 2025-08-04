import { SearchCheck as DevIcon, type LucideProps } from "lucide-react"
export const SearchCheck: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#search-check`} />
    </svg>
  )
