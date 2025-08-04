import { TrafficCone as DevIcon, type LucideProps } from "lucide-react"
export const TrafficCone: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#traffic-cone`} />
    </svg>
  )
