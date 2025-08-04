import { MessageCirclePlus as DevIcon, type LucideProps } from "lucide-react"
export const MessageCirclePlus: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#message-circle-plus`} />
    </svg>
  )
