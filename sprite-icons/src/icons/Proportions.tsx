import { Proportions as DevIcon, type LucideProps } from "lucide-react"
export const Proportions: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#proportions`} />
    </svg>
  )
