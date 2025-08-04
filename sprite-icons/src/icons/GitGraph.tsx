import { GitGraph as DevIcon, type LucideProps } from "lucide-react"
export const GitGraph: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#git-graph`} />
    </svg>
  )
