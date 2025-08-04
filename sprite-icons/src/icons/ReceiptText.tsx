import { ReceiptText as DevIcon, type LucideProps } from "lucide-react"
export const ReceiptText: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#receipt-text`} />
    </svg>
  )
