import { Send as DevIcon, type LucideProps } from "lucide-react"
export const Send: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#send`} />
    </svg>
  )
