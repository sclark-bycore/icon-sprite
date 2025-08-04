import { ChevronsLeftRight as DevIcon, type LucideProps } from "lucide-react"
export const ChevronsLeftRight: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#chevrons-left-right`} />
    </svg>
  )
