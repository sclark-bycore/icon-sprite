import { BrickWallFire as DevIcon, type LucideProps } from "lucide-react"
export const BrickWallFire: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#brick-wall-fire`} />
    </svg>
  )
