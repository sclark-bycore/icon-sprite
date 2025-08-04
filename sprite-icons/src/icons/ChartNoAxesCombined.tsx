import { ChartNoAxesCombined as DevIcon, type LucideProps } from "lucide-react"
export const ChartNoAxesCombined: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#chart-no-axes-combined`} />
    </svg>
  )
