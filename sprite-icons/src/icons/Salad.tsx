import { Salad as DevIcon, type LucideProps } from "lucide-react"
export const Salad: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#salad`} />
    </svg>
  )
