import { RefreshCcwDot as DevIcon, type LucideProps } from "lucide-react"
export const RefreshCcwDot: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#refresh-ccw-dot`} />
    </svg>
  )
