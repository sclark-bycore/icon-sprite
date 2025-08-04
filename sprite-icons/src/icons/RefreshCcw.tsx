import { RefreshCcw as DevIcon, type LucideProps } from "lucide-react"
export const RefreshCcw: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#refresh-ccw`} />
    </svg>
  )
