import { FunnelX as DevIcon, type LucideProps } from "lucide-react"
export const FunnelX: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#funnel-x`} />
    </svg>
  )
