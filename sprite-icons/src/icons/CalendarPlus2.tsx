import { CalendarPlus2 as DevIcon, type LucideProps } from "lucide-react"
export const CalendarPlus2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#calendar-plus-2`} />
    </svg>
  )
