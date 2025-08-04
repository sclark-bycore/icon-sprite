import { RefreshCwOff as DevIcon, type LucideProps } from "lucide-react"
export const RefreshCwOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#refresh-cw-off`} />
    </svg>
  )
