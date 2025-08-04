import { ChevronDown as DevIcon, type LucideProps } from "lucide-react"
export const ChevronDown: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#chevron-down`} />
    </svg>
  )
