import { ShieldX as DevIcon, type LucideProps } from "lucide-react"
export const ShieldX: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#shield-x`} />
    </svg>
  )
