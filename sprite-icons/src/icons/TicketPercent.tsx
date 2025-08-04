import { TicketPercent as DevIcon, type LucideProps } from "lucide-react"
export const TicketPercent: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#ticket-percent`} />
    </svg>
  )
