import { ArrowLeftToLine as DevIcon, type LucideProps } from "lucide-react"
export const ArrowLeftToLine: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#arrow-left-to-line`} />
    </svg>
  )
