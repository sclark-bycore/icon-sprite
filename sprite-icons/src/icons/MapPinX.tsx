import { MapPinX as DevIcon, type LucideProps } from "lucide-react"
export const MapPinX: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#map-pin-x`} />
    </svg>
  )
