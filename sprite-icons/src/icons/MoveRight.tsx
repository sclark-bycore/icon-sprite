import { MoveRight as DevIcon, type LucideProps } from "lucide-react"
export const MoveRight: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#move-right`} />
    </svg>
  )
