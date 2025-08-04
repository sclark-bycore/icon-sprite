import { ChevronLast as DevIcon, type LucideProps } from "lucide-react"
export const ChevronLast: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#chevron-last`} />
    </svg>
  )
