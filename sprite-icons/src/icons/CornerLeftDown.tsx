import { CornerLeftDown as DevIcon, type LucideProps } from "lucide-react"
export const CornerLeftDown: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#corner-left-down`} />
    </svg>
  )
