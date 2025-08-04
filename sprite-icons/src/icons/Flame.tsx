import { Flame as DevIcon, type LucideProps } from "lucide-react"
export const Flame: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#flame`} />
    </svg>
  )
