import { TicketCheck as DevIcon, type LucideProps } from "lucide-react"
export const TicketCheck: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#ticket-check`} />
    </svg>
  )
