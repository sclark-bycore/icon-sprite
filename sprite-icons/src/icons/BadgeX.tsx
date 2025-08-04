import { BadgeX as DevIcon, type LucideProps } from "lucide-react"
export const BadgeX: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#badge-x`} />
    </svg>
  )
