import { ArrowRightLeft as DevIcon, type LucideProps } from "lucide-react"
export const ArrowRightLeft: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#arrow-right-left`} />
    </svg>
  )
