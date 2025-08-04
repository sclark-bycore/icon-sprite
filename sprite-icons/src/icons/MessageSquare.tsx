import { MessageSquare as DevIcon, type LucideProps } from "lucide-react"
export const MessageSquare: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#message-square`} />
    </svg>
  )
