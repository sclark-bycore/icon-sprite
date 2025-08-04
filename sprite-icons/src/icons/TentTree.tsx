import { TentTree as DevIcon, type LucideProps } from "lucide-react"
export const TentTree: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#tent-tree`} />
    </svg>
  )
