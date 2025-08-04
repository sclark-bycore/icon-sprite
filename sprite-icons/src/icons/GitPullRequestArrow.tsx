import { GitPullRequestArrow as DevIcon, type LucideProps } from "lucide-react"
export const GitPullRequestArrow: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#git-pull-request-arrow`} />
    </svg>
  )
