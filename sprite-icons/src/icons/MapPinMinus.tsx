import { MapPinMinus as DevIcon, type LucideProps } from "lucide-react"
export const MapPinMinus: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#map-pin-minus`} />
    </svg>
  )
