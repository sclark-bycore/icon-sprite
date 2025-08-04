import { MonitorStop as DevIcon, type LucideProps } from "lucide-react"
export const MonitorStop: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#monitor-stop`} />
    </svg>
  )
