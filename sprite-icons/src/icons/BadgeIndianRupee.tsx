import { BadgeIndianRupee as DevIcon, type LucideProps } from "lucide-react"
export const BadgeIndianRupee: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#badge-indian-rupee`} />
    </svg>
  )
