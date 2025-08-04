import { Mailbox as DevIcon, type LucideProps } from "lucide-react"
export const Mailbox: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#mailbox`} />
    </svg>
  )
