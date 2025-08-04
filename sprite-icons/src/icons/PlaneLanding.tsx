import { PlaneLanding as DevIcon, type LucideProps } from "lucide-react"
export const PlaneLanding: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#plane-landing`} />
    </svg>
  )
