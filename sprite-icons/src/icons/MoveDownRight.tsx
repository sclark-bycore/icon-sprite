import { MoveDownRight as DevIcon, type LucideProps } from "lucide-react"
export const MoveDownRight: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#move-down-right`} />
    </svg>
  )
