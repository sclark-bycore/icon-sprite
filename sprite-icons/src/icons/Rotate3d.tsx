import { Rotate3d as DevIcon, type LucideProps } from "lucide-react"
export const Rotate3d: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#rotate-3d`} />
    </svg>
  )
