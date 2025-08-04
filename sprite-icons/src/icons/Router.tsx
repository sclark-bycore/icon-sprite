import { Router as DevIcon, type LucideProps } from "lucide-react"
export const Router: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#router`} />
    </svg>
  )
