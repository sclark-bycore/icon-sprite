import { MessageCircleMore as DevIcon, type LucideProps } from "lucide-react"
export const MessageCircleMore: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#message-circle-more`} />
    </svg>
  )
