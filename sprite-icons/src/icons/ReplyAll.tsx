import { ReplyAll as DevIcon, type LucideProps } from "lucide-react"
export const ReplyAll: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#reply-all`} />
    </svg>
  )
