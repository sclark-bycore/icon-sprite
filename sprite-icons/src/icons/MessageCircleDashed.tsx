import { MessageCircleDashed as DevIcon, type LucideProps } from "lucide-react"
export const MessageCircleDashed: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#message-circle-dashed`} />
    </svg>
  )
