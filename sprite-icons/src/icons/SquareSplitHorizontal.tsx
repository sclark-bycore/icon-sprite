import { SquareSplitHorizontal as DevIcon, type LucideProps } from "lucide-react"
export const SquareSplitHorizontal: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#square-split-horizontal`} />
    </svg>
  )
