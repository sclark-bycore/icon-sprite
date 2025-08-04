import { Redo2 as DevIcon, type LucideProps } from "lucide-react"
export const Redo2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#redo-2`} />
    </svg>
  )
