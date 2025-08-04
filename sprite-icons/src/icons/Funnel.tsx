import { Funnel as DevIcon, type LucideProps } from "lucide-react"
export const Funnel: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#funnel`} />
    </svg>
  )
