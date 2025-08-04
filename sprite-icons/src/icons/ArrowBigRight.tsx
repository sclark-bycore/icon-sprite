import { ArrowBigRight as DevIcon, type LucideProps } from "lucide-react"
export const ArrowBigRight: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#arrow-big-right`} />
    </svg>
  )
