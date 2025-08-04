import { TicketSlash as DevIcon, type LucideProps } from "lucide-react"
export const TicketSlash: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#ticket-slash`} />
    </svg>
  )
