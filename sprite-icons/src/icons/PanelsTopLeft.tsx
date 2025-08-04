import { PanelsTopLeft as DevIcon, type LucideProps } from "lucide-react"
export const PanelsTopLeft: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#panels-top-left`} />
    </svg>
  )
