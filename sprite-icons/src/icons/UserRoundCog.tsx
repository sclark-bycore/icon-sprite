import { UserRoundCog as DevIcon, type LucideProps } from "lucide-react"
export const UserRoundCog: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#user-round-cog`} />
    </svg>
  )
