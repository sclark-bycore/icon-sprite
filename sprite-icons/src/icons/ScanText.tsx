import { ScanText as DevIcon, type LucideProps } from "lucide-react"
export const ScanText: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#scan-text`} />
    </svg>
  )
