import { ScanEye as DevIcon, type LucideProps } from "lucide-react"
export const ScanEye: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#scan-eye`} />
    </svg>
  )
