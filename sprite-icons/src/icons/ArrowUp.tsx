import { ArrowUp as DevIcon, type LucideProps } from "lucide-react"
export const ArrowUp: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#arrow-up`} />
    </svg>
  )
