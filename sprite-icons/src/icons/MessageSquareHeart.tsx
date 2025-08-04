import { MessageSquareHeart as DevIcon, type LucideProps } from "lucide-react"
export const MessageSquareHeart: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#message-square-heart`} />
    </svg>
  )
