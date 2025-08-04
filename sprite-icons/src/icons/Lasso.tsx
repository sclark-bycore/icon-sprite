import { Lasso as DevIcon, type LucideProps } from "lucide-react"
export const Lasso: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#lasso`} />
    </svg>
  )
