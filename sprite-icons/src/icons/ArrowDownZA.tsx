import { ArrowDownZA as DevIcon, type LucideProps } from "lucide-react"
export const ArrowDownZA: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#arrow-down-z-a`} />
    </svg>
  )
