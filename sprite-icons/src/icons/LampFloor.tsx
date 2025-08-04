import { LampFloor as DevIcon, type LucideProps } from "lucide-react"
export const LampFloor: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#lamp-floor`} />
    </svg>
  )
