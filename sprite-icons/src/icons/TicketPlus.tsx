import { TicketPlus as DevIcon, type LucideProps } from "lucide-react"
export const TicketPlus: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#ticket-plus`} />
    </svg>
  )
