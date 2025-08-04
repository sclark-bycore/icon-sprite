import { TicketsPlane as DevIcon, type LucideProps } from "lucide-react"
export const TicketsPlane: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#tickets-plane`} />
    </svg>
  )
