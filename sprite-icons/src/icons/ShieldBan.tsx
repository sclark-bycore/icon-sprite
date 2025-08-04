import { ShieldBan as DevIcon, type LucideProps } from "lucide-react"
export const ShieldBan: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#shield-ban`} />
    </svg>
  )
