import { UsersRound as DevIcon, type LucideProps } from "lucide-react"
export const UsersRound: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#users-round`} />
    </svg>
  )
