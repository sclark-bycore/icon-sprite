import { Scale3d as DevIcon, type LucideProps } from "lucide-react"
export const Scale3d: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#scale-3d`} />
    </svg>
  )
