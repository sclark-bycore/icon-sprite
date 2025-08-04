import { InspectionPanel as DevIcon, type LucideProps } from "lucide-react"
export const InspectionPanel: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#inspection-panel`} />
    </svg>
  )
