import { TableCellsSplit as DevIcon, type LucideProps } from "lucide-react"
export const TableCellsSplit: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#table-cells-split`} />
    </svg>
  )
