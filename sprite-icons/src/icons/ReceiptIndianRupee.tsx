import { ReceiptIndianRupee as DevIcon, type LucideProps } from "lucide-react"
export const ReceiptIndianRupee: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#receipt-indian-rupee`} />
    </svg>
  )
