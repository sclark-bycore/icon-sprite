import { BellOff as DevIcon, type LucideProps } from "lucide-react"
export const BellOff: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#bell-off`} />
    </svg>
  )
