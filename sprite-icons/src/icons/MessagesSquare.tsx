import { MessagesSquare as DevIcon, type LucideProps } from "lucide-react"
export const MessagesSquare: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#messages-square`} />
    </svg>
  )
