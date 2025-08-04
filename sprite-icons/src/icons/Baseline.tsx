import { Baseline as DevIcon, type LucideProps } from "lucide-react"
export const Baseline: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#baseline`} />
    </svg>
  )
