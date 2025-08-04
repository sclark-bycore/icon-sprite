import { MessageSquareOff as DevIcon, type LucideProps } from "lucide-react"
export const MessageSquareOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#message-square-off`} />
    </svg>
  )
