import { ChevronsUpDown as DevIcon, type LucideProps } from "lucide-react"
export const ChevronsUpDown: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#chevrons-up-down`} />
    </svg>
  )
