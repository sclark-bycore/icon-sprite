import { BadgeInfo as DevIcon, type LucideProps } from "lucide-react"
export const BadgeInfo: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#badge-info`} />
    </svg>
  )
