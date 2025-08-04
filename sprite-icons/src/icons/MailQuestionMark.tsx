import { MailQuestionMark as DevIcon, type LucideProps } from "lucide-react"
export const MailQuestionMark: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#mail-question-mark`} />
    </svg>
  )
