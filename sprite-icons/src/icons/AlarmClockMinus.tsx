import { AlarmClockMinus as DevIcon, type LucideProps } from "lucide-react"
export const AlarmClockMinus: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#alarm-clock-minus`} />
    </svg>
  )
