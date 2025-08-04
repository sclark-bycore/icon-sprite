import { ArrowDownFromLine as DevIcon, type LucideProps } from "lucide-react"
export const ArrowDownFromLine: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#arrow-down-from-line`} />
    </svg>
  )
