import { ChartColumnIncreasing as DevIcon, type LucideProps } from "lucide-react"
export const ChartColumnIncreasing: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#chart-column-increasing`} />
    </svg>
  )
