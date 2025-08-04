import { GitCompare as DevIcon, type LucideProps } from "lucide-react"
export const GitCompare: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#git-compare`} />
    </svg>
  )
