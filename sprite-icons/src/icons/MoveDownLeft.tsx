import { MoveDownLeft as DevIcon, type LucideProps } from "lucide-react"
export const MoveDownLeft: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#move-down-left`} />
    </svg>
  )
