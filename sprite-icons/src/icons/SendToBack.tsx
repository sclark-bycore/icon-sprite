import { SendToBack as DevIcon, type LucideProps } from "lucide-react"
export const SendToBack: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#send-to-back`} />
    </svg>
  )
