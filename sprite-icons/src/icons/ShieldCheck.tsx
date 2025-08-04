import { ShieldCheck as DevIcon, type LucideProps } from "lucide-react"
export const ShieldCheck: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#shield-check`} />
    </svg>
  )
