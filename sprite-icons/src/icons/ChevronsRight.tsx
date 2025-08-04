import { ChevronsRight as DevIcon, type LucideProps } from "lucide-react"
export const ChevronsRight: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#chevrons-right`} />
    </svg>
  )
