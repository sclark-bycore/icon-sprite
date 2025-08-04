import { ChartNoAxesColumn as DevIcon, type LucideProps } from "lucide-react"
export const ChartNoAxesColumn: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#chart-no-axes-column`} />
    </svg>
  )
