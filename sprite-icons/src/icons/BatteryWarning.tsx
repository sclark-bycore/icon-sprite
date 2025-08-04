import { BatteryWarning as DevIcon, type LucideProps } from "lucide-react"
export const BatteryWarning: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#battery-warning`} />
    </svg>
  )
