import { TowerControl as DevIcon, type LucideProps } from "lucide-react"
export const TowerControl: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#tower-control`} />
    </svg>
  )
