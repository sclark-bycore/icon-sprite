import { UnfoldHorizontal as DevIcon, type LucideProps } from "lucide-react"
export const UnfoldHorizontal: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#unfold-horizontal`} />
    </svg>
  )
