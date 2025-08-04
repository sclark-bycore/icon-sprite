import { FlagTriangleRight as DevIcon, type LucideProps } from "lucide-react"
export const FlagTriangleRight: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#flag-triangle-right`} />
    </svg>
  )
