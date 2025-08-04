import { WifiOff as DevIcon, type LucideProps } from "lucide-react"
export const WifiOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#wifi-off`} />
    </svg>
  )
