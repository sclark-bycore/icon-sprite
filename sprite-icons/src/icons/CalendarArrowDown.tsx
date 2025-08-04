import { CalendarArrowDown as DevIcon, type LucideProps } from "lucide-react"
export const CalendarArrowDown: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#calendar-arrow-down`} />
    </svg>
  )
