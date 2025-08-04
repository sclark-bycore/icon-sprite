import { ListChecks as DevIcon, type LucideProps } from "lucide-react"
export const ListChecks: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#list-checks`} />
    </svg>
  )
