import { BrickWall as DevIcon, type LucideProps } from "lucide-react"
export const BrickWall: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#brick-wall`} />
    </svg>
  )
