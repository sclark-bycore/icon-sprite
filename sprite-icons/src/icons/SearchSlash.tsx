import { SearchSlash as DevIcon, type LucideProps } from "lucide-react"
export const SearchSlash: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#search-slash`} />
    </svg>
  )
