import { MessageCircleWarning as DevIcon, type LucideProps } from "lucide-react"
export const MessageCircleWarning: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#message-circle-warning`} />
    </svg>
  )
