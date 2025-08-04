import { ArrowDownRight as DevIcon, type LucideProps } from "lucide-react"
export const ArrowDownRight: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#arrow-down-right`} />
    </svg>
  )
