import { Bug as DevIcon, type LucideProps } from "lucide-react"
export const Bug: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#bug`} />
    </svg>
  )
