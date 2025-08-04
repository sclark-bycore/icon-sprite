import { FunnelPlus as DevIcon, type LucideProps } from "lucide-react"
export const FunnelPlus: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#funnel-plus`} />
    </svg>
  )
