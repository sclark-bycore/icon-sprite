import { ReceiptSwissFranc as DevIcon, type LucideProps } from "lucide-react"
export const ReceiptSwissFranc: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#receipt-swiss-franc`} />
    </svg>
  )
