import { PlaneTakeoff as DevIcon, type LucideProps } from "lucide-react"
export const PlaneTakeoff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#plane-takeoff`} />
    </svg>
  )
