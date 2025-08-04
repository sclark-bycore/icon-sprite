import { ArrowDownToDot as DevIcon, type LucideProps } from "lucide-react"
export const ArrowDownToDot: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#arrow-down-to-dot`} />
    </svg>
  )
