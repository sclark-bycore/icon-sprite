import { WalletCards as DevIcon, type LucideProps } from "lucide-react"
export const WalletCards: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#wallet-cards`} />
    </svg>
  )
