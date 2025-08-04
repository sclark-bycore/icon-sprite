import { TableColumnsSplit as DevIcon, type LucideProps } from "lucide-react"
export const TableColumnsSplit: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#table-columns-split`} />
    </svg>
  )
