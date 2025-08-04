import { HandCoins as DevIcon, type LucideProps } from "lucide-react"
export const HandCoins: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#hand-coins`} />
    </svg>
  )
