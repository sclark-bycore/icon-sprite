import { GitCompareArrows as DevIcon, type LucideProps } from "lucide-react"
export const GitCompareArrows: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#git-compare-arrows`} />
    </svg>
  )
