import { GitFork as DevIcon, type LucideProps } from "lucide-react"
export const GitFork: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#git-fork`} />
    </svg>
  )
