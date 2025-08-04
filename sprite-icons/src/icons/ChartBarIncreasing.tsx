import { ChartBarIncreasing as DevIcon, type LucideProps } from "lucide-react"
export const ChartBarIncreasing: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#chart-bar-increasing`} />
    </svg>
  )
