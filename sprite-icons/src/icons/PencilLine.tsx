import { PencilLine as DevIcon, type LucideProps } from "lucide-react"
export const PencilLine: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#pencil-line`} />
    </svg>
  )
