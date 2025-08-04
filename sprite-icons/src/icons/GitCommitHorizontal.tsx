import { GitCommitHorizontal as DevIcon, type LucideProps } from "lucide-react"
export const GitCommitHorizontal: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#git-commit-horizontal`} />
    </svg>
  )
