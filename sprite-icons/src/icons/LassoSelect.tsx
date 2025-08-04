import { LassoSelect as DevIcon, type LucideProps } from "lucide-react"
export const LassoSelect: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#lasso-select`} />
    </svg>
  )
