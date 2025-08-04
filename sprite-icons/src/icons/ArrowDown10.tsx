import { ArrowDown10 as DevIcon, type LucideProps } from "lucide-react"
export const ArrowDown10: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#arrow-down-1-0`} />
    </svg>
  )
