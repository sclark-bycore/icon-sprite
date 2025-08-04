import { MoveVertical as DevIcon, type LucideProps } from "lucide-react"
export const MoveVertical: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#move-vertical`} />
    </svg>
  )
