import { MonitorCheck as DevIcon, type LucideProps } from "lucide-react"
export const MonitorCheck: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#monitor-check`} />
    </svg>
  )
