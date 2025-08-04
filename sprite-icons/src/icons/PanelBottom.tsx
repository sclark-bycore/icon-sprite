import { PanelBottom as DevIcon, type LucideProps } from "lucide-react"
export const PanelBottom: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#panel-bottom`} />
    </svg>
  )
