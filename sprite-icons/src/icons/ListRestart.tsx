import { ListRestart as DevIcon, type LucideProps } from "lucide-react"
export const ListRestart: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#list-restart`} />
    </svg>
  )
