import { MonitorPlay as DevIcon, type LucideProps } from "lucide-react"
export const MonitorPlay: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#monitor-play`} />
    </svg>
  )
