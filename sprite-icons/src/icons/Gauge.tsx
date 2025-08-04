import { Gauge as DevIcon, type LucideProps } from "lucide-react"
export const Gauge: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#gauge`} />
    </svg>
  )
