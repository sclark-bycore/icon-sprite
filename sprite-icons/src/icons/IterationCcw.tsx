import { IterationCcw as DevIcon, type LucideProps } from "lucide-react"
export const IterationCcw: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#iteration-ccw`} />
    </svg>
  )
