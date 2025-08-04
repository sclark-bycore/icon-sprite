import { ArrowDown01 as DevIcon, type LucideProps } from "lucide-react"
export const ArrowDown01: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#arrow-down-0-1`} />
    </svg>
  )
