import { ArrowLeftFromLine as DevIcon, type LucideProps } from "lucide-react"
export const ArrowLeftFromLine: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#arrow-left-from-line`} />
    </svg>
  )
