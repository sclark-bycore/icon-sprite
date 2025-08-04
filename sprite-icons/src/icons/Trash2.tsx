import { Trash2 as DevIcon, type LucideProps } from "lucide-react"
export const Trash2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#trash-2`} />
    </svg>
  )
