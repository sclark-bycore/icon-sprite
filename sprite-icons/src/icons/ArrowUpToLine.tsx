import { ArrowUpToLine as DevIcon, type LucideProps } from "lucide-react"
export const ArrowUpToLine: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#arrow-up-to-line`} />
    </svg>
  )
