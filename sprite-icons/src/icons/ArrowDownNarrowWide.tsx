import { ArrowDownNarrowWide as DevIcon, type LucideProps } from "lucide-react"
export const ArrowDownNarrowWide: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#arrow-down-narrow-wide`} />
    </svg>
  )
