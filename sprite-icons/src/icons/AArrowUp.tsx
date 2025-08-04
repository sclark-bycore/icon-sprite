import { AArrowUp as DevIcon, type LucideProps } from "lucide-react"
export const AArrowUp: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#a-arrow-up`} />
    </svg>
  )
