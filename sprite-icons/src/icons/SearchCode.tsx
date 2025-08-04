import { SearchCode as DevIcon, type LucideProps } from "lucide-react"
export const SearchCode: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#search-code`} />
    </svg>
  )
