import { MonitorSmartphone as DevIcon, type LucideProps } from "lucide-react"
export const MonitorSmartphone: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#monitor-smartphone`} />
    </svg>
  )
