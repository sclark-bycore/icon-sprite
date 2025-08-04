import { AlarmClockOff as DevIcon, type LucideProps } from "lucide-react"
export const AlarmClockOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#alarm-clock-off`} />
    </svg>
  )
