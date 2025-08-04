import { Warehouse as DevIcon, type LucideProps } from "lucide-react"
export const Warehouse: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#warehouse`} />
    </svg>
  )
