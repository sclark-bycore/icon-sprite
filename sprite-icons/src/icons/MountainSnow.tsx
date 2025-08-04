import { MountainSnow as DevIcon, type LucideProps } from "lucide-react"
export const MountainSnow: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#mountain-snow`} />
    </svg>
  )
