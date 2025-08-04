import { WifiPen as DevIcon, type LucideProps } from "lucide-react"
export const WifiPen: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#wifi-pen`} />
    </svg>
  )
