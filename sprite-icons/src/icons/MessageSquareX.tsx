import { MessageSquareX as DevIcon, type LucideProps } from "lucide-react"
export const MessageSquareX: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#message-square-x`} />
    </svg>
  )
