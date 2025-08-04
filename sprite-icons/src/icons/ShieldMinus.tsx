import { ShieldMinus as DevIcon, type LucideProps } from "lucide-react"
export const ShieldMinus: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#shield-minus`} />
    </svg>
  )
