import { ParkingMeter as DevIcon, type LucideProps } from "lucide-react"
export const ParkingMeter: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#parking-meter`} />
    </svg>
  )
