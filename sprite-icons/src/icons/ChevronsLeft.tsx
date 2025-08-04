import { ChevronsLeft as DevIcon, type LucideProps } from "lucide-react"
export const ChevronsLeft: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#chevrons-left`} />
    </svg>
  )
