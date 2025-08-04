import { ArrowUpFromLine as DevIcon, type LucideProps } from "lucide-react"
export const ArrowUpFromLine: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#arrow-up-from-line`} />
    </svg>
  )
