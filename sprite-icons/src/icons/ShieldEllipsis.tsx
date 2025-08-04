import { ShieldEllipsis as DevIcon, type LucideProps } from "lucide-react"
export const ShieldEllipsis: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#shield-ellipsis`} />
    </svg>
  )
