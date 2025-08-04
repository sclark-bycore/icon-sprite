import { TicketX as DevIcon, type LucideProps } from "lucide-react"
export const TicketX: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#ticket-x`} />
    </svg>
  )
