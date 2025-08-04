import { ShipWheel as DevIcon, type LucideProps } from "lucide-react"
export const ShipWheel: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#ship-wheel`} />
    </svg>
  )
