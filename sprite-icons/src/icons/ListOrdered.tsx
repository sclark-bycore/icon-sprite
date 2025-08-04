import { ListOrdered as DevIcon, type LucideProps } from "lucide-react"
export const ListOrdered: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#list-ordered`} />
    </svg>
  )
