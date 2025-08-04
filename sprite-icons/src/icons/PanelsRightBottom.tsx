import { PanelsRightBottom as DevIcon, type LucideProps } from "lucide-react"
export const PanelsRightBottom: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#panels-right-bottom`} />
    </svg>
  )
