import { MessageSquareReply as DevIcon, type LucideProps } from "lucide-react"
export const MessageSquareReply: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#message-square-reply`} />
    </svg>
  )
