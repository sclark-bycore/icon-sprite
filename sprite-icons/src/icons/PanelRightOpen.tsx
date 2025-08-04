import { PanelRightOpen as DevIcon, type LucideProps } from "lucide-react"
export const PanelRightOpen: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#panel-right-open`} />
    </svg>
  )
