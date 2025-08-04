import { ChartColumnDecreasing as DevIcon, type LucideProps } from "lucide-react"
export const ChartColumnDecreasing: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#chart-column-decreasing`} />
    </svg>
  )
