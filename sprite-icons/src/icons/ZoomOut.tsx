import { ZoomOut as DevIcon, type LucideProps } from "lucide-react"
export const ZoomOut: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#zoom-out`} />
    </svg>
  )
