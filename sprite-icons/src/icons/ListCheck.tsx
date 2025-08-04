import { ListCheck as DevIcon, type LucideProps } from "lucide-react"
export const ListCheck: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#list-check`} />
    </svg>
  )
