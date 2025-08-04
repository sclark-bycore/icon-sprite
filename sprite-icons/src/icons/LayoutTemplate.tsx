import { LayoutTemplate as DevIcon, type LucideProps } from "lucide-react"
export const LayoutTemplate: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#layout-template`} />
    </svg>
  )
