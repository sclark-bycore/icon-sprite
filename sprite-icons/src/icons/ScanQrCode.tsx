import { ScanQrCode as DevIcon, type LucideProps } from "lucide-react"
export const ScanQrCode: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#scan-qr-code`} />
    </svg>
  )
