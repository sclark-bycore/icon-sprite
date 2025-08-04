import { UserRoundPlus as DevIcon, type LucideProps } from "lucide-react"
export const UserRoundPlus: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#user-round-plus`} />
    </svg>
  )
