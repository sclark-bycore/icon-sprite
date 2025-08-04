import { Drill as DevIcon, type LucideProps } from "lucide-react"
export const Drill: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#drill`} />
    </svg>
  )
