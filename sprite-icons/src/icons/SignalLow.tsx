import { SignalLow as DevIcon, type LucideProps } from "lucide-react"
export const SignalLow: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#signal-low`} />
    </svg>
  )
