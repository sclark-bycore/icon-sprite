import { SquareChartGantt as DevIcon, type LucideProps } from "lucide-react"
export const SquareChartGantt: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#square-chart-gantt`} />
    </svg>
  )
