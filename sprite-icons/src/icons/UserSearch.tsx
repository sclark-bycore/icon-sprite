import { UserSearch as DevIcon, type LucideProps } from "lucide-react"
export const UserSearch: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#user-search`} />
    </svg>
  )
