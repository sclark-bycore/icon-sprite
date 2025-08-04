import { ArrowLeftRight as DevIcon, type LucideProps } from "lucide-react"
export const ArrowLeftRight: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#arrow-left-right`} />
    </svg>
  )
