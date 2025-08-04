import { QrCode as DevIcon, type LucideProps } from "lucide-react"
export const QrCode: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#qr-code`} />
    </svg>
  )
