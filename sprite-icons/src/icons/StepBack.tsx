import { StepBack as DevIcon, type LucideProps } from "lucide-react"
export const StepBack: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#step-back`} />
    </svg>
  )
