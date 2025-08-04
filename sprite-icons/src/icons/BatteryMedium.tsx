import { BatteryMedium as DevIcon, type LucideProps } from "lucide-react"
export const BatteryMedium: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#battery-medium`} />
    </svg>
  )
