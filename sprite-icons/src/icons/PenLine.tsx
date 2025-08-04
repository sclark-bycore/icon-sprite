import { PenLine as DevIcon, type LucideProps } from "lucide-react"
export const PenLine: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#pen-line`} />
    </svg>
  )
