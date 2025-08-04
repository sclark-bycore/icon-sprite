import { SquareKanban as DevIcon, type LucideProps } from "lucide-react"
export const SquareKanban: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#square-kanban`} />
    </svg>
  )
