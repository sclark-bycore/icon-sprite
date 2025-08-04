import { CalendarCheck as DevIcon, type LucideProps } from "lucide-react"
export const CalendarCheck: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#calendar-check`} />
    </svg>
  )
