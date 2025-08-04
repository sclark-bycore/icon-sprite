import { MessageSquareDashed as DevIcon, type LucideProps } from "lucide-react"
export const MessageSquareDashed: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#message-square-dashed`} />
    </svg>
  )
