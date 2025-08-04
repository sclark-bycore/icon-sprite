import { MailCheck as DevIcon, type LucideProps } from "lucide-react"
export const MailCheck: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#mail-check`} />
    </svg>
  )
