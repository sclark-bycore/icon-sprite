import { Bot as DevIcon, type LucideProps } from "lucide-react"
export const Bot: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#bot`} />
    </svg>
  )
