import { ChartScatter as DevIcon, type LucideProps } from "lucide-react"
export const ChartScatter: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#chart-scatter`} />
    </svg>
  )
