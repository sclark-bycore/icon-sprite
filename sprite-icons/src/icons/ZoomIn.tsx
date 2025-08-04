import { ZoomIn as DevIcon, type LucideProps } from "lucide-react"
export const ZoomIn: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#zoom-in`} />
    </svg>
  )
