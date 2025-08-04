import { HdmiPort as DevIcon, type LucideProps } from "lucide-react"
export const HdmiPort: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#hdmi-port`} />
    </svg>
  )
