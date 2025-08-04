import { PinOff as DevIcon, type LucideProps } from "lucide-react"
export const PinOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#pin-off`} />
    </svg>
  )
