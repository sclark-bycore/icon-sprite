import { ChevronsDown as DevIcon, type LucideProps } from "lucide-react"
export const ChevronsDown: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#chevrons-down`} />
    </svg>
  )
