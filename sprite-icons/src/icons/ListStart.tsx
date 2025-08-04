import { ListStart as DevIcon, type LucideProps } from "lucide-react"
export const ListStart: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#list-start`} />
    </svg>
  )
