import { ChevronLeft as DevIcon, type LucideProps } from "lucide-react"
export const ChevronLeft: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#chevron-left`} />
    </svg>
  )
