import { UserMinus as DevIcon, type LucideProps } from "lucide-react"
export const UserMinus: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#user-minus`} />
    </svg>
  )
