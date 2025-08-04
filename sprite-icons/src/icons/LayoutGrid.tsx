import { LayoutGrid as DevIcon, type LucideProps } from "lucide-react"
export const LayoutGrid: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#layout-grid`} />
    </svg>
  )
