import { CalendarCheck2 as DevIcon, type LucideProps } from "lucide-react"
export const CalendarCheck2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#calendar-check-2`} />
    </svg>
  )
