import { ALargeSmall as DevIcon, type LucideProps } from "lucide-react"
export const ALargeSmall: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#a-large-small`} />
    </svg>
  )
