import { ScanSearch as DevIcon, type LucideProps } from "lucide-react"
export const ScanSearch: React.FC<LucideProps> = (props) =>
  process.env.NODE_ENV === "development" ? (
    <DevIcon {...props} />
  ) : (
    <svg {...props}>
      <use href={`/icons.svg#scan-search`} />
    </svg>
  )
