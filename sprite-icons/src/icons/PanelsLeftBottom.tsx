import { PanelsLeftBottom as DevIcon, type LucideProps } from "lucide-react"
export const PanelsLeftBottom: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#panels-left-bottom`} />
    </svg>
  )
