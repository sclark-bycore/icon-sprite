import { ArrowUpDown as DevIcon, type LucideProps } from "lucide-react"
export const ArrowUpDown: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#arrow-up-down`} />
    </svg>
  )
