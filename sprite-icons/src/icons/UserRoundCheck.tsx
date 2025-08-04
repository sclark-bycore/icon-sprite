import { UserRoundCheck as DevIcon, type LucideProps } from "lucide-react"
export const UserRoundCheck: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#user-round-check`} />
    </svg>
  )
