import { Axis3d as DevIcon, type LucideProps } from "lucide-react"
export const Axis3d: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#axis-3d`} />
    </svg>
  )
