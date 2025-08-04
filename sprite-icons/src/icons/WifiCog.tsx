import { WifiCog as DevIcon, type LucideProps } from "lucide-react"
export const WifiCog: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#wifi-cog`} />
    </svg>
  )
