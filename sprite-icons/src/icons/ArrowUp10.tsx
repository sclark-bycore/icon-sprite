import { ArrowUp10 as DevIcon, type LucideProps } from "lucide-react"
export const ArrowUp10: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#arrow-up-1-0`} />
    </svg>
  )
