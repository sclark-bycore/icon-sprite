import { Webhook as DevIcon, type LucideProps } from "lucide-react"
export const Webhook: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#webhook`} />
    </svg>
  )
