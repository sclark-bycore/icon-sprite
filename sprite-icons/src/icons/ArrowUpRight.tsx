import { ArrowUpRight as DevIcon, type LucideProps } from "lucide-react"
export const ArrowUpRight: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#arrow-up-right`} />
    </svg>
  )
