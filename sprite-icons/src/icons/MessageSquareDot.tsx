import { MessageSquareDot as DevIcon, type LucideProps } from "lucide-react"
export const MessageSquareDot: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#message-square-dot`} />
    </svg>
  )
