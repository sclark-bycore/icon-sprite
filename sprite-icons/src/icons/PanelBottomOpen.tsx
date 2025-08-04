import { PanelBottomOpen as DevIcon, type LucideProps } from "lucide-react"
export const PanelBottomOpen: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#panel-bottom-open`} />
    </svg>
  )
