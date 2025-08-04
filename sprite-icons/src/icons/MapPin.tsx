import { MapPin as DevIcon, type LucideProps } from "lucide-react"
export const MapPin: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#map-pin`} />
    </svg>
  )
