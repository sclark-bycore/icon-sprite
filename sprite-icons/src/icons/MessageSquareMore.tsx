import { MessageSquareMore as DevIcon, type LucideProps } from "lucide-react"
export const MessageSquareMore: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#message-square-more`} />
    </svg>
  )
