import { GitPullRequestClosed as DevIcon, type LucideProps } from "lucide-react"
export const GitPullRequestClosed: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#git-pull-request-closed`} />
    </svg>
  )
