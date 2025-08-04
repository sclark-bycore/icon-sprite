import { CalendarClock as DevIcon, type LucideProps } from "lucide-react"
export const CalendarClock: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#calendar-clock`} />
    </svg>
  )
