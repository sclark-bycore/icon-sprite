import { SignalHigh as DevIcon, type LucideProps } from "lucide-react"
export const SignalHigh: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#signal-high`} />
    </svg>
  )
