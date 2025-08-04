import { PanelTopDashed as DevIcon, type LucideProps } from "lucide-react"
export const PanelTopDashed: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#panel-top-dashed`} />
    </svg>
  )
