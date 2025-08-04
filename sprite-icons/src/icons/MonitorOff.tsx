import { MonitorOff as DevIcon, type LucideProps } from "lucide-react"
export const MonitorOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#monitor-off`} />
    </svg>
  )
