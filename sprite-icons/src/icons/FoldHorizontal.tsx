import { FoldHorizontal as DevIcon, type LucideProps } from "lucide-react"
export const FoldHorizontal: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#fold-horizontal`} />
    </svg>
  )
