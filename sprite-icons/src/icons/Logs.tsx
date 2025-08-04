import { Logs as DevIcon, type LucideProps } from "lucide-react"
export const Logs: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#logs`} />
    </svg>
  )
