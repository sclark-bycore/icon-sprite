import { MoveUp as DevIcon, type LucideProps } from "lucide-react"
export const MoveUp: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#move-up`} />
    </svg>
  )
