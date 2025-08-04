import { TableRowsSplit as DevIcon, type LucideProps } from "lucide-react"
export const TableRowsSplit: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#table-rows-split`} />
    </svg>
  )
