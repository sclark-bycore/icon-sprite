import { ArrowRightToLine as DevIcon, type LucideProps } from "lucide-react"
export const ArrowRightToLine: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#arrow-right-to-line`} />
    </svg>
  )
