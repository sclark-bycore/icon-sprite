import { Table2 as DevIcon, type LucideProps } from "lucide-react"
export const Table2: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#table-2`} />
    </svg>
  )
