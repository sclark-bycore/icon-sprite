import { LayoutDashboard as DevIcon, type LucideProps } from "lucide-react"
export const LayoutDashboard: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#layout-dashboard`} />
    </svg>
  )
