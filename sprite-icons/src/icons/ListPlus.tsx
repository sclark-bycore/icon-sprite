import { ListPlus as DevIcon, type LucideProps } from "lucide-react"
export const ListPlus: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#list-plus`} />
    </svg>
  )
