import { ArrowBigLeft as DevIcon, type LucideProps } from "lucide-react"
export const ArrowBigLeft: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#arrow-big-left`} />
    </svg>
  )
