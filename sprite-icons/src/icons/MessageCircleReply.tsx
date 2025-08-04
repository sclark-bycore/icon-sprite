import { MessageCircleReply as DevIcon, type LucideProps } from "lucide-react"
export const MessageCircleReply: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#message-circle-reply`} />
    </svg>
  )
