import { PanelLeftOpen as DevIcon, type LucideProps } from "lucide-react"
export const PanelLeftOpen: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#panel-left-open`} />
    </svg>
  )
