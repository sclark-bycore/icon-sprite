import { Store as DevIcon, type LucideProps } from "lucide-react"
export const Store: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#store`} />
    </svg>
  )
