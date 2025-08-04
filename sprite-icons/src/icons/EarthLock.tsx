import { EarthLock as DevIcon, type LucideProps } from "lucide-react"
export const EarthLock: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#earth-lock`} />
    </svg>
  )
