import { MessageCircleQuestionMark as DevIcon, type LucideProps } from "lucide-react"
export const MessageCircleQuestionMark: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#message-circle-question-mark`} />
    </svg>
  )
