import { MailWarning as DevIcon, type LucideProps } from "lucide-react"
export const MailWarning: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#mail-warning`} />
    </svg>
  )
