import { Undo2 as DevIcon, type LucideProps } from "lucide-react"
export const Undo2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#undo-2`} />
    </svg>
  )
