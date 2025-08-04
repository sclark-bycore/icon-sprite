import { CircleQuestionMark as DevIcon, type LucideProps } from "lucide-react"
export const CircleQuestionMark: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#circle-question-mark`} />
    </svg>
  )
