import { ArrowBigLeftDash as DevIcon, type LucideProps } from "lucide-react"
export const ArrowBigLeftDash: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#arrow-big-left-dash`} />
    </svg>
  )
