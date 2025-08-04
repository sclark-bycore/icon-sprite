import { AppWindowMac as DevIcon, type LucideProps } from "lucide-react"
export const AppWindowMac: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#app-window-mac`} />
    </svg>
  )
