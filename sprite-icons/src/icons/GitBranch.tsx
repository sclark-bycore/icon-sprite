import { GitBranch as DevIcon, type LucideProps } from "lucide-react"
export const GitBranch: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#git-branch`} />
    </svg>
  )
