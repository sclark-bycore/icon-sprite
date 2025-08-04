import { ArrowRightFromLine as DevIcon, type LucideProps } from "lucide-react"
export const ArrowRightFromLine: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#arrow-right-from-line`} />
    </svg>
  )
