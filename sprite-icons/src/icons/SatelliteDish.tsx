import { SatelliteDish as DevIcon, type LucideProps } from "lucide-react"
export const SatelliteDish: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#satellite-dish`} />
    </svg>
  )
