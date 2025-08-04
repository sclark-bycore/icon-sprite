import { CalendarMinus2 as DevIcon, type LucideProps } from "lucide-react"
export const CalendarMinus2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#calendar-minus-2`} />
    </svg>
  )
