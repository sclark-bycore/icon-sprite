import { Languages as DevIcon, type LucideProps } from "lucide-react"
export const Languages: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#languages`} />
    </svg>
  )
