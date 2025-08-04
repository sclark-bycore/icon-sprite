import { CalendarHeart as DevIcon, type LucideProps } from "lucide-react"
export const CalendarHeart: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#calendar-heart`} />
    </svg>
  )
