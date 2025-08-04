import { PiggyBank as DevIcon, type LucideProps } from "lucide-react"
export const PiggyBank: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#piggy-bank`} />
    </svg>
  )
