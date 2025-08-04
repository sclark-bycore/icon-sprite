import { FileChartPie as DevIcon, type LucideProps } from "lucide-react"
export const FileChartPie: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#file-chart-pie`} />
    </svg>
  )
