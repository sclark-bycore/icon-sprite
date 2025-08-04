import { BatteryLow as DevIcon, type LucideProps } from "lucide-react"
export const BatteryLow: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#battery-low`} />
    </svg>
  )
