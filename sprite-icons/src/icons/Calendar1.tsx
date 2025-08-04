import { Calendar1 as DevIcon, type LucideProps } from "lucide-react"
export const Calendar1: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#calendar-1`} />
    </svg>
  )
