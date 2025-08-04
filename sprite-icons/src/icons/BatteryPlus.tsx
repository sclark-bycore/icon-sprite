import { BatteryPlus as DevIcon, type LucideProps } from "lucide-react"
export const BatteryPlus: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#battery-plus`} />
    </svg>
  )
