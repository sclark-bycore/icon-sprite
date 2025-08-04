import { AArrowDown as DevIcon, type LucideProps } from "lucide-react"
export const AArrowDown: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#a-arrow-down`} />
    </svg>
  )
