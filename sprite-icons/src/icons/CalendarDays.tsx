import { CalendarDays as DevIcon, type LucideProps } from "lucide-react"
export const CalendarDays: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#calendar-days`} />
    </svg>
  )
