import { Currency as DevIcon, type LucideProps } from "lucide-react"
export const Currency: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#currency`} />
    </svg>
  )
