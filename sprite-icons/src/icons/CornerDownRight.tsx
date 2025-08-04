import { CornerDownRight as DevIcon, type LucideProps } from "lucide-react"
export const CornerDownRight: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#corner-down-right`} />
    </svg>
  )
