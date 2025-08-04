import { ChartPie as DevIcon, type LucideProps } from "lucide-react"
export const ChartPie: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#chart-pie`} />
    </svg>
  )
