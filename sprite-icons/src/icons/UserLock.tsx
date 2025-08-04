import { UserLock as DevIcon, type LucideProps } from "lucide-react"
export const UserLock: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#user-lock`} />
    </svg>
  )
