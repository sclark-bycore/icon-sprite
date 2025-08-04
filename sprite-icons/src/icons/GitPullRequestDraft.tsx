import { GitPullRequestDraft as DevIcon, type LucideProps } from "lucide-react"
export const GitPullRequestDraft: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#git-pull-request-draft`} />
    </svg>
  )
