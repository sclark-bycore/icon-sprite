import { PanelRight as DevIcon, type LucideProps } from "lucide-react"
export const PanelRight: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#panel-right`} />
    </svg>
  )
