import { ArrowBigDownDash as DevIcon, type LucideProps } from "lucide-react"
export const ArrowBigDownDash: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#arrow-big-down-dash`} />
    </svg>
  )
