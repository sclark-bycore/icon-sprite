import { ReceiptEuro as DevIcon, type LucideProps } from "lucide-react"
export const ReceiptEuro: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#receipt-euro`} />
    </svg>
  )
