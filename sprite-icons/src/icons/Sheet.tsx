import { Sheet as DevIcon, type LucideProps } from "lucide-react"
export const Sheet: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#sheet`} />
    </svg>
  )
