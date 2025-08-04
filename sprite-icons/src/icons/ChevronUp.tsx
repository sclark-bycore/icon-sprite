import { ChevronUp as DevIcon, type LucideProps } from "lucide-react"
export const ChevronUp: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#chevron-up`} />
    </svg>
  )
