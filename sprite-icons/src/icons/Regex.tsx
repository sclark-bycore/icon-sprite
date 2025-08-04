import { Regex as DevIcon, type LucideProps } from "lucide-react"
export const Regex: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#regex`} />
    </svg>
  )
