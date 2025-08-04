import { RefreshCw as DevIcon, type LucideProps } from "lucide-react"
export const RefreshCw: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#refresh-cw`} />
    </svg>
  )
