import { Minus as DevIcon, type LucideProps } from "lucide-react"
export const Minus: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#minus`} />
    </svg>
  )
