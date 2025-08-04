import { MapPinned as DevIcon, type LucideProps } from "lucide-react"
export const MapPinned: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#map-pinned`} />
    </svg>
  )
