import { ShieldOff as DevIcon, type LucideProps } from "lucide-react"
export const ShieldOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#shield-off`} />
    </svg>
  )
