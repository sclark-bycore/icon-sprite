import { BatteryCharging as DevIcon, type LucideProps } from "lucide-react"
export const BatteryCharging: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#battery-charging`} />
    </svg>
  )
