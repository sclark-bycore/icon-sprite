import { PanelRightDashed as DevIcon, type LucideProps } from "lucide-react"
export const PanelRightDashed: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#panel-right-dashed`} />
    </svg>
  )
