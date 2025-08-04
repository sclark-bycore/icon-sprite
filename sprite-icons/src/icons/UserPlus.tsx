import { UserPlus as DevIcon, type LucideProps } from "lucide-react"
export const UserPlus: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#user-plus`} />
    </svg>
  )
