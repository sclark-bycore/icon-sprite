import { TicketMinus as DevIcon, type LucideProps } from "lucide-react"
export const TicketMinus: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#ticket-minus`} />
    </svg>
  )
