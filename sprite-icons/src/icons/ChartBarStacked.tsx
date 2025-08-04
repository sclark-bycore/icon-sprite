import { ChartBarStacked as DevIcon, type LucideProps } from "lucide-react"
export const ChartBarStacked: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#chart-bar-stacked`} />
    </svg>
  )
