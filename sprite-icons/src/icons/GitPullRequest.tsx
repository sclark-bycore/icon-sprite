import { GitPullRequest as DevIcon, type LucideProps } from "lucide-react"
export const GitPullRequest: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#git-pull-request`} />
    </svg>
  )
