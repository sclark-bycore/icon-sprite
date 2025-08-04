import { ChevronFirst as DevIcon, type LucideProps } from "lucide-react"
export const ChevronFirst: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#chevron-first`} />
    </svg>
  )
