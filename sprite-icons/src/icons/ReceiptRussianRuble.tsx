import { ReceiptRussianRuble as DevIcon, type LucideProps } from "lucide-react"
export const ReceiptRussianRuble: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#receipt-russian-ruble`} />
    </svg>
  )
