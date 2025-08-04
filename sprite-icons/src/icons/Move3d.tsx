import { Move3d as DevIcon, type LucideProps } from "lucide-react"
export const Move3d: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#move-3d`} />
    </svg>
  )
