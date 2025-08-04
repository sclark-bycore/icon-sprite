import { CreditCard as DevIcon, type LucideProps } from "lucide-react"
export const CreditCard: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#credit-card`} />
    </svg>
  )
