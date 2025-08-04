import { ScanLine as DevIcon, type LucideProps } from "lucide-react"
export const ScanLine: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#scan-line`} />
    </svg>
  )
