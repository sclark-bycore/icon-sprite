import { ReceiptJapaneseYen as DevIcon, type LucideProps } from "lucide-react"
export const ReceiptJapaneseYen: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#receipt-japanese-yen`} />
    </svg>
  )
