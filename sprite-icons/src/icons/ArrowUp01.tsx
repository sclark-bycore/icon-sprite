import { ArrowUp01 as DevIcon, type LucideProps } from "lucide-react"
export const ArrowUp01: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#arrow-up-0-1`} />
    </svg>
  )
