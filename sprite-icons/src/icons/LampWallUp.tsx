import { LampWallUp as DevIcon, type LucideProps } from "lucide-react"
export const LampWallUp: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#lamp-wall-up`} />
    </svg>
  )
