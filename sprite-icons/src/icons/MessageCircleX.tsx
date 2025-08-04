import { MessageCircleX as DevIcon, type LucideProps } from "lucide-react"
export const MessageCircleX: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#message-circle-x`} />
    </svg>
  )
