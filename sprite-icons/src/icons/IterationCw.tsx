import { IterationCw as DevIcon, type LucideProps } from "lucide-react"
export const IterationCw: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#iteration-cw`} />
    </svg>
  )
